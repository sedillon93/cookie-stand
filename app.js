'use strict';

var alki = {
  name: 'Alki',
  hours: [6,7,8,9,10,11,12,1,2,3,4,5,6,7,8],
  minCustomersHourly: 2,
  maxCustomersHourly: 16,
  avgCookiesPerCustomer: 4.6,
  customersHourly: function(){
    var customers = Math.floor(Math.random() * (this.maxCustomersHourly - this.minCustomersHourly) + this.minCustomersHourly);
    return customers;
  },
  hourlySales: [],
  cookiesHourly: function(){
    for (var i = 0; i < this.hours.length; i++){
      var hourTotal = Math.round(this.customersHourly() * this.avgCookiesPerCustomer);
      console.log(hourTotal);
      this.hourlySales.push(hourTotal);
    }
    return this.hourlySales;
  }
};
