const para = document.querySelector('p');
const characters  = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const text = para.innerText;
let Interval ;
let iteration = 0;
para.addEventListener("mouseenter" , (e) => {


  Interval  = setInterval(()=>{
    const str = text.split('').map((char,idx) =>{
            if(idx < iteration ){
            return char
        }

    return characters.split("")[Math.floor(Math.random()*52)]
 }).join("")
 para.innerText = str;

 iteration += 0.25
 },30)
 

})

