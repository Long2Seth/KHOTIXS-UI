import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"



export default function SearchComponent(){
    return(
        <section>
            <section className="w-full container mx-auto h-auto flex justify-start items-start ">
                <div>
                    <h1 className={`  text-title-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text`}> Filter Event Category</h1>
                    <RadioGroup defaultValue="option-one">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="technology" id="technology"/>
                            <Label htmlFor="technology">Technology</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem className={` rounded-[5px] `} value="concert" id="concert"/>
                            <Label htmlFor="concert">Concert</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="sport" id="sport"/>
                            <Label htmlFor="sport">Sport</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="community" id="community"/>
                            <Label htmlFor="community">Community</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="conferences" id="conferences"/>
                            <Label htmlFor="conferences">Conferences</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="general" id="general"/>
                            <Label htmlFor="general">General</Label>
                        </div>
                    </RadioGroup>

                </div>
            </section>
        </section>
    )
}