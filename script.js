

const showTime = ()=>{
  const clock = document.getElementById("clock");
  clock.innerHTML = "";
  const time = new Date().toLocaleTimeString();
  const div = document.createElement("div");
  div.innerHTML = `
  <p class = "text-4xl">${time}</p>
  `;
  clock.appendChild(div);
}

showTime();

setInterval(showTime , 1000);





