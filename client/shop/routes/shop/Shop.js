// Copyright (C) 2017 KPMG LLP, a Delaware limited liability partnership and the U.S. member firm of the KPMG network of independent member firms affiliated with KPMG International Cooperative (“KPMG International”), a Swiss entity. All rights reserved.

import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import template from './Shop.html';
import styles from './Shop.scss';

@Component({
    selector: 'shop',
    template: template,
    styles: [styles]
})
/**
 * @see https://angular.io/docs/ts/latest/guide/router.html
 */
export default class Shop {
    name:string = 'Shop';

    constructor(route:ActivatedRoute) {
        this._route = route;
    }

    ngOnInit() {
        this._route.params.subscribe(params => {
            console.log('Shop.ngOnInit() params:', params);
            //TODO: you may need to react to parameter changes and fetch data
        });
    }
}
