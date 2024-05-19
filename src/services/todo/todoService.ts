import { ICreateTodoPayload, ITodo } from "@/interfaces/todo"

export const getTodoListService = async (): Promise<{ completed: boolean, results: ITodo[] }> => {
    const response = await fetch('/api/todo', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })

    const responseJson: { completed: boolean, results: ITodo[] } = await response.json()

    return responseJson
}

export const createTaskService = async (payload: ICreateTodoPayload): Promise<{ completed: boolean }> => {
    const response = await fetch('/api/todo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
    })

    console.log(response)

    const responseJson: { completed: boolean } = await response.json()

    return responseJson
}

export const removeTaskService = async (id: string): Promise<{ completed: boolean }> => {
    const response = await fetch('/api/todo/' + id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })

    const responseJson: { completed: boolean } = await response.json()

    return responseJson
}

export const editTaskService = async (id: string, payload: Partial<ITodo>): Promise<{ completed: boolean }> => {
    const response = await fetch('/api/todo/' + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
    })

    const responseJson: { completed: boolean } = await response.json()

    return responseJson
}