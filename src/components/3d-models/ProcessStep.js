"use client";
import { motion } from "framer-motion";
import { Icon } from "@/components";

// ------------------------------------------------------

const ProcessStep = ({ index, title, desc, icon, isLast = false }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={`relative flex gap-6 ${!isLast ? 'pb-8' : ''}`}
    >
        {/* Step number and line */}
        <div className="flex flex-col items-center">
            <div className="h-12 w-12 rounded-full bg-primary text-white grid place-items-center font-bold text-lg shadow-lg animate-pulse-glow">
                {index}
            </div>
            {!isLast && (
                <div className="flex-1 w-0.5 bg-gradient-to-b from-primary/50 to-primary/10 mt-4" />
            )}
        </div>

        {/* Step content */}
        <div className="flex-1 pt-1">
            <div className="flex items-center gap-3 mb-2">
                <Icon icon={icon} className="text-primary text-xl" />
                <h3 className="text-xl font-bold">{title}</h3>
            </div>
            <p className="text-[#64748b] dark:text-[#94a3b8] leading-relaxed">{desc}</p>
        </div>
    </motion.div>
);
export default ProcessStep
