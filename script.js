function si(){
    p = document.getElementById("p").value;
    t = document.getElementById("t").value;
    r = document.getElementById("r").value;
    result = document.getElementById("result");
    result.innerHTML="Interest = "+ (p*t*r/100);
    console.log(p*t*r/100);     ;
}