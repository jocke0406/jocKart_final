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
    selector: 'app-tuto5',
    templateUrl: './tuto5.component.html',
    styleUrls: ['./tuto5.component.css'],
})
export class Tuto5Component implements AfterViewInit, OnDestroy {
    private p5Instances: { [key: string]: any } = {};

    @ViewChild('sketch1Container', { static: false })
    sketch1Container!: ElementRef<HTMLDivElement>;
    @ViewChild('sketch2Container', { static: false })
    sketch2Container!: ElementRef<HTMLDivElement>;
    @ViewChild('sketch3Container', { static: false })
    sketch3Container!: ElementRef<HTMLDivElement>;
    @ViewChild('sketch4Container', { static: false })
    sketch4Container!: ElementRef<HTMLDivElement>;

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
            // Ici nous allons animer des formes
        };
    };

    sketch2 = (p: any) => {
        let x = 0;

        p.setup = () => {
            p.createCanvas(400, 400);
            p.background(220); // Gris clair
        };

        p.draw = () => {
            p.background(220); // Efface le dessin précédent
            p.ellipse(x, p.height / 2, 50, 50); // Dessine un cercle

            x += 2; // Incrémente la position x

            if (x > p.width) {
                x = 0; // Réinitialise la position x si elle dépasse la largeur du canvas
            }
        };
    };

    sketch3 = (p: any) => {
        let y = 0;

        p.setup = () => {
            p.createCanvas(400, 400);
            p.background(220); // Gris clair
        };

        p.draw = () => {
            p.background(220); // Efface le dessin précédent
            p.rect(p.width / 2 - 25, y, 50, 50); // Dessine un rectangle

            y += 2; // Incrémente la position y

            if (y > p.height) {
                y = 0; // Réinitialise la position y si elle dépasse la hauteur du canvas
            }
        };
    };

    sketch4 = (p: any) => {
        let angle = 0;

        p.setup = () => {
            p.createCanvas(400, 400);
            p.background(220); // Gris clair
            p.rectMode(p.CENTER); // Dessine les rectangles depuis leur centre
        };

        p.draw = () => {
            p.background(220); // Efface le dessin précédent
            p.translate(p.width / 2, p.height / 2); // Déplace l'origine au centre du canvas
            p.rotate(angle); // Applique une rotation

            p.rect(0, 0, 100, 100); // Dessine un carré au centre du canvas

            angle += 0.05; // Incrémente l'angle de rotation
        };
    };
}
