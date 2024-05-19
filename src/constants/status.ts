import { TStatus } from "@/interfaces/todo";

export const CurrentStatusList: TStatus[] = [
    "approval",
    "blocked",
    "doing",
    "done",
    "on_hold",
    "on_track"
]

export const CurrentStatusListLabels: { [key in TStatus]: string } = {
    "approval": "Waiting approval",
    "blocked": "Blocked",
    "doing": "In progress",
    "done": "Completed",
    "on_hold": "On hold",
    "on_track": "On track"
}