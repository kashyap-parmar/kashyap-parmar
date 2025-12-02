"use client"
import Link from "next/link";
import { motion } from "framer-motion";
import { Icon } from "@/components";

// --------------------------------------------------------

const Tier = ({ name, price, highlight, features, ctaTestId, icon, save }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`relative hover-tilt rounded-2xl border ${highlight ? "border-primary shadow-lg shadow-primary/10" : "border-[#e2e8f0] dark:border-[#1e293b]"} bg-white/70 dark:bg-[#020817]/70 backdrop-blur p-6 flex flex-col gap-4`}
    >
        {highlight && (
            <div className="absolute -top-3 right-4 text-xs px-3 py-1 rounded-full bg-primary text-white shadow">Most Popular</div>
        )}
        <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary grid place-items-center text-xl mb-2">
            <Icon icon={icon} />
        </div>
        <div>
            <div className="flex gap-2 items-center" >
                <h3 className="text-xl font-bold">{name}</h3>
                <p className="rounded-[24px] bg-green-500/10 px-2 border border-green-600 text-green-600 text-sm leading-6" > save {save}</p>
            </div>
            <p className="text-3xl font-extrabold mt-2">
                {price}
                <span className="text-base font-medium text-[#64748b] dark:text-[#94a3b8]">/project</span>
            </p>
        </div>
        <ul className="flex flex-col gap-3 mt-2 flex-1">
            {features.map((f, i) => (
                <li key={i} className="flex items-start gap-2">
                    <Icon icon="solar:check-circle-line-duotone" className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm leading-relaxed">{f}</span>
                </li>
            ))}
        </ul>
        <Link href="/#contact" className="mt-3">
            <button data-testid={ctaTestId} className={`w-full relative overflow-hidden ${highlight ? "bg-primary text-white" : "bg-[#0f172a] text-white dark:bg-white dark:text-[#0f172a]"} font-semibold text-sm py-3 rounded-xl group`}>
                <span className="relative z-10">Get Started</span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
            </button>
        </Link>
    </motion.div>
);

export default Tier
