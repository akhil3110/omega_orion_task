import { data } from "@/lib/data";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Sidebar() {
  return (
    <div  className="bg-[#3D3936] text-[#FFFFFF] h-full rounded-md flex flex-col justify-between">
       <div>
            <div className="w-full">
                <div className="flex flex-row justify-between w-58 mx-6 ">
                    <div>
                        <Image src="/logo.svg" alt="Logo" width={100} height={100} className="mx-auto mt-4" />
                    </div>
                    <div>
                        <Image src="/sidebar_navigator.svg" alt="Profile" width={40} height={40} className="mx-auto mt-4 cursor-pointer" />
                    </div>
                </div>
            </div>
        
            <div className="mt-6">
                {data.map((item, index) => (
                    <div key={index} className={cn("flex items-center p-2 mx-4 my-2 rounded-md hover:bg-[#5C5854] cursor-pointer", item.isActive && "bg-[#FFFFFF] text-[#947550] hover:bg-[#FFFFFF] ")}>
                        <Image src={`/${item.logo}`} alt={item.menuLabel} width={20} height={20} className="mr-3" />
                        <span>{item.menuLabel}</span>
                    </div>
                ))}
            </div>
        </div>
        <div className="mx-4 mb-6">
            <div className="flex items-center gap-3 border border-[#5C5854] rounded-xl px-4 py-3 hover:bg-[#5C5854] cursor-pointer transition">
                <Image
                    src="/sidebar_settings_logo.svg"
                    alt="Settings"
                    width={20}
                    height={20}
                />
                <span className="text-sm font-medium">Settings</span>
            </div>
      </div>
    </div>
  )
}
