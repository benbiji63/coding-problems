function dominator(arr) {
  for(let i=0, obj={}; i<arr.length; i++){
  	obj[arr[i]]=obj[arr[i]]+1||1
  	if(obj[arr[i]]>arr.length/2) return arr[i]
  }return -1 
}

function dominator(arr) {
  arr.sort();
  for (var i = 0, v = 0, c = 0; i < arr.length; i++) {
     if (v == arr[i]) c++;
     else { 
       v = arr[i];
       c = 1;
     }
     if (c > arr.length / 2) return v;
  }
  return -1;
}

function dominator(arr) {
  for(let i=0, obj={}; i<arr.length; i++){
  	obj[arr[i]]=obj[arr[i]]+1||1
  	if(obj[arr[i]]>arr.length/2) return arr[i]
  }return -1 
}