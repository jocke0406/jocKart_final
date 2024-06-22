import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    constructor(
        private titleService: Title,
        private metaService: Meta,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        @Inject(DOCUMENT) private doc: Document
    ) {}

    ngOnInit() {
        this.router.events
            .pipe(
                filter((event) => event instanceof NavigationEnd),
                map(() => this.activatedRoute),
                map((route) => {
                    while (route.firstChild) route = route.firstChild;
                    return route;
                }),
                mergeMap((route) => route.data)
            )
            .subscribe((event) => {
                this.titleService.setTitle(event['title']);
                this.metaService.updateTag({
                    name: 'description',
                    content: event['description'],
                });
                this.metaService.updateTag({
                    name: 'keywords',
                    content: event['keywords'],
                });
                this.updateCanonicalUrl(event['canonical']);
            });
    }

    updateCanonicalUrl(url: string) {
        let link: HTMLLinkElement | null = this.doc.querySelector(
            "link[rel='canonical']"
        );
        if (link) {
            link.href = url;
        } else {
            link = this.doc.createElement('link');
            link.setAttribute('rel', 'canonical');
            this.doc.head.appendChild(link);
            link.setAttribute('href', url);
        }
    }
}
