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
    selector: 'app-tuto4',
    templateUrl: './tuto4.component.html',
    styleUrls: ['./tuto4.component.css'],
})
export class Tuto4Component implements AfterViewInit, OnDestroy {
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
            // Ici nous allons générer de l'art
        };
    };

    sketch2 = (p: any) => {
        p.setup = () => {
            p.createCanvas(400, 400);
            p.background(220); // Gris clair

            const spacing = 40; // Espacement entre les formes

            for (let x = spacing / 2; x < p.width; x += spacing) {
                for (let y = spacing / 2; y < p.height; y += spacing) {
                    p.ellipse(x, y, 30, 30); // Dessine un cercle
                }
            }
        };
    };

    sketch3 = (p: any) => {
        p.setup = () => {
            p.createCanvas(400, 400);
            p.background(220); // Gris clair

            const spacing = 40;

            for (let x = spacing / 2; x < p.width; x += spacing) {
                for (let y = spacing / 2; y < p.height; y += spacing) {
                    const r = p.random(10, 30); // Taille aléatoire
                    p.ellipse(x, y, r, r); // Dessine un cercle avec une taille aléatoire
                }
            }
        };
    };

    sketch4 = (p: any) => {
        p.setup = () => {
            p.createCanvas(400, 400);
            p.background(220); // Gris clair

            p.translate(p.width / 2, p.height / 2); // Déplace l'origine au centre du canvas

            const points = 100;
            const radius = 150;

            p.beginShape();
            for (let i = 0; i < points; i++) {
                const angle = p.map(i, 0, points, 0, p.TWO_PI);
                const x = radius * p.cos(angle);
                const y = radius * p.sin(angle);
                p.vertex(x, y);
            }
            p.endShape(p.CLOSE);
        };
    };
}
