function dodajtekst(i)
    {
        var span=document.getElementById("input"+i);
        var text=span.innerText;

        var date = new Date();
        var currentdate = new Date();
var datetime = "Датум: " + currentdate.getDay() + "/" + currentdate.getMonth() 
+ "/" + currentdate.getFullYear() + " во " 
+ currentdate.getHours() + ":" 
+ currentdate.getMinutes() + ":" + currentdate.getSeconds();
        var div=document.getElementById("div"+i);
        var br = document.createElement("br");
        var br1 = document.createElement("br");
        var br2 = document.createElement("br");
        var br3 = document.createElement("br");
        if(text!=''){
            
          div.append(text);
          div.append(br);
          div.append(br1);
          div.append(datetime);
          div.append(br2);
          div.append(br3);
             
        }
        span.innerText=''; 
    }