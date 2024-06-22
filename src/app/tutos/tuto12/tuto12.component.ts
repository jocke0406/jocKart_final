import {
    Component,
    ElementRef,
    ViewChild,
    AfterViewInit,
    OnDestroy,
} from '@angular/core';
import { highlightAll } from 'prismjs';

@Component({
    selector: 'app-tuto12',
    templateUrl: './tuto12.component.html',
    styleUrls: ['./tuto12.component.css'],
})
export class Tuto12Component implements AfterViewInit, OnDestroy {
    private p5Instances: { [key: string]: any } = {};

    @ViewChild('sketch1Container', { static: false })
    sketch1Container!: ElementRef<HTMLDivElement>;
    @ViewChild('sketch2Container', { static: false })
    sketch2Container!: ElementRef<HTMLDivElement>;
    @ViewChild('sketch3Container', { static: false })
    sketch3Container!: ElementRef<HTMLDivElement>;

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
            p.stroke(0);
            p.translate(p.width / 2, p.height); // Déplace l'origine au bas du canvas
            drawBranch(100); // Dessine la première branche de longueur 100
        };

        function drawBranch(len: number) {
            p.line(0, 0, 0, -len); // Dessine une ligne de la position actuelle vers le haut
            p.translate(0, -len); // Déplace l'origine à la fin de la ligne
            if (len > 4) {
                // Condition de fin de récursion
                p.push(); // Sauvegarde l'état actuel de la transformation
                p.rotate(p.PI / 4); // Tourne de 45 degrés vers la droite
                drawBranch(len * 0.67); // Dessine la branche droite plus petite
                p.pop(); // Restaure l'état de la transformation

                p.push(); // Sauvegarde l'état actuel de la transformation
                p.rotate(-p.PI / 4); // Tourne de 45 degrés vers la gauche
                drawBranch(len * 0.67); // Dessine la branche gauche plus petite
                p.pop(); // Restaure l'état de la transformation
            }
        }
    };

    sketch3 = (p: any) => {
        p.setup = () => {
            p.createCanvas(400, 400);
            p.background(220);
            p.stroke(0);
            let len = 300;
            let startX = p.width / 2 - len / 2;
            let startY = p.height / 2 + len / 2;
            drawKoch(startX, startY, len, 0, 4);
        };

        function drawKoch(
            x: number,
            y: number,
            len: number,
            angle: number,
            depth: number
        ) {
            if (depth == 0) {
                let x1 = x + len * p.cos(angle);
                let y1 = y + len * p.sin(angle);
                p.line(x, y, x1, y1);
            } else {
                len /= 3.0;
                drawKoch(x, y, len, angle, depth - 1);
                x += len * p.cos(angle);
                y += len * p.sin(angle);

                drawKoch(x, y, len, angle - p.PI / 3, depth - 1);
                x += len * p.cos(angle - p.PI / 3);
                y += len * p.sin(angle - p.PI / 3);

                drawKoch(x, y, len, angle + p.PI / 3, depth - 1);
                x += len * p.cos(angle + p.PI / 3);
                y += len * p.sin(angle + p.PI / 3);

                drawKoch(x, y, len, angle, depth - 1);
            }
        }
    };
}
