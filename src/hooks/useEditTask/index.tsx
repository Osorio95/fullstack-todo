import { ITodo } from "@/interfaces/todo";
import { editTaskService, removeTaskService } from "@/services/todo/todoService"
import { useMutation, useQueryClient } from "@tanstack/react-query"


export const useEditTask = (id: string) => {
    const queryClient = useQueryClient()

    const createTaskMutation = useMutation({
        mutationFn: (payload: string) =>
            removeTaskService(payload)
    });

    const editTaskMutation = useMutation({
        mutationFn: ({ id, payload }: { id: string, payload: Partial<ITodo> }) =>
            editTaskService(id, payload)
    })

    const onRemove = (id: string) => {
        createTaskMutation.mutate(id, {
            onSuccess: (data) => {
                console.log(data)

                queryClient.invalidateQueries({
                    queryKey: ['tasks']
                })
            }
        })
    }

    const onEdit = (payload: Partial<ITodo>) => {

        const completedTask: Partial<ITodo> = {
            ...payload
        }

        editTaskMutation.mutate({ id, payload: completedTask }, {
            onSuccess: () => {
                queryClient.invalidateQueries({
                    queryKey: ['tasks']
                })
            }
        })
    }

    const onMarkCompleted = (payload: Partial<ITodo>) => {

        const completedTask: Partial<ITodo> = {
            ...payload,
            currentStatus: "done"
        }

        editTaskMutation.mutate({ id: completedTask._id!, payload: completedTask }, {
            onSuccess: () => {
                queryClient.invalidateQueries({
                    queryKey: ['tasks']
                })
            }
        })
    }

    return { onRemove, onMarkCompleted, onEdit }
}