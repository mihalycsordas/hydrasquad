import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HeaderComponent} from './header.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {I18nModule} from '../services/i18n/i18n.module';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule,

        MatGridListModule,
        I18nModule
    ],
    exports: [
        HeaderComponent
    ],
    declarations: [HeaderComponent]
})

export class HeaderModule {
}
