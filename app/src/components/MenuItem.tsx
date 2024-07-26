import Image from "next/image";

interface MenuItemProps {
  title: string;
  label?: string;
  imageSrc: string;
  className?: string;
}

function ItemLabel({ label }: { label: string | undefined }) {
  return label ? <p className="text-p font-light pb-0.5">{label}</p> : null;
}

export default function MenuItem({
  title,
  label,
  imageSrc,
  className,
}: MenuItemProps) {
  return (
    <div className={`flex flex-row gap-4 ${className}`}>
      <div className="overflow-hidden">
        <Image
          src={imageSrc}
          alt="Daglesium Logo"
          priority
          className="max-w-12 w-12 img-primary"
        />
      </div>
      <div className="flex flex-col justify-center">
        <ItemLabel label={label} />
        <p className="text-h3 font-bold">{title}</p>
      </div>
    </div>
  );
}
