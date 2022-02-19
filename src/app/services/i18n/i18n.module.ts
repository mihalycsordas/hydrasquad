import {NgModule} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {FormattedTranslateDirective} from './formatted-translate.directive';

@NgModule({
    imports: [TranslateModule.forChild()],
    declarations: [FormattedTranslateDirective],
    exports: [TranslateModule, FormattedTranslateDirective]
})
export class I18nModule {
}
