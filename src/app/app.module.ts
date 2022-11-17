import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderModule} from './header/header.module';
import {AppRoutingModule} from './app-routing.module';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FooterModule} from './footer/footer.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {I18nModule} from './services/i18n/i18n.module';
import {AtomsModule} from "@atoms/atoms.module";
import {AboutUsModule} from "@app/about-us/about-us.module";
import {HomeModule} from "@app/home/home.module";
import {ContactUsModule} from "@app/contact-us/contact-us.module";
import {EventsModule} from "@app/events/events.module";
import {TemplatesModule} from "../stories/templates/templates.module";

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
        AppRoutingModule,
        AboutUsModule,
        HomeModule,
        ContactUsModule,
        EventsModule,

        TemplatesModule
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
