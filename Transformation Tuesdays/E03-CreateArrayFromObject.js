/**
 * kvpListToArray transforms a dictionary style object to an 'array of objects'
 * @param  {object} kvps         dictionary style object with key-value-pairs
 * @param  {type} key_label      label for the key in each key-value-pair
 * @param  {type} value_label    label for the value in each key-value-pair
 * @return {type}                an array of objects
 */
function kvpListToArray(obj,key_label,value_label) {
   var array = [];
   var tempObj = {};

   for(var key in obj) {
      tempObj = {};
      tempObj[key_label] = key;
      tempObj[value_label] = obj[key];
      array.push(tempObj);
   }

   return array;
}

var record = {
   "Data Collector": 70,
   "Power User": 12,
   "Designer": 5
};

console.log(kvpListToArray(record,"user_level","quantity"));
