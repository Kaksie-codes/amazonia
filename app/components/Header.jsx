'use client'
import React from 'react'
import Image from 'next/image'
import { useSession, signIn, signOut } from "next-auth/react";
import Link from 'next/link';
import { useBearStore } from '@/store';

const Header = () => {
    const { data: session } = useSession();
    const { cartItems, totalCount, totalPrice } = useBearStore((state) => state);


  return (
    <header className='fixed top-0 left-0 w-full z-30'>
        <div className='flex items-center bg-amazon_blue p-1 flex-grow py-1'>
            <div className='mt-2 flex items-center flex-grow sm:flex-grow-0 mx-2'>
                <Link href='/'>
                    <Image                        
                        src='https://links.papareact.com/f90'
                        width={100}
                        height={20}
                        alt='Amazon Logo'                
                        className='cursor-pointer'
                    />
                </Link>                
            </div>
            <div className='hidden sm:flex  h-10 items-center rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500'>
                <input  className='p-2 w-6 h-full flex-grow flex-shrink rounded-l-md focus:outline-none px-4' type="text" />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-12 w-10 p-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>               
            </div>
            <div className='text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap'>
                <div onClick={!session ? signIn : signOut} className='link'>
                    <p>{session ? `Hello, ${session.user.name}` : 'Sign-In'}</p>
                    <p className='font-extrabold md:text-sm'>Account & Lists</p>
                </div>
                <div className='link'>
                    <p>Returns</p>
                    <p className='font-extrabold md:text-sm'>& Orders</p>
                </div>
                <div className='link relative flex items-center'>
                    <Link href='/checkout' className='link relative flex items-center'>
                        <span className='absolute top-0 right-0 md:right-11 bg-yellow-400 h-4 flex items-center justify-center px-1 w-max-content text-center rounded-full text-black font-bold'>{totalCount}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-7 h-7">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                        <p className='font-extrabold md:text-sm hidden md:inline ml-1 mt-3'>Basket</p>
                    </Link>                    
                </div>
            </div>
        </div>
        <div className='flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm'>
            <p className='link flex items-center text-xs md:text-sm'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                All
            </p>
            <p className='link whitespace-nowrap text-xs md:text-sm'>Prime Video</p>
            <p className='link whitespace-nowrap text-xs md:text-sm'>Amazon Business</p>
            <p className='link whitespace-nowrap text-xs md:text-sm'>Today&apos;s Deals</p>
            <p className='link hidden lg:inline-flex'>Electronics</p>
            <p className='link hidden lg:inline-flex'>Food & Grocery</p>
            <p className='link hidden lg:inline-flex'>Prime</p>
            <p className='link hidden lg:inline-flex'>Buy Again</p>
            <p className='link hidden lg:inline-flex'>Shopper Toolkit</p>
            <p className='link hidden lg:inline-flex'>Health & Personal Care</p>
        </div>
    </header>
  )
}

export default Header