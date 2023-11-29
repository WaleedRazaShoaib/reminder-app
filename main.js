let fulldiv = document.getElementById("full");
let timeshow = document.getElementById("timeshow");
let tasks = document.getElementById("tasks");
let datetime = document.getElementById("datettime");
let description = document.getElementById("description");
let taskkadiv = document.getElementById("taskkadiv");
let done = document.getElementById("done")

function currenttime() {
    displayClock();
    function displayClock() {
        var display = new Date().toLocaleTimeString();
        timeshow.innerHTML = display;
        setTimeout(displayClock, 1000);
        return;
    }
    fulldiv.style.display = "none";
    timeshow.innerHTML = `<div></div>`
    timeshow.style = `margin-top: 5%;
    font-size : 50px;
    color: #fff;
    text-align: center;
box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
background-color: #ACD4D5;
border: 1px solid black;
height: 100px;
width: 80%;
margin-left: 10%;`
}

function mytask() {
    fulldiv.style.display = "none";
    tasks.style.display = ` margin-top: 5%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  `
}

done.addEventListener("click", function () {
    console.log(datetime.value)
    taskkadiv.innerHTML = `
    <div class="first" style ="height:auto;">
                <div class="picone">
                    <h3>${datetime.value}</h3>
                </div>
                <div class="h2">
                    <h3>${description.value}</h3>
                </div>
            </div>`

    fulldiv.style.display = "none";

})