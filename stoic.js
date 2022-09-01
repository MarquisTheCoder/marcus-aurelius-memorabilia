"use strict";

/*
 Creator: Deshawn Marquis, Williams,
 GitHub Profile: https://github.com/MarquisTheCoder,
 Date Created: 8/31/22,
 Time Created: 10:55 PM,
 File Name: stoic.js,
 File Description:
 */



    const url = 'https://stoicquotesapi.com/v1/api/quotes/random';
    
    function getQuote(){
         let http = new XMLHttpRequest();
         http.open('GET', url, false);
         http.responseType = 'json';
         http.send(null)
         return http.response
         
    }
    
    