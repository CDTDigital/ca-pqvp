// Copyright (C) 2017 KPMG LLP, a Delaware limited liability partnership and the U.S. member firm of the KPMG network of independent member firms affiliated with KPMG International Cooperative (“KPMG International”), a Swiss entity. All rights reserved.

import {async, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {SHARED_DIRECTIVES} from '../../directives';
import {SHARED_PIPES} from '../../pipes';
import {SHARED_IMPORTS} from '../../../shared/imports';
import {APP_PROVIDERS} from '../../../app/providers';

import ProductList from './ProductList';

describe('ProductList', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ ...SHARED_DIRECTIVES, ...SHARED_PIPES ],
            providers: APP_PROVIDERS,
            imports: [ ...SHARED_IMPORTS, RouterTestingModule ]
        });
    });

    it('should be creatable', async(() => {
        TestBed.compileComponents().then(() => {
            const fixture = TestBed.createComponent(ProductList);
            expect(fixture.componentInstance).toBeDefined();
            expect(fixture.debugElement.nativeElement.innerHTML).toBeTruthy();
        });
    }));

});
