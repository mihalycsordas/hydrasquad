import {Component, OnInit} from '@angular/core';
import {TitleService} from './services/page-title/title-service';
import {TranslateService} from '@ngx-translate/core';
import { AppLanguage } from './language/app-language';
import {Observable} from 'rxjs';
import {ContentfulService} from './services/contentful/contentful.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
    lesson$: Observable<any>;

    constructor(
        private contentfulService: ContentfulService,
        private titleService: TitleService,
        private translate: TranslateService)
    {
        translate.addLangs(Object.values(AppLanguage));
        translate.setDefaultLang(AppLanguage.HU);
        translate.use(AppLanguage.HU);
    }

    ngOnInit() {
        this.titleService.setPageTitle();
        this.translate.setDefaultLang(AppLanguage.HU);
        this.contentfulService.logContent('7eK7FhNEo2Rcx4gL08AfRK');
    }
}
