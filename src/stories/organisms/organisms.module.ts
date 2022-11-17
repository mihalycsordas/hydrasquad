import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MoleculesModule} from "@molecules/molecules.module";
import OrganismsHeaderComponent from "@organisms/header/header.component";

const IMPORTS_EXPORTS = [RouterModule, CommonModule, FormsModule, ReactiveFormsModule, MoleculesModule];

const COMPONENTS = [
    OrganismsHeaderComponent
];

@NgModule({
  imports: [...IMPORTS_EXPORTS],
  declarations: [...COMPONENTS],
  exports: [...IMPORTS_EXPORTS, ...COMPONENTS],
  schemas: [NO_ERRORS_SCHEMA],
})
export class OrganismsModule {}
