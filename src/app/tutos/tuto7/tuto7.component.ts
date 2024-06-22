import {
    Component,
    AfterViewInit,
    OnDestroy,
    ViewChild,
    ElementRef,
} from '@angular/core';
import { highlightAll } from 'prismjs';

declare var p5: any;

@Component({
    selector: 'app-tuto7',
    templateUrl: './tuto7.component.html',
    styleUrls: ['./tuto7.component.css'],
})
export class Tuto7Component implements AfterViewInit, OnDestroy {
    private p5Instances: { [key: string]: any } = {};

    @ViewChild('sketch1Container', { static: false })
    sketch1Container!: ElementRef<HTMLDivElement>;
    @ViewChild('sketch2Container', { static: false })
    sketch2Container!: ElementRef<HTMLDivElement>;
    @ViewChild('sketch3Container', { static: false })
    sketch3Container!: ElementRef<HTMLDivElement>;
    @ViewChild('sketch4Container', { static: false })
    sketch4Container!: ElementRef<HTMLDivElement>;
    @ViewChild('sketch5Container', { static: false })
    sketch5Container!: ElementRef<HTMLDivElement>;

    constructor() {}

    ngAfterViewInit() {
        highlightAll();
    }

    ngOnDestroy() {
        this.destroyAllSketches();
    }

    runSketch(sketchContainer: HTMLDivElement, sketch: (p: any) => void) {
        const containerId = sketchContainer.id;
        if (this.p5Instances[containerId]) {
            this.p5Instances[containerId].remove();
        }
        this.p5Instances[containerId] = new p5(sketch, containerId);
    }

    destroyAllSketches() {
        for (const id in this.p5Instances) {
            if (this.p5Instances.hasOwnProperty(id)) {
                this.p5Instances[id].remove();
            }
        }
    }

    sketch1 = (p: any) => {
        p.setup = () => {
            p.createCanvas(400, 400);
            p.background(220); // Gris clair
        };

        p.draw = () => {
            // Ici nous allons générer des motifs complexes
        };
    };

    sketch2 = (p: any) => {
        p.setup = () => {
            p.createCanvas(400, 400);
            p.background(220); // Gris clair
            let spacing = 40; // Espacement entre les cercles

            for (let x = spacing / 2; x < p.width; x += spacing) {
                for (let y = spacing / 2; y < p.height; y += spacing) {
                    p.ellipse(x, y, 30, 30); // Dessine un cercle
                }
            }
        };

        p.draw = () => {};
    };

    sketch3 = (p: any) => {
        p.setup = () => {
            p.createCanvas(400, 400);
            p.background(220); // Gris clair
            let spacing = 60; // Espacement entre les cercles

            for (let x = spacing / 2; x < p.width; x += spacing) {
                for (let y = spacing / 2; y < p.height; y += spacing) {
                    p.push(); // Sauvegarde le contexte de dessin
                    p.translate(x, y); // Déplace l'origine au centre du cercle
                    let angle = p.atan2(y - p.height / 2, x - p.width / 2); // Calcule l'angle de rotation basé sur la position
                    p.rotate(angle); // Applique une rotation
                    p.ellipse(0, 0, 40, 20); // Dessine un ellipse allongée pour rendre l'effet plus visible
                    p.pop(); // Restaure le contexte de dessin
                }
            }
        };

        p.draw = () => {};
    };

    sketch4 = (p: any) => {
        p.setup = () => {
            p.createCanvas(400, 400);
            p.background(220); // Gris clair
            p.translate(p.width / 2, p.height / 2); // Déplace l'origine au centre du canvas

            let numRects = 20; // Nombre de rectangles
            let angleStep = p.TWO_PI / numRects; // Angle entre chaque rectangle

            for (let i = 0; i < numRects; i++) {
                p.push(); // Sauvegarde le contexte de dessin
                p.rotate(i * angleStep); // Applique une rotation
                p.rect(0, 0, 150, 10); // Dessine un rectangle
                p.pop(); // Restaure le contexte de dessin
            }
        };

        p.draw = () => {};
    };

    sketch5 = (p: any) => {
        p.setup = () => {
            p.createCanvas(400, 400);
            p.background(220); // Gris clair
            p.translate(p.width / 2, p.height / 2); // Déplace l'origine au centre du canvas

            let numCircles = 10; // Nombre de cercles
            let maxRadius = 150; // Rayon maximum

            for (let i = numCircles - 1; i >= 0; i--) {
                // Commence par le plus grand cercle
                let radius = (i / numCircles) * maxRadius;
                if (i % 2 == 0) {
                    p.fill(255); // Blanc
                } else {
                    p.fill(0); // Noir
                }
                p.ellipse(0, 0, radius * 2, radius * 2); // Dessine un cercle concentrique
            }
        };

        p.draw = () => {};
    };
}
