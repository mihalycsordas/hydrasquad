import {
    Component,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges,
} from '@angular/core';

@Component({
    selector: 'link-button',
    templateUrl: './link-button.component.html',
    styleUrls: ['./link-button.component.scss'],
})
export class LinkButtonComponent implements OnInit, OnChanges {
    @Input()
    href: string | null = null;

    @Input()
    routerLink: string | null = null;

    @Input()
    target: '_blank' | '_self' | '_parent' | '_top' | null;

    @Input()
    size: 'small' | 'normal' | 'large' = 'normal';

    @Input()
    color: 'primary' | 'secondary' = 'primary';

    @Input()
    text = 'Button text';

    linkButtonClasses: Array<string>;

    ngOnInit(): void {
        this.linkButtonClasses = this.generateLinkButtonClasses();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.expand || changes.fill || changes.size || changes.color) {
            this.linkButtonClasses = this.generateLinkButtonClasses();
        }
    }

    public generateLinkButtonClasses(): Array<string> {
        const mode = 'link-button';

        return [
            `link-button--${this.color}`,
            `link-button--${this.size}`,
            mode,
        ];
    }
}
