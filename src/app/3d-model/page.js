"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Icon } from "@/components";

const Section = ({ children, className = "" }) => (
  <section className={`w-full flex justify-center items-center ${className}`}>
    <div className="max-w-[1200px] w-full px-8 xl:px-0">{children}</div>
  </section>
);

const Stat = ({ icon, label, value }) => (
  <div className="hover-tilt rounded-2xl border border-[#e2e8f0] dark:border-[#1e293b] bg-white/70 dark:bg-[#020817]/70 backdrop-blur p-5 flex items-center gap-4">
    <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary grid place-items-center">
      {icon}
    </div>
    <div className="flex flex-col">
      <p className="text-2xl font-bold">{value}</p>
      <p className="text-sm text-[#64748b] dark:text-[#94a3b8]">{label}</p>
    </div>
  </div>
);

const OutcomeCard = ({ title, desc }) => (
  <div className="group hover-tilt relative overflow-hidden rounded-2xl border border-[#e2e8f0] dark:border-[#1e293b] bg-white/70 dark:bg-[#020817]/70 backdrop-blur p-6">
    <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl group-hover:bg-primary/20 transition-colors" />
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-[#64748b] dark:text-[#94a3b8] mt-2 leading-relaxed">{desc}</p>
  </div>
);

const Step = ({ index, title, desc }) => (
  <div className="relative pl-8">
    <div className="absolute left-0 top-1 h-4 w-4 rounded-full bg-primary shadow" />
    <h4 className="font-semibold">{index}. {title}</h4>
    <p className="text-[#64748b] dark:text-[#94a3b8] mt-2 leading-relaxed">{desc}</p>
  </div>
);

const Tier = ({ name, price, highlight, features, ctaTestId }) => (
  <div className={`relative hover-tilt rounded-2xl border ${highlight ? "border-primary" : "border-[#e2e8f0] dark:border-[#1e293b]"} bg-white/70 dark:bg-[#020817]/70 backdrop-blur p-6 flex flex-col gap-4`}>
    {highlight && (
      <div className="absolute -top-3 right-4 text-xs px-3 py-1 rounded-full bg-primary text-white shadow">Most popular</div>
    )}
    <div>
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-3xl font-extrabold mt-2">{price}<span className="text-base font-medium text-[#64748b] dark:text-[#94a3b8]">/project</span></p>
    </div>
    <ul className="flex flex-col gap-2 mt-2">
      {features.map((f, i) => (
        <li key={i} className="flex items-start gap-2">
          <Icon icon="solar:check-circle-line-duotone" className="text-primary mt-0.5" />
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
  </div>
);

const FAQItem = ({ q, a, open, onToggle }) => (
  <div className="rounded-xl border border-[#e2e8f0] dark:border-[#1e293b] overflow-hidden">
    <button onClick={onToggle} className="w-full px-5 py-4 flex items-center justify-between text-left">
      <span className="font-medium">{q}</span>
      <Icon icon={open ? "solar:minus-circle-line-duotone" : "solar:plus-circle-line-duotone"} />
    </button>
    {open && (
      <div className="px-5 pb-5 text-[#64748b] dark:text-[#94a3b8]">{a}</div>
    )}
  </div>
);

export default function ThreeDModelPage() {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    { q: "What does 10x faster actually mean?", a: "We use proven automated scaffolding, and parallelized workflows to compress delivery from months to weeks while maintaining quality." },
    { q: "Can you work with my existing brand and backend?", a: "Absolutely. We adapt to existing brand systems and integrate with REST/GraphQL/backends, or build greenfield with best practices." },
    { q: "Do you include CI/CD and hosting?", a: "Yes. We set up CI/CD, environments, preview links, and deploy to your preferred provider with monitoring basics." },
  ];

  return (
    <div className="w-ful flex flex-col">
      {/* HERO */}
      <Section className="relative pt-28 pb-20 hero-bg ">
        <div className="pointer-events-none absolute max-w-full w-full inset-0 -z-10">
          <div className="absolute inset-0 bg-grid-lines opacity-40 dark:opacity-20" />
          <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-primary/20 blur-3xl animate-float" />
          <div className="absolute -bottom-24 -right-0 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl animate-float-slow" />
        </div>
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          <div className="flex-1 flex flex-col gap-6">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 w-fit text-primary border bg-white/60 dark:bg-[#020817]/60 backdrop-blur border-primary/20 rounded-full px-4 py-2 text-sm font-medium">
              <span aria-hidden>⚡</span>
              3D Model Service
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05 }} className="text-4xl lg:text-6xl font-extrabold leading-tight">
              Launch Your MVP <span className="text-gradient">10x Faster</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-lg lg:text-xl text-[#64748b] dark:text-[#94a3b8] max-w-2xl">
              Strategy, <b> design, development, and deployment</b> — delivered as a single streamlined service powered by Next.js, Node, TypeScript, and automation.
            </motion.p>
            <div className="flex gap-4 pt-2">
              <Link href="/#contact">
                <button data-testid="three-d-primary-cta" className="relative overflow-hidden bg-primary text-white font-semibold text-sm lg:text-base py-4 px-6 rounded-full group">
                  <span className="relative z-10 flex items-center gap-2">Start in 48 hours <Icon icon="mingcute:arrow-right-line" /></span>
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
                </button>
              </Link>
              <a href="#packages">
                <button data-testid="three-d-secondary-cta" className="px-6 py-4 rounded-full font-semibold text-sm border border-[#e2e8f0] dark:border-[#1e293b] bg-white/70 dark:bg-[#020817]/70">See Packages</button>
              </a>
            </div>
          </div>

          <div className="flex-1 grid grid-cols-2 gap-4">
            <Stat value="2–4 wks" label="Typical MVP timeline" icon={<Icon icon="solar:hourglass-line-duotone" />} />
            <Stat value="MERN+TS" label="Modern stack" icon={<Icon icon="solar:code-square-linear" />} />
            <Stat value="CI/CD" label="Automated delivery" icon={<Icon icon="solar:cloud-upload-linear" />} />
            <Stat value="SEO Ready" label="Best practices" icon={<Icon icon="solar:rocket-line-duotone" />} />
          </div>
        </div>
      </Section>

      {/* OUTCOMES */}
      <Section className="py-16">
        <div className="flex flex-col gap-8">
          <h2 className="text-3xl lg:text-4xl font-bold">What you get</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <OutcomeCard title="Conversion‑focused UX" desc="Crisp interfaces aligned with your brand that guide users to the core action." />
            <OutcomeCard title="Production‑grade code" desc="Clean architecture, ENV-based config, linted/typed where it matters, and modular components." />
            <OutcomeCard title="API integrations" desc="Auth, payments, data, or 3rd-party services integrated cleanly and documented." />
            <OutcomeCard title="Performance & SEO" desc="Fast load, accessibility checks, metadata, and best practices built-in." />
            <OutcomeCard title="Analytics & monitoring" desc="Hook up metrics so you can track traction from day one." />
            <OutcomeCard title="CI/CD & hosting" desc="Automated deploys with preview builds and clear releases." />
          </div>
        </div>
      </Section>

      {/* PROCESS */}
      <Section className="py-16">
        <div className="flex flex-col gap-10">
          <h2 className="text-3xl lg:text-4xl font-bold">How we work</h2>
          <div className="relative pl-6 border-l-2 border-dashed border-primary/30 flex flex-col gap-8">
            <Step index={1} title="Discovery" desc="Clarify goals, scope, success metrics, and the smallest lovable version to launch." />
            <Step index={2} title="Design" desc="Rapid, theme‑aligned UI/UX that prioritizes clarity and conversion." />
            <Step index={3} title="Development" desc="Build core flows with clean APIs, validation, and modular components." />
            <Step index={4} title="Deployment" desc="Setup hosting, CI/CD, secrets, and environments with preview links." />
            <Step index={5} title="Iterate" desc="Polish with feedback, fix edge cases, and plan post‑MVP roadmap." />
          </div>
        </div>
      </Section>

      {/* PACKAGES */}
      <Section className="py-16" id="packages">
        <div className="flex flex-col gap-8">
          <h2 className="text-3xl lg:text-4xl font-bold">Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Tier
              name="Starter"
              price="$1.5k–$3k"
              features={["Landing + 1 core flow", "Basic analytics", "CI/CD + hosting setup"]}
              ctaTestId="tier-starter-cta"
            />
            <Tier
              name="Growth"
              price="$3k–$7k"
              highlight
              features={["Multi‑page MVP", "Integrations (auth/payments)", "QA + accessibility pass"]}
              ctaTestId="tier-growth-cta"
            />
            <Tier
              name="Scale"
              price="$7k+"
              features={["Complex flows", "Custom dashboards", "Advanced integrations"]}
              ctaTestId="tier-scale-cta"
            />
          </div>
        </div>
      </Section>

      {/* FEATURED */}
      <Section className="py-16">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl lg:text-4xl font-bold">Featured work</h2>
            <Link href="/projects" className="text-primary font-semibold">View all</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="hover-tilt rounded-2xl p-6 border border-[#e2e8f0] dark:border-[#1e293b] bg-white/70 dark:bg-[#020817]/70">
              <p className="text-sm text-[#64748b] dark:text-[#94a3b8]">SaaS MVP</p>
              <p className="text-xl font-semibold mt-1">Analytics Dashboard</p>
              <p className="text-sm mt-2 text-[#64748b] dark:text-[#94a3b8]">Built with Next.js, charts, and role‑based access.</p>
            </div>
            <div className="hover-tilt rounded-2xl p-6 border border-[#e2e8f0] dark:border-[#1e293b] bg-white/70 dark:bg-[#020817]/70">
              <p className="text-sm text-[#64748b] dark:text-[#94a3b8]">E‑commerce</p>
              <p className="text-xl font-semibold mt-1">Checkout Experience</p>
              <p className="text-sm mt-2 text-[#64748b] dark:text-[#94a3b8]">Optimized conversion with payments integration.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="py-16">
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl lg:text-4xl font-bold">FAQ</h2>
          <div className="flex flex-col gap-3">
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

      {/* FINAL CTA */}
      <Section className="py-20">
        <div className="relative overflow-hidden rounded-3xl border border-[#e2e8f0] dark:border-[#1e293b] p-10 lg:p-14 hero-bg">
          <div className="absolute -z-10 -right-10 top-0 h-40 w-40 bg-primary/20 blur-3xl rounded-full animate-float" />
          <div className="absolute -z-10 -left-10 bottom-0 h-40 w-40 bg-purple-500/20 blur-3xl rounded-full animate-float-slow" />
          <div className="flex flex-col gap-6 items-start">
            <h3 data-testid="three-d-cta-title" className="text-3xl lg:text-4xl font-bold">
              Ready to launch faster?
            </h3>
            <Link href="/#contact" data-testid="three-d-cta-button">
              <button className="relative overflow-hidden bg-primary text-white font-semibold text-sm lg:text-base py-3 px-6 rounded-full group">
                <span className="relative z-10 flex items-center gap-2">Let’s build your MVP <Icon icon="mingcute:arrow-right-line" /></span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
              </button>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
