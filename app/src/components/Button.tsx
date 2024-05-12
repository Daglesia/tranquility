export interface ButtonProps {
  text: string,
}

export default function Button({text}: ButtonProps) {
  return (
    <button className="relative min-w-48 w-fit h-14 bg-secondary rounded-3xl flex place-items-center justify-center cursor-pointer hover:bg-secondary__variant--dark">
        <p className="text-h3 font-extrabold text-background px-8">{text}</p>
    </button>
  );
}
