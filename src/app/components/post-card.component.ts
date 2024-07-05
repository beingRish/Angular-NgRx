import { Component, Input } from "@angular/core";
import { Post } from "../models/post";

@Component({
    selector: 'youtube-post-card',
    template: `
        <mat-card fxLayout="column">
            <mat-card-title>{{post.title}}</mat-card-title>
            <mat-card-content fxLayout="column">
                <div style="margin: 5px" fxLayout="row" fxLayoutGap="30px" *ngFor="let comment of post.comments">
                    <p>
                        {{comment.description}}
                    </p>
                    <button mat-button color="accent">Edit</button>
                    <button mat-button color="warn">Delete</button>
                </div>
                <div fxFlex="row" fxLayoutGap="30px">
                    <mat-form-field>
                        <input matInput placeholder="Enter your Comment"/>
                    </mat-form-field>
                    <button mat-raised-button color="primary">Add</button>
                </div>
            </mat-card-content>
        </mat-card>
    `,
    styles: [`
        mat-card{
            width: 50%;
            margin: 20px;
            padding: 20px
        }
    `]
})

export class PostCardComponent {

    @Input() post!: Post;

    constructor(){

    }
}