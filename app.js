var alki = {
  name: 'Alki',
  hours: [6,7,8,9,10,11,12,1,2,3,4,5,6,7,8],
  minCustomersHourly: 2,
  maxCustomersHourly: 16,
  avgCookiesPerCustomer: 4.6,
  hourlySales: [],
  customersHourly: function(){
    Math.floor(Math.random() * (maxCustomersHourly - minCustomersHourly) + minCustomersHourly);
  },
  changeMinCustomers: function(newMin){
    this.minCustomersHourly = newMin;
  },
  changeMaxCustomers: function(newMax){
    this.maxCustomersHourly = newMax;
  },
  changeAvgCookies: function(newAvg){
    this.avgCookiesPerCustomer = newAvg;
  },
  cookiesHourly: function(){
    for (var i = 0; i < this.hours.length; i++){
      var hourTotal = this.customersHourly * this.avgCookiesPerCustomer;
      if (i <= 6){
        var displayMessage = this.hours[i] + 'am: ' + hourTotal + ' cookies';
      }
      else{
        var displayMessage = this.hours[i] + 'pm: ' + hourTotal + ' cookies';
      };
      hourlySales.push(displayMessage);
    }
  }
};
