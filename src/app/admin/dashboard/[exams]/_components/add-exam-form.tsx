"use client";

import React from "react";
import { useForm } from "react-hook-form";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

type ExamFormData = {
    quizName: string;
    description: string;
    time: string;
    photo?: string;
};

type AddExamFormProps = {
    onClose: () => void;
};

export default function AddExamForm({ onClose }: AddExamFormProps) {
    // Form
    const form = useForm<ExamFormData>({
        defaultValues: {
            quizName: "",
            description: "",
            time: "",
            photo: "",
        },
    });

    // Functions
    const onSubmit = (data: ExamFormData) => {
        console.log("Exam Data:", data);
        onClose();
    };

    const handleAddQuestion = () => {
        console.log("Add Question clicked");
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="py-4">
                <div className="flex gap-12">
                    {/* Add Photo and Time Section */}
                    <div className="flex gap-12">
                        {/* Add Photo */}
                        <FormField
                            control={form.control}
                            name="photo"
                            render={({ field }) => (
                                <FormItem className="flex flex-col items-center gap-2">
                                    {/* Label */}
                                    <FormLabel className="text-sm text-gray-600 font-semibold">
                                        Add Photo
                                    </FormLabel>
                                    {/* Field */}
                                    <FormControl>
                                        <Button
                                            type="button"
                                            variant="outline"
                                            className="w-10 h-10 p-0 rounded-full border-gray-300"
                                            onClick={() => console.log("Add Photo clicked")}
                                        >
                                            <PlusCircle className="w-5 h-5 text-gray-500" />
                                        </Button>
                                    </FormControl>
                                    {/* Feedback */}
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Time */}
                        <FormField
                            control={form.control}
                            name="time"
                            render={({ field }) => (
                                <FormItem>
                                    {/* Label */}
                                    <FormLabel className="text-sm text-gray-600 font-semibold">
                                        Time
                                    </FormLabel>
                                    {/* Field */}
                                    <FormControl>
                                        <Input
                                            placeholder=""
                                            {...field}
                                            className="border-gray-300 rounded-2xl h-12 w-16 text-center"
                                        />
                                    </FormControl>
                                    {/* Feedback */}
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    {/* Quiz Name and Description Section */}
                    <div className="flex-1 flex gap-12">
                        {/* Quiz Name Field */}
                        <FormField
                            control={form.control}
                            name="quizName"
                            render={({ field }) => (
                                <FormItem className="w-1/2">
                                    {/* Label */}
                                    <FormLabel className="text-sm text-gray-600 font-semibold">
                                        Quiz Name
                                    </FormLabel>
                                    {/* Field */}
                                    <FormControl>
                                        <Input
                                            placeholder=""
                                            {...field}
                                            className="border-gray-300 rounded-2xl h-12"
                                        />
                                    </FormControl>
                                    {/* Feedback */}
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Description Field */}
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem className="w-1/2">
                                    {/* Label */}
                                    <FormLabel className="text-sm text-gray-600 font-semibold">
                                        Description
                                    </FormLabel>
                                    {/* Field */}
                                    <FormControl>
                                        <Input
                                            placeholder=""
                                            {...field}
                                            className="border-gray-300 rounded-2xl h-12"
                                        />
                                    </FormControl>
                                    {/* Feedback */}
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-between mt-7">
                    <Button
                        type="button"
                        variant="outline"
                        onClick={onClose}
                        className="w-40 h-10 rounded-2xl border-main text-main font-bold hover:bg-gray-100"
                    >
                        Back
                    </Button>
                    <Button
                        type="button"
                        onClick={handleAddQuestion}
                        className="w-40 h-10 rounded-2xl bg-main text-white font-bold hover:bg-blue-500"
                    >
                        ADD QUESTION
                    </Button>
                    <Button
                        type="submit"
                        className="w-40 h-10 rounded-2xl bg-main text-white font-bold hover:bg-blue-500"
                    >
                        ADD
                    </Button>
                </div>
            </form>
        </Form>
    );
}