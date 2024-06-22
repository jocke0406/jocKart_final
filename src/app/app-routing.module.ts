import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { TutosComponent } from './tutos/tutos.component';
import { GalerieComponent } from './galerie/galerie.component';
import { AboutComponent } from './about/about.component';
import { RessourcesComponent } from './ressources/ressources.component';
import { Tuto1Component } from './tutos/tuto1/tuto1.component';
import { Tuto2Component } from './tutos/tuto2/tuto2.component';
import { Tuto3Component } from './tutos/tuto3/tuto3.component';
import { Tuto4Component } from './tutos/tuto4/tuto4.component';
import { Tuto5Component } from './tutos/tuto5/tuto5.component';
import { Tuto6Component } from './tutos/tuto6/tuto6.component';
import { Tuto7Component } from './tutos/tuto7/tuto7.component';
import { Tuto8Component } from './tutos/tuto8/tuto8.component';
import { Tuto9Component } from './tutos/tuto9/tuto9.component';
import { Tuto10Component } from './tutos/tuto10/tuto10.component';
import { Tuto11Component } from './tutos/tuto11/tuto11.component';
import { Tuto12Component } from './tutos/tuto12/tuto12.component';
import { Tuto13Component } from './tutos/tuto13/tuto13.component';

const routes: Routes = [
    { path: '', redirectTo: '/accueil', pathMatch: 'full' },
    {
        path: 'accueil',
        component: AccueilComponent,
        data: {
            title: 'Accueil - Art Génératif',
            description:
                "Bienvenue sur notre site dédié à l'art génératif avec p5.js.",
            keywords: 'art génératif, p5.js, accueil',
            canonical: 'https://jocke.be/accueil',
        },
    },
    {
        path: 'tutos',
        component: TutosComponent,
        data: {
            title: 'Tutoriels - Art Génératif',
            description:
                "Apprenez à créer de l'art génératif avec nos tutoriels p5.js.",
            keywords: 'art génératif, p5.js, tutoriels',
            canonical: 'https://jocke.be/tutos',
        },
    },
    {
        path: 'galerie',
        component: GalerieComponent,
        data: {
            title: 'Galerie - Art Génératif',
            description:
                "Découvrez notre galerie d'art génératif créé avec p5.js.",
            keywords: 'art génératif, p5.js, galerie',
            canonical: 'https://jocke.be/galerie',
        },
    },
    {
        path: 'about',
        component: AboutComponent,
        data: {
            title: 'À propos - Art Génératif',
            description:
                "En savoir plus sur notre site dédié à l'art génératif avec p5.js.",
            keywords: 'art génératif, p5.js, à propos',
            canonical: 'https://jocke.be/about',
        },
    },
    {
        path: 'ressources',
        component: RessourcesComponent,
        data: {
            title: 'Ressources - Art Génératif',
            description:
                "Trouvez des ressources pour vous aider à plonger dans l'art génératif avec p5.js.",
            keywords: 'art génératif, p5.js, ressources',
            canonical: 'https://jocke.be/ressources',
        },
    },
    {
        path: 'tutos/1',
        component: Tuto1Component,
        data: {
            title: 'Tutoriel 1 - Introduction à p5.js',
            description:
                'Apprenez à configurer un environnement p5.js et créer votre premier sketch.',
            keywords: 'p5.js, tutoriel, introduction',
            canonical: 'https://jocke.be/tutos/1',
        },
    },
    {
        path: 'tutos/2',
        component: Tuto2Component,
        data: {
            title: 'Tutoriel 2 - Utilisation des Boucles en p5.js',
            description:
                'Comprenez et utilisez les boucles for en p5.js pour créer des motifs répétitifs.',
            keywords: 'p5.js, tutoriel, boucles, motifs',
            canonical: 'https://jocke.be/tutos/2',
        },
    },
    {
        path: 'tutos/3',
        component: Tuto3Component,
        data: {
            title: 'Tutoriel 3 - Utilisation des Couleurs et des Dégradés en p5.js',
            description:
                'Apprenez à manipuler les couleurs en p5.js, créer des dégradés et utiliser des palettes de couleurs.',
            keywords: 'p5.js, tutoriel, couleurs, dégradés',
            canonical: 'https://jocke.be/tutos/3',
        },
    },
    {
        path: 'tutos/4',
        component: Tuto4Component,
        data: {
            title: "Tutoriel 4 - Introduction à l'Art Génératif en p5.js",
            description:
                "Découvrez les principes de base de l'art génératif et apprenez à utiliser des algorithmes simples pour générer des œuvres d'art complexes.",
            keywords: 'p5.js, tutoriel, art génératif, algorithmes',
            canonical: 'https://jocke.be/tutos/4',
        },
    },
    {
        path: 'tutos/5',
        component: Tuto5Component,
        data: {
            title: 'Tutoriel 5 - Animation de Formes Simples en p5.js',
            description:
                "Maîtrisez les techniques d'animation en p5.js pour créer des formes en mouvement.",
            keywords: 'p5.js, tutoriel, animation, formes',
            canonical: 'https://jocke.be/tutos/5',
        },
    },
    {
        path: 'tutos/6',
        component: Tuto6Component,
        data: {
            title: 'Tutoriel 6 - Interaction Utilisateur avec la Souris et le Clavier en p5.js',
            description:
                'Ajoutez des interactions utilisateur à vos sketchs p5.js en utilisant la souris et le clavier.',
            keywords: 'p5.js, tutoriel, interaction, souris, clavier',
            canonical: 'https://jocke.be/tutos/6',
        },
    },
    {
        path: 'tutos/7',
        component: Tuto7Component,
        data: {
            title: 'Tutoriel 7 - Génération de Motifs Complexes en p5.js',
            description:
                'Apprenez à générer des motifs complexes en combinant des formes simples et des transformations.',
            keywords: 'p5.js, tutoriel, motifs complexes, transformations',
            canonical: 'https://jocke.be/tutos/7',
        },
    },
    {
        path: 'tutos/8',
        component: Tuto8Component,
        data: {
            title: 'Tutoriel 8 - Algorithmes de Dessin Aléatoire en p5.js',
            description:
                "Utilisez des algorithmes de dessin aléatoire pour générer des œuvres d'art uniques.",
            keywords: 'p5.js, tutoriel, dessin aléatoire, algorithmes',
            canonical: 'https://jocke.be/tutos/8',
        },
    },
    {
        path: 'tutos/9',
        component: Tuto9Component,
        data: {
            title: "Tutoriel 9 - Création d'un Motif Aléatoire en p5.js",
            description:
                'Reproduisez un motif aléatoire de lignes diagonales en utilisant p5.js.',
            keywords: 'p5.js, tutoriel, motif aléatoire, lignes diagonales',
            canonical: 'https://jocke.be/tutos/9',
        },
    },
    {
        path: 'tutos/10',
        component: Tuto10Component,
        data: {
            title: 'Tutoriel 10 - Introduction à la Trigonométrie en p5.js',
            description:
                'Utilisez des fonctions trigonométriques pour dessiner des formes et des motifs intéressants.',
            keywords: 'p5.js, tutoriel, trigonométrie, formes',
            canonical: 'https://jocke.be/tutos/10',
        },
    },
    {
        path: 'tutos/11',
        component: Tuto11Component,
        data: {
            title: 'Tutoriel 11 - Manipulation des Pixels en p5.js',
            description:
                'Introduction à la manipulation des pixels pour créer des effets visuels intéressants.',
            keywords:
                'p5.js, tutoriel, manipulation des pixels, effets visuels',
            canonical: 'https://jocke.be/tutos/11',
        },
    },
    {
        path: 'tutos/12',
        component: Tuto12Component,
        data: {
            title: "Tutoriel 12 - Génération d'Art Fractal en p5.js",
            description:
                'Utilisez des algorithmes pour générer des formes fractales et des motifs répétitifs complexes.',
            keywords: 'p5.js, tutoriel, art fractal, algorithmes',
            canonical: 'https://jocke.be/tutos/12',
        },
    },
    {
        path: 'tutos/13',
        component: Tuto13Component,
        data: {
            title: 'Tutoriel 13 - Utilisation des Bruits de Perlin en p5.js',
            description:
                'Créer des textures et des motifs organiques en utilisant le bruit de Perlin.',
            keywords: 'p5.js, tutoriel, bruit de Perlin, textures',
            canonical: 'https://jocke.be/tutos/13',
        },
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            initialNavigation: 'enabledBlocking',
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
