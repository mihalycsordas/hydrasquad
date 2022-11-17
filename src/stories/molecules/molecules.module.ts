import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import {AtomsModule} from "@atoms/atoms.module";
import {NavigationBarComponent} from "@molecules/navigation-bar/navigation-bar.component";

const IMPORTS_EXPORTS = [RouterModule, CommonModule, FormsModule, ReactiveFormsModule, AtomsModule];

const COMPONENTS = [
    NavigationBarComponent
];

@NgModule({
  imports: [...IMPORTS_EXPORTS],
  declarations: [...COMPONENTS],
  exports: [...IMPORTS_EXPORTS, ...COMPONENTS],
  schemas: [NO_ERRORS_SCHEMA],
})
export class MoleculesModule {}
