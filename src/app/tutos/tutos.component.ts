import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-tutos',
    templateUrl: './tutos.component.html',
    styleUrls: ['./tutos.component.css'],
})
export class TutosComponent implements OnInit {
    tutoriels = [
        {
            id: 1,
            title: 'Introduction à p5.js',
            description:
                'Apprendre à configurer un environnement p5.js et créer son premier sketch en utilisant les formes de base comme les rectangles, les ellipses et les lignes.',
            imageUrl: 'assets/images/tuto1.png',
        },
        {
            id: 2,
            title: 'Utilisation des Boucles en p5.js',
            description:
                "Comprendre et utiliser les boucles for en p5.js pour créer des motifs répétitifs et générer de l'art répétitif.",
            imageUrl: 'assets/images/tuto2.png',
        },
        {
            id: 3,
            title: 'Utilisation des Couleurs et des Dégradés en p5.js',
            description:
                'Apprendre à manipuler les couleurs en p5.js, à créer des dégradés et à utiliser des palettes de couleurs pour enrichir visuellement vos sketchs.',
            imageUrl: 'assets/images/tuto3.png',
        },
        {
            id: 4,
            title: "Introduction à l'Art Génératif en p5.js",
            description:
                "Découvrir les principes de base de l'art génératif et apprendre à utiliser des algorithmes simples pour générer des œuvres d'art complexes en p5.js.",
            imageUrl: 'assets/images/tuto4.png',
        },
        {
            id: 5,
            title: 'Animation de Formes Simples en p5.js',
            description:
                "Maîtriser les techniques d'animation en p5.js pour créer des formes en mouvement et des transformations dynamiques.",
            imageUrl: 'assets/images/tuto5.png',
        },
        {
            id: 6,
            title: ' Interaction Utilisateur avec la Souris et le Clavier en p5.js',
            description:
                'Ajouter des interactions utilisateur à vos sketchs p5.js en utilisant la souris et le clavier pour rendre vos œuvres plus dynamiques et engageantes.',
            imageUrl: 'assets/images/tuto6.png',
        },
        {
            id: 7,
            title: 'Génération de Motifs Complexes en p5.js',
            description:
                "Apprendre à générer des motifs complexes en combinant des formes simples et des transformations comme la translation, la rotation et l'échelle.",
            imageUrl: 'assets/images/tuto7.png',
        },
        {
            id: 8,
            title: 'Algorithmes de Dessin Aléatoire en p5.js',
            description:
                "Utiliser des algorithmes de dessin aléatoire pour générer des œuvres d'art uniques et variées en p5.js.",
            imageUrl: 'assets/images/tuto8.png',
        },
        {
            id: 9,
            title: "Création d'un Motif Aléatoire en p5.js",
            description:
                "Reproduire un motif aléatoire de lignes diagonales en utilisant p5.js, et explorer des façons d'aller plus loin avec ce concept.",
            imageUrl: 'assets/images/tuto9.png',
        },
        {
            id: 10,
            title: 'Introduction à la Trigonométrie en p5.js',
            description:
                'Utiliser des fonctions trigonométriques pour dessiner des formes et des motifs intéressants en p5.js.',
            imageUrl: 'assets/images/tuto10.png',
        },
        {
            id: 11,
            title: 'Manipulation des Pixels en p5.js',
            description:
                'Introduction à la manipulation des pixels pour créer des effets visuels intéressants.',
            imageUrl: 'assets/images/tuto11.png',
        },
        {
            id: 12,
            title: "Génération d'Art Fractal en p5.js",
            description:
                'Utiliser des algorithmes pour générer des formes fractales et des motifs répétitifs complexes.',
            imageUrl: 'assets/images/tuto12.png',
        },
        {
            id: 13,
            title: 'Utilisation des Bruits de Perlin en p5.js',
            description:
                'Créer des textures et des motifs organiques en utilisant le bruit de Perlin.',
            imageUrl: 'assets/images/tuto13.png',
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
