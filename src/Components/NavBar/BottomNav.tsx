'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type NavLink = {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
};

const navLinks: NavLink[] = [
  { label: 'Menu Inicial', href: '/' },
  { label: 'Loja', href: '/' },
  { label: 'Contatos', href: '/' },
  {
    label: 'Produtos',
    href: '/',
    dropdown: [
      { label: 'Roupas', href: '/' },
      { label: 'Acessórios', href: '/' },
    ],
  },
  { label: 'Saiba Menos', href: '/' },
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
    <div
      className={`w-full bg-[var(--prim-light)] py-5 shadow-sm transition-all duration-500 flex ${isFixed ? 'fixed-nav fixed left-0 top-0 z-50' : ''}`}
    >
      {/* Logo Mobile */}
      <Link href='/' className='font-punk text-3xl text-white lg:hidden'>
        Brechó Lily
      </Link>

      {/* Logo Desktop quando fixar */}
      <Link
        href='/'
        className={`font-punk text-4xl font-bold text-white ${isFixed ? 'hidden lg:block' : 'hidden'}`}
      >
        Brechó Lily
      </Link>

      {/* Menu desktop centralizado */}
      <div className='hidden justify-center lg:flex'>
        <nav className='flex items-center gap-8'>
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.label} className='group relative'>

                <Link
                  href={link.href}
                  className='font-pandolin flex items-center gap-1 font-bold text-black transition-colors hover:text-[var(--second)]'
                >
                  {link.label}
                  <Image src='/Menu-dot.svg' alt='icone' width={10} height={10} />
                </Link>

                {/* Dropdown */}
                <div className='absolute left-0 top-full hidden min-w-[180px] rounded-lg border border-gray-100 bg-white p-2 shadow-xl group-hover:block'>
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className='font-pandolin block rounded-md px-4 py-3 text-black transition-colors hover:text-[var(--second)]'
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className='font-pandolin flex items-center gap-1 font-bold text-black transition-colors hover:text-[var(--second)]'
              >
                {link.label}
                <Image src='/Menu-dot.svg' alt='icone' width={10} height={10} />
              </Link>
            ),
          )}
        </nav>
      </div>

      {/* Direita desktop */}
      <div className='ml-auto hidden items-center gap-6 lg:flex'>

        <Link
          href='/'
          className='font-pandolin border-b border-gray-400 font-semibold text-black'
        >
          Login / Register
        </Link>

        <Link
          href='/carrinho'
          className='relative text-3xl text-black transition-colors hover:text-[var(--second)]'
          aria-label='Carrinho'
        >
          <i className='bi bi-cart3'></i>
          <span className='absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full text-xs text-white'>
            2
          </span>
        </Link>

      </div>

      
    </div>
  );
}
