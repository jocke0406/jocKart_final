import {
    Component,
    ElementRef,
    ViewChild,
    AfterViewInit,
    OnDestroy,
} from '@angular/core';
import { highlightAll } from 'prismjs';

@Component({
    selector: 'app-tuto9',
    templateUrl: './tuto9.component.html',
    styleUrls: ['./tuto9.component.css'],
})
export class Tuto9Component implements AfterViewInit, OnDestroy {
    private p5Instances: { [key: string]: any } = {};

    @ViewChild('sketch1Container', { static: true })
    sketch1Container!: ElementRef<HTMLDivElement>;
    @ViewChild('sketch2Container', { static: true })
    sketch2Container!: ElementRef<HTMLDivElement>;
    @ViewChild('sketch3Container', { static: true })
    sketch3Container!: ElementRef<HTMLDivElement>;
    @ViewChild('sketch4Container', { static: true })
    sketch4Container!: ElementRef<HTMLDivElement>;

    ngAfterViewInit() {
        highlightAll();
    }

    ngOnDestroy() {
        this.destroyAllSketches();
    }

    destroyAllSketches() {
        for (const id in this.p5Instances) {
            if (this.p5Instances.hasOwnProperty(id)) {
                this.p5Instances[id].remove();
            }
        }
    }
    runSketch(sketchContainer: HTMLDivElement, sketch: (p: any) => void) {
        const containerId = sketchContainer.id;
        if (this.p5Instances[containerId]) {
            this.p5Instances[containerId].remove();
        }
        this.p5Instances[containerId] = new p5(sketch, sketchContainer);
    }

    sketch1 = (p: any) => {
        p.setup = () => {
            p.createCanvas(400, 400);
            p.background(220); // Gris clair
            let step = 20; // Taille de chaque cellule de la grille

            for (let x = 0; x < p.width; x += step) {
                for (let y = 0; y < p.height; y += step) {
                    drawLine(p, x, y, step, step);
                }
            }
        };

        function drawLine(
            p: any,
            x: number,
            y: number,
            width: number,
            height: number
        ) {
            let leftToRight = p.random() >= 0.5;
            if (leftToRight) {
                p.line(x, y, x + width, y + height);
            } else {
                p.line(x + width, y, x, y + height);
            }
        }
    };

    sketch2 = (p: any) => {
        p.setup = () => {
            p.createCanvas(400, 400);
            p.background(220); // Gris clair
            let step = 20;

            p.strokeWeight(2); // Épaisseur de la ligne
            p.stroke(0); // Couleur de la ligne (noir)

            for (let x = 0; x < p.width; x += step) {
                for (let y = 0; y < p.height; y += step) {
                    drawLine(p, x, y, step, step);
                }
            }
        };

        function drawLine(
            p: any,
            x: number,
            y: number,
            width: number,
            height: number
        ) {
            let leftToRight = p.random() >= 0.5;
            if (leftToRight) {
                p.line(x, y, x + width, y + height);
            } else {
                p.line(x + width, y, x, y + height);
            }
        }
    };

    sketch3 = (p: any) => {
        p.setup = () => {
            p.createCanvas(400, 400);
            p.background(220); // Gris clair
            let step = 20;

            for (let x = 0; x < p.width; x += step) {
                for (let y = 0; y < p.height; y += step) {
                    let r = p.random(255);
                    let g = p.random(255);
                    let b = p.random(255);
                    p.stroke(r, g, b); // Couleur aléatoire
                    drawLine(p, x, y, step, step);
                }
            }
        };

        function drawLine(
            p: any,
            x: number,
            y: number,
            width: number,
            height: number
        ) {
            let leftToRight = p.random() >= 0.5;
            if (leftToRight) {
                p.line(x, y, x + width, y + height);
            } else {
                p.line(x + width, y, x, y + height);
            }
        }
    };
    sketch4 = (p: any) => {
        p.setup = () => {
            p.createCanvas(400, 400);
            p.frameRate(10); // Nombre de frames par seconde
        };

        p.draw = () => {
            p.background(220); // Gris clair
            let step = 20;

            for (let x = 0; x < p.width; x += step) {
                for (let y = 0; y < p.height; y += step) {
                    let r = p.random(255);
                    let g = p.random(255);
                    let b = p.random(255);
                    p.stroke(r, g, b); // Couleur aléatoire
                    drawLine(p, x, y, step, step);
                }
            }
        };

        function drawLine(
            p: any,
            x: number,
            y: number,
            width: number,
            height: number
        ) {
            let leftToRight = p.random() >= 0.5;
            if (leftToRight) {
                p.line(x, y, x + width, y + height);
            } else {
                p.line(x + width, y, x, y + height);
            }
        }
    };
}
