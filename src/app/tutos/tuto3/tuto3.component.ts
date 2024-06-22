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
    selector: 'app-tuto3',
    templateUrl: './tuto3.component.html',
    styleUrls: ['./tuto3.component.css'],
})
export class Tuto3Component implements AfterViewInit, OnDestroy {
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
            p.background(255); // Blanc
        };

        p.draw = () => {
            // Ici nous allons dessiner des formes colorées
        };
    };

    sketch2 = (p: any) => {
        p.setup = () => {
            p.createCanvas(400, 400);
            p.background(255); // Blanc

            p.fill(255, 0, 0); // Rouge
            p.stroke(0, 0, 255); // Bleu
            p.strokeWeight(4); // Épaisseur du contour

            p.rect(100, 100, 200, 200); // Dessine un rectangle rouge avec un contour bleu
        };
    };

    sketch3 = (p: any) => {
        p.setup = () => {
            p.createCanvas(400, 400);

            for (let i = 0; i <= p.width; i++) {
                let inter = p.map(i, 0, p.width, 0, 1);
                let c = p.lerpColor(
                    p.color(255, 0, 0),
                    p.color(0, 0, 255),
                    inter
                );
                p.stroke(c);
                p.line(i, 0, i, p.height);
            }
        };
    };

    sketch4 = (p: any) => {
        const palette = ['#ff6347', '#ffa500', '#ffff00', '#adff2f', '#40e0d0'];

        p.setup = () => {
            p.createCanvas(400, 400);
            p.noLoop(); // Arrête draw() après le premier appel

            const spacing = 80;
            for (let x = spacing / 2; x < p.width; x += spacing) {
                for (let y = spacing / 2; y < p.height; y += spacing) {
                    let col = p.random(palette);
                    p.fill(col);
                    p.noStroke();
                    p.ellipse(x, y, 60, 60);
                }
            }
        };
    };
}
