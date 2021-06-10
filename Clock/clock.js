setInterval(()=>{
    const a=new Date();
    let s=document.querySelector('.hr');
    let m=document.querySelector('.min');
    let h=document.querySelector('.sec');
    h.style.transform= `rotate(${a.getSeconds()*6+180}deg)`;
    h.style.transformOrigin='center';
    m.style.transform= `rotate(${a.getMinutes()*6+180}deg)`;
    m.style.transformOrigin='center';
    s.style.transform= `rotate(${a.getHours()*30+180}deg)`;
    s.style.transformOrigin='center';
    })   