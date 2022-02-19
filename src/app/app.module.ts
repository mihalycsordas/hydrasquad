import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderModule} from './header/header.module';
import {AppRoutingModule} from './app-routing.module';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FooterModule} from './footer/footer.module';
import { TitleService } from './services/page-title/title-service';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {I18nModule} from './services/i18n/i18n.module';
import {ContentfulService} from './services/contentful/contentful.service';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'hydrasquad' }),
        BrowserAnimationsModule,
        HttpClientModule,

        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),

        I18nModule,
        HeaderModule,
        FooterModule,
        AppRoutingModule
    ],
    providers: [
        TitleService,
        ContentfulService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
