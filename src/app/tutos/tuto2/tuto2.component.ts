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
    selector: 'app-tuto2',
    templateUrl: './tuto2.component.html',
    styleUrls: ['./tuto2.component.css'],
})
export class Tuto2Component implements AfterViewInit, OnDestroy {
    private p5Instances: { [key: string]: any } = {};

    @ViewChild('sketch1Container', { static: false })
    sketch1Container!: ElementRef<HTMLDivElement>;
    @ViewChild('sketch2Container', { static: false })
    sketch2Container!: ElementRef<HTMLDivElement>;
    @ViewChild('sketch3Container', { static: false })
    sketch3Container!: ElementRef<HTMLDivElement>;

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
            p.background(200);
        };

        p.draw = () => {
            // Ici nous allons dessiner des formes répétitives
        };
    };

    sketch2 = (p: any) => {
        p.setup = () => {
            p.createCanvas(400, 400);
            p.background(200);

            const spacing = 40; // Espacement entre les cercles

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
            const spacing = 40; // Espacement entre les rectangles

            for (let x = 0; x < p.width; x += spacing) {
                for (let y = 0; y < p.height; y += spacing) {
                    if ((x + y) % 80 === 0) {
                        p.fill(255, 0, 0); // Rouge
                    } else {
                        p.fill(0, 0, 255); // Bleu
                    }
                    p.rect(x, y, spacing, spacing); // Dessine un rectangle
                }
            }
        };
    };
}
