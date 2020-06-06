// ==UserScript==
// @name         Jumazon
// @namespace    https://github.com/usagiga/Jumazon
// @version      1.0
// @description  Jump automatically shortened URL in Amazon product page (/dp/ASIN/...)
// @author       Usagigawara
// @match        https://www.amazon.com/*
// @match        https://www.amazon.co.jp/*
// @match        https://www.amazon.com.br/*
// @match        https://www.amazon.ca/*
// @match        https://www.amazon.com.mx/*
// @match        https://www.amazon.cn/*
// @match        https://www.amazon.in/*
// @match        https://www.amazon.sg/*
// @match        https://www.amazon.com.tr/*
// @match        https://www.amazon.ae/*
// @match        https://www.amazon.fr/*
// @match        https://www.amazon.de/*
// @match        https://www.amazon.it/*
// @match        https://www.amazon.nl/*
// @match        https://www.amazon.es/*
// @match        https://www.amazon.co.uk/*
// @match        https://www.amazon.com.au/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    let pageUrl = new URL(window.location.href);
    let pageUrlParams = pageUrl.searchParams;

    let rule = /\/dp\/[\w\d]+/;
    let formattedPath = pageUrl.pathname.match(rule);
    if (formattedPath.length <= 0) {
        return;
    }

    let formattedURL = pageUrl.origin + formattedPath[0];
    if (formattedURL === pageUrl.href) {
        // If looped
        return;
    }

    window.location.replace(formattedURL);
})();
