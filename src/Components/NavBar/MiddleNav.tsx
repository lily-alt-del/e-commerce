'use client'
import Link from "next/link";
import Image from "next/image";
import { useState } from 'react'

export default function MiddleNav() {

    const [query, setQuery] = useState('');

    return (
        <div className='w-full bg-[var(--prim)] border-b border-purple-800 relative'>
            <div className='flex items-center justify-between py-3 px-[8%] lg:px-[16%]'>
                {/* Logo */}
                <Link href='/' className='text-4xl lg:text-5xl text-white Pangolin'>
                Brechó Lily
                </Link>

                {/* Search Box */}
                <div className='relative mx-0 ms-6 flex flex-1 flex-col rounded-lg bg-white lg:max-w-2xl'>
                    <div className='flex items-center'>
                        <input 
                         type="text"
                         placeholder="Busque por uma roupa"
                         value={query}
                         onChange={(e) => setQuery(e.target.value)}
                         className='flex-1 rounded-l-lg px-4 py-4 outline-none'/>
                         <button className='cursor-pointer px-3 text-2xl'>
                            <i className='bi bi-search'></i>
                         </button>
                    </div>
                </div>
                
                <div className='flex items-center gap-2'>
                    <Image 
                     src='/suporte.png'
                     alt='Suporte'
                     width={50}
                     height={50}
                    />
                    <div className='flex flex-col'>
                        <h2 className='Pangolin ps-2'>SUPORTE</h2>
                        <h1 className='Pangolin font-semibold'>(12) 98860-5226</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}