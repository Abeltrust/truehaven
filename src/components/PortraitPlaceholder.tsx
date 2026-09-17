type PortraitProps = {
  className?: string;
  src?: string;
  alt?: string;
};

export function PortraitPlaceholder({
  className = '',
  src = '/pprofile.png',
  alt = 'Kathy Stowell',
}: PortraitProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover object-top"
        loading="lazy"
      />
    </div>
  );
}
