"use client";

import { formatDateRange } from "little-date";
import { ChevronDownIcon } from "lucide-react";
import { type DateRange } from "react-day-picker";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

interface DateRangePickerProps {
    from: string;
    to: string;
    onChange: (from: string, to: string) => void;
    placeholder?: string;
}

export function DateRangePicker({
    from,
    to,
    onChange,
    placeholder = "Pick dates",
}: DateRangePickerProps) {
    // Convert string dates to Date objects
    const range: DateRange | undefined =
        from || to
            ? {
                from: from ? new Date(from) : undefined,
                to: to ? new Date(to) : undefined,
            }
            : undefined;

    const handleSelect = (newRange: DateRange | undefined) => {
        const fromStr = newRange?.from
            ? newRange.from.toISOString().split("T")[0]
            : "";
        const toStr = newRange?.to ? newRange.to.toISOString().split("T")[0] : "";
        onChange(fromStr, toStr);
    };

    const displayText =
        range?.from && range?.to
            ? formatDateRange(range.from, range.to, { includeTime: false })
            : range?.from
                ? formatDateRange(range.from, range.from, { includeTime: false })
                : placeholder;

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    className="w-full justify-between font-normal"
                >
                    {displayText}
                    <ChevronDownIcon className="h-4 w-4 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                <Calendar mode="range" selected={range} onSelect={handleSelect} />
            </PopoverContent>
        </Popover>
    );
}

export default DateRangePicker;
