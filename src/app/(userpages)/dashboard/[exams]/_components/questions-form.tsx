"use client";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import useQuestions from "../_hooks/use-questions";
import { SubmitHandler, useForm } from "react-hook-form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnswerFields, ExamSchema } from "@/lib/schemes/exam.schema";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ExamDuration from "./exam-duration";
import useCheckQuestions from "../_hooks/use-check-question";

type QuestionsFormProps = {
    onClose?: () => void;
    examId: string;
};

export default function QuestionsForm({ onClose, examId }: QuestionsFormProps) {
    // Query
    const { isLoading, error, payload } = useQuestions(examId);

    // State
    const [step, setStep] = useState(0);
    const [answer, setAnswer] = useState("");
    const [showResults, setShowResults] = useState(false);
    const [results, setResults] = useState<any>(null);

    // Mutation
    const { isPending, checkQuestions } = useCheckQuestions();

    // Variables
    const currentQuestion = payload?.questions[step];
    const questions = payload?.questions;

    // Form
    const form = useForm<AnswerFields>({
        resolver: zodResolver(ExamSchema),
    });

    // Function
    const onSubmit: SubmitHandler<AnswerFields> = (values) => {
        checkQuestions(values, {
            onSuccess: (data) => {
                setResults(data);
                setShowResults(true);

                data.WrongQuestions.forEach((question: any) => {
                    const questionIndex = form
                        .getValues("answers")
                        .findIndex((answer) => answer.questionId === question.QID);

                    if (questionIndex !== -1) {
                        form.setError(`answers.${questionIndex}`, {
                            message: question.correctAnswer,
                        });
                    } else {
                        console.log(`Question with QID ${question.QID} not found in answers`);
                    }
                });
            },
        });
    };

    const isNextDisabled = isPending || !form.getValues(`answers.${step}`)?.correct;

    return (
        <div className="flex flex-col gap-4">
            {showResults ? (
                // Result page
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Your Score</h2>
                    <div className="flex items-center justify-center gap-6">
                        {/* Score Circle */}
                        <div className="relative flex items-center justify-center w-32 h-32">
                            {/* SVG Progress Circle */}
                            <svg className="absolute w-full h-full" viewBox="0 0 100 100">
                                {/* Progress background Color */}
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="45"
                                    fill="none"
                                    stroke="#e5e7eb"
                                    strokeWidth="10"
                                />
                                {/* Progress Color */}
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="45"
                                    fill="none"
                                    stroke="#1d4ed8" 
                                    strokeWidth="10"
                                    strokeDasharray="283"
                                    strokeDashoffset={283 - (283 * parseInt(results?.total || "0")) / 100}
                                    transform="rotate(-90 50 50)"
                                />
                            </svg>
                            {/* Score percentage */}
                            <span className="text-2xl font-semibold">{results?.total || "0%"}</span>
                        </div>

                        {/* Correct and Incorrect Counts */}
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <p className="text-black font-semibold">Correct</p>
                                <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 p-4 border-blue-800 text-blue-800 font-semibold">
                                    {results?.correct || 0}
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <p className="text-black font-semibold">Incorrect</p>
                                <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 p-4 border-red-600 text-red-600 font-semibold">
                                    {results?.wrong || 0}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="flex justify-center gap-4 mt-6">
                        {/* Back Button */}
                        <Button
                            type="button"
                            onClick={() => {
                                setShowResults(false);
                                setStep((payload?.questions?.length ?? 0) - 1);
                                const lastAnswer = form.getValues(`answers.${(payload?.questions?.length ?? 0) - 1}`);
                                setAnswer(lastAnswer?.correct || "");
                            }}
                            className="border bg-white text-main border-main py-4 w-60 text-base font-semibold rounded-full hover:bg-gray-100"
                        >
                            Back
                        </Button>

                        {/* Show Results Button */}
                        <Button
                            className="border bg-main text-white border-main py-4 w-60 text-base font-semibold rounded-full hover:bg-blue-700"
                            onClick={() => {
                                if (onClose) onClose();
                            }}
                        >
                            Show Results
                        </Button>
                    </div>
                </div>
            ) : (
                // Questions PAge
                <div className="flex flex-col gap-4">
                    {/* Header */}
                    <header className="flex items-center justify-between pt-6">
                        <p className="text-sm text-blue-600">
                            Question {step + 1} to {payload?.questions.length}
                        </p>
                        {questions && questions[step]?.exam?.duration && (
                            <ExamDuration
                                duration={questions[step].exam.duration}
                                onTimeChange={(date) => form.setValue("time", date.getMinutes())}
                            />
                        )}
                    </header>

                    {/* Circles */}
                    <ul className="flex items-center justify-between pt-5 mb-3">
                        {payload?.questions?.map((_, i) => (
                            <li
                                key={i}
                                className={cn(
                                    "size-2 bg-gray-400 rounded-full transition-colors",
                                    step >= i && "bg-main"
                                )}
                            />
                        ))}
                    </ul>

                    {/* Form */}
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="grow flex flex-col">
                            <FormField
                                control={form.control}
                                name={`answers.${step}`}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-xl font-medium ">
                                            {currentQuestion?.question}
                                        </FormLabel>
                                        <FormControl className="gap-2 py-6">
                                            <RadioGroup
                                                disabled={isPending}
                                                value={answer}
                                                onValueChange={(value) => {
                                                    setAnswer(value);
                                                    field.onChange({
                                                        questionId: currentQuestion?._id,
                                                        correct: value,
                                                    });
                                                }}
                                                name={currentQuestion?._id}
                                                className="flex flex-col space-y-1 "
                                            >
                                                {currentQuestion?.answers.map((answer: any) => (
                                                    <FormItem
                                                        key={answer.key}
                                                        className="flex items-center  bg-gray-100  px-4 rounded-md space-x-3 space-y-0 "
                                                    >
                                                        <FormControl>
                                                            <RadioGroupItem value={answer.key} className=" border-main border-2 " />
                                                        </FormControl>
                                                        <FormLabel className=" grow py-3 text-lg ">
                                                            {answer.answer}
                                                        </FormLabel>
                                                    </FormItem>
                                                ))}
                                            </RadioGroup>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Footer */}
                            <div className="grid grid-cols-2 gap-8 my-auto">
                                <Button
                                    type="button"
                                    disabled={isPending || step === 0}
                                    onClick={() => {
                                        const prevAnswer = form.getValues(`answers.${step - 1}`);
                                        if (!prevAnswer?.correct) {
                                            setAnswer("");
                                        } else {
                                            setAnswer(prevAnswer.correct);
                                        }
                                        setStep((prev) => prev - 1);
                                    }}
                                    className="text-main  border-2 border-main py-5 rounded-full bg-white hover:bg-white "
                                >
                                    Back
                                </Button>

                                <Button
                                    type={step < (payload?.questions?.length ?? 0) - 1 ? "button" : "submit"}
                                    disabled={isNextDisabled}
                                    onClick={() => {
                                        if (step === (payload?.questions?.length ?? 0) - 1) return;
                                        const nextAnswer = form.getValues(`answers.${step + 1}`);
                                        if (!nextAnswer?.correct) {
                                            setAnswer("");
                                        } else {
                                            setAnswer(nextAnswer.correct);
                                        }
                                        setStep((prev) => prev + 1);
                                    }}
                                    className="text-white py-5 border-2 border-main rounded-full bg-main hover:bg-main "
                                >
                                    Next
                                </Button>
                            </div>
                        </form>
                    </Form>
                </div>
            )}
        </div>
    );
}

