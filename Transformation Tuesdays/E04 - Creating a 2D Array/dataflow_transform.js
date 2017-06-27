var subforms = record.readings;
var matrix = [];
var arr = [];

for(var key in subforms[0]) {
   arr = [key];
   for(var i=0; i < subforms.length; i++) {
      arr.push(subforms[i][key]);
   }
   matrix.push(arr);
}

record.readings = matrix;
