"use client"

import { Checkbox } from "@/components/ui/checkbox"

export function CheckboxWithText({ text }) {
    return (
        <div className="items-center flex space-x-2">
            <Checkbox className="size-5 bg-white" id="terms1" />
            <div className="grid gap-1.5 leading-none">
                <label
                    htmlFor="terms1"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    {text}
                </label>
            </div>
        </div>
    )
}
