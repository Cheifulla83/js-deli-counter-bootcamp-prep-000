function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}


function takeANumber2(line) {
  var spot = 47;
  line.push(spot);
  return `Welcome, you are ${spot}`
}


function nowServing(line) {
  if(line[0]) {
    return `Currently serving ${line.shift()}.`
  } else {
    return "There is nobody waiting to be served!";
  }
  }
  
  
function currentLine(line) {
  var sent = 'The line is currently: '
 if(line[0]) {
    for (let i = 0; i < line.length; i++) { 
      sent = sent.concat(`${i + 1}. ${line[i]}, `);
     }
     return sent.slice(0, -2);
      }else {
     return "The line is currently empty.";
     }
     }
 
  
var line = ['Kim', 'Mike', 'John'];
console.log(currentLine(line));
takeANumber2