import {
    Component,
    ElementRef,
    ViewChild,
    AfterViewInit,
    OnDestroy,
} from '@angular/core';
import { highlightAll } from 'prismjs';

@Component({
    selector: 'app-tuto11',
    templateUrl: './tuto11.component.html',
    styleUrls: ['./tuto11.component.css'],
})
export class Tuto11Component implements AfterViewInit, OnDestroy {
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

            // Dessin initial
            p.noStroke();
            for (let x = 0; x < p.width; x += 40) {
                for (let y = 0; y < p.height; y += 40) {
                    p.fill(p.random(255), p.random(255), p.random(255));
                    p.rect(x, y, 40, 40);
                }
            }

            // Inversion des couleurs
            p.loadPixels();
            for (let i = 0; i < p.pixels.length; i += 4) {
                p.pixels[i] = 255 - p.pixels[i]; // Inverse la composante rouge
                p.pixels[i + 1] = 255 - p.pixels[i + 1]; // Inverse la composante verte
                p.pixels[i + 2] = 255 - p.pixels[i + 2]; // Inverse la composante bleue
            }
            p.updatePixels();
        };
    };

    sketch3 = (p: any) => {
        p.setup = () => {
            p.createCanvas(400, 400);
            p.background(220);

            // Dessin initial
            p.noStroke();
            for (let x = 0; x < p.width; x += 40) {
                for (let y = 0; y < p.height; y += 40) {
                    p.fill(p.random(255), p.random(255), p.random(255));
                    p.rect(x, y, 40, 40);
                }
            }

            // Effet de flou
            p.loadPixels();
            let pixelsCopy = p.pixels.slice(); // Crée une copie des pixels
            for (let x = 1; x < p.width - 1; x++) {
                for (let y = 1; y < p.height - 1; y++) {
                    for (let k = 0; k < 3; k++) {
                        // Pour chaque composante de couleur (rouge, vert, bleu)
                        let index = (x + y * p.width) * 4 + k;
                        p.pixels[index] =
                            (pixelsCopy[index] +
                                pixelsCopy[index - 4] +
                                pixelsCopy[index + 4] +
                                pixelsCopy[index - p.width * 4] +
                                pixelsCopy[index + p.width * 4]) /
                            5; // Moyenne des valeurs des pixels voisins
                    }
                }
            }
            p.updatePixels();
        };
    };
    sketch4 = (p: any) => {
        p.setup = () => {
            p.createCanvas(400, 400);
            p.background(220);

            // Dessin initial
            p.noStroke();
            for (let x = 0; x < p.width; x += 40) {
                for (let y = 0; y < p.height; y += 40) {
                    p.fill(p.random(255), p.random(255), p.random(255));
                    p.rect(x, y, 40, 40);
                }
            }

            // Conversion en niveaux de gris
            p.loadPixels();
            for (let i = 0; i < p.pixels.length; i += 4) {
                let r = p.pixels[i];
                let g = p.pixels[i + 1];
                let b = p.pixels[i + 2];
                let gray = (r + g + b) / 3; // Calcule la valeur de gris
                p.pixels[i] = gray;
                p.pixels[i + 1] = gray;
                p.pixels[i + 2] = gray;
            }
            p.updatePixels();
        };
    };
}
