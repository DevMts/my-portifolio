import { SquareArrowOutUpRight } from "lucide-react";

interface BlurCardProps {
  image: string;
  title: string;
  github?: string;
  demo?: string;
  grid: number;
}

export function BlurCard({ image, title, grid, github, demo }: BlurCardProps) {
  return (
    <div
      className={`group relative col-span-${grid} flex items-end justify-start overflow-hidden rounded-lg`}
    >
      {/* imagem de fundo */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-left transition-opacity duration-300 group-hover:opacity-80"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* camada de escurecimento + blur progressivo */}
      <div
        className="absolute inset-0 z-10 bg-black/60 opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100"
        style={{
          WebkitMaskImage:
            "linear-gradient(to top, black 0%, transparent 100%)",
          maskImage: "linear-gradient(to top, black 0%, transparent 100%)",
        }}
      />

      {/* conteúdo visível acima do blur */}
      <div className="relative z-20 hidden p-6 text-left text-white group-hover:block">
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="flex gap-2">
          {[
            {
              href: github,
              text: "Github",
            },
            {
              href: demo,
              text: "Prévia",
            },
          ].map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="group hover:text-main-opacity text-main flex cursor-pointer items-center gap-1 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.text} <SquareArrowOutUpRight className="inline size-4" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
