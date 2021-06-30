const plust=document.querySelector('.plust');
let count=localStorage.length;
let main=document.querySelector('.main');
let input=document.querySelector('.input');

//load from local storage
for(let j=localStorage.length-1;j>0;j--){

    let i=localStorage.key(j);
    console.log("atta");
    console.log(i);
    let item=document.createElement('div');
    item.classList.add('item');
    let mark=document.createElement('input');
    let text=document.createElement('span');
    let del=document.createElement('i');
    mark.classList.add('mark');
    mark.type="checkbox";
    text.classList.add('text');
    del.classList.add('del');
    del.classList.add('fa-trash-alt');
    del.classList.add('fas');
    item.appendChild(mark);
    item.appendChild(text);
    item.appendChild(del);
    main.appendChild(item);
    text.innerHTML=i;

    if(localStorage.length>6){
        main.style.height="70vh";
        main.style.overflowY="scroll";
    }

    del.addEventListener('click',()=>{
        localStorage.removeItem(i);
        del.parentNode.remove();
        if(localStorage.length<7){
            main.style.height="";
            main.style.overflowY="";
        }
    })
    
    mark.addEventListener('click',()=>{
        let parent=mark.parentNode;
        parent.children[1].classList.toggle('text_a');
        
    })
}

//add notes
plust.addEventListener('click',()=>{
    count++;
    let item=document.createElement('div');
    item.classList.add('item');
   
    if(input.value==""){
    alert('Add task');
    }

    else{

    let mark=document.createElement('input');
    let text=document.createElement('span');
    let del=document.createElement('i');
    mark.classList.add('mark');
    mark.type="checkbox";
    text.classList.add('text');
    del.classList.add('del');
    del.classList.add('fa-trash-alt');
    del.classList.add('fas');
    item.appendChild(mark);
    item.appendChild(text);
    item.appendChild(del);
    main.appendChild(item);
    text.innerHTML=input.value;

    localStorage.setItem(input.value,count);
    
    del.addEventListener('click',()=>{
        del.parentNode.remove();
        localStorage.removeItem(del.parentNode.children[1].innerHTML);
        if(localStorage.length<7){
            main.style.height="";
            main.style.overflowY="";
        }
    })
    
    mark.addEventListener('click',()=>{
        let parent=mark.parentNode;
        parent.children[1].classList.toggle('text_a');
        //console.log(parent.childNode(1));
        
    })
   
    if(localStorage.length>6){
        main.style.height="70vh";
        main.style.overflowY="scroll";
    }
    
    }
    let inp=document.querySelector('input');
    inp.placeholder=" Add new task";
    inp.value="";
    
})


