const getInputValue = () => {
    const inputVal = document.getElementById("myInput").value;
    if (inputVal.indexOf('.') > -1) {
    document.getElementById("myInput").value = "0";
    
}       
}