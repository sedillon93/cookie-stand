'use strict';

var alki = {
  name: 'Alki',
  hours: [6,7,8,9,10,11,12,1,2,3,4,5,6,7,8],
  minCustomersHourly: 2,
  maxCustomersHourly: 16,
  avgCookiesPerCustomer: 4.6,
  hourlySales: [],
  customersHourly: function(){
    var customers = Math.floor(Math.random() * (this.maxCustomersHourly - this.minCustomersHourly) + this.minCustomersHourly);
    return customers;
  },
  cookiesHourly: function(){
    for (var i = 0; i < this.hours.length; i++){
      var hourTotal = Math.round(this.customersHourly() * this.avgCookiesPerCustomer);
      console.log(hourTotal);
      this.hourlySales.push(hourTotal);
    }
    return this.hourlySales;
  },
  cookieSaleList: function(){
    for (var i = 0; i < this.hourlySales.length; i++){
      if (i < 6) {
        var message = this.hours[i] + 'am: ' + this.hourlySales[i] + 'cookies';
      }
      else {
        var message = this.hours[i] + 'pm: ' + this.hourlySales[i] + 'cookies';
      }
    }
    return message;
  }
};
