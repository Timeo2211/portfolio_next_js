import Image from 'next/image';

export default function About() {
    return (
        <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
                <img src="img.png" alt="Photo de profil"
                     className="w-64 h-64 object-cover mb-4 rounded mx-auto"/>
                <div>
                    <h2 className="text-2xl font-bold mb-4">Qui suis-je ?</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Bonjour, je m'appelle Timéo Duchet, j'ai 19 ans et je suis actuellement en 2e année de BUT
                            informatique à l'IUT de Lens.
                        </li>
                        <li>Je suis passionné par l'informatique depuis mon plus jeune âge et je souhaite en faire mon
                            métier.
                        </li>
                        <li>Durant mes deux années de BUT informatique, j'ai pu découvrir et me développer dans
                            différents domaines, comme la programmation, le développement web, la base de données et le
                            travail en équipe. J'ai également pu acquérir des connaissances en réseaux et en
                            communication.
                        </li>
                    </ul>
                </div>
            </div>
            <hr className="my-6"/>
            <div>
                <h2 className="text-2xl font-bold mb-4">Objectif Professionnel</h2>
                <p>Actuellement étudiant en troisième année de BUT Informatique, je suis à la recherche d’une alternance
                    pour l’année 2024-2025. Mon objectif est de mettre en application mes compétences techniques tout en
                    acquérant une expérience pratique au sein d’une entreprise dynamique.</p>
            </div>
            <hr className="my-6"/>
            <div>
                <h2 className="text-2xl font-bold mb-4">Formation</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>BUT Informatique  </strong>: Je suis inscrit depuis septembre 2022 à l’IUT.
                    </li>
                    <li><strong>Baccalauréat Technologique </strong>: J’ai obtenu mon diplôme entre septembre 2019 et août 2022 au Lycée Henry Darras à Lens.
                    </li>
                </ul>
            </div>
            <hr className="my-6"/>
            <div>
                <h2 className="text-2xl font-bold mb-4">Autres informations</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li>Je suis passionné également de football, j'en pratique depuis que j'ai 7 ans.</li>
                    <li>J'aime beaucoup la musique, les jeux vidéo (jeux d'équipe, jeux de sports, etc.), mais aussi les
                        nouvelles technologies et la programmation.
                    </li>
                    <li>J'aime aussi voyager, j'ai pu déjà voyager dans différents pays comme la Belgique ou encore les
                        Pays-Bas. J'aimerais en faire beaucoup plus.
                    </li>
                </ul>
            </div>
        </div>
    );
}
