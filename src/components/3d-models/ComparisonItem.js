"use client";
import { Icon } from "@/components";

// ----------------------------------------------------

const ComparisonItem = ({ text, isNegative = false }) => (
    <div className="flex items-start gap-3">
        <div className={`h-6 w-6 rounded-full grid place-items-center flex-shrink-0 ${isNegative ? 'bg-red-500/10 text-red-500' : 'bg-green-500/10 text-green-500'}`}>
            <Icon icon={isNegative ? "solar:close-circle-line-duotone" : "solar:check-circle-line-duotone"} />
        </div>
        <span className="text-sm leading-relaxed">{text}</span>
    </div>
);

export default ComparisonItem
