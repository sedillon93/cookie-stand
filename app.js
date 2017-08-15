'use strict';

//start SeaTac store object, methods, & DOM manipulation
var seaTac = {
  name: 'SeaTac Airport',
  hours: [6,7,8,9,10,11,12,1,2,3,4,5,6,7,8],
  minCustomersHourly: 3,
  maxCustomersHourly: 24,
  avgCookiesPerCustomer: 1.2,
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

seaTac.cookiesHourly();
seaTac.cookieSaleStatement();
seaTac.totalCookies();

var body = document.getElementsByTagName('body')[0];
var h1 = document.createElement('h1');
h1.className = 'name';
h1.innerText = seaTac.name;
body.appendChild(h1);

var ul = document.createElement('ul');
ul.id = 'seaTac';
body.appendChild(ul);

for (var i = 0; i < seaTac.salesStatements.length; i++) {
  var newLi = document.createElement('li');
  newLi.innerText = seaTac.salesStatements[i];
  ul.appendChild(newLi);
}

var allCookies = document.createElement('li');
allCookies.innerText = seaTac.totalCookiesSold;
ul.appendChild(allCookies);
//end SeaTac object

//start Seattle Center store object, methods, & DOM manipulation
var seattleCenter = {
  name: 'Seattle Center',
  hours: [6,7,8,9,10,11,12,1,2,3,4,5,6,7,8],
  minCustomersHourly: 11,
  maxCustomersHourly: 38,
  avgCookiesPerCustomer: 3.7,
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

seattleCenter.cookiesHourly();
seattleCenter.cookieSaleStatement();
seattleCenter.totalCookies();

var body = document.getElementsByTagName('body')[0];
var h1 = document.createElement('h1');
h1.className = 'name';
h1.innerText = seattleCenter.name;
body.appendChild(h1);

var ul = document.createElement('ul');
ul.id = 'seattleCenter';
body.appendChild(ul);

for (var i = 0; i < seattleCenter.salesStatements.length; i++) {
  var newLi = document.createElement('li');
  newLi.innerText = seattleCenter.salesStatements[i];
  ul.appendChild(newLi);
}

var allCookies = document.createElement('li');
allCookies.innerText = seattleCenter.totalCookiesSold;
ul.appendChild(allCookies);
//end Seattle Center object

//start Capitol Hill store object, methods, & DOM manipulation
var capHill = {
  name: 'Capitol Hill',
  hours: [6,7,8,9,10,11,12,1,2,3,4,5,6,7,8],
  minCustomersHourly: 20,
  maxCustomersHourly: 38,
  avgCookiesPerCustomer: 2.3,
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

capHill.cookiesHourly();
capHill.cookieSaleStatement();
capHill.totalCookies();

var body = document.getElementsByTagName('body')[0];
var h1 = document.createElement('h1');
h1.className = 'name';
h1.innerText = capHill.name;
body.appendChild(h1);

var ul = document.createElement('ul');
ul.id = 'capHill';
body.appendChild(ul);

for (var i = 0; i < capHill.salesStatements.length; i++) {
  var newLi = document.createElement('li');
  newLi.innerText = capHill.salesStatements[i];
  ul.appendChild(newLi);
}

var allCookies = document.createElement('li');
allCookies.innerText = capHill.totalCookiesSold;
ul.appendChild(allCookies);
//end Capitol Hill object

//start Alki store object, methods, & DOM manipulation
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

var allCookies = document.createElement('li');
allCookies.innerText = alki.totalCookiesSold;
ul.appendChild(allCookies);

//end Alki store
