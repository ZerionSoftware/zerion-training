function location_to_json(l) {
   var location_obj = {}; // create empty object for location information
   l = l.replace(/(\r\n|\n|\r)/gm,""); // remove line breaks

   var location_arr = l.split(","); // create array, split by comma
   for(var i=0;i<location_arr.length;i++) { // loop through array
      var kvp = location_arr[i].split(":"); // split array's value by colon
      var key = kvp[0];
      var value = kvp[1];
      if(key == "Time") { value = kvp[1] + ":" + kvp[2] + ":" + kvp[3]; } // overwrite value if key is Time
      location_obj[key] = value; // add key-value pair to location object
   }

   return location_obj;
}

var location = "Latitude:38.957348,\nLongitude:-77.414580,\nAltitude:0.000000,\nSpeed:0.000000,\nAccuracy:30.000000,\nProvider:network,\nTime:04\/29\/2017 03:57:14 EDT";

console.log(location_to_json(location));
