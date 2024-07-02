import { Component } from "@angular/core";

@Component({
    selector: 'youtube-header',
    template: `
        <mat-toolbar color="primary">
            <div fxLayoutAlign="start center" fxFlex="100%" fxHide.xs>
                <button mat-button routerLink="" [routerLinkActiveOptions]="{exact:true}" routerLinkActive="selected">Users</button>
                <button mat-button routerLink="/post" routerLinkActive="selected">Posts</button>
            </div>
        </mat-toolbar>
    `,
    styles: [`
        mat-toolbar{
            height: 85px;
            padding: 0 16px;
        }

        .selected{
            background-color: aquamarine;
        }
    `]
})

export class HeaderComponent {
    constructor() {

    }
}