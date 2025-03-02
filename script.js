
const showDate = ()=>{
    const calender = document.getElementById("calender");
    const date = new Date().toDateString();
    const p = document.createElement("p");
    p.innerText = `${date}`;
    calender.appendChild(p);
}
showDate();



// const showTime = ()=>{
//   const clock = document.getElementById("clock");
//   clock.innerHTML = "";
//   const time = new Date().toLocaleTimeString();
//   const p = document.createElement("p");
//   p.innerText = `${time}`;
//   clock.appendChild(p);
// }

// showTime();

// setInterval(showTime , 1000);





