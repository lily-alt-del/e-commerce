'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type NavLink = {
    label: string;
    href: string;
    dropdown?: {label: string; href: string;}[];
}

const navLinks: NavLink[] = [
    {label: 'Home', href: '/'},
    {label: 'Loja', href: '/'},
    {label: 'Contatos', href: '/'},
    {
        label: 'Produtos', 
        href: '/', 
        dropdown: [
            {label: 'Roupas', href: '/'},
            {label: 'Acessórios', href: '/'},
        ],
    },
    {label: 'Saiba Menos', href: '/'},
];

export default function BottomNav() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>(
        {},
    );
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsFixed(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleDropdown = (label: string) => {
        setOpenDropdowns((prev) => ({
            ...prev,
            [label]: !prev[label],
        }));
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
        setOpenDropdowns({});
    };

    return (
        <div className={`w-full bg-[var(--prim-light)] py-5 shadow-sm transition-all duration-500 ${isFixed ? 'fixed-nav fixed left-0 top-0 z-50': ''}`}>

            {/* Logo Mobile */}
            <Link href='/' className='text-3xl text-white font-punk lg:hidden'>
                Brechó Lily
            </Link>

            {/* Logo Desktop quando fixar */}
            <Link href='/' className={`font-punk text-4xl font-bold text-white ${isFixed ? 'hidden lg:block' : 'hidden'}`}>
                Brechó Lily
            </Link>

            {/* Menu centralizado */}
            <div className='hidden justify-center lg:flex'>
                <nav className='flex items-center gap-8'>
                    {navLinks.map((link) =>
                        link.dropdown ? (
                            <div key={link.label} className='group relative'>
                                <Link href={link.href} className='font-pandolin flex items center gap-1 font-bold text-black transition-colors hover:text-[var(--second)]'>
                                    
                                </Link>
                            </div>
                        ))}
                </nav>
            </div>
        </div>
    )
}