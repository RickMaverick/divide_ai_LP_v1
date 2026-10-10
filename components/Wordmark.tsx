/** Logo em tipo: "Divide" na cor do texto + "Ai" em primary. Não há arquivo de logo. */
export function Wordmark({ className = "", accent = "text-primary-text" }: { className?: string; accent?: string }) {
  return (
    <span className={`font-bold tracking-[-0.01em] text-text ${className}`}>
      Divide<span className={accent}>Ai</span>
    </span>
  );
}
