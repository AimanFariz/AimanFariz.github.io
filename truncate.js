let pTag = document.getElementById('pTag')
let text = pTag.innerHTML

function truncateString(str, num) {
  let s = str.slice()
  let result = ''
  for(let i = 0; i < s.length; i++){
    if(result.length < num){
      result += s[i]
    }else if(result.length === num){
      result += '...'
    }
  }
  pTag.innerHTML = result; // Set the truncated text as innerHTML of 'final' element
}

truncateString(text, 3); // Call the function with desired number of characters to truncate

