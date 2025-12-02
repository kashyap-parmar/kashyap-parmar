import {
	Model3d
} from "@/components";

// ---------------------------------------------------------------------------------------------------------------

const LIVE_URL = process.env.NEXT_PUBLIC_LIVE_URL || "https://kashyapparmar.com";

// ---------------------------------------------------------------------------------------------------------------

export const metadata = {
	title: "Kashyap Parmar | Launch MVPs 10x Faster | AI-Powered Web Development",
	description:
		"Build your MVP in days — not months. Experience AI-assisted development with live prototypes, automation, and full-stack delivery at 60-70% lower cost.",

	openGraph: {
		title: "Launch MVPs 10x Faster | AI-Powered Development Service",
		description:
			"Get your MVP built in days using AI workflows, automation, prototyping, CI/CD and scalable MERN stack engineering.",
		url: `${LIVE_URL}/3d-model`,  // 👈 MUST be the page URL
		siteName: "Kashyap Parmar Portfolio",
		images: [
			{
				url: `${LIVE_URL}/images/og-3d-model.png`, // 👈 Better: unique OG image
				width: 1200,
				height: 630,
				alt: "3D Model Based MVP Development Preview",
			},
		],
		locale: "en_IN",
		type: "article", // 👈 Recommended for service pages
	},

	twitter: {
		card: "summary_large_image",
		title: "Launch MVPs 10x Faster | AI-Powered Development Service",
		description:
			"AI-assisted development with prototypes, automation, testing, and deployment — build your MVP in days, not months.",
		images: [`${LIVE_URL}/images/og-3d-model.png`],
	},

	keywords: [
		"AI-powered web development",
		"AI-accelerated MVP",
		"fast MVP development",
		"automated web development",
		"MERN stack developer",
		"Next.js MVP development",
		"rapid prototyping service",
		"AI software development service",
	],

	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-snippet": -1,
			"max-image-preview": "large",
			"max-video-preview": -1,
		},
	},

	metadataBase: new URL(LIVE_URL),
	alternates: {
		canonical: `${LIVE_URL}/3d-model`, // 👈 IMPORTANT FIX
	},
};



export default function AIServicePage() {
	return (
		<Model3d />
	);
}
