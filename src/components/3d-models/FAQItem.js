"use client";
import { motion } from "framer-motion";
import { Icon } from "@/components";

// -----------------------------------------------

const FAQItem = ({ q, a, open, onToggle }) => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-xl border border-[#e2e8f0] dark:border-[#1e293b] overflow-hidden bg-white/50 dark:bg-[#020817]/50 backdrop-blur"
    >
        <button onClick={onToggle} className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
            <span className="font-medium pr-4">{q}</span>
            <Icon icon={open ? "solar:minus-circle-line-duotone" : "solar:add-circle-line-duotone"} className="text-primary text-xl flex-shrink-0" />
        </button>
        {open && (
            <div className="px-5 pb-5 text-[#64748b] dark:text-[#94a3b8] leading-relaxed">{a}</div>
        )}
    </motion.div>
);

export default FAQItem
