import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar"
import { MatButtonModule } from "@angular/material/button"

const data : any =  [MatToolbarModule, MatButtonModule];

@NgModule({
    imports: data,
    exports: data

})
export class MaterialModule {

}