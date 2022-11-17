import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import {OrganismsModule} from "@organisms/organisms.module";
import TemplateHomePageComponent from "./home-page/home-page.component";

const IMPORTS_EXPORTS = [RouterModule, CommonModule, OrganismsModule];

const COMPONENTS = [
    TemplateHomePageComponent,
];

@NgModule({
  imports: [...IMPORTS_EXPORTS],
  declarations: [...COMPONENTS],
  exports: [...IMPORTS_EXPORTS, ...COMPONENTS],
  schemas: [NO_ERRORS_SCHEMA],
})
export class TemplatesModule {}
