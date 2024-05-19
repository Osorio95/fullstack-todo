import { ITodo, TStatus } from "@/interfaces/todo"
import { getTodoListService } from "@/services/todo/todoService"
import { useQuery } from "@tanstack/react-query"
import { useMemo } from "react"

export const useLayoutTask = () => {
    const { data, isLoading } = useQuery({
        queryKey: ['tasks'],
        queryFn: getTodoListService
    })

    const { tasksByStatus, statusKeys } = useMemo(() => {
        const tasksByStatus: Record<TStatus, ITodo[]> = {
            "on_hold": [],
            "on_track": [],
            "blocked": [],
            "doing": [],
            "approval": [],
            "done": [],
        };

        if (data?.results) {
            for (const task of data.results) {
                const status = task.currentStatus;
                if (!tasksByStatus[status]) {
                    tasksByStatus[status] = [];
                }
                tasksByStatus[status].push(task);
            }
        }

        const statusKeys: TStatus[] = Object.keys(tasksByStatus)
            .filter((status) =>
                tasksByStatus[status as TStatus].length > 0) as TStatus[];

        return { tasksByStatus, statusKeys }
    }, [data])

    return { tasksByStatus, statusKeys, isLoading }
} 