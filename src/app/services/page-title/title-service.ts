import {Injectable} from '@angular/core';
import {filter, map} from 'rxjs/operators';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Injectable()
export class TitleService {

    private static readonly APP_TITLE_SUFFIX = 'Hydra Airsoft Squad';

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private browserTitle: Title
    ) {
    }

    public setPageTitle(): void {
        const defaultPageTitle = TitleService.APP_TITLE_SUFFIX;

        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd),
            map(() => {
                let child = this.activatedRoute.firstChild;

                if (!child) {
                    return this.activatedRoute.snapshot.data.title || defaultPageTitle;
                }

                while (child.firstChild) {
                    child = child.firstChild;
                }

                if (child.snapshot.data.title) {
                    return child.snapshot.data.title || defaultPageTitle;
                }
            })
        ).subscribe((title: string) => this.browserTitle.setTitle(title));
    }

}
