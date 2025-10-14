import { Poppins } from 'next/font/google';
import { ThemeProvider } from "next-themes";
import {
	Footer,
	Navbar,
	ScrollToTop
} from '@/components';
import "./globals.css";

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700', '800'],
	display: 'swap',
});

export const metadata = {
	title: "Kashyap Parmar | Full Stack Web Developer",
	description: "Kashyap Parmar — Full Stack Web Developer specializing in React, Next.js, and the MERN stack. Building fast, modern, and responsive web experiences.",
	icons: {
		icon: "/meta_icon.jpg",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${poppins.className} antialiased`}>
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
