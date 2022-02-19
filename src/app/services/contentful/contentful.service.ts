import {Injectable} from '@angular/core';
import {createClient, Entry} from 'contentful';

const CONFIG = {
    space: 'juzi5jdxjy6b',
    accessToken: 'tI1sMRSa4jyqQMHnpi8R0ABHBVAG3QqR0JkfLCKjqCc',

    contentTypeIds: {
        product: '7eK7FhNEo2Rcx4gL08AfRK'
    }
};

@Injectable()
export class ContentfulService {
    private cdaClient = createClient({
        space: CONFIG.space,
        accessToken: CONFIG.accessToken
    });

    constructor() {
    }

    getContent(query?: object): Promise<Entry<any>[]> {
        return this.cdaClient.getEntries(Object.assign({
            content_type: CONFIG.contentTypeIds.product
        }, query))
            .then(res => res.items);
    }

    logContent(contentId: any) {
        this.cdaClient.getEntry(contentId).then((entry) => console.log(entry));
    }
}
