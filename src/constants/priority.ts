import { TPriority } from "@/interfaces/todo";

export const PriorityList: TPriority[] = [
    "P1",
    "P2",
    "P3",
    "P4"
]

export const PriorityListLabels: { [key in TPriority]: string } = {
    "P1": "Critical",
    "P2": "High",
    "P3": "Medium",
    "P4": "Low"
}