import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import ButtonComponent from "@atoms/buttons/button/button.component";
import {LinkButtonComponent} from "@atoms/buttons/link-button/link-button.component";
import {LinkComponent} from "@atoms/links/link/link.component";
import {TitleComponent} from "@atoms/title/title.component";
const IMPORTS_EXPORTS = [RouterModule, CommonModule, FormsModule, ReactiveFormsModule];

const COMPONENTS = [
    ButtonComponent,
    LinkButtonComponent,
    LinkComponent,
    TitleComponent
];

@NgModule({
    imports: [...IMPORTS_EXPORTS],
    declarations: [...COMPONENTS],
    exports: [...IMPORTS_EXPORTS, ...COMPONENTS],
    schemas: [NO_ERRORS_SCHEMA],
})
export class AtomsModule {}
