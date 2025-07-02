import { UseFormRegister } from "react-hook-form";
import type { Message } from "@/components/sections/Contact";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: keyof Message;
  register?: UseFormRegister<Message>;
  error?: string;
}
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: keyof Message;
  register?: UseFormRegister<Message>;
  error?: string;
}

export function TextArea({
  label,
  name,
  register,
  error,
  ...rest
}: TextareaProps) {
  return (
    <div className="relative z-0">
      <textarea
        id={name}
        {...(register ? register(name) : {})}
        className={`peer text-main block w-full resize-none appearance-none border-b-2 bg-transparent px-0 py-2.5 text-sm focus:ring-0 focus:outline-none ${
          error
            ? "border-red-500 focus:border-red-500"
            : "border-main-opacity focus:border-main"
        }`}
        placeholder=" "
        rows={5}
        {...rest}
      />
      <label
        htmlFor={name}
        className="text-main-opacity peer-focus:text-main-opacity absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
      >
        {label}
      </label>
      <span className="my-1 block min-h-0.25 text-xs text-red-500">
        {error || "\u00A0"}
      </span>
    </div>
  );
}
export function Input({ label, name, register, error, ...rest }: InputProps) {
  return (
    <div className="relative z-0">
      <input
        type="text"
        {...(register ? register(name) : {})}
        className={`peer text-main block w-full resize-none appearance-none border-b-2 bg-transparent px-0 py-2.5 text-sm focus:ring-0 focus:outline-none ${
          error
            ? "border-red-500 focus:border-red-500"
            : "border-main-opacity focus:border-main"
        }`}
        placeholder=" "
        {...rest}
      />
      <label
        htmlFor={name}
        className="text-main-opacity peer-focus:text-main-opacity absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
      >
        {label}
      </label>
      <span className="mt-1 block min-h-0.25 text-xs text-red-500">
        {error || "\u00A0"}
      </span>
    </div>
  );
}
