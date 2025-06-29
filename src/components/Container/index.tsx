export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`${className} mx-auto max-w-9/10 lg:max-w-7xl`}>
      {children}
    </section>
  );
}
