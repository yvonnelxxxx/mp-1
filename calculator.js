let output = document.getElementById("output")

function addition() {
    const n1 = Number(document.getElementById("first-number").value);
    const n2 = Number(document.getElementById("second-number").value);
    output.innerHTML = String(n1+n2);
    if(n1+n2<0){
        output.style.color = "#ba3c3c";
    }
    else{
        output.style.color = "";
    }
}
function subtraction(){
    const n1 = Number(document.getElementById("first-number").value);
    const n2 = Number(document.getElementById("second-number").value);
    output.innerHTML = String(n1-n2);
    if(n1-n2<0){
        output.style.color = "#ba3c3c";
    }
    else{
        output.style.color = "";
    }
}
function multiplication() {
    const n1 = Number(document.getElementById("first-number").value);
    const n2 = Number(document.getElementById("second-number").value);
    output.innerHTML = String(n1*n2);
    if(n1*n2<0){
        output.style.color = "#ba3c3c";
    }
    else{
        output.style.color = "";
    }
}
function division(){
    const n1 = Number(document.getElementById("first-number").value);
    const n2 = Number(document.getElementById("second-number").value);
    output.innerHTML = String(n1/n2);
    if(n1/n2<0){
        output.style.color = "#ba3c3c";
    }
    else{
        output.style.color = "";
    }
}
function power(){
    const n1 = Number(document.getElementById("first-number").value);
    const n2 = Number(document.getElementById("second-number").value);
    let res=1;
    for(let i=0;i<n2;i++){
        res =res*n1;
    }
    output.innerHTML = String(res);
    if(res<0){
        output.style.color = "#ba3c3c";
    }
    else{
        output.style.color = "";
    }
}
function Clear(){
    document.getElementById("output").innerHTML = "";
    document.getElementById("first-number").value = "";
    document.getElementById("second-number").value = "";
}