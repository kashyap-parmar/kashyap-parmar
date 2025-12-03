import { email, LiveURL } from '@/mock/data';
import Link from 'next/link';
import React from 'react'

const PrivacyPolicy = () => {
    return (
        <section className="flex justify-center">
            <div className="py-20 px-8 xl:px-0 flex flex-col gap-y-8 max-w-[1200px] w-full">
                <div className="flex flex-col gap-y-4">
                    <div className="flex gap-x-4 items-center">
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                role="img"
                                className="iconify iconify--hugeicons h-auto"
                                width="25"
                                height="25"
                                viewBox="0 0 24 24"
                            >
                                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5">
                                    <path d="m12.88 7.017l4.774 1.271m-5.796 2.525l2.386.636m-2.267 6.517l.954.255c2.7.72 4.05 1.079 5.114.468c1.063-.61 1.425-1.953 2.148-4.637l1.023-3.797c.724-2.685 1.085-4.027.471-5.085s-1.963-1.417-4.664-2.136l-.954-.255c-2.7-.72-4.05-1.079-5.113-.468c-1.064.61-1.426 1.953-2.15 4.637l-1.022 3.797c-.724 2.685-1.086 4.027-.471 5.085c.614 1.057 1.964 1.417 4.664 2.136Z"></path>
                                    <path d="m12 20.946l-.952.26c-2.694.733-4.04 1.1-5.102.477c-1.06-.622-1.422-1.991-2.143-4.728l-1.021-3.872c-.722-2.737-1.083-4.106-.47-5.184C2.842 6.966 4 7 5.5 7"></path>
                                </g>
                            </svg>
                        </div>
                        <p className="xl:text-3xl text-lg font-semibold">Terms of Services</p>
                    </div>

                    <div className="flex text-[#64748b] flex-col gap-y-2">
                        <p><b>Last Updated:</b> October 2025</p>
                        <p><b>Effective Date:</b> October 2025</p>
                    </div>

                    <div className="text-[#64748b]">
                        <p>
                            Welcome to <b>Kashyap Parmar’s Portfolio and Services Platform</b> (the “Website”), operated by <b>Kashyap Parmar</b> (“I”, “me”, or “my”).
                        </p>
                        <p>
                            By accessing or using this website, you agree to comply with and be bound by the following terms and conditions.
                        </p>
                        <p>
                            If you do not agree with these terms, please do not use the website or any related services.
                        </p>
                    </div>
                </div>

                {/* Section 1 */}
                <div className="flex flex-col gap-y-4">
                    <div className="flex gap-x-4 items-center">
                        <p className="xl:text-3xl text-lg font-semibold">1.</p>
                        <p className="xl:text-3xl text-lg font-semibold">Use of the Website</p>
                    </div>
                    <div className="flex text-[#64748b] flex-col gap-y-4">
                        <p>
                            You agree to use this website for lawful, personal, and business-related purposes only.
                        </p>
                        <p>
                            You must not:
                        </p>
                        <ul className="list-disc list-inside pl-8">
                            <li>
                                Copy, distribute, or modify any part of this website without permission.
                            </li>
                            <li>
                                Attempt to gain unauthorized access to the website, its databases, or servers.
                            </li>
                            <li>
                                Use the site to post or transmit harmful, misleading, or illegal content.
                            </li>
                            <li>
                                Interfere with or disrupt the website’s performance or security.
                            </li>
                        </ul>
                        <p>
                            All content is provided for informational and service purposes only and may be updated at any time without notice.
                        </p>
                    </div>
                </div>

                {/* Section 2 */}
                <div className="flex flex-col gap-y-4">
                    <div className="flex gap-x-4 items-center">
                        <p className="xl:text-3xl text-lg font-semibold">
                            2.
                        </p>
                        <p className="xl:text-3xl text-lg font-semibold">
                            Service Scope
                        </p>
                    </div>
                    <div className="flex text-[#64748b] flex-col gap-y-4">
                        <p>
                            This website is designed to showcase and offer <b> MERN Stack Development and AI-based business solutions.</b>
                        </p>
                        <p>
                            Through this platform, you may:
                        </p>
                        <ul className="list-disc list-inside pl-8">
                            <li>
                                Request or purchase custom development services.
                            </li>
                            <li>
                                Make payments for projects or freelance work.
                            </li>
                            <li>
                                Access project updates and client management features (when available).
                            </li>
                            <li>
                                Read and interact with blogs or educational content.
                            </li>
                        </ul>
                        <p>
                            All work, pricing, and deliverables will be defined in individual project agreements or invoices between you (the client) and me (the service provider).
                        </p>
                    </div>
                </div>

                {/* Section 3 */}
                <div className="flex flex-col gap-y-4">
                    <div className="flex gap-x-4 items-center">
                        <p className="xl:text-3xl text-lg font-semibold">
                            3.
                        </p>
                        <p className="xl:text-3xl text-lg font-semibold">
                            Payments and Transactions
                        </p>
                    </div>
                    <div className="flex text-[#64748b] flex-col gap-y-4">
                        <ul className="list-disc list-inside pl-8">
                            <li>
                                Payments made through this website are processed via third-party payment gateways (e.g., Stripe, Razorpay, PayPal, etc.).
                            </li>
                            <li>
                                By making a payment, you agree to their respective terms and privacy policies.
                            </li>
                            <li>
                                All fees, timelines, and project details will be clearly communicated before work begins.
                            </li>
                            <li>
                                Refunds, if applicable, will follow the terms outlined in each project agreement or invoice.
                            </li>
                            <li>
                                I am not responsible for transaction errors or delays caused by third-party payment processors.
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Section 4 */}
                <div className="flex flex-col gap-y-4">
                    <div className="flex gap-x-4 items-center">
                        <p className="xl:text-3xl text-lg font-semibold">4.</p>
                        <p className="xl:text-3xl text-lg font-semibold">
                            Client Accounts and Management
                        </p>
                    </div>
                    <div className="flex text-[#64748b] flex-col gap-y-2">
                        <p>
                            Registered clients may receive access to a Client Management Dashboard, which may display project status, payments, invoices, and communication logs.
                        </p>
                        <ul className="list-disc list-inside pl-8">
                            <li>
                                Provide accurate and current information during registration.
                            </li>
                            <li>
                                Maintain confidentiality of your login credentials.
                            </li>
                            <li>
                                Use the client dashboard solely for business and communication purposes related to your projects.
                            </li>
                        </ul>
                        <p>
                            I reserve the right to suspend or terminate access for misuse, fraud, or violation of these terms.
                        </p>
                    </div>
                </div>

                {/* Section 5 */}
                <div className="flex flex-col gap-y-4">
                    <div className="flex gap-x-4 items-center">
                        <p className="xl:text-3xl text-lg font-semibold">5.</p>
                        <p className="xl:text-3xl text-lg font-semibold">
                            Intellectual Property Rights
                        </p>
                    </div>
                    <div className="flex text-[#64748b] flex-col gap-y-4">
                        <p>
                            All content, design, code, graphics, and other materials on this website are the intellectual property of <b> Kashyap Parmar </b>, except for third-party assets (such as fonts, icons, frameworks, or stock resources) which remain the property of their respective owners and are used here under their applicable usage terms.
                        </p>
                        <p>
                            All code, designs, or deliverables created under any client project remain the exclusive property of<b> Kashyap Parmar </b> until full payment for the project has been received.
                        </p>
                        <p>
                            During the development phase, clients may be granted limited access to review project progress and provide feedback; however, such access does not grant any ownership, license, or usage rights.
                        </p>
                        <p>
                            Upon receipt of full payment, ownership of the final deliverables will be transferred to the client as agreed in writing (for example, in an invoice, proposal, or contract).
                        </p>
                        <p>
                            Notwithstanding the transfer of ownership, <b> Kashyap Parmar </b> retains the perpetual right to display,
                            reference, or publish the completed project or portions thereof in professional portfolios, case studies, marketing materials, and social media for the sole purpose of demonstrating professional experience and expertise.
                        </p>
                        <p>
                            Any unauthorized reproduction, distribution, or modification of the website’s materials or client deliverables beyond the agreed terms is strictly prohibited.
                        </p>
                        <p>
                            <b>Note:</b> Some projects displayed in my portfolio were completed during my employment with various IT companies. These projects are showcased solely to demonstrate my professional experience, skills, and contributions. I do <b>not claim ownership, rights, or affiliation</b> with those companies’ intellectual property or trademarks. All such assets remain the property of their respective owners.
                        </p>
                    </div>
                </div>

                {/* Section 6 */}
                <div className="flex flex-col gap-y-4">
                    <div className="flex gap-x-4 items-center">
                        <p className="xl:text-3xl text-lg font-semibold">6.</p>
                        <p className="xl:text-3xl text-lg font-semibold">
                            User Submissions
                        </p>
                    </div>
                    <div className="flex text-[#64748b] flex-col gap-y-4">
                        <p>
                            When you contact me or submit forms, you agree that:
                        </p>
                        <ul className="list-disc list-inside pl-8">
                            <li>
                                All information you provide is accurate and lawful.
                            </li>
                            <li>
                                You will not upload or send malicious files, spam, or harmful code.
                            </li>
                            <li>
                                I may store and use submitted data for communication, service improvement, or project management purposes, in line with my Privacy Policy.
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Section 7 */}
                <div className="flex flex-col gap-y-4">
                    <div className="flex gap-x-4 items-center">
                        <p className="xl:text-3xl text-lg font-semibold">7.</p>
                        <p className="xl:text-3xl text-lg font-semibold">
                            External Links and Third-Party Services
                        </p>
                    </div>
                    <div className="flex text-[#64748b] flex-col gap-y-4">
                        <p>
                            This website may link to external sites or use third-party tools (such as Google Analytics, GitHub, LinkedIn, or payment gateways).
                        </p>
                        <p>
                            I am not responsible for the content, security, or privacy practices of any third-party service.
                        </p>
                        <p>
                            Your use of such tools is governed by their respective terms and policies.
                        </p>
                    </div>
                </div>

                {/* Section 8 */}
                <div className="flex flex-col gap-y-4">
                    <div className="flex gap-x-4 items-center">
                        <p className="xl:text-3xl text-lg font-semibold">8.</p>
                        <p className="xl:text-3xl text-lg font-semibold">
                            Blog Content and Educational Material
                        </p>
                    </div>
                    <div className="flex text-[#64748b] flex-col gap-y-4">
                        <p>
                            Any articles, tutorials, or opinions shared on this website reflect my personal experience and knowledge.
                            They are provided for educational and informational purposes only and <b> should not be taken as professional or legal advice.</b>
                        </p>
                        <p>
                            I do not guarantee the accuracy, completeness, or applicability of any content posted in the blog section.
                        </p>
                    </div>
                </div>

                {/* Section 9 */}
                <div className="flex flex-col gap-y-4">
                    <div className="flex gap-x-4 items-center">
                        <p className="xl:text-3xl text-lg font-semibold">9.</p>
                        <p className="xl:text-3xl text-lg font-semibold">
                            Limitation of Liability
                        </p>
                    </div>
                    <div className="flex text-[#64748b] flex-col gap-y-4">
                        <p>
                            To the maximum extent permitted by law, I am not liable for any direct, indirect, incidental, or consequential damages resulting from:
                        </p>
                        <ul className="list-disc list-inside pl-8">
                            <li>
                                Use or inability to use this website or its services,
                            </li>
                            <li>
                                Errors caused by third-party services or payment processors,
                            </li>
                            <li>
                                Unauthorized access, data breaches, or technical failures,
                            </li>
                            <li>
                                Business losses, loss of data, or reputational damage.
                            </li>
                        </ul>
                        <p>
                            You use this website and all related services at your own risk.
                        </p>
                    </div>
                </div>
                {/* Section 10 */}
                <div className="flex flex-col gap-y-4">
                    <div className="flex gap-x-4 items-center">
                        <p className="xl:text-3xl text-lg font-semibold">10.</p>
                        <p className="xl:text-3xl text-lg font-semibold">
                            Privacy and Data Protection
                        </p>
                    </div>
                    <div className="flex text-[#64748b] flex-col gap-y-4">
                        <p>
                            Your privacy is important.
                        </p>
                        <p>
                            Any personal or payment-related data collected through this website is processed in accordance with my
                            <Link
                                href={"/privacy-policies"}
                                className='font-bold ml-2 text-primary'
                            >
                                Privacy Policy.
                            </Link>
                        </p>
                        <p>
                            By using this site, you consent to the collection and handling of your data as described there.
                        </p>
                    </div>
                </div>
                {/* Section 11 */}
                <div className="flex flex-col gap-y-4">
                    <div className="flex gap-x-4 items-center">
                        <p className="xl:text-3xl text-lg font-semibold">11.</p>
                        <p className="xl:text-3xl text-lg font-semibold">
                            Changes to These Terms
                        </p>
                    </div>
                    <div className="flex text-[#64748b] flex-col gap-y-4">
                        <p>
                            I may update or modify these Terms of Service at any time without prior notice.
                        </p>
                        <p>
                            Updates will be reflected with a revised “Last Updated” date.
                        </p>
                        <p>
                            Continued use of the website after changes indicates your acceptance of the new terms.
                        </p>
                    </div>
                </div>
                {/* Section 12 */}
                <div className="flex flex-col gap-y-4">
                    <div className="flex gap-x-4 items-center">
                        <p className="xl:text-3xl text-lg font-semibold">12.</p>
                        <p className="xl:text-3xl text-lg font-semibold">
                            Governing Law
                        </p>
                    </div>
                    <div className="flex text-[#64748b] flex-col gap-y-4">
                        <p>
                            These Terms are governed by and interpreted according to the laws of India.
                        </p>
                        <p>
                            Any disputes will be handled in accordance with applicable Indian laws and jurisdiction.
                        </p>
                    </div>
                </div>
                {/* Section 13 */}
                <div className="flex flex-col gap-y-4">
                    <div className="flex gap-x-4 items-center">
                        <p className="xl:text-3xl text-lg font-semibold">13.</p>
                        <p className="xl:text-3xl text-lg font-semibold">
                            Contact Information
                        </p>
                    </div>
                    <div className="flex text-[#64748b] flex-col gap-y-4">
                        <p>
                            If you have any questions or concerns regarding these Terms, please contact:
                        </p>
                        <p>
                            📧
                            <Link
                                href={`mailto:${email}`}
                                className='font-bold text-primary ml-1'
                            >
                                {email}
                            </Link>
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-y-4">
                    <p>
                        <b>
                            © 2025 – Present Kashyap Parmar — MERN Developer. All rights reserved.
                        </b>
                    </p>
                </div>
            </div>

        </section >
    );
}

export default PrivacyPolicy;