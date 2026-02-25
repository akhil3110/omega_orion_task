import React from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import Image from "next/image";

export default function Navbar() {
  return (
    <Card className="w-full h-18 rounded-2xl shadow-sm border border-gray-200 bg-white">
      <div className="flex items-center justify-between h-full px-6">

        <h1 className="text-2xl font-semibold text-[#3D3936] tracking-tight">
          People
        </h1>

       
        <div className="flex items-center gap-3">          
            <Badge
                variant="outline"
                className="h-12 px-5 rounded-full text-sm font-medium flex items-center border-gray-300"
            >
                MST
            </Badge>

            <Badge variant={"outline"} className="flex justify-end items-center h-12 rounded-full mx-0">
                <Image
                    src="/clock.svg"
                    alt="Clock"
                    width={24}
                    height={24}
                />
                <span className="text-lg font-semibold text-[#3D3936] tracking-wide">
                    02:03:02
                </span>
                <Image
                    src="/navbar_edit_logo.svg"
                    alt="Edit"
                    width={40}
                    height={40}
                />
            </Badge>

          
            <Badge
                variant="outline"
                className="h-12 px-5 rounded-full text-sm font-medium flex items-center border-gray-300"
            >
                MST
            </Badge>

          
            <Badge
                variant="outline"
                className="h-12 w-12 rounded-full flex items-center justify-center border-gray-300"
            >
                <Image
                src="/inbox-icon.svg"
                alt="Inbox"
                width={20}
                height={20}
                />
            </Badge>

                <div className="relative h-12 w-12 rounded-full overflow-hidden border border-gray-300">
                    <Image
                        src="/navbar_profile_pic.jpg"
                        alt="Profile"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </div>
    </Card>
  );
}