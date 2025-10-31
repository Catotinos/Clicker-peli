var counter = 600;
var click_power = 1;
var pick_price = 100;
var picks_bought = 0;
var pedal_price = 100;
var pedals_bought = 0;
var pedalboard_price = 400;
var pedalboards_bought = 0;
var pedal_power = 1;
var efficency = pedal_power * pedals_bought
const showcount = document.getElementById("count");
showcount.innerHTML = counter;
setInterval(pedalgeneration, 1000)
const kitara = document.getElementById("guitar");
document.getElementById("guitar").addEventListener("click", click);
document.getElementById("pick").addEventListener("click", pickbuy);
document.getElementById("pedal").addEventListener("click", pedalbuy);
document.getElementById("pedalboard").addEventListener("click", pedalboardbuy);
const pickp = document.getElementById("pickprice");
const pickam = document.getElementById("pickamount");
const pedalp = document.getElementById("pedalprice");
const pedalam = document.getElementById("pedalamount");
const pedalboardp = document.getElementById("pedalboardprice");
const pedalboardam = document.getElementById("pedalboardamount");
pickp.innerHTML = "Cost" + " " + pick_price;
pickam.innerHTML = picks_bought;
pedalp.innerHTML = "Cost" + " " + pedal_price;
pedalam.innerHTML = pedals_bought;
pedalboardp.innerHTML = "Cost" + " " + pedalboard_price;
pedalboardam.innerHTML = pedalboards_bought

function pedalgeneration(){
    counter += efficency
    showcount.innerHTML = counter;
}


function click(event) {
    let id = null;
    counter += click_power;
    let size = 0;
    showcount.innerHTML = counter;
    clearInterval(id);
    id = setInterval(frame, 20);
    function frame() {
        if (size == 1){
            clearInterval(id);
            kitara.style.width = 20 + "%"
        } else {
            size += 1;
            kitara.style.width = 19 + "%"
        }
    }
}
function pickbuy(event) {
    if(counter >= pick_price) {
        click_power += 1
        counter -= pick_price
        pick_price = pick_price * 2
        picks_bought += 1
        pickp.innerHTML = "Cost" + " " + pick_price;
        pickam.innerHTML = picks_bought;
        showcount.innerHTML = counter;
    }
}
function pedalbuy(event) {
    if(counter >= pedal_price) {
        counter -= pedal_price
        pedal_price = pedal_price * 2
        pedals_bought += 1
        efficency = pedal_power * pedals_bought
        pedalp.innerHTML = "Cost" + " " + pedal_price;
        pedalam.innerHTML = pedals_bought;
        showcount.innerHTML = counter;

    }
}

function pedalboardbuy(event) {
        if(counter >= pedalboard_price) {
            counter -= pedalboard_price
            pedalboard_price = pedalboard_price * 2
            pedal_power += 1
            efficency = pedal_power * pedals_bought
            pedalboardp.innerHTML = "Cost" + " " + pedalboard_price;
            pedalboardam.innerHTML = pedalboards_bought;
            showcount.innerHTML = counter;
    }
}
