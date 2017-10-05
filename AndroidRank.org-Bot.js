
// ==UserScript==
// @name        androidrank
// @namespace    http://tampermonkey.net/
// @include		htt*://*.androidrank.org/listcategory*
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://www.androidrank.org/listcategory?category=&start=41&sort=0&price=all&hl=en
// @grant        none

// ==/UserScript==



(function() {
  
     window.onload = function() {
         var counttype = 1000000;
         var infobull = document.createElement("div");
         infobull.id= "infobull";
         document.body.appendChild(infobull);
         document.getElementById("infobull").setAttribute("style","position:fixed;z-index:1000;top:20px;left:10px;height:100px;width:200px;background-color:yellow");
         document.getElementById("infobull").innerHTML = "installs M  growth  %";
         var installs = 100 ,growth = 1.0;
         var info =document.createElement("div");
         info.id= "divinfo";
         info.innerHTML = "<button id='stop' style='background-color:#B71F4A; color:white;font-weight:150;border:1px solid white;border-radius:5px;width:110px;height:30px;position:fixed;margin-top:2px;bottom:42%; right:45%;'>stop</button><button id='start' style='background-color:#B71F4A; color:white;font-weight:110;border:1px solid white;border-radius:5px;width:110px;height:30px;position:fixed;margin-top:2px;bottom:42%; right:60%;'>start</button><button id='Clear' style='background-color:#B71F4A; color:white;font-weight:150;border:1px solid white;border-radius:5px;width:110px;height:30px;position:fixed;margin-top:2px;bottom:42%; right:75%;'>Clear</button><input type='text' style='border:3px solid black;position:fixed;right:400px;bottom:43%' placeholder='Installs' size='11' id='Installs' /><input type='text' style='border:3px solid black;position:fixed;right:250px;bottom:43%' placeholder='Growth 30 days' size='10' id='grow30day' /><div style='height:30px;padding:3px;width:150px;background-color:#B71F4A;color:white;position:fixed;right:20px;bottom:43%;align:center'><input type='radio' style='border:3px solid black' name='counttype'checked='true'  id='TypeM' /><label for='TypeM'>M  </label><input type='radio' style='border:3px solid black' name='counttype'  id='TypeK' /><label for='TypeK'/><label for='TypeK'> K</label></div><table id ='infotable' style='width:100%' border='1'><thead><tr><th>Title</th><th>app link</th><th>Installs</th><th>Growth(30 days)</th></tr></thead><tbody></tbody></table>";

         document.body.appendChild(info);
         document.getElementById('divinfo').setAttribute("style","overflow:auto;position:fixed;z-index:1000;bottom:5px;left:200px;height:41%;width:100%;background-color:yellow");

         var items =  document.getElementById("ranklist").getElementsByTagName("tr");

         if(sessionStorage.androidzakrank){
             var i = parseInt(sessionStorage.contador);
             document.getElementById('infotable').getElementsByTagName('tbody')[0].innerHTML = localStorage.getItem("androidzakrank");
         }else{
             sessionStorage.setItem('androidzakrank', " ");}

         if(!localStorage.installss ||  !localStorage.grow30dayy || !localStorage.x){
             localStorage.setItem('installss',"100");
             localStorage.setItem('grow30dayy',"1.0");
             localStorage.setItem('x',-1);
    }

    var x = localStorage.getItem('x');
         //var clickit = function(){

setTimeout(function(){
for(var i=1 ; i < items.length ; i++){
var type = 1000000;
var installs1 = items[i].getElementsByTagName("td")[4].innerHTML;
var installs2 = installs1.substring(0,installs1.length - 2);
    if(installs1.indexOf('M') > -1){ 
       type= 1000000;

       }else {type= 1000; }
    
    
var trend1 = items[i].getElementsByTagName("td")[6].innerHTML;
var trend2 = trend1.substring(0,trend1.length - 1);
var name = items[i].getElementsByTagName("td")[1].getElementsByTagName("a")[0].innerHTML;
    installs = localStorage.getItem("installss");
    growth = localStorage.getItem("grow30dayy");
    counttype = localStorage.getItem("countType");

   var applink =  items[i].getElementsByTagName("td")[1].getElementsByTagName('a')[0].getAttribute("href");
    document.getElementById("infobull").innerHTML= "<p>installs : "+installs+" growth : "+growth+"</p>";
if((Number(installs2)*type) >= (Number(installs)*counttype) && parseFloat(trend2) >=  parseFloat(growth)){

document.getElementById('infotable').getElementsByTagName('tbody')[0].innerHTML += "<tr><td>"+name+"</td><td><a    href='http://www.androidrank.org"+applink+"'>app link1 </a></td><td>"+installs1+"</td><td>"+trend2+"</td></tr>";
}


}
var text = document.getElementById('infotable').getElementsByTagName('tbody')[0].innerHTML;
localStorage.setItem("androidzakrank", text);

    
    if( x == 1 ){
   var atag = document.getElementById('content').getElementsByTagName('div')[2].getElementsByTagName('a'); 
    for(var j=0 ; j < atag.length;j++){
        if(atag[j].textContent == 'Next >'){
        atag[j].click();
        break;
    }}

}

},2000);

       document.getElementById("stop").onclick = function(){
             x = -1 ;
         localStorage.setItem('x',-1);
         };
            document.getElementById('start').onclick = function(){
                   var result = true;
                 localStorage.setItem('x',1);
                var installs22 = document.getElementById('Installs').value;
                var growth22 = document.getElementById('grow30day').value;
if(document.getElementById('TypeM').checked){counttype = 1000000;}else {counttype = 1000;}

              document.getElementById("infobull").innerHTML += "<p>installs : "+installs22+" growth 30 : "+growth22+"</p>";
             x = 1 ;
                if(growth22 != null && installs22 != null && installs22 != "" && growth22 != "" ){
                    if(isNaN(installs22) || isNaN(growth22)  ){
                      confirm("Please Enter Valide Data "+growth22 +"  "+installs22);
                    result = false;
                    }else {
                localStorage.setItem('installss',installs22);
                localStorage.setItem('grow30dayy',growth22);
                localStorage.setItem('countType',counttype);
                    }

                       }
                if(result){
       var atag = document.getElementById('content').getElementsByTagName('div')[2].getElementsByTagName('a'); 
     for(var j=0 ; j < atag.length;j++){
        if(atag[j].textContent == 'Next >'){
        atag[j].click();
        break;
    }else {
         document.getElementById("infobull").innerHTML= "<h1><p>END ...</p></h1>";  
        
    }
        
         } 
            }
                   
    
                   
     
            
//}
//clickit();
};    
         
         document.getElementById('Clear').onclick = function(){
             
           localStorage.setItem('androidzakrank','...'); 
             document.getElementById('infotable').getElementsByTagName('tbody')[0].innerHTML = "";
             
         };

             document.getElementById("stop").onmouseover = function(){
    document.getElementById("stop").style.backgroundColor="#5E331E";
      document.getElementById("stop").style.cursor='pointer';
};
document.getElementById("stop").onmouseleave = function(){
       document.getElementById("stop").style.backgroundColor="#B71F4A";
};
             document.getElementById("start").onmouseover = function(){
    document.getElementById("start").style.backgroundColor="#5E331E";
      document.getElementById("start").style.cursor='pointer';
};
document.getElementById("start").onmouseleave = function(){
       document.getElementById("start").style.backgroundColor="#B71F4A";
};         
         
        
           document.getElementById("Clear").onmouseover = function(){
    document.getElementById("Clear").style.backgroundColor="#5E331E";
      document.getElementById("Clear").style.cursor='pointer';
};
         
document.getElementById("Clear").onmouseleave = function(){
       document.getElementById("Clear").style.backgroundColor="#B71F4A";
};
      
         
         
     };
            
   
    
    
    
})();


    