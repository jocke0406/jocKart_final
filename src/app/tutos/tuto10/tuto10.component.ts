import {
    Component,
    ElementRef,
    ViewChild,
    AfterViewInit,
    OnDestroy,
} from '@angular/core';
import { highlightAll } from 'prismjs';

@Component({
    selector: 'app-tuto10',
    templateUrl: './tuto10.component.html',
    styleUrls: ['./tuto10.component.css'],
})
export class Tuto10Component implements AfterViewInit, OnDestroy {
    private p5Instances: { [key: string]: any } = {};

    @ViewChild('sketch1Container', { static: false })
    sketch1Container!: ElementRef<HTMLDivElement>;
    @ViewChild('sketch2Container', { static: false })
    sketch2Container!: ElementRef<HTMLDivElement>;
    @ViewChild('sketch3Container', { static: false })
    sketch3Container!: ElementRef<HTMLDivElement>;
    @ViewChild('sketch4Container', { static: false })
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
        };
    };

    sketch2 = (p: any) => {
        p.setup = () => {
            p.createCanvas(400, 400);
            p.background(220);
            p.translate(p.width / 2, p.height / 2); // Déplace l'origine au centre du canvas
            p.strokeWeight(2);

            let radius = 100; // Rayon du cercle
            let points = 100; // Nombre de points sur le cercle

            for (let i = 0; i < points; i++) {
                let angle = p.map(i, 0, points, 0, p.TWO_PI);
                let x = radius * p.cos(angle);
                let y = radius * p.sin(angle);
                p.point(x, y); // Dessine un point sur le cercle
            }
        };
    };

    sketch3 = (p: any) => {
        p.setup = () => {
            p.createCanvas(400, 400);
            p.background(220);
            p.translate(p.width / 2, p.height / 2);
            p.strokeWeight(2);

            let points = 200; // Nombre de points dans la spirale
            let angleIncrement = 0.1; // Incrément d'angle
            let radiusIncrement = 0.5; // Incrément de rayon

            for (let i = 0; i < points; i++) {
                let angle = i * angleIncrement;
                let radius = i * radiusIncrement;
                let x = radius * p.cos(angle);
                let y = radius * p.sin(angle);
                p.point(x, y); // Dessine un point sur la spirale
            }
        };
    };
    sketch4 = (p: any) => {
        p.setup = () => {
            p.createCanvas(400, 400);
            p.background(220);
            p.strokeWeight(2);

            let amplitude = 100; // Amplitude de l'oscillation
            let frequency = 0.05; // Fréquence de l'oscillation
            let yOffset = p.height / 2; // Décalage vertical

            for (let x = 0; x < p.width; x++) {
                let y = yOffset + amplitude * p.sin(frequency * x);
                p.point(x, y); // Dessine un point sur le motif oscillant
            }
        };
    };
}
