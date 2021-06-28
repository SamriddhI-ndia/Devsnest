const card=document.querySelectorAll('.card');
var count=0,total_click=0,win=0;
let prev,prev_ind;

for(let o=0;o<12;o++){
    card[o].style.order=Math.floor(Math.random()*12);
}

for(let j=0;j<12;j++){
    console.log("yaha");
    card[j].addEventListener('click',()=>{
       
            var audio = document.getElementById("audio");
            audio.play();
         
        count+=1;
        
        if(total_click>15){
            alert('OUT OF MOVES! PLAY AGAIN!');
            window.location.reload();
        }
            var front=document.querySelectorAll('.front');
            front[j].style.transform="perspective(600px) rotateY(-180deg)";
            card[j].style.boxShadow = "0px 0px 0px 0px black";
            card[j].style.transform = "scale(1.1)";
            var back=document.querySelectorAll('.back');
            back[j].style.transform="perspective(600px) rotateY(0deg)";
            var img=document.querySelectorAll('.back img');
            
            if(count==2){
                console.log(prev_ind+" "+j);
               
                if(prev_ind==j){
                    console.log("haan");
                    count=1;
                }
                
                else if(prev.src===img[j].src){
                    total_click+=1;
                    let l=prev_ind;
                    setTimeout( function(){
                        card[j].style.visibility="hidden";
                        
                    },500);
                    setTimeout( function(){
                       
                        card[l].style.visibility="hidden";
                    },500);
                    win+=1;
                    var audio_s = document.getElementById("audio_score");
                    audio_s.play();
                    document.querySelector('.score').innerHTML=win;
                    setTimeout(function(){
                        document.querySelector('.score').style.fontSize="3rem";
                    },600);
                    document.querySelector('.score').style.fontSize="5rem";
                    if(win==6){
                        setTimeout(function(){
                            window.location.href = 'congo.html';
                        },1000); 
                    }
                    count=0;
                }
                else{
                    total_click+=1;
                    let k=prev_ind;  
                    setTimeout(function(){
                        front[j].style.transform="perspective(600px) rotateY(0deg)";
                        back[j].style.transform="perspective(600px) rotateY(180deg)";
                       
                    },1000)
                    setTimeout(function(){
                        
                        front[k].style.transform="perspective(600px) rotateY(0deg)";
                        back[k].style.transform="perspective(600px) rotateY(180deg)";
                        card[k].style.transform = "scale(1)";
                        card[j].style.boxShadow = "0.5px 0.5px 2.5px 0.5px black";
                        card[k].style.boxShadow = "0.5px 0.5px 2.5px 0.5px black";
                        card[j].style.transform = "scale(1)";
                    },1000)
                    count=0;  
                }
            }
            prev=img[j];
            prev_ind=j;
            document.querySelector('.total').innerHTML=total_click;
    })

}
