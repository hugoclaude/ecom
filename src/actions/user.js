import {
    SET_USER_PURCHASES
} from './types';

export function setPurchaseDetail() {
    return ({
        type: SET_PURCHASE_DETAIL,
        payload: _id
    })
}

export function fetchUserPurchases() {
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 0,
                total: 19.40,
                orderNumber: 'A0048248343',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 1,
                total: 1.40,
                orderNumber: 'A0048248564',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Lester Brown',
                    shippingAddress: '123 Seasame Street'
                }
            },
            {
                _id: 2,
                total: 219.43,
                orderNumber: 'A0048456343',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Brenda Song',
                    shippingAddress: '3434 Eucalyptus'
                }
            },
            {
                _id: 3,
                total: 18.19,
                orderNumber: 'A0036988343',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Barney June',
                    shippingAddress: '2615 Copper Fort Blvd'
                }
            },
            {
                _id: 4,
                total: 19.40,
                orderNumber: 'A0042548343',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Timber Jones',
                    shippingAddress: '1234 East State Street'
                }
            },
            {
                _id: 5,
                total: 14.36,
                orderNumber: 'A0048248385',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Marcelo Trump',
                    shippingAddress: '1414 14th Street'
                }
            },
            {
                _id: 6,
                total: 18.40,
                orderNumber: 'A0088848343',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Tom Jones',
                    shippingAddress: '2001 Main Street'
                }
            },
            {
                _id: 7,
                total: 36.40,
                orderNumber: 'A0048248343',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Brandon Camacho',
                    shippingAddress: '7566 Zelda Court'
                }
            },
        ]
    })
}