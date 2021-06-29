const main=document.querySelector('.main');
let corr=[3,0,0,1,1];
let q=0;
let flag=false;
let count=0;
var visited=[false,false,false,false,false];
let last=4;
let score=0;

var ques=["Which of the following is not JavaScript Data Types?","Which company developed JavaScript?","Inside which HTML element do we put the JavaScript?"," Which of the following is correct about features of JavaScript?","Choose the correct JavaScript syntax to change the content of the following HTML code."];

var ans={
    0:[' Undefined','Number',' Boolean','Float'] ,
    1:[ 'Netscape','Bell Labs','Sun Microsystems','IBM'],
    2:["< script >",'< head >','< meta >','< style >'],
    3:['  It can not Handling dates and time.',' JavaScript is a object-based scripting language.',' JavaScript is not interpreter based scripting language.','  All of the above'],
    4:[' document.getElement (“letsfindcourse").innerHTML = "I am letsfindcourse";',
    ' document.getElementById (“letsfindcourse").innerHTML = "I am a letsfindcourse";',
    ' document.getId (“letsfindcourse") = "I am a letsfindcourse";',
    ' document.getElementById (“letsfindcourse").innerHTML = I am a letsfindcourse;']
};

//add question and options
for(let i=0;i<5;i++){
    var question=document.createElement('div');
    question.classList.add('question');
    main.appendChild(question);
    
    for(let j=0;j<4;j++){
        var option=document.createElement('div');
        option.classList.add('option');
        main.appendChild(option);
    }
}

//buttons create
var btn=document.createElement('button');
btn.classList.add('buton');
btn.innerHTML="Next >";
main.appendChild(btn);

var btn1=document.createElement('button');
btn1.classList.add('buttton');
btn1.innerHTML="< Prev";
main.appendChild(btn1);

//for next_question
var next_question=()=>{
    flag=false;
    if(q==last){
        console.log("aaya");
        btn.style.display="none";
    }
    else{
        btn.style.display="block";
    }
    if(q==0){
        btn1.style.display="none";
    }
    else{
        btn1.style.display="block";
    }
    let opt=document.querySelectorAll('.option');
    let qu=document.querySelector('.question');
    qu.innerHTML="Question "+(q+1)+": "+ques[q];
    qu.style.display="block";
    for(let i=0;i<4;i++){
    opt[i].innerHTML=(i+1)+".  "+ans[q][i];
    opt[i].style.display="block";
    }
}
next_question();

//button function
var nextt=document.querySelector('.buton');
nextt.addEventListener('click',()=>{
    q+=1;
    while(visited[q]){
        q+=1;
    }
    if(q>5)
    return;
    next_question();
})
var prev=document.querySelector('.buttton');
prev.addEventListener('click',()=>{
    q-=1;
    while(visited[q]){
        q-=1;
    }
    if(q<0)
    return;
    next_question();
})

//add listener to options
let opti=document.querySelectorAll('.option');
for(let i=0;i<4;i++){
    opti[i].addEventListener('click',()=>{
    })
}

//check and changes
for(let i=0;i<4;i++){
    opti[i].addEventListener('click',()=>{
        if(flag==true)
        return;
        flag=true;
        count++;
        visited[q]=true;
        if(i==corr[q]){
                opti[i].classList.add('correct');
                score+=1;
                document.querySelector('.score').innerHTML=score;
                setTimeout(()=>{
                    document.querySelector('.score').style.fontSize="3rem";
                },1500);
                document.querySelector('.score').style.fontSize="5rem";
                var audio=document.querySelector('.audio');
                audio.play();

                setTimeout(()=>{
                    opti[i].classList.remove('correct');
                },2000);
        }
        else{
            var audio1=document.querySelector('.audio_w');
            audio1.play();
            opti[i].classList.add('incorrect');
            opti[corr[q]].classList.add('correct');
            setTimeout(()=>{
                opti[i].classList.remove('incorrect');
                opti[corr[q]].classList.remove('correct');
            },2000);
        }
        
        setTimeout(()=>{
            if(count==5){
                sessionStorage.setItem("score", score);
                setTimeout(function(){
                    window.location.href = 'congo.html';
                },1000);
            }
            else{
                if(q==last){
                  
                    last-=1;
                    q-=1;
                    while(visited[q]){
                      q-=1;
                     }
                if(q<0)
                    return;
                next_question();
                }
            }
        },2000);
       
        if(count<5&&q<last){
        setTimeout(()=>{
            q+=1;
            while(visited[q]){
                q+=1;
            }
            next_question();
        },2000);
    }
    })
    
}


