var csv = require('ya-csv');
var Parse = require('csv-parse');
var fs = require('fs');
var sourceFilePath = 'signus.csv';
var csv = require('csv-array');

var source = fs.createReadStream(sourceFilePath);


var linesRead = 0;

    var parser = Parse({
        delimiter: '/n'
    });

    parser.on("readable", function(){
        var record;
        while (record = parser.read()) {
            linesRead++;
            if(linesRead == 1){
            recordArray = Object.values(record);
            console.log(recordArray.length());
            console.log(typeof(linesRead));
            }
        }
    });


    csv.parseCSV("test.csv", function(data){
      console.log(JSON.stringify(data));
    });

    parser.on("error", function(error){
        handleError(error)
    });

    parser.on("end", function(){
        linesRead = 0;
    });

    source.pipe(parser);


