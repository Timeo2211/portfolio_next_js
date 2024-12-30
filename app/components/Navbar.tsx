'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, User, Briefcase, Code } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'

const Navbar = () => {

    const navItems = [
        { href: '/', label: 'Accueil', icon: Home },
        { href: '/about', label: 'À propos', icon: User },
        { href: '/projects', label: 'Projets', icon: Briefcase },
        { href: '/skills', label: 'Compétences', icon: Code },
    ]
    const pathname = usePathname()


    return (
        <nav className="bg-white dark:bg-gray-800 shadow-md">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        Timeo Duchet
                    </Link>
                    <div className="flex items-center space-x-4">
                        <ThemeToggle />
                        <ul className="flex space-x-4">
                            {navItems.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className={`flex items-center space-x-1 p-2 rounded transition duration-300 ease-in-out
                      ${pathname === item.href
                                            ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400'
                                            : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                                        }`}
                                    >
                                        <item.icon className="w-5 h-5" />
                                        <span>{item.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

