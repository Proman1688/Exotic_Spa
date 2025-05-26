"use client";
import Image from 'next/image';

export default function Video() {
    return (
        <div className="absolute top-0 left-0 w-full h-screen z-[-1]">
            <video
                className="w-full h-full object-cover fixed max-md:hidden"
                src="/seaLandscape.mp4"
                width="0"
                height="0"
                autoPlay
                loop
                muted
                preload="auto"
                playsInline
            />
            <Image
                className="w-full h-full object-cover fixed md:hidden"
                src="/seaLandscapePhone.jpg"
                alt="Background Image"
                width={1920}
                height={1080}
            />
            <div className="w-full h-full fixed bg-[rgba(0,0,0,0.3)] z-10"></div>
        </div>
    );
}