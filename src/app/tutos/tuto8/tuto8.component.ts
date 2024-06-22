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
    selector: 'app-tuto8',
    templateUrl: './tuto8.component.html',
    styleUrls: ['./tuto8.component.css'],
})
export class Tuto8Component implements AfterViewInit, OnDestroy {
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
            // Ici nous allons utiliser des algorithmes de dessin aléatoire
        };
    };

    sketch2 = (p: any) => {
        p.setup = () => {
            p.createCanvas(400, 400);
            p.background(220); // Gris clair
            p.noLoop(); // Dessine une seule fois
        };

        p.draw = () => {
            for (let i = 0; i < 1000; i++) {
                let x = p.random(p.width);
                let y = p.random(p.height);
                p.point(x, y);
            }
        };
    };

    sketch3 = (p: any) => {
        p.setup = () => {
            p.createCanvas(400, 400);
            p.background(220); // Gris clair
            p.noLoop(); // Dessine une seule fois
        };

        p.draw = () => {
            for (let i = 0; i < 100; i++) {
                let x = p.random(p.width);
                let y = p.random(p.height);
                let r = p.random(10, 50);
                p.ellipse(x, y, r, r);
            }
        };
    };

    sketch4 = (p: any) => {
        p.setup = () => {
            p.createCanvas(400, 400);
            p.background(220); // Gris clair
            p.noLoop(); // Dessine une seule fois
        };

        p.draw = () => {
            for (let i = 0; i < 50; i++) {
                let x = p.random(p.width);
                let y = p.random(p.height);
                let w = p.random(20, 100);
                let h = p.random(20, 100);
                let col = p.color(p.random(255), p.random(255), p.random(255));
                p.fill(col);
                p.rect(x, y, w, h);
            }
        };
    };

    sketch5 = (p: any) => {
        p.setup = () => {
            p.createCanvas(400, 400);
            p.background(220); // Gris clair
            p.noLoop(); // Dessine une seule fois
        };

        p.draw = () => {
            for (let i = 0; i < 100; i++) {
                p.push();
                let x = p.random(p.width);
                let y = p.random(p.height);
                let r = p.random(10, 50);
                let angle = p.random(p.TWO_PI);
                p.translate(x, y);
                p.rotate(angle);
                p.rect(0, 0, r, r);
                p.pop();
            }
        };
    };
}
