import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { AppLanguage } from './language/app-language';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
    lesson$: Observable<any>;

    constructor(
        private translate: TranslateService)
    {
        translate.addLangs(Object.values(AppLanguage));
        translate.setDefaultLang(AppLanguage.HU);
        translate.use(AppLanguage.HU);
    }

    ngOnInit() {
        this.translate.setDefaultLang(AppLanguage.HU);
    }
}
