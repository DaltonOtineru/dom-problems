function dom() {
    const list = document.getElementById("music");
    const listLength = list.length;
    console.log(listLength);
    const option1 = list.options[list.selectedIndex = "0"].value;
    //console.log(listItem1);
    const option2 = list.options[list.selectedIndex = "1"].value;
    //console.log(listItem2);
    const option3 = list.options[list.selectedIndex = "2"].value;
    //console.log(listItem3);
    const options = [option1, option2, option3];
    //alert(listLength, option1, option2, option3);
    const optionString = options.toString();
    alert(optionString + " " + listLength);
    
    console.log(options);
}
dom();
