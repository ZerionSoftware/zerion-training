// sample record data
var record = {
    "readings": [{
        "r1": 42.55,
        "r2": 32.53,
        "r3": 38.48,
        "r4": 33.55,
        "r5": 15.97,
        "r6": 24.84,
        "r7": 11.71,
        "r8": 28.59,
        "r9": 21.42,
        "r10": 18.46
    }, {
        "r1": 20.7,
        "r2": 43.06,
        "r3": 17.0,
        "r4": 26.8,
        "r5": 39.12,
        "r6": 25.18,
        "r7": 10.37,
        "r8": 34.7,
        "r9": 13.33,
        "r10": 22.12
    }, {
        "r1": 26.75,
        "r2": 24.25,
        "r3": 19.46,
        "r4": 44.06,
        "r5": 11.45,
        "r6": 39.31,
        "r7": 20.03,
        "r8": 21.79,
        "r9": 25.73,
        "r10": 14.12
    }, {
        "r1": 18.09,
        "r2": 32.71,
        "r3": 39.49,
        "r4": 25.09,
        "r5": 24.43,
        "r6": 41.38,
        "r7": 38.99,
        "r8": 44.74,
        "r9": 21.75,
        "r10": 44.14
    }, {
        "r1": 13.97,
        "r2": 26.81,
        "r3": 17.03,
        "r4": 30.69,
        "r5": 17.38,
        "r6": 37.12,
        "r7": 31.43,
        "r8": 14.49,
        "r9": 29.31,
        "r10": 29.22
    }]
};

// extract subform records to new variable
var subforms = record.readings;

// placeholder variables to be used later
var matrix = [];  // 2-D array
var arr = [];     // single row

// loop through the first subform record's keys
for(var key in subforms[0]) {
   arr = [key]; // add the key to the single row
   for(var i=0; i < subforms.length; i++) {
      arr.push(subforms[i][key]); // add reading from each subform record
   }
   matrix.push(arr); // add row to matrix
}

// print out matrix
console.log(matrix);
