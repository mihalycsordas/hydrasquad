import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TitleSectionComponent} from './title-section.component';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        TitleSectionComponent
    ],
    declarations: [TitleSectionComponent]
})

export class TitleSectionModule {
}
