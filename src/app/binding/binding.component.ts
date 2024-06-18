import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styles: [
  ]
})
export class BindingComponent {
  pageTitle:string = "Data Binding in Angular";
  btnStatus: boolean = true;
  username = ''

  chageTitle(){
    this.pageTitle = 'Data Binding'
  }


}
