export interface CardProps {
    title: string,
    imageSrc: string,
    description: string,
}

export default function Card({ title, imageSrc, description }: CardProps) {
    return (
        <div className="relative w-fit min-h-fit py-16 h-14 gap-8 aspect-video bg-background__variant--light rounded-3xl flex flex-col place-items-center justify-center text-center cursor-pointer">
            <h1 className="text-h2 text-primary px-8">{title}</h1>
            <span className="text-h3 font-light px-8">{description}</span>
        </div>
    );
}
