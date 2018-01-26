var fs = require('fs');
var parse = require('csv-parse');
var transform = require('stream-transform');

var chunk;
var array;
var output = [];
var parser = parse({delimiter: ','})
var input = fs.createReadStream('test.csv');
/*
var transformer = transform(function(record, callback){
  setTimeout(function(){
    callback(null, record.join(' ')+'\n');
  }, 500);
}, {parallel: 10});
*/
input.on('data', (chunk) => {
    console.log(`Received ${chunk} bytes of data.`);
    array = chunk.split("\n");
    array.forEach(value =>{
        newarray = value.split(",");
        console.log(newarray);
    });
  });
input.on('end', () => {
    console.log('There will be no more data.');
  });



/*
input.pipe(parser).pipe(transformer).pipe(process.stdout);
*/