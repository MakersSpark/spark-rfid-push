var EventSource = require('eventsource');
var unirest = require('unirest');

var express = require('express')
var app = express();

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))


var eventSourceInitDict = {
    headers: {Authorization: process.env.SPARK_TOKEN}
};
 
var url = ("https://api.spark.io/v1/devices/50ff75065067545639190387/events/?access_token=" + process.env.SPARK_TOKEN);
 
var es = new EventSource(url);
console.log(es); 
//add your listener
es.addEventListener('scannedCardID', function(e) {
    console.log(e)
	unirest.post('http://spark-print-staging.herokuapp.com/')
		.headers({ 'Accept': 'application/json' })
		.send(e)
		.end(function (response) {
		  console.log(response.body);
	});
    // console.log(parsedData); //result [0,12.14,12.15,548.54,15,457]
});




app.get('/', function(request, response) {
  response.send('Hello World!')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
  console.log("Spark token is " + process.env.SPARK_TOKEN);
})
