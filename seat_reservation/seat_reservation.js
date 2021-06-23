const maint=document.querySelector('.blo');
var h;
var v;
console.log(maint)
for(var i=0;i<10;i++){

    v=document.createElement('div');
    v.className='verti';
    
    for(var j=0;j<10;j++){
        console.log(i);
        h=document.createElement('div');
        h.className='hori';
        v.appendChild(h);
       
    }
    maint.appendChild(v);
}
var a=0;
var hh=document.querySelectorAll('.hori');
 for(let i=0;i<400;i++){
    hh[i].addEventListener('click',()=>{
      
       if(hh[i].classList.contains('reserved')){
        hh[i].classList.remove('reserved');
        a-=1;
       }
       else{
        hh[i].classList.add('reserved');
        a+=1;
        
       }
       console.log(a);
       document.querySelector('.here').innerHTML=a;
       document.querySelector('.here2').innerHTML=100-a;
    });
 }
 
