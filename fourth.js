function foo () { 
   var bar; 
   quux = 'quux2'; 
   function zip () { 
     var quux; 
     bar = true; 
   } 
   return zip; 
 } 
