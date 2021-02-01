import {
    SET_HEADER_LINKS,
    SET_NAVBAR_LINKS,
} from './types';

export function setHeaderLinks(links) {
    return ({
        type: SET_HEADER_LINKS,
        payoad: links
    })
}

export function setNavbarLinks(links) {
    return ({
        type: SET_NAVBAR_LINKS,
        payoad: links
    })
}

export function changeNavbarActive(_id) {
    return ({
        type: CHANGE_NAVBAR_ACTIVE,
        payoad: _id
    })
}