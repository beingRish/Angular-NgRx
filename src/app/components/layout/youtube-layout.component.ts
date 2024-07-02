import { Component } from "@angular/core";

@Component({
    selector: 'youtube-layout',
    template: `
        <youtube-header></youtube-header>
        <router-outlet></router-outlet>
        <!-- footer -->
    `,
    styles: ['']
})

export class LayoutComponent{
    constructor(){

    }
}