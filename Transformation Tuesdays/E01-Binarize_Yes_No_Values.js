/**
 * binarizeYesNo converts a yes response to 1 and no to 0
 * @param  {string} ans string to be converted
 * @return {int}     returns 1 (yes) or 0 (no) or original value (no match)
 */
function binarizeYesNo(ans) {
   ans = ans.toLowerCase();
   if(['yes','y'].indexOf(ans) >= 0) {
      return 1;
   } else if(['no','n'].indexOf(ans) >= 0) {
      return 0;
   } else {
      return ans;
   }
}
