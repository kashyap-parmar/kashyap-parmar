"use client"
import { motion } from "framer-motion";

// --------------------------------------------------------

const Stat = ({ icon, label, value }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="hover-tilt rounded-2xl border border-[#e2e8f0] dark:border-[#1e293b] bg-white/70 dark:bg-[#020817]/70 backdrop-blur p-5 flex flex-col items-start sm:flex-row sm:items-center gap-4"
    >
        <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary grid place-items-center text-xl">
            {icon}
        </div>
        <div className="flex flex-col">
            <p className="text-2xl font-bold">{value}</p>
            <p className="text-sm text-[#64748b] dark:text-[#94a3b8]">{label}</p>
        </div>
    </motion.div>
);

export default Stat;
