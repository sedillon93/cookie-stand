'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function Store(name, minCustomersHourly, maxCustomersHourly, avgCookiesPerCustomer){
  this.name = name;
  this.mincCustomersHourly = minCustomersHourly;
  this.maxCustomersHourly = maxCustomersHourly;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.hourlyCookieSales = [];
  customersHourly = function(){
    var customers = Math.floor(Math.random() * (this.maxCustomersHourly - this.minCustomersHourly) + this.minCustomersHourly);
    return customers;
  };
  cookiesHourly = function(){
    hourlyCookieSales = [];
    for (var i = 0; i < hours.length; i++){
      var hourTotal = Math.round(this.customersHourly() * this.avgCookiesPerCustomer);
      this.hourlyCookieSales.push(hourTotal);
    }
    return this.hourlyCookieSales;
  };
  totalCookies = function(){
    var total = 0;
    for (var i = 0; i < this.hourlyCookieSales.length; i++){
      total = total + this.hourlyCookieSales[i];
    }
    this.totalCookiesSold = 'Total: ' + total + ' cookies';
  };
  cookieSaleStatement = function(){
    this.cookiesHourly();
    this.totalCookies();
    for (var i = 0; i < this.hourlySales.length; i++){
      return this.salesStatements;
    }
  };
}

//start 1st and Pike store object, methods, & DOM manipulation
var pike = {
  // name: '1st and Pike',
  // minCustomersHourly: 23,
  // maxCustomersHourly: 65,
  // avgCookiesPerCustomer: 6.3,
  // hourlyCookieSales: [],
  salesStatements: [],
  // totalCookiesSold: '',
};

var body = document.getElementsByTagName('body')[0];
var h3 = document.createElement('h3');
h3.className = 'name';
h3.innerText = pike.name;
body.appendChild(h3);

var ul = document.createElement('ul');
ul.id = 'pike';
body.appendChild(ul);

for (var i = 0; i < pike.salesStatements.length; i++) {
  var newLi = document.createElement('li');
  newLi.innerText = pike.salesStatements[i];
  ul.appendChild(newLi);
}

var allCookies = document.createElement('li');
allCookies.innerText = pike.totalCookiesSold;
ul.appendChild(allCookies);
//end 1st and Pike object

//start SeaTac store object, methods, & DOM manipulation
var seaTac = {
  name: 'SeaTac Airport',
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
var h3 = document.createElement('h3');
h3.className = 'name';
h3.innerText = seaTac.name;
body.appendChild(h3);

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
var h3 = document.createElement('h3');
h3.className = 'name';
h3.innerText = seattleCenter.name;
body.appendChild(h3);

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
var h3 = document.createElement('h3');
h3.className = 'name';
h3.innerText = capHill.name;
body.appendChild(h3);

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
var h3 = document.createElement('h3');
h3.id = 'name';
h3.innerText = alki.name;
body.appendChild(h3);

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
