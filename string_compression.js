function compressString(str){
  let compressedString="";
  let count=0;
  for(let i=0; i<str.length; i++){
  count++;
    if(i+1 >str.length || str[i] != str[i+1]){
    compressedString += str[i] + count;
    count=0;
    }
   }
   return compressedString;
}
