import { RiErrorWarningLine } from "react-icons/ri";

type TitleAndDesComponentProps = {
    title: string;
    description: string;
}

export default function TitleAndDesComponent({ title, description }: TitleAndDesComponentProps) {
    return (
        <>
            <div className="flex flex-col gap-2.5 items-center justify-center">
                <h1 className={`uppercase text-[28px] lg:text-[48px] font-bold`}>
                    {title}
                </h1>
                <div className="flex gap-[5px] items-center">
                    <RiErrorWarningLine size={24} fill="#6b7280"/>
                    <p className={`text-[12px] lg:text-[18px] text-[#6b7280]`}>{description}</p>
                </div>
            </div>
        </>
    )
}