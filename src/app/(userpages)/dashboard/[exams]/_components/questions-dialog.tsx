"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import QuestionsForm from "./questions-form"; 


type QuestionDialogProps = {
  exam: string;
};

export default function QuestionsDialog({ exam }: QuestionDialogProps) {
  return (
    <Dialog>
      {/* Trigger */}
      <DialogTrigger asChild>
        <Button className="bg-custom-main h-7 rounded-full">Start</Button>
      </DialogTrigger>
      
      <DialogContent className=" max-w-xl">
        {/* Header */}
        <DialogHeader className="hidden" >
          <DialogTitle aria-hidden="true">Are you absolutely sure?</DialogTitle>
          <DialogDescription aria-hidden="true">
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>

        {/* Content */}
        <QuestionsForm examId={exam} />
      </DialogContent>
    </Dialog>
  );
}