"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Icon } from "@/components";

// ============================================
// Reusable Components
// ============================================

const Section = ({ children, className = "", id = "" }) => (
  <section id={id} className={`w-full flex justify-center items-center ${className}`}>
    <div className="max-w-[1200px] w-full px-6 lg:px-8 xl:px-0">{children}</div>
  </section>
);

const Stat = ({ icon, label, value }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="hover-tilt rounded-2xl border border-[#e2e8f0] dark:border-[#1e293b] bg-white/70 dark:bg-[#020817]/70 backdrop-blur p-5 flex items-center gap-4"
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
      <Icon icon={icon} />
    </div>
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-[#64748b] dark:text-[#94a3b8] mt-2 leading-relaxed text-sm">{desc}</p>
  </motion.div>
);

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

const ComparisonItem = ({ text, isNegative = false }) => (
  <div className="flex items-start gap-3">
    <div className={`h-6 w-6 rounded-full grid place-items-center flex-shrink-0 ${isNegative ? 'bg-red-500/10 text-red-500' : 'bg-green-500/10 text-green-500'}`}>
      <Icon icon={isNegative ? "solar:close-circle-line-duotone" : "solar:check-circle-line-duotone"} />
    </div>
    <span className="text-sm leading-relaxed">{text}</span>
  </div>
);

const Tier = ({ name, price, highlight, features, ctaTestId, icon }) => (
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
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-3xl font-extrabold mt-2">{price}<span className="text-base font-medium text-[#64748b] dark:text-[#94a3b8]">/project</span></p>
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

// ============================================
// Main Page Component
// ============================================

export default function AIServicePage() {
  const [openFaq, setOpenFaq] = useState(0);

  // Process steps data
  const processSteps = [
    {
      title: "Requirement Discovery",
      desc: "Gather project goals, UI theme preferences, functionality requirements, integration needs, and define clear scope with success metrics. We understand your vision before writing a single line of code.",
      icon: "solar:document-text-line-duotone"
    },
    {
      title: "Instant Design Prototypes",
      desc: "Generate 2-3 working UI designs (not static Figma mockups) so you can experience real user interactions and choose the direction that resonates best with your brand.",
      icon: "solar:palette-line-duotone"
    },
    {
      title: "AI-Automated Implementation",
      desc: "Once design is finalized, AI automation builds frontend + backend simultaneously. We ensure scalability, reliability, security, and optimal performance from the start.",
      icon: "solar:cpu-bolt-line-duotone"
    },
    {
      title: "Automated Testing",
      desc: "AI agents run comprehensive automated tests for every feature, catching bugs early and ensuring code quality before any deployment.",
      icon: "solar:shield-check-line-duotone"
    },
    {
      title: "Staging Deployment",
      desc: "Deploy on a staging environment for internal testing and client review. Collect feedback, iterate on changes, and validate everything before production.",
      icon: "solar:server-square-line-duotone"
    },
    {
      title: "Production Deployment",
      desc: "Use automated deployment agents to deploy on AWS, Vercel, or your preferred provider with CI/CD pipelines, environment secrets, and preview links.",
      icon: "solar:cloud-upload-line-duotone"
    },
    {
      title: "Polish & Roadmap",
      desc: "Fix edge cases, optimize final output, conduct performance audits, and outline post-launch improvements and MVP roadmap for continuous growth.",
      icon: "solar:rocket-2-line-duotone"
    }
  ];

  // FAQ data
  const faqs = [
    {
      q: "What does '10x faster' actually mean?",
      a: "We leverage AI-powered code generation, automated scaffolding, and parallelized workflows to compress delivery from months to weeks. Traditional development requires manual coding at every step, while our AI-assisted approach generates production-ready code, components, and integrations simultaneously."
    },
    {
      q: "How is this different from no-code or low-code platforms?",
      a: "Unlike no-code tools with limitations, we build with production-grade technologies (Next.js, Node.js, TypeScript). You get full ownership of clean, maintainable code that can scale infinitely and integrate with any service."
    },
    {
      q: "Can you work with my existing brand and backend?",
      a: "Absolutely. We adapt to existing brand systems, design guidelines, and integrate with REST/GraphQL APIs, databases, or any third-party services. We can also build greenfield projects with best practices from day one."
    },
    {
      q: "What happens after launch?",
      a: "We provide a post-launch roadmap with recommended improvements, performance optimizations, and feature prioritization. We also offer ongoing support and iteration packages for continuous development."
    },
    {
      q: "Do you include CI/CD and hosting setup?",
      a: "Yes. We set up automated CI/CD pipelines, environment configurations, preview deployments, and production hosting on your preferred provider with monitoring and analytics basics included."
    }
  ];

  // Traditional vs AI comparison data
  const traditionalProblems = [
    "Slow planning cycles with multiple revision rounds",
    "Figma → feedback → revisions → delays",
    "Manual coding of every UI component",
    "Heavy debugging & testing phases",
    "Higher costs and extended timelines",
    "Clients see only static images until late stages",
    "Multiple back-and-forth communication cycles"
  ];

  const aiAdvantages = [
    "2-3 instant working design prototypes",
    "No Figma needed → real UI from day one",
    "AI-generated UI components & layouts",
    "Automated backend & API scaffolding",
    "Automated testing by AI agents",
    "Faster iterations and delivery cycles",
    "Lower cost, higher output speed",
    "Scalable, secure, and reliable architecture",
    "Real working demo before full development"
  ];

  return (
    <div className="w-full flex flex-col">
      {/* ========================================== */}
      {/* HERO SECTION */}
      {/* ========================================== */}
      <Section className="relative pt-28 pb-20 hero-bg">
        {/* Background effects */}
        <div className="pointer-events-none absolute max-w-full w-full inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-grid-lines opacity-40 dark:opacity-20" />
          <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-primary/20 blur-3xl animate-float" />
          <div className="absolute -bottom-24 -right-0 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl animate-float-slow" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
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
            <Stat value="10x" label="Faster than traditional" icon={<Icon icon="solar:rocket-2-line-duotone" />} />
            <Stat value="Real UI" label="No Figma needed" icon={<Icon icon="solar:monitor-smartphone-line-duotone" />} />
            <Stat value="AI-Tested" label="Automated QA" icon={<Icon icon="solar:shield-check-line-duotone" />} />
            <Stat value="Scalable" label="Enterprise-ready" icon={<Icon icon="solar:server-square-cloud-line-duotone" />} />
          </div>
        </div>
      </Section>

      {/* ========================================== */}
      {/* TRADITIONAL VS AI COMPARISON SECTION */}
      {/* ========================================== */}
      <Section className="py-20" id="comparison">
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
      </Section>

      {/* ========================================== */}
      {/* WHAT YOU GET SECTION */}
      {/* ========================================== */}
      <Section className="py-20 hero-bg">
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
            <OutcomeCard
              icon="solar:pallete-2-line-duotone"
              title="Conversion-Focused UX"
              desc="Crisp, modern interfaces aligned with your brand that guide users to core actions with intuitive flows."
            />
            <OutcomeCard
              icon="solar:code-square-line-duotone"
              title="Production-Grade Code"
              desc="Clean architecture with TypeScript, modular components, ENV-based configs, and best practices built-in."
            />
            <OutcomeCard
              icon="solar:plug-circle-line-duotone"
              title="API Integrations"
              desc="Auth, payments, data services, or 3rd-party APIs integrated cleanly and thoroughly documented."
            />
            <OutcomeCard
              icon="solar:rocket-line-duotone"
              title="Performance & SEO"
              desc="Fast load times, Core Web Vitals optimization, accessibility checks, and metadata management."
            />
            <OutcomeCard
              icon="solar:chart-2-line-duotone"
              title="Analytics & Monitoring"
              desc="Track user behavior, conversions, and performance metrics from day one with integrated dashboards."
            />
            <OutcomeCard
              icon="solar:cloud-check-line-duotone"
              title="CI/CD & Hosting"
              desc="Automated deployments with preview builds, environment management, and reliable infrastructure."
            />
          </div>
        </div>
      </Section>

      {/* ========================================== */}
      {/* HOW WE WORK - PROCESS SECTION */}
      {/* ========================================== */}
      <Section className="py-20">
        <div className="flex flex-col gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">How We Work</h2>
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
      </Section>

      {/* ========================================== */}
      {/* PACKAGES SECTION */}
      {/* ========================================== */}
      <Section className="py-20 hero-bg" id="packages">
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
            <Tier
              name="Starter"
              price="$1.5k–$3k"
              icon="solar:rocket-line-duotone"
              features={[
                "Landing page + 1 core flow",
                "2 working design prototypes",
                "AI-generated UI components",
                "Basic analytics setup",
                "CI/CD + hosting setup",
                "1 round of revisions"
              ]}
              ctaTestId="tier-starter-cta"
            />
            <Tier
              name="Growth"
              price="$3k–$7k"
              icon="solar:chart-line-duotone"
              highlight
              features={[
                "Multi-page MVP application",
                "3 working design prototypes",
                "Auth + payments integration",
                "Automated testing suite",
                "QA + accessibility pass",
                "Staging + production deploy",
                "2 rounds of revisions"
              ]}
              ctaTestId="tier-growth-cta"
            />
            <Tier
              name="Scale"
              price="$7k+"
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
            />
          </div>
        </div>
      </Section>

      {/* ========================================== */}
      {/* FEATURED WORK SECTION */}
      {/* ========================================== */}
      <Section className="py-20">
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
            <Link href="/projects" className="text-primary font-semibold hover:underline flex items-center gap-1">
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
      </Section>

      {/* ========================================== */}
      {/* FAQ SECTION */}
      {/* ========================================== */}
      <Section className="py-20 hero-bg">
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
      </Section>

      {/* ========================================== */}
      {/* FINAL CTA SECTION */}
      {/* ========================================== */}
      <Section className="py-20">
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
                  Let's Build Your MVP
                  <Icon icon="mingcute:arrow-right-line" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
              </button>
            </Link>
          </div>
        </motion.div>
      </Section>
    </div>
  );
}
