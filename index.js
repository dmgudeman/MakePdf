const puppeteer = require('puppeteer');

exports.handler = function() {
     const browser = puppeteer.launch()
       .then(function(browser) {
           console.log('I\'m in the handler function');
           browser.newPage()
         }
        ).then(function(page) {
          page.goto('file:///test.html')
            .then(function() {
              page.pdf({path: 'My.pdf', format: 'A4'});
            })
       }
     ).then(function() {
       browser.close
     }).catch(function(err){
       console.log('ERROR', err);
     })
};