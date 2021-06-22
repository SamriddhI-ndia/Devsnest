const maint=document.querySelector('.blo');
var h;
var v;
console.log(maint)
for(var i=0;i<20;i++){

    v=document.createElement('div');
    v.className='verti';
    
    for(var j=0;j<20;j++){
        console.log(i);
        h=document.createElement('div');
        h.className='hori';
        v.appendChild(h);
       
    }
    maint.appendChild(v);
}
 const hh=document.querySelectorAll('.hori');
 for(let i=0;i<400;i++){
    hh[i].addEventListener('click',()=>{
        const col=hh[i].style.backgroundColor;
        console.log(col);
        if(col =="white")
        hh[i].style.backgroundColor='turquoise';
        else
        {
           hh[i].style.backgroundColor="white";
        }
    });
 }
