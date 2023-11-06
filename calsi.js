clearScreen=()=> {
    document.getElementById("result").value = "";
}
 
display=(value)=> {
    document.getElementById("result").value += value;
}
 
calculate=()=> {
    var res = document.getElementById("result").value;
    document.getElementById("result").value = eval(res);
}