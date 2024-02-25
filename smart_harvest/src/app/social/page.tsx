"use client";
import React, { use, useEffect } from "react";
import Image from "next/image";
import Channel1 from "@/assets/channel1.jpg";
import Channel2 from "@/assets/channel2.jpg";
import Channel3 from "@/assets/channel3.jpg";
import { MoveRight } from "lucide-react";
import Skeleton from "react-loading-skeleton";
import Link from "next/link";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/action/firebase/db";
import { useRouter } from "next/navigation";
import axios from "axios";

export interface NewsProps {
    title: string;
    description: string;
    link: string;
    image: string;
}

function Page() {
    const [news_arg, setNews_arg] = React.useState<NewsProps[] | null>(null);
    const [user, setUser] = React.useState<any>(null);
    const router = useRouter();
    useEffect(() => {
        axios.get('http://35.247.138.127/api-ai/tintucnongnghiep')
            .then(response => {
                setNews_arg(response.data.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });


        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                setUser(user.uid);
                console.log(uid)
            } else {
                router.push("/");
            }
        } ,);
    }, []);
    const channels = [Channel1, Channel2, Channel3];
    const channelNames = [
        "Giá gạo hôm nay",
        "Tin Tức nông nghiệp",
        "Tin tức thời tiết",
    ];
    return (
        <main className="flex flex-col gap-4 w-full font-custome overflow-y-scroll">
            <h2 className="font-bold"> Eplore Channels </h2>
            <div className="grid grid-cols-5 gap-4">
                {new Array(channelNames.length).fill(0).map((_, i) => (
                    <div
                        className="col-span-1 border shadow-md bg-[#FFFFFF] rounded-md flex flex-col items-center gap-4 py-5"
                        key={i}
                    >
                        <Image
                            src={channels[i]}
                            alt="Channel 1"
                            className="w-20 h-20 rounded-full"
                        />
                        <div className="text-center">
                            <span className="font-semibold"> {channelNames[i]}</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-between w-full">
                <h2 className="font-bold"> Today`s Headline </h2>
                <div className="float-right flex justify-end text-blue-400 items-center gap-4 hover:cursor-pointer hover:text-blue-200">
                    <span className="font-light"> See all </span>
                    <MoveRight size={20} />
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4 h-[300px] ">
                {news_arg?.map((news, i) => {
                    if (
                        news.image == "" ||
                        news.description == "" ||
                        news.link == "" ||
                        news.title == ""
                    )
                        return null;
                    return (
                        <Link href={news.link} key={i}>
                            <div className="col-span-1 border shadow-md bg-[#FFFFFF] rounded-md flex gap-4 py-5 h-[150px] p-2 pb-4 overflow-hidden hover:shadow-lg transition-all">
                                <Image
                                    src={news.image}
                                    alt="Channel 1"
                                    className="w-20 h-20 rounded-full"
                                    width={50}
                                    height={50}
                                />
                                <div className="">
                                    <h2 className="font-semibold"> {news.title}</h2>
                                    <p className="overflow-hidden text-slate-600 text-sm">
                                        {" "}
                                        {news.description}{" "}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    );
                }) || <Skeleton />}
            </div>
        </main>
    );
}

export default Page;
