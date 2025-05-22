'use client';

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

export default function SearchInput() {
    return (
        <div className="relative w-full max-w-3xl ">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-custom-main" size={20} />
            <Input
                type="text"
                placeholder="Search Quiz"
                className={cn(
                    "pl-10", 
                    "h-12", 
                    "rounded-xl", 
                    "shadow-md", 
                    "text-gray-600",
                    "placeholder-gray-400",
                    "focus-visible:ring-1 focus-visible:ring-blue-600",
                    "transition"
                )}
            />
        </div>
    );
}
