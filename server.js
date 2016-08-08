var express = require('express');

var app = express();
var months= ["January","Febuary","March","April","May","June","July","August","September","October","November","December"];
app.get('/:DATE', function (req, res) {
    var val = req.params.DATE;
    var testExp = /^[0-9]{10}/;
    var date;
    var testDate = Date.parse(val).toString();
    var returnDate = {"unix": null,"natural":null};
    var setReturn = function(setDate){
      returnDate.unix = (Date.parse(setDate) / 1000).toString();
      returnDate.natural = months[setDate.getMonth()]+ " " + setDate.getDate() + ", " + setDate.getFullYear();
    };
    if (testExp.test(val.toString()) === true) {
      date = new Date(val * 1000);
      setReturn(date);
      res.send(returnDate);
    } else if (testExp.test(testDate) === true) {
      date = new Date(val);
      setReturn(date);
      res.send(returnDate);
    } else {
      res.send(returnDate);
    }
    
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080');
});