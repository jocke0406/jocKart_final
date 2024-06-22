import {
    Component,
    AfterViewInit,
    OnDestroy,
    ViewChild,
    ElementRef,
} from '@angular/core';
declare var p5: any;

@Component({
    selector: 'app-galerie',
    templateUrl: './galerie.component.html',
    styleUrls: ['./galerie.component.css'],
})
export class GalerieComponent implements AfterViewInit, OnDestroy {
    private p5Instances: { [key: string]: any } = {};

    @ViewChild('sketchContainer', { static: false })
    sketchContainer!: ElementRef<HTMLDivElement>;

    constructor() {}

    ngAfterViewInit() {
        this.runSketch(this.sketchContainer.nativeElement, this.sketch);
    }

    ngOnDestroy() {
        this.destroyAllSketches();
    }

    runSketch(sketchContainer: HTMLDivElement, sketch: (p: any) => void) {
        const containerId = sketchContainer.id;
        if (this.p5Instances[containerId]) {
            this.p5Instances[containerId].remove();
        }
        this.p5Instances[containerId] = new p5(sketch, sketchContainer);
    }

    destroyAllSketches() {
        for (const id in this.p5Instances) {
            if (this.p5Instances.hasOwnProperty(id)) {
                this.p5Instances[id].remove();
            }
        }
    }

    sketch = (p: any) => {
        let cols: number, rows: number;
        let scl = 20;
        let inc = 0.1;
        let zoff = 0;
        let flowfield: any[] = [];
        let particles: Particle[] = [];

        p.setup = () => {
            p.createCanvas(p.windowWidth, p.windowHeight).parent(
                'sketchContainer'
            );
            cols = p.floor(p.width / scl);
            rows = p.floor(p.height / scl);
            flowfield = new Array(cols * rows);
            p.colorMode(p.HSB, 360, 255, 255, 255);
            for (let i = 0; i < 1000; i++) {
                particles[i] = new Particle(p);
            }
            p.background(0);
        };

        p.draw = () => {
            let yoff = 0;
            for (let y = 0; y < rows; y++) {
                let xoff = 0;
                for (let x = 0; x < cols; x++) {
                    let index = x + y * cols;
                    let angle = p.noise(xoff, yoff, zoff) * p.TWO_PI * 4;
                    let v = p5.Vector.fromAngle(angle);
                    v.setMag(1);
                    flowfield[index] = v;
                    xoff += inc;
                }
                yoff += inc;
            }
            zoff += 0.001;

            for (let i = 0; i < particles.length; i++) {
                particles[i].follow(flowfield);
                particles[i].update();
                particles[i].edges();
                particles[i].show();
            }
        };

        class Particle {
            pos: any;
            vel: any;
            acc: any;
            maxspeed: number;
            prevPos: any;
            hue: number;
            p: any;

            constructor(p: any) {
                this.p = p;
                this.pos = p.createVector(
                    p.random(p.width),
                    p.random(p.height)
                );
                this.vel = p.createVector(0, 0);
                this.acc = p.createVector(0, 0);
                this.maxspeed = 4;
                this.prevPos = this.pos.copy();
                this.hue = p.random(360);
            }

            update() {
                this.vel.add(this.acc);
                this.vel.limit(this.maxspeed);
                this.pos.add(this.vel);
                this.acc.mult(0);
            }

            applyForce(force: any) {
                this.acc.add(force);
            }

            show() {
                this.p.stroke(this.hue, 255, 255, 10);
                this.p.strokeWeight(1);
                this.p.line(
                    this.pos.x,
                    this.pos.y,
                    this.prevPos.x,
                    this.prevPos.y
                );
                this.updatePrev();
            }

            updatePrev() {
                this.prevPos.x = this.pos.x;
                this.prevPos.y = this.pos.y;
            }

            edges() {
                if (this.pos.x > this.p.width) {
                    this.pos.x = 0;
                    this.updatePrev();
                }
                if (this.pos.x < 0) {
                    this.pos.x = this.p.width;
                    this.updatePrev();
                }
                if (this.pos.y > this.p.height) {
                    this.pos.y = 0;
                    this.updatePrev();
                }
                if (this.pos.y < 0) {
                    this.pos.y = this.p.height;
                    this.updatePrev();
                }
            }

            follow(vectors: any[]) {
                let x = this.p.floor(this.pos.x / scl);
                let y = this.p.floor(this.pos.y / scl);
                let index = x + y * cols;
                let force = vectors[index];
                this.applyForce(force);
            }
        }
    };
}
