import { RiErrorWarningLine } from "react-icons/ri";

type TitleAndDesComponentProps = {
    title: string;
    description: string;
}

export default function TitleAndDesComponent({ title, description }: TitleAndDesComponentProps) {
    return (
        <>
            <h1 className={`uppercase text-[24px] lg:text-[48px] font-bold`}>
                {title}
            </h1>
            <div className="flex gap-[5px] items-center">
                <RiErrorWarningLine size={24} />
                <p className={`text-[18px]`}>{description}</p>
            </div>
        </>
    )
}