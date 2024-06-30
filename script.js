let date = document.querySelector("#date");
let year = 2024;
let month = 6;
let day = 28;
let hour = 0;
let minute = 26;
let second = 17;
let datetime = new Date(year, month, day, hour, minute, second);
let formattedDate = datetime.toLocaleDateString('en-Pk', {
  month: 'long',
  day: 'numeric',
  year: 'numeric'
});

let formattedTime = datetime.toLocaleTimeString('en-pk', {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit'
});

let formattedDatetime = `${formattedDate} ${formattedTime}`;
console.log("formattedDatetime:", formattedDatetime);
date.value = formattedDatetime;
let attach = document.querySelector('.btn .attach')
let unattach = document.querySelector('.btn .unattach')
let img = document.querySelector(".text img")
let calculator = document.querySelector(".calculator");
img.addEventListener('click', function () {
  calculator.classList.remove('hidden');
});
let input = document.querySelector('.display input');
let buttons = document.querySelectorAll('button');
let string = '';
let arr = Array.from(buttons)
arr.forEach(function (button) {
  button.addEventListener('click', function (e) {
    if (e.target.innerHTML === "=") {
      string = eval(string);
      input.value = string;
    }
    else{
      string+=e.target.innerHTML;
      input.value=string;
    }
    document.querySelector('.bottom p:nth-child(1)').addEventListener('click',()=>{
      string=''
      document.querySelector('.display input').value=string;
    })
    document.querySelector(".bottom p:nth-child(2)").addEventListener('click',function(){
      string= string.substring(0,string.length-1);
      document.querySelector('.display input').value=string;
     })
    document.querySelector('.bottom p:nth-child(3)').addEventListener('click',()=>{
      string=''
      document.querySelector('.display input').value=string;
    })
   
  })
})
let icon=document.querySelector('.display i');
icon.addEventListener('click',function(){
  calculator.classList.add('hidden')
})