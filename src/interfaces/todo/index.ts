export interface ITodo {
    _id: string;
    user: string;
    content: string;
    isArchived: boolean;
    currentStatus: TStatus;
    created: Date;
    deadline: Date;
    priority: TPriority;
}

export type TPriority = "P4" | "P3" | "P2" | "P1"
export type TStatus = "on_track" | "on_hold" | "approval" | "done" | "doing" | "blocked"

export interface ICreateTodoPayload {
    user: string;
    content: string;
    currentStatus: TStatus;
    priority: TPriority;
    isArchived: boolean;
    created: Date;
    deadline: Date;
}

export interface IFormTodoPayload {
    content: string;
    deadline: Date;
    priority: TPriority;
    currentStatus: TStatus;
}