import { Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-800 shadow-md mt-8">
            <div className="container mx-auto px-4 py-6">
                <div className="flex justify-center space-x-6">
                    <a href="https://github.com/Timeo2211" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                        <Github className="w-6 h-6" />
                    </a>
                    <a href="https://www.linkedin.com/in/timeo-duchet-11a8b1290/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                        <Linkedin className="w-6 h-6" />
                    </a>
                    <a href="mailto:timeoduchet@gmail.com" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                        <Mail className="w-6 h-6" />
                    </a>
                </div>
                <div className="text-center mt-4 text-gray-600 dark:text-gray-400">
                    © {new Date().getFullYear()} Timéo Duchet - Portfolio BUT Informatique
                </div>
            </div>
        </footer>
    )
}

export default Footer

