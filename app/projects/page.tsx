import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ExternalLink } from 'lucide-react';

const projects = [
    {
        title: "Projet JO Paris 2024",
        description: "Le but de ce projet était de créer un site web pour les JO de Paris 2024.",
        technologies: ["HTML", "CSS", "PHP"],
        link: "https://github.com/Timeo2211/JO-Paris-2024",
        image: "logo_Jo.jpeg"
    },
    {
        title: "Taquin",
        description: "Projet Universitaire, le but était de reproduire un taquin qui représente l'Université.",
        technologies: ["Python"],
        link: "https://github.com/Timeo2211/Taquin",
        image: "taquin_logo.png"
    },
    {
        title: "Marathon Web",
        description: "Projet Universitaire, le but était de créer un site web qui raconte des histoires en 48 h.",
        technologies: [ "PHP","TelwindCSS"],
        link: "https://github.com/Timeo2211/Histoires",
        image: "golden_decision.png"
    },
    {
        title: "MasterMind",
        description: "Projet Universitaire, le but était de reproduire le jeu mythique du MasterMind.",
        technologies: ["Java"],
        link: "https://github.com/Timeo2211/MasterMind",
        image: "mastermind.png"
    },
    {
        title: "Portfolio",
        description: "Projet Personnel, réalisation d'un portfolio.",
        technologies: ["HTML", "CSS"],
        link: "https://github.com/Timeo2211/Timeo2211.github.io",
        image: "portfolio.png"
    },
    {
        title: "Flatcraft",
        description: "Projet Universitaire, le but était de recréer le jeu Minecraft en 2D.",
        technologies: ["Java", "JavaFX"],
        link: "https://github.com/Timeo2211/Flatcraft",
        image: "logo.png"
    }
];

export default function Projects() {
    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Mes Projets</h1>
            <div className="grid gap-6 md:grid-cols-2">
                {projects.map((project, index) => (
                    <Card key={index}>
                        <CardHeader>
                            <img src={project.image} alt={project.title}
                                 className="w-36 h-36 object-cover mb-4 rounded mx-auto"/>
                            <CardDescription>{project.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech, techIndex) => (
                                    <Badge key={techIndex} variant="secondary">{tech}</Badge>
                                ))}
                            </div>
                            <Link href={project.link} className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 flex items-center">
                                Voir le projet <ExternalLink className="ml-1 w-4 h-4" />
                            </Link>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
