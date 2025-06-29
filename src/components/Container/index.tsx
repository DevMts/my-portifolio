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
      className={`${className} mx-auto max-w-9/10 ${size && "lg:max-w-5xl"}`}
    >
      {children}
    </section>
  );
}
