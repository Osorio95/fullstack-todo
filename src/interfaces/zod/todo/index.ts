import { z } from "zod";

export const ZTodo = z.object({
    user: z.string(),
    content: z.string(),
    isArchived: z.boolean(),
    currentStatus: z.string(),
    created: z.string().datetime(),
    deadline: z.string().datetime(),
    priority: z.string()
})
