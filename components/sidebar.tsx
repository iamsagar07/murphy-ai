"use client";
import Link from "next/link";
import Image from "next/image";
import {Montserrat} from "next/font/google";


import { cn } from "@/lib/utils";
import {LayoutDashboard, MessageSquare, ImageIcon, Code, Music, VideoIcon, Settings} from "lucide-react";
import { usePathname } from "next/navigation";

const montserrat = Montserrat({ weight:'600', subsets:['latin']})

const routes = [
    {
        label: 'Dashboard',
        icon:  LayoutDashboard,
        href: '/dashboard',
        color: 'text-sky-500',
    },

    {
        label: 'Conversation',
        icon:  MessageSquare,
        href: '/conversation',
        color: 'text-voilet-500',
    },

    {
        label: 'Image Genartion',
        icon:  ImageIcon,
        href: '/image',
        color: 'text-pink-00',
    },

    {
        label: 'Video Genration',
        icon:  VideoIcon,
        href: '/video',
        color: 'text-orange-700',
    },

    {
        label: 'Music Genration',
        icon:  Music,
        href: '/music',
        color: 'text-emerald-700',
    },

    {
        label: 'Code Genration',
        icon:  Code,
        href: '/code',
        color: 'text-green-700',
    },

    {
        label: 'Settings',
        icon:  Settings,
        href: '/settings',
    },
]



const Sidebar = () => {

    const pathname = usePathname();

  return (
    <div className='space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white'>
      <div className='px-3 py-2 flex-1'>
      <Link href='/dashboard' className="flex items-center pl-3 mb-14">
        <div className="relative w-8 h-8 mr-4">
            <Image
            fill
            alt="Logo"
            src='/logo.png'
            />
       </div>
       <h1 className={cn("text-2xl font-bold", montserrat.className)}>Murph</h1>
      </Link>
      <div className="space-y-l">
        {
            routes.map((routes) => (
                <Link
                href={routes.href}
                key={routes.href}
                className={cn("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                pathname === routes.href ? "text-white bg-white/10" : "text-zinc-400")}
                >
                  <div className="flex items-center flex-1">
                    <routes.icon  className={cn("h-5 mr-5", routes.color )} />
                    {routes.label}
                  </div>
                </Link>
            ))}
        
      </div>
      </div>
    </div>
  )
}

export default  Sidebar;