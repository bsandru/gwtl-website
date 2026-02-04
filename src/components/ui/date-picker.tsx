"use client";

import * as React from "react";
import { format, parse } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

interface DatePickerProps {
    value?: string; // ISO date string (YYYY-MM-DD)
    onChange?: (value: string) => void;
    placeholder?: string;
    className?: string;
    required?: boolean;
}

export function DatePicker({
    value,
    onChange,
    placeholder = "Pick a date",
    className,
    required,
}: DatePickerProps) {
    const [open, setOpen] = React.useState(false);

    // Parse the string date to a Date object
    const date = value ? parse(value, "yyyy-MM-dd", new Date()) : undefined;

    const handleSelect = (selectedDate: Date | undefined) => {
        if (selectedDate && onChange) {
            onChange(format(selectedDate, "yyyy-MM-dd"));
        }
        setOpen(false);
    };

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    data-empty={!date}
                    className={cn(
                        "w-full justify-start text-left font-normal bg-input border-border text-foreground hover:bg-accent hover:text-foreground",
                        "data-[empty=true]:text-muted-foreground",
                        className
                    )}
                >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>{placeholder}</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-popover border-border" align="start">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={handleSelect}
                    initialFocus
                    required={required}
                />
            </PopoverContent>
        </Popover>
    );
}
