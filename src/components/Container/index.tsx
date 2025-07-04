export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: boolean;
  id?: string;
}

export function Container({ children, className, size, id }: ContainerProps) {
  return (
    <section
      id={id}
      className={`${className} mx-auto max-w-9/10 ${size && "lg:max-w-5xl"} mt-15 ${size ? "lg:mt-25" : "lg:mt-10"} `}
    >
      {children}
    </section>
  );
}
