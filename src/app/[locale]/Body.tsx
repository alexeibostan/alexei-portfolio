export default function Body({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body className="antialiased bg-background text-foreground font-sans" suppressHydrationWarning>
      {children}
    </body>
  );
}
