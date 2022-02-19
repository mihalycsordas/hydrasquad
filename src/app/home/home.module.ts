import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import {CommonModule} from '@angular/common';
import {TitleSectionModule} from '../title-section/title-section.module';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
    imports: [
        CommonModule,

        TranslateModule,
        TitleSectionModule
    ],
    exports: [
        HomeComponent
    ],
    declarations: [HomeComponent]
})

export class HomeModule {

}
