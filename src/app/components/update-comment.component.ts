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

    constructor(
        private dialogRef: MatDialogRef<updateCommentComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Post,
        private youtubeRepo: YoutubeRepository
    ){}

    ngOnInit(): void {
        this.userForm = new FormGroup({
            comment: new FormControl(),
        });

        
    }

    updateComment(){
        console.log({...this.data.comments,...this.userForm.value.comment});
        
        const updateComment = {...this.data.comments,...this.userForm.value.comment};
        this.youtubeRepo.updateComment(updateComment, this.data.id);
        this.dialogRef.close();

        console.log('after updating',{
            userFormValue: this.userForm.value.comment,
            PostData: this.data,

        }
        );
    }
}