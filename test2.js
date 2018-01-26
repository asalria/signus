var csv = require('ya-csv');
var functions = require('./functions.js');
var date = new Date();
var currentyear = date.getFullYear();
var lastyear = currentyear - 1;
var a = 0.83;
var b = 1.38;
var c = 2.24;
var d = 10.28;
var e1 = 0.34;
var e2 = 2.02;
var e3 = 4.42;
var e4 = 10.81;
var e5 = 21.06;
var e6 = 36.86;
var invoices = ['ZZF2','ZZL2','ZZDF','ZYF2','ZYS2'];
var creditnotes = ['ZZS1','ZZG2','ZZCF','ZZRE','ZZBX','ZYS1'];

//load csv file
var loadCsv = function() {
   var reader = csv.createCsvFileReader('signus.csv', {
     'separator': '/n',
     'quote': '"',
     'escape': '"',       
     'comment': '',
 });

 var allEntries = new Array();

 reader.addListener('data', function(data) {
   //this gets called on every row load
   allEntries.push(data);
 });
//Date of invoice - 7
//Item category - 11
//Quantity - 17
//Signus - 18
//Doc type - 24
 var newArray = [];
 reader.addListener('end', function(data) {
    
   //this gets called when it's finished loading the entire file
   for(var i = 0; i < allEntries.length; i++){
        //Saco cada linea
       arrayline = allEntries[i][0].split(";");
       newArray.push(arrayline);
     //  console.log(arrayline);
       year = arrayline[7].substr(arrayline[7].length-4);
       category = arrayline[11];
       qty = arrayline[17];
       signus = arrayline[18];
       doctype = arrayline[24];
       if(signus>0){
        //    console.log(`Year ${year}, Cat ${category}, Qty ${qty}, Signus ${signus}, DocType ${doctype}`);
       }

       
   }
 //  console.log(arrayline);
   arraylineCY = newArray.map(functions.currentYear);
   arraylinePY = newArray.map(functions.previousYear);
   console.log(arraylinePY);
   invoicesPY = arraylinePY.map(functions.invoices);
   console.log(arraylinePY);
   cnCY = arraylineCY.map(functions.creditNotes);
    return allEntries;
 });
};

var myUsers = loadCsv();

