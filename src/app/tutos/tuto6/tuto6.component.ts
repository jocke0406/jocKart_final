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
    selector: 'app-tuto6',
    templateUrl: './tuto6.component.html',
    styleUrls: ['./tuto6.component.css'],
})
export class Tuto6Component implements AfterViewInit, OnDestroy {
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
            // Ici nous allons ajouter des interactions utilisateur
        };
    };

    sketch2 = (p: any) => {
        p.setup = () => {
            p.createCanvas(400, 400);
            p.background(220); // Gris clair
        };

        p.draw = () => {
            if (p.mouseIsPressed) {
                p.fill(0); // Noir
            } else {
                p.fill(255); // Blanc
            }
            p.ellipse(p.mouseX, p.mouseY, 20, 20); // Dessine un cercle à la position de la souris
        };
    };

    sketch3 = (p: any) => {
        p.setup = () => {
            p.createCanvas(400, 400);
            p.background(220); // Gris clair
        };

        p.draw = () => {
            // Pas de dessin dans draw()
        };

        p.mousePressed = () => {
            p.background(p.random(255), p.random(255), p.random(255)); // Change la couleur de fond de manière aléatoire
        };
    };

    sketch4 = (p: any) => {
        let x = 200;
        let y = 200;

        p.setup = () => {
            p.createCanvas(400, 400);
            p.background(220); // Gris clair
        };

        p.draw = () => {
            p.background(220); // Efface le dessin précédent
            p.ellipse(x, y, 50, 50); // Dessine un cercle
        };

        p.keyPressed = () => {
            if (p.keyCode === p.LEFT_ARROW) {
                x -= 10; // Déplace le cercle vers la gauche
            } else if (p.keyCode === p.RIGHT_ARROW) {
                x += 10; // Déplace le cercle vers la droite
            } else if (p.keyCode === p.UP_ARROW) {
                y -= 10; // Déplace le cercle vers le haut
            } else if (p.keyCode === p.DOWN_ARROW) {
                y += 10; // Déplace le cercle vers le bas
            }
        };
    };

    sketch5 = (p: any) => {
        let x = 200;
        let y = 200;
        let col = 255; // Blanc

        p.setup = () => {
            p.createCanvas(400, 400);
            p.background(220); // Gris clair
        };

        p.draw = () => {
            p.background(220); // Efface le dessin précédent
            p.fill(col); // Applique la couleur actuelle
            p.ellipse(x, y, 50, 50); // Dessine un cercle
        };

        p.keyPressed = () => {
            if (p.key === 'r') {
                col = p.color(255, 0, 0); // Rouge
            } else if (p.key === 'g') {
                col = p.color(0, 255, 0); // Vert
            } else if (p.key === 'b') {
                col = p.color(0, 0, 255); // Bleu
            }
        };
    };
}
