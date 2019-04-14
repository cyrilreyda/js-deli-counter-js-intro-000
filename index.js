var katzDeliLine = [];

function takeANumber(currentLine, newName) {
  return `Welcome, ${newName}. You are number ${currentLine} in line.` 
}


function nowServing(katzDeliLine) {
  
  if (katzDeliLine.length) {
    return katzDeliLine.shift();
  }
  else {return "There is nobody waiting to be served!"}
}


function currentLine(katzDeliLine) {
   if (katzDeliLine.length) {
     
      for (let i = 0; i < katzDeliLine.length; i++) {
         return "The line is currently:
       }
       
   } else {return "The line is currently empty."}
} 