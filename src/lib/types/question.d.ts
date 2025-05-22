import { Subject } from "./subjects"

declare type Questions = {
    "answers": {
            "answer": string,
            "key": string,
    }[],
    "type": "single_choice" | "multiple_choice",
    "_id": string,
    "question": string,
    "correct": string,
    "subject": Subject,
    "exam": Exam
} & DatabaseProperties