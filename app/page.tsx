import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
            <h1 className="text-4xl font-bold mb-4 text-center">Bienvenue sur mon Portfolio</h1>
            <p className="text-xl mb-8 text-center max-w-2xl">
                Étudiant en BUT Informatique passionné par le développement web et la création d&#39;applications innovantes.
            </p>
            <div className="flex space-x-4">
                <Link href="/about" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-2 px-4 rounded transition duration-300 ease-in-out flex items-center">
                    En savoir plus <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link href="/projects" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
                    Voir mes projets
                </Link>
            </div>
        </div>
    )
}

