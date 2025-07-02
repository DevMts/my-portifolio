"use client";
import { Container } from "@/components/Container";
import { Geist, Lato } from "next/font/google";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input, TextArea } from "@/components/input";
import Image from "next/image";
import ping from "@/assets/ping.svg";
import { useEffect, useState } from "react";
import { useLiveTime } from "@/hooks/useLiveTime";

const geist = Geist({ subsets: ["latin"] });
const lato = Lato({ weight: "400", subsets: ["latin"] });

// 1. Schema
const MessageSchema = z.object({
  name: z.string().min(1, "Nome obrigatório"),
  message: z.string().min(1, "Mensagem obrigatória"),
});

// 2. Tipo inferido
export type Message = z.infer<typeof MessageSchema>;

// 3. Componente
export function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const now = useLiveTime();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const timeString = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Message>({
    resolver: zodResolver(MessageSchema),
  });

  function redirectToWhatsApp(name: string, message: string) {
    const phoneNumber = "5532984698580";

    const text = `Olá, meu nome é ${name} e ${message}`;

    const encodedText = encodeURIComponent(text);

    const url = `https://wa.me/${phoneNumber}?text=${encodedText}`;

    window.location.href = url;
  }

  function handleName(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function handleMessage(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setMessage(event.target.value);
  }

  async function onSubmit(data: Message) {
    redirectToWhatsApp(data.name, data.message);
  }
  if (!hasMounted) return null;

  return (
    <Container size id="contact">
      <h1
        className={`${geist.className} text-center text-2xl font-semibold text-white lg:text-5xl`}
      >
        Vamos criar algo incrível junto
      </h1>

      <article className="bg-details mt-16 flex w-full justify-between rounded-lg px-7 lg:px-13">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="my-11 flex w-full flex-col gap-5 lg:w-1/3"
        >
          <div className="flex flex-col gap-5">
            <Input
              label="Nome"
              name="name"
              register={register}
              error={errors.name?.message}
              onChange={handleName}
              value={name}
            />
            <TextArea
              label="Messagem"
              name="message"
              register={register}
              error={errors.message?.message}
              onChange={handleMessage}
              value={message}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className={`${geist.className} transition-color bg-main text-details hover:bg-main-opacity transition-color rounded-[8px] px-5 py-2.5 text-base/[130%] font-semibold tracking-[0.15%] duration-200`}
            >
              Enviar no WhatsApp
            </button>
          </div>
        </form>
        <div className="relative hidden h-90.5 w-92.5 bg-[url('/images/iphone.svg')] bg-cover bg-no-repeat lg:block">
          <div
            className="absolute top-10 right-10 max-h-[300px] min-w-40 origin-bottom overflow-hidden rounded-2xl bg-white px-2 py-5"
            style={{ transformOrigin: "bottom" }}
          >
            {" "}
            <Image
              src={ping}
              unoptimized
              alt="whatsapp"
              className="w-fi absolute top-25 -right-2"
            />
            <span className="text-details absolute top-2 left-2 text-[0.5rem] font-semibold tracking-[0.15%]">
              {name}
            </span>
            <span className="text-details inline-block max-w-38 text-xs font-semibold tracking-[0.15%] break-words whitespace-normal">
              {name !== "" ? `Olá, meu nome é ${name} e ${message}` : ""}
            </span>
            <span>
              <span className="text-details absolute right-2 bottom-2 text-[0.5rem] font-semibold tracking-[0.15%]">
                {timeString}
              </span>
            </span>
          </div>
        </div>
      </article>
    </Container>
  );
}
