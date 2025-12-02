"use client";
import { motion } from "framer-motion";
import { Icon } from "@/components";

// --------------------------------------------------------

const OutcomeCard = ({ title, desc, icon }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="group hover-tilt relative overflow-hidden rounded-2xl border border-[#e2e8f0] dark:border-[#1e293b] bg-white/70 dark:bg-[#020817]/70 backdrop-blur p-6"
    >
        <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl group-hover:bg-primary/20 transition-colors" />
        <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary grid place-items-center text-xl mb-4">
            <Icon icon={icon} height={30} width={30} />
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-[#64748b] dark:text-[#94a3b8] mt-2 leading-relaxed text-sm">{desc}</p>
    </motion.div>
);


export default OutcomeCard
