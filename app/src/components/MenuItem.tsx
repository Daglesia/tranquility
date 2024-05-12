import Image from "next/image";

export interface MenuItemProps {
  title: string,
  label: string,
  imageSrc: string,
}

export default function MenuItem({title, label, imageSrc}: MenuItemProps) {
  return (
    <div className="flex flex-row gap-4">
        <Image
              src={imageSrc}
              alt="Daglesium Logo"
              priority
              className="max-w-12"
            />
            <div className="flex flex-col justify-center">
                <p className="text-p">{label}</p>
                <p className="text-h3 font-extrabold">{title}</p>
            </div>
    </div>
  );
}
