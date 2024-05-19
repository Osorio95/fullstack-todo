'use client'

import { ICreateTodoPayload, IFormTodoPayload, ITodo } from "@/interfaces/todo"
import { createTaskService } from "@/services/todo/todoService"
import { useUser } from "@auth0/nextjs-auth0/client"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const useCreateTask = () => {
    const { user } = useUser()

    const queryClient = useQueryClient()

    const createTaskMutation = useMutation({
        mutationFn: (payload: ICreateTodoPayload) =>
            createTaskService(payload)
    });

    const onSubmit = async (value: IFormTodoPayload) => {
        const body: ICreateTodoPayload = {
            ...value,
            user: user?.email!,
            isArchived: false,
            created: new Date,
        }

        createTaskMutation.mutate(body, {
            onSuccess: (data) => {
                queryClient.invalidateQueries({
                    queryKey: ['tasks']
                })
            },
            onError: (error) => {
                console.log(error)
            }
        })
    }

    return { onSubmit }
}