import { z } from "zod";


export const addQuestionSchema = z.object({
    question: z.string().min(1, { message: " Question" }),
    answer1: z.string().min(1, { message: "Answer 1" }),
    answer2: z.string().min(1, { message: "Answer 2" }),
    answer3: z.string().min(1, { message: "Answer 3" }),
    answer4: z.string().min(1, { message: "Answer 4" }),
    questionStyle: z.string().default("radio_button"),
});

export type QuestionsFields=z.infer<typeof addQuestionSchema>