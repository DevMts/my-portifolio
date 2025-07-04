import type { Metadata } from "next";
import "./globals.css";
import { CustomCursor } from "@/components/Cursor";

export const metadata: Metadata = {
  title: "Mateus Carvalho | Desenvolvedor Front-End",
  description:
    "Portfólio de Mateus Carvalho, desenvolvedor front-end especializado em JavaScript, React, TypeScript e interfaces modernas e performáticas.",
  keywords: [
    "Mateus Carvalho",
    "Desenvolvedor Front-End",
    "Portfólio",
    "React",
    "TypeScript",
    "JavaScript",
    "Frontend",
    "UI Design",
    "HTML",
    "CSS",
    "DevMts",
  ],
  authors: [{ name: "Mateus Carvalho" }],
  creator: "Mateus Carvalho",
  robots: "index, follow",
  openGraph: {
    title: "Mateus Carvalho | Desenvolvedor Front-End",
    description:
      "Veja os projetos, habilidades e experiência de Mateus Carvalho como desenvolvedor web moderno, focado em performance e design responsivo.",
    url: "https://devmtsportifolio.vercel.app",
    siteName: "Mateus Carvalho",
    images: [
      {
        url: "https://i.imgur.com/kbrKceW.png",
        width: 1200,
        height: 630,
        alt: "Mateus Carvalho - Desenvolvedor Front-End",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mateus Carvalho | Desenvolvedor Front-End",
    description:
      "Portfólio pessoal com foco em tecnologia front-end moderna, UI/UX e desenvolvimento com React e TypeScript.",
    images: ["https://i.imgur.com/kbrKceW.png"],
  },
  metadataBase: new URL("https://devmtsportifolio.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <style>{`
          #global-loader {
            position: fixed;
            inset: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #111;
            z-index: 9999;
            transition: opacity 0.3s ease;
          }
          .loader {
            width: 2.5rem;
            height: 2.5rem;
            border: 4px solid #f0f8ff;
            border-top-color: transparent;
            border-radius: 50%;
            animation: spin 0.7s linear infinite;
          }
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </head>
      <body className={`overflow-x-hidden bg-black antialiased`}>
        {/* Loader que aparece antes da hidratação */}
        <div id="global-loader">
          <div className="loader"></div>
        </div>

        <CustomCursor />
        {children}

        {/* Script para remover o loader após a carga */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('load', () => {
                const loader = document.getElementById('global-loader');
                if (loader) {
                  loader.style.opacity = '0';
                  setTimeout(() => loader.remove(), 300);
                }
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
