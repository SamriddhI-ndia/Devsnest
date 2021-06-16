var flag=0;
    function input(x){
        document.getElementById('input').value+=x;
        if(flag>1){
            x=document.getElementById('input').value;
            var s="/0";
            if(x.includes(s)){
               document.getElementById('out').value="undefined";
            }
            else{
           y=eval(x);
           document.getElementById('out').value=y;
            }
            flag=3;
        }
        else{
            flag=1;     //ek operand aagya

        }
        //console.log(flag);
        document.getElementById('out').style.fontSize="1rem";
        document.getElementById('input').style.fontSize="2rem";
    }
    function inputt(x){
        console.log(flag);
        if(flag%2!=0){
        document.getElementById('input').value+=x;
        console.log(flag);
        document.getElementById('out').style.fontSize="1rem";
        document.getElementById('input').style.fontSize="2rem";
        flag=2; //operator aagya
        }
        else{
        flag=0;
        }
    }
    var x,y;
    function solve(){
         x=document.getElementById('input').value;
         var s="/0";
         if(x.includes(s)){
            document.getElementById('out').value="undefined";
           
         }
         else{
        y=eval(x);
        //console.log(x+" "+y);
        document.getElementById('out').value=y;
        document.getElementById('input').value=y;
         }
        document.getElementById('out').style.fontSize="2rem";
        document.getElementById('input').style.fontSize="1rem";
    }
    function clea(){
        document.getElementById('input').value='';
        document.getElementById('out').value='0';
        document.getElementById('out').style.fontSize="2rem";
        document.getElementById('input').style.fontSize="1rem";
    }
    function back(){
        var g=document.getElementById('input').value;
        document.getElementById('out').value="0";
        var l=g.length;
        var check=parseInt(g.charAt(l-2));
        console.log(" l=" +l+"\n");
        
           
            if(l==0){
            document.getElementById('out').style.fontSize="2rem";
            document.getElementById('input').style.fontSize="1rem";
            flag=0;
            }
            else if(isNaN(check)){
                flag=2;
            }
            else{
                flag=3;
            }
            document.getElementById('input').value=g.slice(0,l-1);
        // else{
        //     var c=g.charAt(l-1);
        //     if(isNaN(c)){
        //         // var ans=g.substring(0, l-1);
        //         // if(ans.length==0){
        //         //     document.getElementById('out').value=document.getElementById('input').value;
        //         // }
        //         // else{
        //         // y=eval(ans)
        //         // document.geElementById('out').value=y;
        //         // console.log"c="+c+" ans="+ans+" y="+y);
        //         // }
        //         flag=1;
        //         document.getElmentById('input').value=g.slice(0,l-1);
                
        //     }
        //     else{
        //         var ans=g.substring(0, l-2);
        //         if(ans.length==0){
        //             document.getElementById('input').value=g.slice(0,l-1);
        //             document.getElementById('out').value=document.getElementById('input').value;
                    
        //         }
        //         else{
        //         y=eval(ans);
        //         document.getElementById('out').value=y;
        //         console.log("c="+c+" ans="+ans+" y="+y);
        //         }
        //         document.getElementById('input').value=g.slice(0,l-1);
                
        //     }
        
        // }
    }


