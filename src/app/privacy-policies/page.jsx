import { email, LiveURL } from '@/mock/data';
import Link from 'next/link';
import React from 'react'

const PrivacyPolicy = () => {
    return (
        <div className='w-full flex justify-center items-center py-20' >
            <div className="px-8 xl:px-0 flex flex-col gap-y-8 max-w-[1200px] w-full">
                {/* Header */}
                <div className="flex flex-col gap-y-4">
                    <div className="flex gap-x-4 items-center">
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                role="img"
                                className="h-auto"
                                width="25"
                                height="25"
                                viewBox="0 0 24 24"
                            >
                                <g
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                >
                                    <path d="M5 13a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z"></path>
                                    <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0-2 0m-3-5V7a4 4 0 1 1 8 0v4"></path>
                                </g>
                            </svg>
                        </div>
                        <p className="xl:text-3xl text-lg font-semibold">Privacy Policy</p>
                    </div>

                    <div className="flex text-[#64748b] flex-col gap-y-2">
                        <p>
                            <b>Last Updated:</b> October 2025
                        </p>
                        <p>
                            <b>Effective Date:</b> October 2025
                        </p>
                    </div>

                    <div className="text-[#64748b] flex flex-col gap-2">
                        <p>
                            Welcome to <b>Kashyap Parmar’s Portfolio and Services Platform (“Website”),</b> — accessible at{" "}
                            <a
                                target="_blank"
                                className="text-primary hover:underline"
                                href={LiveURL}
                            >
                                {LiveURL}.
                            </a>
                        </p>
                        <p>
                            This Privacy Policy explains how <b>Kashyap Parmar</b> (“I”, “me”, or “my”)
                            collects, uses, and protects your information when you visit, contact, or conduct business through this website.
                        </p>
                        <p>
                            By using this website, you consent to the data practices described in this Policy.
                        </p>
                    </div>
                </div>

                {/* 1. Information I Collect */}
                <div className="flex flex-col gap-y-4">
                    <div className="flex gap-x-4 items-center">
                        <p className="xl:text-3xl text-lg font-semibold">1.</p>
                        <p className="xl:text-3xl text-lg font-semibold">Information I Collect</p>
                    </div>

                    <p className=' text-[#64748b]' >
                        I only collect personal information necessary to operate this website, communicate with clients, and deliver services.
                    </p>
                    <p className=' text-[#64748b]' >
                        The types of data I may collect include:
                    </p>
                    <div className='flex flex-col gap-y-8 pl-8' >
                        <div className='flex flex-col gap-2' >
                            <p className="xl:text-xl text-lg font-semibold">
                                a. Contact & Inquiry Data
                            </p>
                            <ul className="pl-8 list-disc list-outside text-[#64748b]">
                                <li>
                                    Name, email address, and message details provided through contact or inquiry forms.
                                </li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-2' >
                            <p className="xl:text-xl text-lg font-semibold">
                                b. Client & Project Data
                            </p>
                            <ul className="pl-8 list-disc list-outside  text-[#64748b]">
                                <li>
                                    Information provided by clients during project discussions, proposals, and onboarding, including business details, communication history, and project-related files.
                                </li>
                                <li>
                                    Billing or payment details processed securely through third-party payment gateways (I do not store payment card information directly).
                                </li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-2' >
                            <p className="xl:text-xl text-lg font-semibold">
                                c. Account Data
                            </p>
                            <ul className="pl-8 list-disc list-outside text-[#64748b]">
                                <li>
                                    When client accounts or dashboards are implemented, registration details such as username, email, and encrypted login credentials may be collected.
                                </li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-2' >
                            <p className="xl:text-xl text-lg font-semibold">
                                d. Automatic & Analytical Data
                            </p>
                            <div className='text-[#64748b] flex flex-col gap-2' >
                                <ul className="pl-8 list-disc list-outside flex flex-col gap-2  ">
                                    <li>
                                        I may use tools like Google Analytics, Cloudflare, or other analytics providers to collect anonymous technical data such as:
                                    </li>
                                    <span>
                                        - IP address (anonymized)
                                    </span>
                                    <span>
                                        - Browser type and version
                                    </span>
                                    <span>
                                        - Pages visited and time spent
                                    </span>
                                    <span>
                                        -  Device type and operating system
                                    </span>
                                </ul>
                                <p>
                                    This helps improve performance, security, and user experience.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2. How I Use Your Information */}
                <div className="flex flex-col gap-y-4">
                    <div className="flex gap-x-4 items-center">
                        <p className="xl:text-3xl text-lg font-semibold">2.</p>
                        <p className="xl:text-3xl text-lg font-semibold">How I Use Your Information</p>
                    </div>

                    <div className="flex text-[#64748b] flex-col gap-y-4">
                        <p>I may use your information to:</p>
                        <ul className="list-disc list-outside pl-8">
                            <li>Respond to inquiries and provide requested services.</li>
                            <li>Manage projects, deliverables, and client communication.</li>
                            <li>Process payments and send invoices or receipts.</li>
                            <li>Improve website performance, security, and content quality.</li>
                            <li>Send newsletters or service updates (only if you have opted in).</li>
                            <li>Analyze anonymized data to understand user interaction and improve offerings.</li>
                        </ul>
                        <p>
                            Your personal data will never be sold or rented to third parties for marketing purposes.
                        </p>
                    </div>
                </div>

                {/* 3. Payments and Financial Data */}
                <div className="flex flex-col gap-y-4">
                    <div className="flex gap-x-4 items-center">
                        <p className="xl:text-3xl text-lg font-semibold">3.</p>
                        <p className="xl:text-3xl text-lg font-semibold">Payments and Financial Data</p>
                    </div>

                    <div className="flex text-[#64748b] flex-col gap-y-2">
                        <p>When you make a payment through this website:</p>
                        <ul className="list-disc list-outside pl-8">
                            <li>
                                All transactions are handled via trusted <b> third-party payment gateways </b>(e.g., Razorpay, Stripe, or PayPal).
                            </li>
                            <li>
                                These providers collect and process payment information securely under their respective Privacy Policies.
                            </li>
                            <li>
                                I do not have access to or store your <b> credit/debit card details </b> or any other <b> payment credentials </b>.
                            </li>
                        </ul>
                        <p>
                            You are encouraged to review the privacy terms of the payment service you choose to use.
                        </p>
                    </div>
                </div>

                {/* 4. Data Storage and Security */}
                <div className="flex flex-col gap-y-4">
                    <div className="flex gap-x-4 items-center">
                        <p className="xl:text-3xl text-lg font-semibold">4.</p>
                        <p className="xl:text-3xl text-lg font-semibold">Data Storage and Security</p>
                    </div>

                    <div className="flex text-[#64748b] flex-col gap-y-2">
                        <p>
                            I take reasonable technical and organizational measures to protect your data from unauthorized access, misuse, or loss.
                        </p>
                        <p>
                            These may include:
                        </p>
                        <ul className="list-disc list-outside pl-8">
                            <li>
                                Encrypted communications (HTTPS/SSL)
                            </li>
                            <li>
                                Secure email and form submissions
                            </li>
                            <li>
                                Limited internal access to client data
                            </li>
                        </ul>
                        <p>
                            However, no system can guarantee complete security. You use this website and share information at your own discretion.
                        </p>
                    </div>
                </div>

                {/* 5. Third-Party Services */}
                <div className="flex flex-col gap-y-4">
                    <div className="flex gap-x-4 items-center">
                        <p className="xl:text-3xl text-lg font-semibold">5.</p>
                        <p className="xl:text-3xl text-lg font-semibold">Cookies and Tracking</p>
                    </div>

                    <div className="flex text-[#64748b] flex-col gap-y-4">
                        <p>
                            This website may use cookies to improve your browsing experience, enhance functionality, and personalize content.
                        </p>
                        <p>
                            How cookies may be used:
                        </p>
                        <ul className="list-disc list-outside pl-8">
                            <li>
                                To securely remember your login details (if applicable).
                            </li>
                            <li>
                                To store your preferred website theme (such as dark or light mode).
                            </li>
                            <li>
                                To maintain smooth website performance and user experience.
                            </li>
                            <li>
                                To prevent spam and ensure website security.
                            </li>
                        </ul>
                        <p>
                            Additionally, third-party services (such as Google Analytics for traffic insights or Buy Me a Coffee for voluntary support) may use their own cookies to collect limited, anonymous data in accordance with their respective privacy policies.
                        </p>
                        <p>
                            These cookies help analyze overall usage patterns or enable smooth payment and integration features — they do not store sensitive personal information like passwords or payment details.
                        </p>
                        <p>
                            You can manage or delete cookies anytime through your browser settings.
                        </p>
                        <p>
                            This website may, at any time, integrate new tools or third-party services that use cookies or similar technologies.
                        </p>
                        <p>
                            Users are encouraged to periodically review this Privacy Policy and the respective third-party policies to stay informed about any updates or changes.
                        </p>
                        <p>
                            By continuing to use the website, you acknowledge that such tools may be added or modified in the future and that you accept responsibility for reviewing their privacy terms when interacting with them.
                        </p>
                    </div>
                </div>

                {/* 6. Third-Party Services and Integrations */}
                <div className="flex flex-col gap-y-4">
                    <div className="flex gap-x-4 items-center">
                        <p className="xl:text-3xl text-lg font-semibold">6.</p>
                        <p className="xl:text-3xl text-lg font-semibold">Third-Party Services and Integrations</p>
                    </div>

                    <div className="flex text-[#64748b] flex-col gap-y-4">
                        <p>This website may integrate external platforms or APIs, such as:</p>
                        <ul className="list-disc list-outside pl-8">
                            <li>
                                Google Analytics – for site traffic insights
                            </li>
                            <li>
                                Cloudflare – for security and performance optimization
                            </li>
                            <li>
                                Payment gateways – for handling client payments
                            </li>
                            <li>
                                Buy Me a Coffee – for voluntary contributions
                            </li>
                            <li>
                                GitHub or LinkedIn – for showcasing work and networking
                            </li>
                        </ul>
                        <p>
                            These services operate under their own privacy policies, and I am not responsible for how they handle your data. Please review their policies before interacting with them.
                        </p>
                    </div>
                </div>

                {/* 7. Blog and Educational Content */}
                <div className="flex flex-col gap-y-4">
                    <div className="flex gap-x-4 items-center">
                        <p className="xl:text-3xl text-lg font-semibold">7.</p>
                        <p className="xl:text-3xl text-lg font-semibold">Blog and Educational Content</p>
                    </div>

                    <div className="flex text-[#64748b] flex-col gap-y-4">
                        <p>If you interact with the blog section (comments, likes, or subscriptions — if enabled), any information you voluntarily share may become visible to other visitors.</p>
                        <p>
                            Please avoid posting sensitive personal information in public sections.
                        </p>
                    </div>
                </div>

                {/* 8. Your Rights */}
                <div className="flex flex-col gap-y-4">
                    <div className="flex gap-x-4 items-center">
                        <p className="xl:text-3xl text-lg font-semibold">8.</p>
                        <p className="xl:text-3xl text-lg font-semibold">Your Rights</p>
                    </div>

                    <div className="flex text-[#64748b] flex-col gap-y-4">
                        <p>
                            Depending on your location, you may have the right to:
                        </p>
                        <ul className="list-disc list-outside pl-8">
                            <li>
                                Access, correct, or delete your personal data.
                            </li>
                            <li>
                                Withdraw consent for certain types of data processing.
                            </li>
                            <li>
                                Request a copy of the data stored about you.
                            </li>
                        </ul>
                        <p>
                            You may exercise these rights by contacting me directly at
                            <Link
                                href={`mailto:${email}`}
                                className='font-bold ml-1'
                            >
                                {email}
                            </Link>
                        </p>
                        <p>
                            Requests will be processed within a reasonable timeframe.
                        </p>
                    </div>
                </div>
                {/* 9. Data Retention */}
                <div className="flex flex-col gap-y-4">
                    <div className="flex gap-x-4 items-center">
                        <p className="xl:text-3xl text-lg font-semibold">9.</p>
                        <p className="xl:text-3xl text-lg font-semibold">Data Retention</p>
                    </div>

                    <div className="flex text-[#64748b] flex-col gap-y-4">
                        <p>
                            I retain personal data only as long as necessary to fulfill the purposes outlined in this Policy, comply with legal obligations, or resolve disputes.
                        </p>
                        <p>
                            Client data related to completed projects may be securely archived for reference or tax documentation.
                        </p>
                    </div>
                </div>
                {/* 10. International Data Transfers */}
                <div className="flex flex-col gap-y-4">
                    <div className="flex gap-x-4 items-center">
                        <p className="xl:text-3xl text-lg font-semibold">10.</p>
                        <p className="xl:text-3xl text-lg font-semibold">International Data Transfers</p>
                    </div>

                    <div className="flex text-[#64748b] flex-col gap-y-4">
                        <p>
                            If you are accessing this website from outside India, please note that your data may be transferred to and processed in India, where data protection laws may differ from those in your country.
                        </p>
                        <p>
                            By using this website, you consent to such transfers.
                        </p>
                    </div>
                </div>

                {/* 11. Updates to This Policy */}
                <div className="flex flex-col gap-y-4">
                    <div className="flex gap-x-4 items-center">
                        <p className="xl:text-3xl text-lg font-semibold">11.</p>
                        <p className="xl:text-3xl text-lg font-semibold">Updates to This Policy</p>
                    </div>

                    <div className="flex text-[#64748b] flex-col gap-y-4">
                        <p>
                            This Privacy Policy may be updated periodically to reflect changes in services, technology, or legal requirements.
                        </p>
                        <p>
                            All updates will be posted on this page with a revised “Last Updated” date.
                        </p>
                        <p>
                            Continued use of the website after updates constitutes your acceptance of the revised policy.
                        </p>
                    </div>
                </div>

                {/* 12. Contact */}
                <div className="flex flex-col gap-y-4">
                    <div className="flex gap-x-4 items-center">
                        <p className="xl:text-3xl text-lg font-semibold">12.</p>
                        <p className="xl:text-3xl text-lg font-semibold">Contact</p>
                    </div>

                    <div className="flex text-[#64748b] flex-col gap-y-4">
                        <p>
                            If you have any questions, concerns, or data requests, please contact:
                        </p>
                        <p> 📧
                            <Link
                                href={`mailto:${email}`}
                                className='font-bold ml-1'
                            >
                                {email}
                            </Link>
                        </p>
                    </div>
                </div>

                {/* Footer */}
                <div className="flex flex-col gap-y-4">
                    <p>
                        <b>© 2025 – Present, Kashyap Parmar — MERN Developer. All rights reserved.</b>
                    </p>
                    <p className='text-[#64748b]' >
                        This Privacy Policy is intended to provide transparency and align with general data
                        protection best practices.
                    </p>
                </div>
            </div>
        </div >
    );
}

export default PrivacyPolicy;