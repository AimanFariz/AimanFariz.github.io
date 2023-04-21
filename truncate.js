// const pTag = document.getElementById('description'); // Get the <p> element by ID
// const maxLength = 10; // Maximum number of characters allowed
// const text = pTag.textContent; // Get the text content of the <p> element

// if (text.length > maxLength) {
//   // If the text length exceeds the maximum length
//   const truncatedText = text.slice(0, maxLength) + '...'; // Truncate the text and add '...' at the end
//   pTag.textContent = truncatedText; // Update the text content of the <p> element
// }

const text = document.getElementById('description').innerHTML; // Get the <p> element by ID
const maxLength = 10; // Maximum number of characters allowed
let result = ''


for(let i = 0;i<text.length;i++){
        if(result.length < maxLength){
          result+=text[i]
        }else if(text.length == num){
          result += '...'
        }
        document.getElementById('description').innerHTML = result
      }

// function truncateString(str, num) {
//     let s = str.slice()
//     let result = ''
//     for(let i = 0;i<s.length;i++){
//       if(result.length < num){
//         result+=str[i]
//       }else if(result.length == num){
//         result += '...'
//       }
//     }
//     return result;
//   }

// document.getElementById("truncate") = truncateString(desc, 20)

