'use strict';

var alki = {
  name: 'Alki',
  hours: [6,7,8,9,10,11,12,1,2,3,4,5,6,7,8],
  minCustomersHourly: 2,
  maxCustomersHourly: 16,
  avgCookiesPerCustomer: 4.6,
  hourlySales: [],
  salesStatements: [],
  totalCookiesSold: '',
  // customersHourly returns a random number of customers
  customersHourly: function(){
    var customers = Math.floor(Math.random() * (this.maxCustomersHourly - this.minCustomersHourly) + this.minCustomersHourly);
    return customers;
  },

  // cookiesHourly creates an array of the cookies sold per hour, each element corresponds to sales for one hour; stored in hourlySales
  cookiesHourly: function(){
    for (var i = 0; i < this.hours.length; i++){
      var hourTotal = Math.round(this.customersHourly() * this.avgCookiesPerCustomer);
      this.hourlySales.push(hourTotal);
    }
    return this.hourlySales;
  },

    // cookieSaleStatement creates an array of strings of the form 'time am: #ofcookies cookies'; stored in salesStatements
  cookieSaleStatement: function(){
    for (var i = 0; i < this.hourlySales.length; i++){
      if (i < 6) {
        var message = this.hours[i] + 'am: ' + this.hourlySales[i] + ' cookies';
      }
      else {
        var message = this.hours[i] + 'pm: ' + this.hourlySales[i] + ' cookies';
      }
      this.salesStatements.push(message);
    }
    return this.salesStatements;
  },

  //add up all numbers in hourlySales array to get total number of cookies sold in a day at that location
  totalCookies: function(){
    var total = 0;
    for (var i = 0; i < this.hourlySales.length; i++){
      total = total + this.hourlySales[i];
    }
    this.totalCookiesSold = 'Total: ' + total + ' cookies';
  }
};

alki.cookiesHourly();
alki.cookieSaleStatement();
alki.totalCookies();

var body = document.getElementsByTagName('body')[0];
var h1 = document.createElement('h1');
h1.id = 'name';
h1.innerText = alki.name;
body.appendChild(h1);

var ul = document.createElement('ul');
ul.id = 'alki';
body.appendChild(ul);

for (var i = 0; i < alki.salesStatements.length; i++) {
  var newLi = document.createElement('li');
  newLi.innerText = alki.salesStatements[i];
  ul.appendChild(newLi);
}

var allCookies = document.createElement('p');
p.id = 'total';
p.innerText = alki.totalCookiesSold[0];
body.appendChild(p);
