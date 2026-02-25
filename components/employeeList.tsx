"use client"
import Image from "next/image";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react";
import { Grid, LayoutGrid, List, Network, Plus, Trees } from "lucide-react";

export default function EmployeeList() {
    const [viewMode, setViewMode] = useState<"grid" | "list"| "tree">("grid");
  return (
    <Card className="rounded-2xl shadow-sm border border-gray-200 bg-white mt-4">
        <div className="p-4 w-full h-full">
            <div className="flex  flex-row justify-between items-center">
                <div className="relative w-84">
                     <Image
                        src="/search_icon.svg"
                        alt="Search"
                        width={18}
                        height={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 opacity-60"
                    />
                    <Input 
                        placeholder="Search" 
                        className="h-12 w-full rounded-full border border-gray-300 pl-11 pr-4 text-sm focus:ring-2 focus:ring-[#947550] focus:border-[#947550]" 
                    />
                </div>
                <div className="flex flex-row gap-x-2 justify-around items-center">
                    <Button className="h-12 w-12 px-3" variant={"outline"}>
                        <Image
                            src="/download_icon.svg"
                            alt="download"
                            width={40}
                            height={40}
                        />
                    </Button>
                    <Button className="h-12 w-12 px-3" variant={"outline"}>
                        <Image
                            src="/filter_icon.svg"
                            alt="filter"
                            width={20}
                            height={20}
                        />
                    </Button>
                    <Button className="h-12 w-12 px-3 bg-[#3D3936] hover:bg-[#3D3936] text-white" variant={"outline"}>
                        <Image
                            src="/plus_icon.svg"
                            alt="plus"
                            width={20}
                            height={20}
                        />
                    </Button>
                    <div>
                        <div className={`flex items-center justify-between`}>
                            <div className="flex flex-row gap-x-3">
                                <div className="hidden sm:flex items-center border shadow rounded-md p-1 h-12">
                                    <button
                                        onClick={() => setViewMode("grid")}
                                        className={`p-3 rounded-md transition-all duration-600 ${
                                            viewMode === "grid"
                                                ? "bg-[#3D3936] text-white"
                                                : "text-[#3D3936] "
                                        }`}
                                    >
                                        <LayoutGrid className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={() => setViewMode("list")}
                                        className={`p-3 rounded-md transition-all duration-600 ${
                                            viewMode === "list"
                                                ? "bg-[#3D3936] text-white"
                                                : "text-[#3D3936]"
                                        }`}
                                    >
                                        <List className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={() => setViewMode("tree")}
                                        className={`p-3 rounded-md transition-all duration-600 ${
                                            viewMode === "tree"
                                                ? "bg-[#3D3936] text-white"
                                                : "text-[#3D3936] "
                                        }`}
                                    >
                                        <Network className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
        </div>
    </Card>
  )
}
