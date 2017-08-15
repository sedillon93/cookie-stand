'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function Store(name, minCustomersHourly, maxCustomersHourly, avgCookiesPerCustomer){
  this.name = name;
  this.mincCustomersHourly = minCustomersHourly;
  this.maxCustomersHourly = maxCustomersHourly;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.hourlyCookieSales = [];
  //generate random number of customers in an hour
  this.customersHourly = function(){
    var customers = Math.floor(Math.random() * (this.maxCustomersHourly - this.minCustomersHourly) + this.minCustomersHourly);
    return customers;
  };
  //call function to generate hourly customers; for length of hours array generate number of cookies sold/hour and push into hourlyCookieSales array
  this.cookiesHourly = function(){
    this.hourlyCookieSales = [];
    for (var i = 0; i < hours.length; i++){
      var hourTotal = Math.round(this.customersHourly() * this.avgCookiesPerCustomer);
      this.hourlyCookieSales.push(hourTotal);
    }
    return this.hourlyCookieSales;
  };
  //call function to generate hourly sales; calculate total cookies sold in a day at specified location by adding each value in hourlyCookieSales array to running total
  this.totalCookies = function(){
    var total = 0;
    this.cookiesHourly();
    for (var i = 0; i < this.hourlyCookieSales.length; i++){
      total = total + this.hourlyCookieSales[i];
    }
    return total;
  };
  //call function to calculate total cookies sold in a day at specified location; create & add h1 node with name to DOM; create & add ul to DOM
  this.cookieSaleStatement = function(){
    this.totalCookies();
    var body = document.getElementsByTagName('body')[0];
    var storeName = document.createElement('h3');
    storeName.innerText = this.name;
    body.appendChild(storeName);

    var ul = document.createElement('ul');
    body.appendChild(ul);
//for every element in the hourlyCookieSales array create a new li node & add the text '#am/pm: # cookies' to ul; add li node to ul node in the DOM
    for (var i = 0; i < this.hourlyCookieSales.length; i++) {
      var newLi = document.createElement('li');
      newLi.innerText = this.hours[i] + ': ' + this.hourlyCookieSales[i] + ' cookies';
      ul.appendChild(newLi);
    }
//create a new li element with the text of total; append li node to ul node in DOM
    var totalCookies = document.createElement('li');
    totalCookies.innerText = 'Total: ' + this.total + ' cookies';
    ul.appendChild(allCookies);
  };
  this.cookieSaleStatement();
};

var pike = new Store('1st and Pike', 23, 65, 6.3);
var seaTac = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

//start 1st and Pike store object, methods, & DOM manipulation
// var body = document.getElementsByTagName('body')[0];
// var h3 = document.createElement('h3');
// h3.className = 'name';
// h3.innerText = pike.name;
// body.appendChild(h3);

// var ul = document.createElement('ul');
// // ul.id = 'pike';
// body.appendChild(ul);

