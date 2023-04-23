let x ;
let y ;
let z ;
let a;
let b;
let c;
let bank = 1000;

document.getElementById("RollButton").onclick =function(){
     x =Math.floor (Math.random() * 10)+1 ;
     y =Math.floor (Math.random() * 10)+1 ;
     z =Math.floor (Math.random() * 10)+1 ;
     a =Math.floor (Math.random() * 10)+1 ;
     b =Math.floor (Math.random() * 10)+1 ;
     c =Math.floor (Math.random() * 10)+1 ;
     d =Math.floor (Math.random() * 10)+1 ;
     e =Math.floor (Math.random() * 10)+1 ;
     f =Math.floor (Math.random() * 10)+1 ;

     bank -=10

     if(x == y & x==z){
        bank+=10 +100
        document.getElementById("WIN").style.display=""
     }
     if(a==b & a==c){
        bank+=10 +100
        document.getElementById("WIN").style.display=""
     }
     if(d==e & d==f){
        bank+=10 +100
        document.getElementById("WIN").style.display=""
     }

     if(x != y & x!=z & a!=b & a!=c & d!=e & d!=f){
        document.getElementById("WIN").style.display="none"
     }
 
 
     


     document.getElementById("xlabel").innerHTML =x
     document.getElementById("ylabel").innerHTML =y
     document.getElementById("zlabel").innerHTML =z
     document.getElementById("alabel").innerHTML =a
     document.getElementById("blabel").innerHTML =b
     document.getElementById("clabel").innerHTML =c
     document.getElementById("dlabel").innerHTML =d
     document.getElementById("elabel").innerHTML =e
     document.getElementById("flabel").innerHTML =f
     document.getElementById("bank").innerHTML=bank


     
}