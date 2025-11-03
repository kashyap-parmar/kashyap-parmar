import { email, LiveURL } from '@/mock/data';
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

                    <div className="text-[#64748b]">
                        <p>
                            Welcome to <b>Kashyap Parmar Portfolio</b> (the “Website”) — accessible at{" "}
                            <a
                                target="_blank"
                                className="text-primary hover:underline"
                                href={LiveURL}
                            >
                                {LiveURL}
                            </a>
                            . <br />
                            This Privacy Policy explains how <b>Kashyap Parmar</b> (“I”, “me”, or “my”)
                            collects, uses, and protects your personal information when you visit or interact
                            with this website.
                        </p>
                    </div>
                </div>

                {/* 1. Information I Collect */}
                <div className="flex flex-col gap-y-4">
                    <div className="flex gap-x-4 items-center">
                        <p className="xl:text-3xl text-lg font-semibold">1.</p>
                        <p className="xl:text-3xl text-lg font-semibold">Information I Collect</p>
                    </div>

                    <div className="flex text-[#64748b] flex-col gap-y-4">
                        <p>
                            I do not collect any personal information unless you voluntarily provide it. Examples of when I may collect your information include:
                        </p>
                        <ul className="list-disc list-inside">
                            <li>
                                <b>Contact Form Data:</b> Name, Email Address, and Message content when you use the
                                contact form.
                            </li>
                            <li>
                                <b>Subscriber Data:</b> Email address if you choose to subscribe for updates or
                                newsletters.
                            </li>
                            <li>
                                <b>Automatic Data (future):</b> In the future, I may use tools like Google
                                Analytics or Cloudflare verification to collect anonymous usage statistics (e.g.,
                                pages visited, browser type, time spent).
                            </li>
                        </ul>
                        <p>No sensitive personal data (like passwords or payment details) are collected.</p>
                    </div>
                </div>

                {/* 2. How I Use Your Information */}
                <div className="flex flex-col gap-y-4">
                    <div className="flex gap-x-4 items-center">
                        <p className="xl:text-3xl text-lg font-semibold">2.</p>
                        <p className="xl:text-3xl text-lg font-semibold">How I Use Your Information</p>
                    </div>

                    <div className="flex text-[#64748b] flex-col gap-y-4">
                        <p>The information collected may be used to:</p>
                        <ul className="list-disc list-inside">
                            <li>Respond to your messages or inquiries.</li>
                            <li>Send occasional updates or newsletters (only if you subscribe).</li>
                            <li>Improve the website’s functionality and performance.</li>
                            <li>Maintain website security and prevent spam or abuse.</li>
                        </ul>
                        <p>
                            I do not sell, rent, or share your personal information with third parties for marketing purposes.
                        </p>
                    </div>
                </div>

                {/* 3. Data Security */}
                <div className="flex flex-col gap-y-4">
                    <div className="flex gap-x-4 items-center">
                        <p className="xl:text-3xl text-lg font-semibold">3.</p>
                        <p className="xl:text-3xl text-lg font-semibold">Data Security</p>
                    </div>

                    <div className="flex text-[#64748b] flex-col gap-y-2">
                        <p>Your data security matters.</p>
                        <p>
                            I take reasonable steps to protect your personal information from unauthorized access, alteration, or disclosure.
                        </p>
                        <p>
                            However, please note that no method of data transmission over the internet is 100% secure.
                        </p>
                    </div>
                </div>

                {/* 4. Cookies and Tracking */}
                <div className="flex flex-col gap-y-4">
                    <div className="flex gap-x-4 items-center">
                        <p className="xl:text-3xl text-lg font-semibold">4.</p>
                        <p className="xl:text-3xl text-lg font-semibold">Cookies and Tracking</p>
                    </div>

                    <div className="flex text-[#64748b] flex-col gap-y-2">
                        <p>
                            Currently, this website <b>does not use cookies.</b>
                        </p>
                        <p>
                            In the future, third-party services (like Google Analytics or Buy Me a Coffee
                            integration) may set their own cookies for analytics or personalization.
                        </p>
                        <p>
                            If implemented, visitors will be informed via an updated version of this policy.
                        </p>
                    </div>
                </div>

                {/* 5. Third-Party Services */}
                <div className="flex flex-col gap-y-4">
                    <div className="flex gap-x-4 items-center">
                        <p className="xl:text-3xl text-lg font-semibold">5.</p>
                        <p className="xl:text-3xl text-lg font-semibold">Third-Party Services</p>
                    </div>

                    <div className="flex text-[#64748b] flex-col gap-y-4">
                        <p>This website may integrate third-party services such as:</p>
                        <ul className="list-disc list-inside">
                            <li>
                                <b>Google Analytics</b> (for traffic insights – future)
                            </li>
                            <li>
                                <b>Cloudflare</b> (for website verification and performance)
                            </li>
                            <li>
                                <b>Buy Me a Coffee</b> (for voluntary support contributions)
                            </li>
                        </ul>
                        <p>
                            These services may collect or process limited information under their own privacy
                            policies.
                        </p>
                        <p>
                            I encourage you to review their respective policies before interacting with them.
                        </p>
                    </div>
                </div>

                {/* 6. Your Rights */}
                <div className="flex flex-col gap-y-4">
                    <div className="flex gap-x-4 items-center">
                        <p className="xl:text-3xl text-lg font-semibold">6.</p>
                        <p className="xl:text-3xl text-lg font-semibold">Your Rights</p>
                    </div>

                    <div className="flex text-[#64748b] flex-col gap-y-4">
                        <p>You have the right to:</p>
                        <ul className="list-disc list-inside">
                            <li>
                                Request access or deletion of your personal data.
                            </li>
                            <li>
                                Unsubscribe from emails anytime by clicking the unsubscribe link (if applicable).
                            </li>
                            <li>
                                Contact me directly for data-related concerns.
                            </li>
                        </ul>
                    </div>
                </div>

                {/* 7. Contact */}
                <div className="flex flex-col gap-y-4">
                    <div className="flex gap-x-4 items-center">
                        <p className="xl:text-3xl text-lg font-semibold">7.</p>
                        <p className="xl:text-3xl text-lg font-semibold">Contact</p>
                    </div>

                    <div className="flex text-[#64748b] flex-col gap-y-4">
                        <p>If you have questions or concerns about this Privacy Policy, reach out at:</p>
                        <a
                            className="text-primary hover:underline"
                            href="mailto:contact@Kashyapdev.site"
                        >
                            {email}
                        </a>
                    </div>
                </div>

                {/* 8. Updates */}
                <div className="flex flex-col gap-y-4">
                    <div className="flex gap-x-4 items-center">
                        <p className="xl:text-3xl text-lg font-semibold">8.</p>
                        <p className="xl:text-3xl text-lg font-semibold">Updates to This Policy</p>
                    </div>

                    <div className="flex text-[#64748b] flex-col gap-y-4">
                        <p>
                            This Privacy Policy may be updated periodically to reflect changes in technology or
                            services.
                        </p>
                        <p>
                            All updates will be posted on this page with a revised “Last Updated” date.
                        </p>
                    </div>
                </div>

                {/* Footer */}
                <div className="flex flex-col gap-y-4">
                    <p>
                        <b>© 2025 - {new Date().getFullYear()} Kashyap Parmar - MERN developer all rights reserved.</b>
                    </p>
                    <p>
                        This Privacy Policy is intended to provide transparency and align with general data
                        protection best practices.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default PrivacyPolicy;