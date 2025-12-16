"use client";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    whatClientGet,
    processSteps,
    faqs,
    traditionalProblems,
    aiAdvantages,
    pricingConfigs
} from "@/mock/data";
import {
    Icon,
    Stat,
    OutcomeCard,
    ProcessStep,
    ComparisonItem,
    Tier,
    FAQItem,
    Section3D,
} from "@/components";

// ---------------------------------------------------------------------------------------------------------------

export default function Model3d() {
    const [openFaq, setOpenFaq] = useState(0);

    return (
        <div className="w-full flex flex-col">
            {/* ========================================== */}
            {/* HERO SECTION */}
            {/* ========================================== */}
            <Section3D className="relative pt-28 pb-20 hero-bg">
                {/* Background effects */}
                <div className="pointer-events-none absolute max-w-full w-full inset-0 -z-10">
                    <div className="absolute inset-0 bg-grid-lines opacity-40 dark:opacity-20" />
                    <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-primary/20 blur-3xl animate-float" />
                    <div className="absolute -bottom-24 -right-0 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl animate-float-slow" />
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    {/* Hero Content */}
                    <div className="flex-1 flex flex-col gap-6">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 w-fit text-primary border bg-white/60 dark:bg-[#020817]/60 backdrop-blur border-primary/20 rounded-full px-4 py-2 text-sm font-medium"
                        >
                            <Icon icon="solar:cpu-bolt-line-duotone" className="text-lg" />
                            AI-Accelerated Development
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.05 }}
                            className="text-4xl lg:text-6xl font-extrabold leading-tight"
                        >
                            Launch Your MVP <br />
                            <span className="text-gradient">10x Faster</span> with AI
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-lg lg:text-xl text-[#64748b] dark:text-[#94a3b8] max-w-2xl leading-relaxed"
                        >
                            Skip the traditional development cycle. Get <strong>AI-assisted design</strong>,
                            <strong> real-time prototypes</strong>, and <strong>production-ready code</strong> —
                            delivered as a single streamlined service with a <strong>scalable, secure, and reliable</strong> stack.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.15 }}
                            className="flex flex-wrap gap-4 pt-2"
                        >
                            <Link href="/#contact">
                                <button data-testid="three-d-primary-cta" className="relative overflow-hidden bg-primary text-white font-semibold text-sm lg:text-base py-4 px-8 rounded-full group shadow-lg shadow-primary/25">
                                    <span className="relative z-10 flex items-center gap-2">
                                        Start in 48 hours
                                        <Icon icon="mingcute:arrow-right-line" />
                                    </span>
                                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
                                </button>
                            </Link>
                            <a href="#comparison">
                                <button data-testid="three-d-secondary-cta" className="px-8 py-4 rounded-full font-semibold text-sm border border-[#e2e8f0] dark:border-[#1e293b] bg-white/70 dark:bg-[#020817]/70 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                    See the Difference
                                </button>
                            </a>
                        </motion.div>
                    </div>

                    {/* Hero Stats Grid */}
                    <div className="flex-1 grid grid-cols-2 gap-4 w-full lg:w-auto">
                        <Stat value="10x Faster" label="Than traditional" icon={<Icon icon="solar:rocket-2-line-duotone" />} />
                        <Stat value="Real UI" label="No Figma needed" icon={<Icon icon="solar:monitor-smartphone-line-duotone" />} />
                        <Stat value="AI-Tested" label="Automated QA" icon={<Icon icon="solar:shield-check-line-duotone" />} />
                        <Stat value="Scalable" label="Enterprise-ready" icon={<Icon icon="solar:server-square-cloud-line-duotone" />} />
                    </div>
                </div>
            </Section3D>

            {/* ========================================== */}
            {/* TRADITIONAL VS AI COMPARISON SECTION */}
            {/* ========================================== */}
            <Section3D className="py-20" id="comparison">
                <div className="flex flex-col gap-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Traditional vs AI-Driven Development</h2>
                        <p className="text-[#64748b] dark:text-[#94a3b8] text-lg">
                            See why AI-accelerated development delivers better results in less time
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Traditional Side */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="rounded-2xl border border-red-200 dark:border-red-900/30 comparison-card-traditional p-8"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="h-12 w-12 rounded-xl bg-red-500/10 text-red-500 grid place-items-center text-xl">
                                    <Icon icon="solar:clock-circle-line-duotone" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-red-600 dark:text-red-400">Traditional Process</h3>
                                    <p className="text-sm text-[#64748b]">The old way of building</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                {traditionalProblems.map((item, i) => (
                                    <ComparisonItem key={i} text={item} isNegative />
                                ))}
                            </div>
                            <div className="mt-6 pt-6 border-t border-red-200 dark:border-red-900/30">
                                <div className="flex items-center gap-2 text-red-600 dark:text-red-400">
                                    <Icon icon="solar:hourglass-line-duotone" />
                                    <span className="font-semibold">Timeline: 3-6 months</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* AI-Driven Side */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="rounded-2xl border border-green-200 dark:border-green-900/30 comparison-card-ai p-8 relative overflow-hidden"
                        >
                            <div className="absolute -top-4 -right-4 px-4 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                                Recommended
                            </div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="h-12 w-12 rounded-xl bg-green-500/10 text-green-500 grid place-items-center text-xl">
                                    <Icon icon="solar:cpu-bolt-line-duotone" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-green-600 dark:text-green-400">AI-Driven Model</h3>
                                    <p className="text-sm text-[#64748b]">The modern approach</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                {aiAdvantages.map((item, i) => (
                                    <ComparisonItem key={i} text={item} />
                                ))}
                            </div>
                            <div className="mt-6 pt-6 border-t border-green-200 dark:border-green-900/30">
                                <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                                    <Icon icon="solar:rocket-2-line-duotone" />
                                    <span className="font-semibold">Timeline: 2-4 weeks</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </Section3D>

            {/* ========================================== */}
            {/* WHAT YOU GET SECTION */}
            {/* ========================================== */}
            <Section3D className="py-20 hero-bg">
                <div className="flex flex-col gap-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">What You Get</h2>
                        <p className="text-[#64748b] dark:text-[#94a3b8] text-lg">
                            Production-ready deliverables built with modern engineering and AI automation
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {whatClientGet?.map((el, index) => (
                            <OutcomeCard
                                key={index}
                                icon={el?.icon}
                                title={el?.title}
                                desc={el?.description}
                            />
                        ))}
                    </div>
                </div>
            </Section3D>

            {/* ========================================== */}
            {/* HOW WE WORK - PROCESS SECTION */}
            {/* ========================================== */}
            <Section3D className="py-20">
                <div className="flex flex-col gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">How I Work</h2>
                        <p className="text-[#64748b] dark:text-[#94a3b8] text-lg">
                            A streamlined 7-stage process that takes you from idea to launch with AI efficiency
                        </p>
                    </motion.div>

                    <div className="max-w-3xl mx-auto w-full">
                        {processSteps.map((step, index) => (
                            <ProcessStep
                                key={index}
                                index={index + 1}
                                title={step.title}
                                desc={step.desc}
                                icon={step.icon}
                                isLast={index === processSteps.length - 1}
                            />
                        ))}
                    </div>
                </div>
            </Section3D>

            {/* ========================================== */}
            {/* PACKAGES SECTION */}
            {/* ========================================== */}
            <Section3D className="py-20 hero-bg" id="packages">
                <div className="flex flex-col gap-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Packages</h2>
                        <p className="text-[#64748b] dark:text-[#94a3b8] text-lg">
                            Flexible options designed to match your project scope and budget
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {pricingConfigs?.map((pkg, ind) => (
                            <Tier
                                key={ind}
                                name={pkg?.name || ""}
                                price={pkg.price}
                                icon={pkg?.icon}
                                save={pkg?.save}
                                features={pkg?.features || []}
                                ctaTestId={pkg?.ctaTestId}
                            />))}
                        {/* <Tier
                            name="Growth"
                            price="₹25k–₹60k"
                            save={"70%"}
                            icon="solar:chart-line-duotone"
                            highlight
                            features={[
                                "Multi-page MVP application",
                                "3 working design prototypes",
                                "Auth + Payments + Third party integration",
                                "Automated testing suite",
                                "QA + accessibility pass",
                                "Staging + production deploy",
                                "Unlimited revisions"
                            ]}
                            ctaTestId="tier-growth-cta"
                        />
                        <Tier
                            name="Scale"
                            price="₹70k+"
                            save={"60%-70%"}
                            icon="solar:server-square-cloud-line-duotone"
                            features={[
                                "Complex multi-flow application",
                                "Custom admin dashboards",
                                "Advanced API integrations",
                                "Performance optimization",
                                "Security audit included",
                                "Priority support & iterations",
                                "Post-launch roadmap"
                            ]}
                            ctaTestId="tier-scale-cta"
                        /> */}
                    </div>
                </div>
            </Section3D>

            {/* ========================================== */}
            {/* FEATURED WORK SECTION */}
            {/* ========================================== */}
            <Section3D className="py-20 hidden">
                <div className="flex flex-col gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
                    >
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold">Featured Work</h2>
                            <p className="text-[#64748b] dark:text-[#94a3b8] mt-2">Real projects built with AI-accelerated development</p>
                        </div>
                        <Link href="/#projects" className="text-primary font-semibold hover:underline flex items-center gap-1">
                            View all projects
                            <Icon icon="mingcute:arrow-right-line" />
                        </Link>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="hover-tilt rounded-2xl p-6 border border-[#e2e8f0] dark:border-[#1e293b] bg-white/70 dark:bg-[#020817]/70 group"
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">SaaS MVP</span>
                                <span className="text-xs text-[#64748b]">Built in 3 weeks</span>
                            </div>
                            <p className="text-xl font-semibold mt-2">Analytics Dashboard</p>
                            <p className="text-sm mt-2 text-[#64748b] dark:text-[#94a3b8] leading-relaxed">Full-featured analytics platform with Next.js, real-time charts, role-based access, and automated reporting.</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="hover-tilt rounded-2xl p-6 border border-[#e2e8f0] dark:border-[#1e293b] bg-white/70 dark:bg-[#020817]/70 group"
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-xs px-2 py-1 rounded-full bg-green-500/10 text-green-600 font-medium">E-commerce</span>
                                <span className="text-xs text-[#64748b]">Built in 2 weeks</span>
                            </div>
                            <p className="text-xl font-semibold mt-2">Checkout Experience</p>
                            <p className="text-sm mt-2 text-[#64748b] dark:text-[#94a3b8] leading-relaxed">Optimized conversion flow with Stripe integration, inventory management, and real-time order tracking.</p>
                        </motion.div>
                    </div>
                </div>
            </Section3D>

            {/* ========================================== */}
            {/* FAQ SECTION */}
            {/* ========================================== */}
            <Section3D className="py-20 hero-bg">
                <div className="flex flex-col gap-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
                        <p className="text-[#64748b] dark:text-[#94a3b8] text-lg">
                            Everything you need to know about AI-driven development
                        </p>
                    </motion.div>

                    <div className="max-w-3xl mx-auto w-full flex flex-col gap-4">
                        {faqs.map((f, i) => (
                            <FAQItem
                                key={i}
                                q={f.q}
                                a={f.a}
                                open={openFaq === i}
                                onToggle={() => setOpenFaq(openFaq === i ? -1 : i)}
                            />
                        ))}
                    </div>
                </div>
            </Section3D>

            {/* ========================================== */}
            {/* FINAL CTA SECTION */}
            {/* ========================================== */}
            <Section3D className="py-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden rounded-3xl border border-[#e2e8f0] dark:border-[#1e293b] p-10 lg:p-14 hero-bg"
                >
                    {/* Background effects */}
                    <div className="absolute -z-10 -right-10 top-0 h-60 w-60 bg-primary/20 blur-3xl rounded-full animate-float" />
                    <div className="absolute -z-10 -left-10 bottom-0 h-60 w-60 bg-purple-500/20 blur-3xl rounded-full animate-float-slow" />

                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                        <div className="flex flex-col gap-4">
                            <h2 data-testid="three-d-cta-title" className="text-3xl lg:text-4xl font-bold">
                                Ready to Launch <span className="text-gradient">10x Faster</span>?
                            </h2>
                            <p className="text-[#64748b] dark:text-[#94a3b8] text-lg max-w-xl">
                                Skip months of traditional development. Get a working prototype in days, not weeks.
                            </p>
                        </div>

                        <Link href="/#contact" data-testid="three-d-cta-button">
                            <button className="relative overflow-hidden bg-primary text-white font-semibold text-base py-4 px-8 rounded-full group shadow-lg shadow-primary/25 whitespace-nowrap">
                                <span className="relative z-10 flex items-center gap-2">
                                    Let&apos;s Build Your MVP
                                    <Icon icon="mingcute:arrow-right-line" />
                                </span>
                                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
                            </button>
                        </Link>
                    </div>
                </motion.div>
            </Section3D>
        </div>
    );
}
