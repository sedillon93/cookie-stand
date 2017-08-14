var Alki = {
  name: 'Alki',
  hours: [6,7,8,9,10,11,12,1,2,3,4,5,6,7,8],
  minCustomersHourly: 2,
  maxCustomersHourly: 16,
  avgCookiesPerCustomer: 4.6,
  changeMinCustomers: function(newMin){
    this.minCustomersHourly = newMin;
  },
  changeMaxCustomers: function(newMax){
    this.maxCustomersHourly = newMax;
  },
  changeAvgCookies: function(newAvg){
    this.avgCookiesPerCustomer = newAvg;
  },
  customersHourly: function(){
    Math.floor(Math.random() * (maxCustomersHourly - minCustomersHourly) + minCustomersHourly);
  },
  cookiesHourly: function(){
    var hourlySales = this.customersHourly * this.avgCookiesPerCustomer;
  }
};
