function calculateTriangleArea(){
    // base 
    
   const triangleBaseInput = document.getElementById("traingle-base")
   const triangleBaseText = triangleBaseInput.value; 
   const base = parseFloat(triangleBaseText)   
//    console.log(base);
   
//    height 

const triangleHeightInput = document.getElementById('triangle-height');
const triangleHeightText = triangleHeightInput.value;
const height = parseFloat(triangleHeightText);
// console.log(height);

// area calculation 

const area = 0.50 * base * height;
console.log(area);

// display triangle area 

const triangleAreaSpan = document.getElementById('triangle-area');
triangleAreaSpan.innerText = area;  

}

// Rectangle Area Calculate 

