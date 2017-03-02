// Copyright (C) 2017 KPMG LLP, a Delaware limited liability partnership and the U.S. member firm of the KPMG network of independent member firms affiliated with KPMG International Cooperative (“KPMG International”), a Swiss entity. All rights reserved.

import config from '../../../config/app.config';
import {
    LocationStrategy,
    HashLocationStrategy,
    APP_BASE_HREF
} from '@angular/common';

/**
 * Default list of providers that can be used for bootstrap. The contents
 * of this file are automatically modified during scaffolding of services
 * for convenience to auto register them.
 */
export const APP_PROVIDERS = [];

if (!config.html5HistoryMode) {
    APP_PROVIDERS.push({provide: LocationStrategy, useClass: HashLocationStrategy});
}
APP_PROVIDERS.push({provide: APP_BASE_HREF, useValue: '/'});

import CartService from './cart-service';
export {CartService as CartService};
APP_PROVIDERS.push(CartService);
import OrderService from './order-service';
export {OrderService as OrderService};
APP_PROVIDERS.push(OrderService);

import UserRoleService from './user-role-service';
export {UserRoleService as UserRoleService};
APP_PROVIDERS.push(UserRoleService);