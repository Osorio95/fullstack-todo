import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { MainLayout } from "@/components/layout/MainLayout";
import { Provider } from "@/providers/QueryClient";

import '@/styles/main.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Todo list app",
	description: "Made by David Osorio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {

	return (
		<html lang="en">
			<body className={inter.className}>
				<Provider>
					<UserProvider>
						<MainLayout>
							{children}
						</MainLayout>
					</UserProvider>
				</Provider>
			</body>
		</html>
	);
}
