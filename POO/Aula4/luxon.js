import { DateTime } from "luxon";

let dt = DateTime.now();
console.log(dt.year);     
console.log(dt.month);    
console.log(dt.day);      
console.log(dt.second);  
console.log(dt.weekday); 
console.log(dt.zoneName);    
console.log(dt.offset);       
console.log(dt.daysInMonth);  
console.log(dt.toLocaleString());   
//dt.plus({ hours: 3, minutes: 2 });
let aux = dt.minus({ days: 7 });
console.log(aux.toLocaleString());   

