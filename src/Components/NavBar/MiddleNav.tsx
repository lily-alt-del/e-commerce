'use client'
import Link from "next/link";
import Image from "next/image";

export default function MiddleNav() {
    return (
        <div className='w-full bg-[var(--prim)] border-b border-gray-300 relative'>
            <div className='flex items-center justify-between p-3 px-[8%] lg:px-[16%]'>
                {/* Logo */}
                <Link href='/' className='text-4xl lg:text-5xl text-white'>
                    Brechó Lily
                </Link>
            </div>
        </div>
    )
}