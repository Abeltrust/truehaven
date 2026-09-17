type OrnamentProps = {
  className?: string;
};

export function Ornament({ className = '' }: OrnamentProps) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <span className="ornament-line w-12" aria-hidden="true" />
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="text-gold-400">
        <path
          d="M10 2C12 6 14 8 18 10C14 12 12 14 10 18C8 14 6 12 2 10C6 8 8 6 10 2Z"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinejoin="round"
          opacity="0.7"
        />
      </svg>
      <span className="ornament-line w-12" aria-hidden="true" />
    </div>
  );
}
