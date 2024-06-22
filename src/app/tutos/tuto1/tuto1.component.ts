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
    selector: 'app-tuto1',
    templateUrl: './tuto1.component.html',
    styleUrls: ['./tuto1.component.css'],
})
export class Tuto1Component implements AfterViewInit, OnDestroy {
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
            p.background(200);
            p.noLoop();
        };

        p.draw = () => {
            // Ici nous allons dessiner des formes de base
        };
    };

    sketch2 = (p: any) => {
        p.setup = () => {
            p.createCanvas(400, 400);
            p.background(200);
            p.noLoop();
        };

        p.draw = () => {
            p.rect(50, 50, 150, 100);
        };
    };

    sketch3 = (p: any) => {
        p.setup = () => {
            p.createCanvas(400, 400);
            p.background(200);
            p.noLoop();
        };

        p.draw = () => {
            p.ellipse(200, 200, 100, 100);
        };
    };

    sketch4 = (p: any) => {
        p.setup = () => {
            p.createCanvas(400, 400);
            p.background(200);
            p.noLoop();
        };

        p.draw = () => {
            p.line(300, 50, 350, 150);
        };
    };

    sketch5 = (p: any) => {
        p.setup = () => {
            p.createCanvas(400, 400);
            p.background(200);
            p.noLoop();
        };

        p.draw = () => {
            p.fill(0, 255, 0, 127);
            p.ellipse(200, 200, 100, 100);
        };
    };
}
