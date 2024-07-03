import { Component, Input } from "@angular/core";
import { User } from "../models/user";

@Component({
    selector: 'youtube-user-card',
    template: `
        <mat-card style="margin-top: 10px; margin-bottom: 10px" fxLayout="column" fxLayoutGap="30px" fxLayoutAlign="start stretch">
            <mat-card-title style="padding: 10px;">{{this.user.name}}</mat-card-title>
            <mat-card-content>{{this.user.email}}</mat-card-content>
        </mat-card>
    `,
    styles: ['']
})

export class UserCardComponent{

    @Input() user!: User;

    constructor(){

    }
}