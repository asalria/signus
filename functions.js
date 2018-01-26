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
var invoicelist = ['ZZF2','ZZL2','ZZDF','ZYF2','ZYS2'];
var creditnotelist = ['ZZS1','ZZG2','ZZCF','ZZRE','ZZBX','ZYS1'];

module.exports = 
{


currentYear: function (array){
//    console.log("Current year:" + currentyear);
    if(typeof(array[7]) != undefined)
    {
        year = array[7].substr(array[7].length-4);
//       console.log(year);
        if( year == currentyear ){
            console.log(array);
            return array;
        }
    }
    
},

previousYear: function (array){
//    console.log("Prev year:" + lastyear);
    if(typeof(array[7]) != undefined)
    {
        year = array[7].substr(array[7].length-4);
     //   console.log(year);
        if( year == lastyear ){
      //      console.log(array);
            return array;
        }
    }
},

invoices: function (array){
    console.log(array);
    if(typeof(array[24]) != undefined){
        if(array[24].indexOf(invoicelist) > -1){
            return array;
        }
    }
},

creditNotes: function (array){
    if(typeof(array[24]) != undefined){
        if(array[24].indexOf(creditnotelist) > -1){
            return array;
        }
    }
}

};
