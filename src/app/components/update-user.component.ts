import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { User } from "../models/user";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { YoutubeRepository } from "../services/youtube-repository";


@Component({
    selector: 'youtube-update-user',
    template: `
        <form [formGroup]="userForm" (ngSubmit)="this.userForm.valid && this.updateUser()">
        <div fxLayout="column" fxLayoutAlign="center stretch">
            <mat-form-field>
                <input formControlName="email" matInput placeholder="Email"/>
                <mat-error>Valid email is required</mat-error>
            </mat-form-field>
            <mat-form-field>
                <input formControlName="name" matInput placeholder="Username"/>
                <mat-error>Name is required</mat-error>
            </mat-form-field>
            <button mat-raised-button color="primary" type="submit">Update</button>
        </div>
    </form>

    `,
    styles: [``]
})

export class updateUserComponent implements OnInit{
    userForm! : FormGroup;

    constructor(
        private dialogRef: MatDialogRef<updateUserComponent>,
        @Inject(MAT_DIALOG_DATA) public data: User,
        private youtubeRepo: YoutubeRepository
    ){}

    ngOnInit(): void {
        this.userForm = new FormGroup({
            name: new FormControl(this.data.name ? this.data.name : null, [Validators.required]),
            email: new FormControl(this.data.email ? this.data.email : null, [Validators.required]),
        });
    }

    updateUser(){
        const updatedUser = {...this.data,...this.userForm.value};
        console.log('updateUser: updatedUser: ', updatedUser);
        
        // this.youtubeRepo.updateUser(updatedUser);
        // this.dialogRef.close();
    }
}