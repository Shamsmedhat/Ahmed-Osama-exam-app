"use client";

import React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowLeft } from "lucide-react";
import AddExamForm from "./add-exam-form";


type AddExamDialogProps = {};

export default function AddExamDialog({}: AddExamDialogProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* Trigger */}
      <DialogTrigger asChild>
        <Button className="bg-main text-white rounded-2xl text-lg font-semibold h-12 px-9 hover:bg-blue-500">
          Add Quiz
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-2xl">
        {/* Header */}
        <DialogHeader className="flex flex-row items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen(false)}
            className="w-8 h-8 rounded-full"
          >
            <ArrowLeft className="w-5 h-5 text-main" />
          </Button>
          <DialogTitle className="text-2xl font-bold text-main">
            Add Diploma
          </DialogTitle>
          <DialogDescription className="hidden">
            Fill in the details to add a new exam to the system.
          </DialogDescription>
        </DialogHeader>

        {/* Content */}
        <AddExamForm onClose={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}