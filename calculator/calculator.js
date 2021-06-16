var flag=0;
    function input(x){
        document.getElementById('input').value+=x;
        flag=1;
        console.log(flag);
    }
    function inputt(x){
        console.log(flag);
        if(flag==1){
        document.getElementById('input').value+=x;
        }
        flag=0;
        console.log(flag);
    }
    var x,y;
    function solve(){
         x=document.getElementById('input').value;
        y=eval(x);
        console.log(x+" "+y);
        document.getElementById('out').value=y;
        x='input';
    }
    function clea(){
        document.getElementById('input').value='';
        document.getElementById('out').value='0';
    }
    function back(){
        var g=document.getElementById('input').value;
        var l=g.length;
        console.log(g+" "+l);
        document.getElementById('input').value=g.slice(0,l-1);
    }


