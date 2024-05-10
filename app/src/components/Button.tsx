import { ButtonProps } from "@/types/components";

export default function Button({text}: ButtonProps) {
  return (
    <div className="relative min-w-48 w-fit h-14 bg-tranquility__contrast rounded-3xl flex place-items-center justify-center">
        <p className="text-h3 font-extrabold text-tranquility__background px-8">{text}</p>
    </div>
  );
}
