import Image from "next/image";
import { MenuItemProps } from "@/types/components";

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
                <p>{label}</p>
                <p>{title}</p>
            </div>
    </div>
  );
}
