let fulldiv = document.getElementById("full");
let timeshow = document.getElementById("timeshow");
let tasks = document.getElementById("tasks");
let datetime = document.getElementById("datettime");
let description = document.getElementById("description");
let taskkadiv = document.getElementById("taskkadiv");
let done = document.getElementById("done")
let day = new Date().toDateString();


// ========================== GLOBALY===========================
function displayClock() {
    var display = new Date().toLocaleTimeString();
    console.log(display)
    setTimeout(displayClock, 1000);
}


function currenttime() {
    displayClock();
    function displayClock() {
        var display = new Date().toLocaleTimeString();
        console.log(display)
        timeshow.innerHTML = `${display}<br>${day} `;
        setTimeout(displayClock, 1000);
    }
    fulldiv.style.display = "none";
timeshow.classList.add("timeshow1")
    tasks.style.display = "none"
}

function mytask() {
    fulldiv.style.display = "none";
    tasks.style.display ="flex";
   tasks.classList.add("tasks1")
}


done.addEventListener("click", function () {
    taskkadiv.innerHTML += `
    <div class="first" style ="height:auto;">
    <h3 style ="color:#fff; padding-left: 10px;">${description.value} , ${datetime.value.slice(0, 10)}</h3>
  <h3 style ="color:#fff;  padding-left: 70px; ">${datetime.value.slice(11)}</h3>
            </div>`
    fulldiv.style.display = "none";
    description.value = "";
    datetime.value = "";


})

function namazdiv() {
    fulldiv.style.display = "block";
    tasks.style.display = "none";
    timeshow.style.display = "none";
}

setInterval(()=>{
    var dates = new Date();
  alarmDateGetMillsec = Math.round(dates.getTime() / 1000)
  console.log(alarmDateGetMillsec)
if(datetime.value === alarmDateGetMillsec){
    alert("done")
}
   
},1000)