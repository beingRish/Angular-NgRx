import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Post } from "../models/post";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { YoutubeRepository } from "../services/youtube-repository";


@Component({
    selector: 'youtube-update-comment',
    template: `
        <form [formGroup]="userForm" (ngSubmit)="this.userForm.valid && this.updateComment()">
        <div fxLayout="column" fxLayoutGap="0px" fxLayoutAlign="center stretch">
            <mat-form-field>
                <input formControlName="comment" matInput placeholder="Edit Comment"/>
            </mat-form-field>
            <button mat-raised-button color="primary" type="submit">Update Comment</button>
        </div>
    </form>

    `,
    styles: [`
        mat-form-field{
            margin: 10px;
        }
    `]
})

export class updateCommentComponent implements OnInit{
    userForm! : FormGroup;
    currentComment!: Comment;

    constructor(
        private dialogRef: MatDialogRef<updateCommentComponent>,
        @Inject(MAT_DIALOG_DATA) public data: {post: Post, comment: Comment},
        private youtubeRepo: YoutubeRepository
    ){
    }

    ngOnInit(): void {
        this.currentComment = this.data.comment
        
        this.userForm = new FormGroup({
            comment: new FormControl(this.currentComment, Validators.required),
        });

        
    }

    updateComment(){
        
        const updatedComment = {
            id: this.data.post.id,
            description: this.userForm.value.comment
        };        
        console.log(updatedComment);
        
        this.youtubeRepo.updateComment(updatedComment, this.data.post.id);
        this.dialogRef.close();
    }
}