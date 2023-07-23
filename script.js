let expr="";
let x="";
function deleteLast()
{
    const currentResult= document.getElementById("result").innerHTML;
  document.getElementById("result").innerHTML= currentResult.substring(0,currentResult.length-1);
  if(currentResult.length-1===0){
    document.getElementById("result").innerHTML=0;
  }
  
}
function on(){
    document.getElementById("result").innerHTML="0";
}
function store(value)
{
    var res=document.getElementById("result").innerHTML;
    //document.write(res);
    if(document.getElementById("result").innerHTML!==""){
       // document.getElementById("result").innerHTML="";
        if(value==='=' ){
           calculate(expr);
        }
        else if(value==='sin' || value==='cos' || value==='tan' || value==='sinh' || value==='cosh' || value==='tanh' ||value==='abs' || value==='floor' || value==='log' || value==='(' || value===')' || value==='acos' || value==='atan' || value==='asin' || value==='sqrt' || value==='cbrt'|| value==='ln' )
       {
            if(res==="0"){
              expr=document.getElementById("result").innerHTML=value;
            }
            else{
                x=document.getElementById("result").innerHTML+=value;
                 expr='Math.'+x;
            }  
       }     
        else if(value==='e'){
            if(res==="0"){
              expr=document.getElementById("result").innerHTML=value;
            }
            else{
              expr=document.getElementById("result").innerHTML+=value;
            }
        }
        else if(value==='^'){
            value=value.replace('^','**');
            //document.write(value);
            if(res==="0"){
                expr=document.getElementById("result").innerHTML=value;
            }
            else{
                expr=document.getElementById("result").innerHTML+=value;
            }    
        }
       else if(value==='π'){
        value=value.replace('π','PI');
        if(res==="0"){
            expr=document.getElementById("result").innerHTML=value;
        }
        else{
            expr=document.getElementById("result").innerHTML+=value;
        }   
        expr='Math.'+expr;
       
       }
        else{
            if(res!=="0"){
                 expr=document.getElementById("result").innerHTML+=value;
            }
            else{
                expr=document.getElementById("result").innerHTML=value;               
            }
        }
    }    
}
function e(){
   var res=document.getElementById("result").innerHTML;
    document.getElementById("result").innerHTML=Math.pow(Math.E,res);
}
function exp(){
    let res=document.getElementById("result").innerHTML;
    document.getElementById("result").innerHTML=Math.pow(10,res);
}

function x2(){
    let res=document.getElementById("result").innerHTML;
    document.getElementById("result").innerHTML=Math.pow(res,2);
}
function x3(){
    let res=document.getElementById("result").innerHTML;
    document.getElementById("result").innerHTML=Math.pow(res,3);
}
function inv(){
    let res=document.getElementById("result").innerHTML;
    document.getElementById("result").innerHTML=Math.pow(res,-1);
}
function off(){
    document.getElementById("result").innerHTML="";
}
function clearResult(){
    document.getElementById("result").innerHTML=" ";
}
function calculate(expr){   

    
        try{
            document.getElementById("result").innerHTML=eval(expr);
        }
        catch(Exception){
            document.getElementById("result").innerHTML="SYNTAX ERROR";
        }
    
    
}
document.addEventListener('keydown',function(event){
    const key=event.key;
  var expre=document.getElementById("result").innerHTML;
  //document.write(expre);
    if(key==='Enter'){
        calculate(expre);
    }
    else if(key==='Backspace'){
        deleteLast();
    }
    else if(key==='Escape'){
        clearResult()
    }
    else if(!isNaN(key) || key==='.' || key==='*' || key==='+' || key==='/' || key==='-' || key===',' || key==='^' || key==='%' || key==='(' || key===')')  {
        store(key);
    }
    else if(key==='O')
    {
        on();
    }
    else if(key==='F'){
        off();
    }
})
