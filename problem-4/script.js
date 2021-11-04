function dom() {
    const list = document.getElementById("music").options;
    const option1 = list[0].value;
    const option2 = list[1].value;
    const option3 = list[2].value;
    alert(`The music options are ${option1}, ${option2}, ${option3}. There are ${list.length} options!`);
 }
   
    

