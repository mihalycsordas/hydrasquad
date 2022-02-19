import {Directive, HostBinding, Input, OnChanges, SimpleChanges} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Directive({
    selector: '[appFormattedTranslate]',
})
export class FormattedTranslateDirective implements OnChanges {
    @Input('appFormattedTranslate') key: string;
    @HostBinding() innerHTML: SafeHtml;

    constructor(
        private domSanitizer: DomSanitizer,
        private translateService: TranslateService
    ) {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.key && changes.key.currentValue) {
            this.translate();
        }
    }

    private translate(): void {
        this.translateService.get(this.key).subscribe((translatedText: string) => {
            this.innerHTML = this.domSanitizer.bypassSecurityTrustHtml(translatedText);
        });
    }
}
