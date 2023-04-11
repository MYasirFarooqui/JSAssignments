// Q1
// function adder(x) {
//     return function(y) {
//       return x + y;
//     }
//   }

// Q2
// function searchArray(arr, val) {
//     if (arr.length === 0) {
//       return false;
//     }
    
//     if (arr[0] === val) {
//       return true;
//     }
    
//     return searchArray(arr.slice(1), val);
//   }

// Q3
// function addParagraph(text) {
//     const newParagraph = document.createElement("p");
//     newParagraph.textContent = text;
//     document.body.appendChild(newParagraph);
//   }

// Q4
// function addListItem(text) {
//     const newListItem = document.createElement("li");
//     newListItem.textContent = text;
//     const unorderedList = document.querySelector("ul");
//     unorderedList.appendChild(newListItem);
//   }

// Q5
// function changeBackgroundColor(element, newColor) {
//     element.style.backgroundColor = newColor;
//   }

// Q6
// function saveObjectToLocalStorage(key, object) {
//     localStorage.setItem(key, JSON.stringify(object));
//   }

// Q7
// function getObjectFromLocalStorage(key) {
//     const item = localStorage.getItem(key);
//     return JSON.parse(item);
//   }

// Q8
// function saveObjectPropertiesToLocalStorage(object) {
//     // Save each property to localStorage
//     for (const key in object) {
//       const value = object[key];
//       localStorage.setItem(key, JSON.stringify(value));
//     }
  
//     // Retrieve the object from localStorage
//     const retrievedObject = {};
//     for (const key in object) {
//       const item = localStorage.getItem(key);
//       retrievedObject[key] = JSON.parse(item);
//     }
  
//     return retrievedObject;
//   }