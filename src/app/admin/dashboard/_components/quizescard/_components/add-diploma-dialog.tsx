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
import AddDiplomaForm from "./add-diploma-form";

type AddDiplomaDialogProps = {};

export default function AddDiplomaDialog({ }: AddDiplomaDialogProps) {
    const [open, setOpen] = useState(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            {/* Trigger */}
            <DialogTrigger asChild>
                <Button className="bg-main text-white rounded-2xl text-lg font-semibold h-12 px-9 hover:bg-blue-500">
                    Add Diploma
                </Button>
            </DialogTrigger>

            <DialogContent className="max-w-2xl">
                {/* Header */}
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-main">
                        Add Diploma
                    </DialogTitle>
                    <DialogDescription className="hidden">
                        Fill in the details to add a new diploma to the system.
                    </DialogDescription>
                </DialogHeader>

                {/* Content */}
                <AddDiplomaForm onClose={() => setOpen(false)} />
            </DialogContent>
        </Dialog>
    );
}