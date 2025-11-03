import { Poppins } from 'next/font/google';
import { ThemeProvider } from "next-themes";
import {
	Footer,
	Navbar,
	ScrollToTop
} from '@/components';
import "./globals.css";

// ------------------------------------------------------------------

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700', '800'],
	display: 'swap',
});

const LIVE_URL = process.env.NEXT_PUBLIC_LIVE_URL || "http://localhost:3000";

// ------------------------------------------------------------------

export const metadata = {
	title: "Kashyap Parmar | MERN Stack Developer & Freelancer",
	description: "Kashyap Parmar — Freelance MERN Stack & Full Stack Web Developer specializing in React and Next.js. I build fast, modern, and SEO-optimized web applications for businesses and startups.",
	icons: {
		icon: "/images/favicon.ico",
		shortcut: "/images/favicon.ico",
		apple: "/images/apple-touch-icon.png",
	},
	other: [
		{
			rel: "icon",
			url: "/images/android-chrome-192x192.png",
			sizes: "192x192",
		},
	],
	openGraph: {
		title: "Kashyap Parmar | MERN Stack Developer & Freelancer",
		description:
			"Experienced MERN Stack Developer skilled in React, Next.js, and Node.js. Explore my portfolio to see modern, responsive, and SEO-optimized projects.",
		url: LIVE_URL,
		siteName: "Kashyap Parmar Portfolio",
		images: [
			{
				url: "/images/og-image.png",
				width: 1200,
				height: 630,
				alt: "Kashyap Parmar Portfolio Preview",
			},
		],
		locale: "en_IN",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Kashyap Parmar | MERN Stack Developer & Freelancer",
		description:
			"Full Stack Developer specializing in React, Next.js, and Node.js — building modern, SEO-optimized web apps.",
		creator: "@yourtwitterhandle", // optional
		images: [`${LIVE_URL}/images/og-image.png`],
	},
	keywords: [
		"MERN Stack Developer",
		"Next js Developer",
		"React js Developer",
		"Node js Developer",
		"Freelance Web Developer",
		"Full Stack Developer",
		"Web Development Portfolio",
		"SEO Optimized Websites",
	],
	metadataBase: new URL(LIVE_URL),
	alternates: {
		canonical: LIVE_URL,
	},
};

// ------------------------------------------------------------------

export default function RootLayout({ children }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${poppins.className} antialiased w-full`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="light"
					enableSystem={false}
					disableTransitionOnChange
				>
					<ScrollToTop />
					<Navbar />
					{children}
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
