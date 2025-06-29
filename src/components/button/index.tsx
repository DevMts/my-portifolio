import { Geist } from "next/font/google";

const geist = Geist({ subsets: ["latin"] });

type ButtonTypes = "primary" | "secondary";

export function Button({
  type,
  children,
}: {
  type: ButtonTypes;
  children: string;
}) {
  const baseClass =
    geist.className +
    " px-5 py-2.5 text-base/[130%] transition-colors font-semibold tracking-[0.15%] rounded-[8px]";
  const variants = {
    primary: "bg-main text-details hover:bg-main-opacity",
    secondary: "bg-white/04 text-main hover:bg-white/21 border border-main",
  };

  return (
    <button className={`${baseClass} ${variants[type]}`}>{children}</button>
  );
}
