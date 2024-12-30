import Image from 'next/image'

const detailedSkills = [
    { name: "Java", logo: "/logo/java.png", description: "Je suis compétent en Java, exploitant ses fonctionnalités pour développer des applications." },
    { name: "JavaFx / Scène Builder", logo: "/logo/scene_builder.png", description: "De bonnes compétences, pour la création d'interface graphique interactive." },
    { name: "Python", logo: "/logo/python.png", description: "Bonne maîtrise du langage et de la syntaxe, j'ai également réalisé de bons projets." },
    { name: "HTML", logo: "/logo/html.png", description: "Très bonne maîtrise des balises." },
    { name: "CSS", logo: "/logo/css.png", description: "Maîtrise le CSS, utilisant ses fonctionnalités pour créer des designs web visuellement attrayants et réactifs" },
    { name: "PHP", logo: "/logo/php.png", description: "Découverte du langage et de la syntaxe, quelques projets réalisés." },
    { name: "Laravel", logo: "/logo/laravel.png", description: "Bonne maîtrise du framework, pour la gestion de routes, des vues, de la base de données et des composants." },
    { name: "Flask", logo: "/logo/flask.png", description: "Compétence de base, pour la gestion de routes." },
    { name: "SQL", logo: "/logo/req_sql.png", description: "Bonne maîtrise, avec la création de requêtes SQL et la gestion de bases de données." },
    { name: "PostreSql", logo: "/logo/sql.png", description: "Plutôt bonne maîtrise, avec la gestion d'une base de donnée relationnelle." },
    { name: "SQlite", logo: "/logo/sqlite.png", description: "Maîtrise de base, pour le déploiement de bases de données embarquées." },
    { name: "Git", logo: "/logo/git.png", description: "Bonne maîtrise afin de mener à bien nos projets." },
    { name: "Bash", logo: "/logo/bash.png", description: "Compétence de base, avec la réalisation de quelques scripts." },
    { name: "React", logo: "/logo/React-icon.svg.png", description: "Débutant dans ce domaine mais plûtot bonne comprehension et premier projet réalisé" },
    { name: "Spring", logo: "/logo/spring.svg", description: "Débutant dans ce domaine mais plûtot bonne comprehension et premier projet réalisé" },
]

export default function Skills() {
    return (
        <div className="bg-gray-100 dark:bg-gray-900 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="competence space-y-12">
                    <h2 id="Compétences" className="text-3xl font-bold text-center mb-8">Compétences</h2>
                    <div className="contener-comp">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {detailedSkills.map((skill, index) => (
                                <div key={index} className="comp bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                                    <Image src={skill.logo} alt={`logo-${skill.name.toLowerCase()}`} width={64} height={64} className="mx-auto mb-4" />
                                    <h3 className="text-xl font-semibold mb-2 text-center">{skill.name}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-center">{skill.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

