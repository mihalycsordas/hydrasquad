import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
})
export class LinkComponent implements OnInit, OnChanges {
  @Input()
  routerLink: string;

  @Input()
  decoration: 'simple' | 'underline' = 'simple';

  @Input()
  size: 'small' | 'normal' | 'large' = 'normal';

  @Input()
  color: 'primary' | 'secondary' = 'primary';

  @Input()
  text = 'Link text';

  linkClasses: Array<string>;

  ngOnInit(): void {
    this.linkClasses = this.generateLinkClasses();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.color) {
      this.linkClasses = this.generateLinkClasses();
    }
  }

  public generateLinkClasses(): Array<string> {
    const mode = 'link';

    return [`link--${this.color}`, mode];
  }
}
