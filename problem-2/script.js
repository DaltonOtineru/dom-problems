/*
step 1: write the html file with the p element with tha anchor tag link inside of it;
step 2: link my Javascript file to my html file;
step 3: define a function that will get the liink from my html and display it
step 4: inside the function define a variable and set the value as the link in my html
step 5: inside the function create an alert to pop up that shows the value of the href
		of the link. 
*/


function getLink() {
  const link = document.getElementById("roots").href;
  alert('The href attribute for this link is ' + link);
}

getLink();