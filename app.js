'use strict';

var stores = [];
var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

function cookieShop(name, minCustomersHourly, maxCustomersHourly, avgCookiesPerCustomer){
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
  };

  this.cookieSaleStatement();

  this.render = function(){
    var table = document.getElementById('summary');
    var row = document.createElement('tr');
    var name = document.createElement('td');
    name.innerText = this.name;
    row.appendChild(name);
    for (var j = 0; j < hours.length; j++){
      var tdCookies = document.createElement('td');
      tdCookies.innerText = this.hourlyCookieSales[j];
      row.appendChild(tdCookies);
    }
    var total = document.createElement('td');
    total.innerText = this.total;
    row.appendChild(total);
    table.appendChild(row);
  };
  stores.push(this);
};

var pike = new cookieShop('1st and Pike', 23, 65, 6.3);
var seaTac = new cookieShop('SeaTac Airport', 3, 24, 1.2);
var seattleCennter = new cookieShop('Seattle Center', 11, 38, 3.7);
var capHill = new cookieShop('Capitol Hill', 20, 38, 2.3);
var alki = new cookieShop('Alki', 2, 16, 4.6);

var header = function(){
  var table = document.getElementById('summary');
  var tr = document.createElement('tr');
  table.appendChild(tr);

  var emptyCell = document.createElement('th');
  tr.appendChild(emptyCell);

  for (var i = 0; i < hours.length; i++){
    var cellHeaders = document.createElement('th');
    cellHeaders.innerText = hours[i];
    tr.appendChild(cellHeaders);
  }
  var dailyTotal = document.createElement('th');
  dailyTotal.innerText = 'Daily Location Total';
  tr.appendChild(dailyTotal);
};

var footer = function(){
  var table = document.getElementById('summary');
  var row = document.createElement('tr');
  row.id = ('footer');
  var total = document.createElement('td');
  total.innerText = 'Totals';
  row.appendChild(total);
  var grandTotal = 0;
  for (var i = 0; i < hours.length; i++){
    var totalHourlyCookies = 0;
    for (var j = 0; j < stores.length; j++){
      totalHourlyCookies += stores[j].hourlyCookieSales[i];
    };
    var td = document.createElement('td');
    td.innerText = totalHourlyCookies;
    row.appendChild(td);
    grandTotal += totalHourlyCookies;
  }
  var completeTotal = document.createElement('td');
  completeTotal.innerText = grandTotal;
  row.appendChild(completeTotal);
  table.appendChild(row);
};

//function that will create the new store
function createStore(event){
  event.preventDefault();
  var name = event.target.storeName.value;
  var minCustomersHourly = parseInt(event.target.minHourly.value);
  var maxCustomersHourly = parseInt(event.target.maxHourly.value);
  var avgCookiesPerCustomer = parseFloat(event.target.avgCookies.value);
  var table = document.getElementById('summary');
  var footer = document.getElementById('footer');
  table.removeChild(footer);
  var name = new cookieShop(name, minCustomersHourly, maxCustomersHourly, avgCookiesPerCustomer);
  name.render();
  window.footer();
  form.reset();
};
//when submit event happens, run createStore
var form = document.getElementById('form');
form.addEventListener('submit', createStore);
//
function printTest(event){
  alert('wrong!');
}
// function greaterThanMin(event){
//   // var max = parseInt(document.getElementById('max'));
//   // var min = parseInt(document.getElementById('min'));
//   // if (max < min){
//   alert('wrong!');
//   // }
// }
//
// var max = document.getElementById('max');
// max.addEventListener('blur', greaterThanMin);

header();
function body(){
  for (var i = 0; i < stores.length; i++){
    stores[i].render();
  }
};
body();
footer();
