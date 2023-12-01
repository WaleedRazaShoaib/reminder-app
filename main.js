let fulldiv = document.getElementById("full");
let timeshow = document.getElementById("timeshow");
let tasks = document.getElementById("tasks");
let datetime = document.getElementById("datettime");
let description = document.getElementById("description");
let taskkadiv = document.getElementById("taskkadiv");
let done = document.getElementById("done")
let day = new Date().toDateString();
function currenttime() {
    displayClock();
    function displayClock() {
        var display = new Date().toLocaleTimeString();
        timeshow.innerHTML = `${display}<br>${day} `;
        setTimeout(displayClock, 1000);
        return;
    }
    fulldiv.style.display = "none";
    timeshow.style = `margin-top: 5%;
    font-size : 50px;
    color: #fff;
    text-align: center;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    background-color: #ACD4D5;
    border: solid white;
    border-radius: 15px;
    height: auto;
    width: 80%;
    margin-left: 10%;`
    tasks.style.display = "none"
}

let interval = false;
let currentDateGetMilliSec;
let alarmDateGetMillsec;

function mytask() {
    fulldiv.style.display = "none";
    tasks.style.display = ` margin-top: 5%;
    display:block;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  `
}
done.addEventListener("click", function () {
    //     interval = true;
    //     var alarmDate = new Date(datetime.value);
    //     alarmDateGetMillsec = Math.round(alarmDate.getTime() / 1000)
    //     // var equal = currentDateGetMilliSec - alarmDateGetMillsec;
    //     // console.log(equal)
    //     console.log("")
    //     console.log(description.value)
    //     console.log(datetime.value)
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
