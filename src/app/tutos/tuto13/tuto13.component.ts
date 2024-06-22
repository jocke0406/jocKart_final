import {
    Component,
    ElementRef,
    ViewChild,
    AfterViewInit,
    OnDestroy,
} from '@angular/core';
import { highlightAll } from 'prismjs';

@Component({
    selector: 'app-tuto13',
    templateUrl: './tuto13.component.html',
    styleUrls: ['./tuto13.component.css'],
})
export class Tuto13Component implements AfterViewInit, OnDestroy {
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
            p.loadPixels(); // Charge les pixels du canvas

            for (let x = 0; x < p.width; x++) {
                for (let y = 0; y < p.height; y++) {
                    let bright = p.noise(x * 0.01, y * 0.01) * 255;
                    p.set(x, y, p.color(bright));
                }
            }

            p.updatePixels(); // Applique les modifications au canvas
        };
    };

    sketch3 = (p: any) => {
        p.setup = () => {
            p.createCanvas(400, 400);
            p.background(220);
            p.noLoop(); // Empêche draw() de boucler en continu
        };

        p.draw = () => {
            let yoff = 0;
            for (let y = 0; y < p.height; y++) {
                let xoff = 0;
                for (let x = 0; x < p.width; x++) {
                    let bright = p.noise(xoff, yoff) * 255;
                    p.stroke(bright);
                    p.point(x, y);
                    xoff += 0.01;
                }
                yoff += 0.01;
            }
        };
    };
    sketch4 = (p: any) => {
        let xoff = 0;
        let yoff = 0;
        p.setup = () => {
            p.createCanvas(400, 400);
            p.background(220);
        };

        p.draw = () => {
            p.background(220, 50); // Ajoute un effet de traînée
            let x = p.noise(xoff) * p.width;
            let y = p.noise(yoff) * p.height;
            p.ellipse(x, y, 24, 24);
            xoff += 0.01;
            yoff += 0.01;
        };
    };
}