//start SeaTac store object, methods, & DOM manipulation
// var seaTac = {
//   name: 'SeaTac Airport',
//   minCustomersHourly: 3,
//   maxCustomersHourly: 24,
//   avgCookiesPerCustomer: 1.2,
//   hourlySales: [],
//   salesStatements: [],
//   totalCookiesSold: '',
//   // customersHourly returns a random number of customers
//   customersHourly: function(){
//     var customers = Math.floor(Math.random() * (this.maxCustomersHourly - this.minCustomersHourly) + this.minCustomersHourly);
//     return customers;
//   },
//
//   // cookiesHourly creates an array of the cookies sold per hour, each element corresponds to sales for one hour; stored in hourlySales
//   cookiesHourly: function(){
//     for (var i = 0; i < this.hours.length; i++){
//       var hourTotal = Math.round(this.customersHourly() * this.avgCookiesPerCustomer);
//       this.hourlySales.push(hourTotal);
//     }
//     return this.hourlySales;
//   },
//
//     // cookieSaleStatement creates an array of strings of the form 'time am: #ofcookies cookies'; stored in salesStatements
//   cookieSaleStatement: function(){
//     for (var i = 0; i < this.hourlySales.length; i++){
//       if (i < 6) {
//         var message = this.hours[i] + 'am: ' + this.hourlySales[i] + ' cookies';
//       }
//       else {
//         var message = this.hours[i] + 'pm: ' + this.hourlySales[i] + ' cookies';
//       }
//       this.salesStatements.push(message);
//     }
//     return this.salesStatements;
//   },
//
//   //add up all numbers in hourlySales array to get total number of cookies sold in a day at that location
//   totalCookies: function(){
//     var total = 0;
//     for (var i = 0; i < this.hourlySales.length; i++){
//       total = total + this.hourlySales[i];
//     }
//     this.totalCookiesSold = 'Total: ' + total + ' cookies';
//   }
// };
//
// seaTac.cookiesHourly();
// seaTac.cookieSaleStatement();
// seaTac.totalCookies();
//
// var body = document.getElementsByTagName('body')[0];
// var h3 = document.createElement('h3');
// h3.className = 'name';
// h3.innerText = seaTac.name;
// body.appendChild(h3);
//
// var ul = document.createElement('ul');
// ul.id = 'seaTac';
// body.appendChild(ul);
//
// for (var i = 0; i < seaTac.salesStatements.length; i++) {
//   var newLi = document.createElement('li');
//   newLi.innerText = seaTac.salesStatements[i];
//   ul.appendChild(newLi);
// }
//
// var allCookies = document.createElement('li');
// allCookies.innerText = seaTac.totalCookiesSold;
// ul.appendChild(allCookies);
// //end SeaTac object
//
// //start Seattle Center store object, methods, & DOM manipulation
// var seattleCenter = {
//   name: 'Seattle Center',
//   minCustomersHourly: 11,
//   maxCustomersHourly: 38,
//   avgCookiesPerCustomer: 3.7,
//   hourlySales: [],
//   salesStatements: [],
//   totalCookiesSold: '',
//   // customersHourly returns a random number of customers
//   customersHourly: function(){
//     var customers = Math.floor(Math.random() * (this.maxCustomersHourly - this.minCustomersHourly) + this.minCustomersHourly);
//     return customers;
//   },
//
//   // cookiesHourly creates an array of the cookies sold per hour, each element corresponds to sales for one hour; stored in hourlySales
//   cookiesHourly: function(){
//     for (var i = 0; i < this.hours.length; i++){
//       var hourTotal = Math.round(this.customersHourly() * this.avgCookiesPerCustomer);
//       this.hourlySales.push(hourTotal);
//     }
//     return this.hourlySales;
//   },
//
//     // cookieSaleStatement creates an array of strings of the form 'time am: #ofcookies cookies'; stored in salesStatements
//   cookieSaleStatement: function(){
//     for (var i = 0; i < this.hourlySales.length; i++){
//       if (i < 6) {
//         var message = this.hours[i] + 'am: ' + this.hourlySales[i] + ' cookies';
//       }
//       else {
//         var message = this.hours[i] + 'pm: ' + this.hourlySales[i] + ' cookies';
//       }
//       this.salesStatements.push(message);
//     }
//     return this.salesStatements;
//   },
//
//   //add up all numbers in hourlySales array to get total number of cookies sold in a day at that location
//   totalCookies: function(){
//     var total = 0;
//     for (var i = 0; i < this.hourlySales.length; i++){
//       total = total + this.hourlySales[i];
//     }
//     this.totalCookiesSold = 'Total: ' + total + ' cookies';
//   }
// };
//
// seattleCenter.cookiesHourly();
// seattleCenter.cookieSaleStatement();
// seattleCenter.totalCookies();
//
// var body = document.getElementsByTagName('body')[0];
// var h3 = document.createElement('h3');
// h3.className = 'name';
// h3.innerText = seattleCenter.name;
// body.appendChild(h3);
//
// var ul = document.createElement('ul');
// ul.id = 'seattleCenter';
// body.appendChild(ul);
//
// for (var i = 0; i < seattleCenter.salesStatements.length; i++) {
//   var newLi = document.createElement('li');
//   newLi.innerText = seattleCenter.salesStatements[i];
//   ul.appendChild(newLi);
// }
//
// var allCookies = document.createElement('li');
// allCookies.innerText = seattleCenter.totalCookiesSold;
// ul.appendChild(allCookies);
// //end Seattle Center object
//
// //start Capitol Hill store object, methods, & DOM manipulation
// var capHill = {
//   name: 'Capitol Hill',
//   minCustomersHourly: 20,
//   maxCustomersHourly: 38,
//   avgCookiesPerCustomer: 2.3,
//   hourlySales: [],
//   salesStatements: [],
//   totalCookiesSold: '',
//   // customersHourly returns a random number of customers
//   customersHourly: function(){
//     var customers = Math.floor(Math.random() * (this.maxCustomersHourly - this.minCustomersHourly) + this.minCustomersHourly);
//     return customers;
//   },
//
//   // cookiesHourly creates an array of the cookies sold per hour, each element corresponds to sales for one hour; stored in hourlySales
//   cookiesHourly: function(){
//     for (var i = 0; i < this.hours.length; i++){
//       var hourTotal = Math.round(this.customersHourly() * this.avgCookiesPerCustomer);
//       this.hourlySales.push(hourTotal);
//     }
//     return this.hourlySales;
//   },
//
//     // cookieSaleStatement creates an array of strings of the form 'time am: #ofcookies cookies'; stored in salesStatements
//   cookieSaleStatement: function(){
//     for (var i = 0; i < this.hourlySales.length; i++){
//       if (i < 6) {
//         var message = this.hours[i] + 'am: ' + this.hourlySales[i] + ' cookies';
//       }
//       else {
//         var message = this.hours[i] + 'pm: ' + this.hourlySales[i] + ' cookies';
//       }
//       this.salesStatements.push(message);
//     }
//     return this.salesStatements;
//   },
//
//   //add up all numbers in hourlySales array to get total number of cookies sold in a day at that location
//   totalCookies: function(){
//     var total = 0;
//     for (var i = 0; i < this.hourlySales.length; i++){
//       total = total + this.hourlySales[i];
//     }
//     this.totalCookiesSold = 'Total: ' + total + ' cookies';
//   }
// };
//
// capHill.cookiesHourly();
// capHill.cookieSaleStatement();
// capHill.totalCookies();
//
// var body = document.getElementsByTagName('body')[0];
// var h3 = document.createElement('h3');
// h3.className = 'name';
// h3.innerText = capHill.name;
// body.appendChild(h3);
//
// var ul = document.createElement('ul');
// ul.id = 'capHill';
// body.appendChild(ul);
//
// for (var i = 0; i < capHill.salesStatements.length; i++) {
//   var newLi = document.createElement('li');
//   newLi.innerText = capHill.salesStatements[i];
//   ul.appendChild(newLi);
// }
//
// var allCookies = document.createElement('li');
// allCookies.innerText = capHill.totalCookiesSold;
// ul.appendChild(allCookies);
// //end Capitol Hill object
//
// //start Alki store object, methods, & DOM manipulation
// var alki = {
//   name: 'Alki',
//   minCustomersHourly: 2,
//   maxCustomersHourly: 16,
//   avgCookiesPerCustomer: 4.6,
//   hourlySales: [],
//   salesStatements: [],
//   totalCookiesSold: '',
//   // customersHourly returns a random number of customers
//   customersHourly: function(){
//     var customers = Math.floor(Math.random() * (this.maxCustomersHourly - this.minCustomersHourly) + this.minCustomersHourly);
//     return customers;
//   },
//
//   // cookiesHourly creates an array of the cookies sold per hour, each element corresponds to sales for one hour; stored in hourlySales
//   cookiesHourly: function(){
//     for (var i = 0; i < this.hours.length; i++){
//       var hourTotal = Math.round(this.customersHourly() * this.avgCookiesPerCustomer);
//       this.hourlySales.push(hourTotal);
//     }
//     return this.hourlySales;
//   },
//
//     // cookieSaleStatement creates an array of strings of the form 'time am: #ofcookies cookies'; stored in salesStatements
//   cookieSaleStatement: function(){
//     for (var i = 0; i < this.hourlySales.length; i++){
//       if (i < 6) {
//         var message = this.hours[i] + 'am: ' + this.hourlySales[i] + ' cookies';
//       }
//       else {
//         var message = this.hours[i] + 'pm: ' + this.hourlySales[i] + ' cookies';
//       }
//       this.salesStatements.push(message);
//     }
//     return this.salesStatements;
//   },
//
//   //add up all numbers in hourlySales array to get total number of cookies sold in a day at that location
//   totalCookies: function(){
//     var total = 0;
//     for (var i = 0; i < this.hourlySales.length; i++){
//       total = total + this.hourlySales[i];
//     }
//     this.totalCookiesSold = 'Total: ' + total + ' cookies';
//   }
// };
//
// alki.cookiesHourly();
// alki.cookieSaleStatement();
// alki.totalCookies();
//
// var body = document.getElementsByTagName('body')[0];
// var h3 = document.createElement('h3');
// h3.id = 'name';
// h3.innerText = alki.name;
// body.appendChild(h3);
//
// var ul = document.createElement('ul');
// ul.id = 'alki';
// body.appendChild(ul);
//
// for (var i = 0; i < alki.salesStatements.length; i++) {
//   var newLi = document.createElement('li');
//   newLi.innerText = alki.salesStatements[i];
//   ul.appendChild(newLi);
// }
//
// var allCookies = document.createElement('li');
// allCookies.innerText = alki.totalCookiesSold;
// ul.appendChild(allCookies);
//
// //end Alki store
