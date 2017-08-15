'use strict';

var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

function Store(name, minCustomersHourly, maxCustomersHourly, avgCookiesPerCustomer){
  this.name = name;
  this.minCustomersHourly = minCustomersHourly;
  this.maxCustomersHourly = maxCustomersHourly;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.total = 0;
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
      this.total += this.hourlyCookieSales[i];
    }
  };
  //call function to calculate total cookies sold in a day at specified location; create & add h1 node with name to DOM; create & add ul to DOM
  this.cookieSaleStatement = function(){
    this.totalCookies();
    this.cookieSaleStatement();
  };
};

var pike = new Store('1st and Pike', 23, 65, 6.3);
var seaTac = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

var header = function(){
  var table = document.getElementsByTagName('table')[0];
  var tr = document.createElement('tr');
  table.appendChild(tr);

  var emptyCell = document.createElement('th');
  tr.appendChild(emptyCell);

  for (var i = 0; i < hours.length; i++){
    var cellHeaders = document.createElement('th');
    cellHeaders.innerText = hours[i];
    tr.appendChild(cellHeaders);
  }
};

var render = function(){
  var table = document.getElementsByTagName('table')[0];
  var tr = document.createElement('tr');
  table.appendChild(tr);
  var name = document.createElement('td');
  name.innerText = this.name;

  for (var i = 0; i < this.hourlyCookieSales.length; i++){
    var tdCookies = document.createElement('td');
    tdCookies.innerText = hourlyCookieSales[i];
    tr.appendChild(tdCookies);
  }
};

header();
alki.render();
// var body = document.getElementsByTagName('body')[0];
// var storeName = document.createElement('h3');
// storeName.innerText = this.name;
// body.appendChild(storeName);
//
// var ul = document.createElement('ul');
// body.appendChild(ul);
// //for every element in the hourlyCookieSales array create a new li node & add the text '#am/pm: # cookies' to ul; add li node to ul node in the DOM
// for (var i = 0; i < this.hourlyCookieSales.length; i++) {
//   var newLi = document.createElement('li');
//   newLi.innerText = hours[i] + ': ' + this.hourlyCookieSales[i] + ' cookies';
//   ul.appendChild(newLi);
// }
// //create a new li element with the text of total; append li node to ul node in DOM
// var totalCookies = document.createElement('li');
// totalCookies.innerText = 'Total: ' + this.total + ' cookies';
// ul.appendChild(totalCookies);
// };
