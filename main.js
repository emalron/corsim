var nation = {
    total: 10000,
    patient: 0,
    economy: 100,
    distance: 0
}

var displayer = {};

var update_values = {
    total: 0,
    patient: 0,
    cured: 0,
    economy: 0
};

function update() {
    nation.economy = update_economy(nation)
    nation.patient = update_patient(nation)
    nation.total = update_total(nation)
}

function update_economy({ total, patient, economy, distance }) {
    let diff = distance * (-1)
    economy += diff
    update_values.economy = diff;
}

function update_patient({ total, patient, economy, distance }) {
    let diff = distance * 1
    patient += diff
    update_values.patient = diff
}

function update_total({ total, patient, economy, distance }) {
    let diff = Math.floor(patient * 0.01)
    total -= diff
    update_values.total = diff * (-1);
}

function set_distance(value) {
    let boundary_check = nation.distance + value >= 0 && nation.distance + value <= 4;
    if(boundary_check) {
        nation.distance += value
    }
}

function render() {
    displayer.total.textContent = `인구: ${nation.total} 명`
    displayer.today_patient.textContent = `오늘 확진자: ${update_values.patient}`
    displayer.cured_patient.textContent = `오늘 완치자: ${update_values.cured}`
    displayer.total_patient.textContent = `확진자: ${nation.patient}`
    displayer.death.textContent = `오늘 사망자 ${update_values.total}`
    displayer.economy.textContent = `경제: ${nation.economy}`
}

function input(value) {
    set_distance(value)
    update()
    render()
}

function input_up() {
    input(1)
}
function input_down() {
    input(-1)
}

window.onload = function() {
    displayer.total = document.querySelector("span#total")
    displayer.today_patient = document.querySelector("span#today-patient")
    displayer.total_patient = document.querySelector("span#total-patient")
    displayer.cured_patient = document.querySelector("span#cured-patient")
    displayer.death = document.querySelector("span#death")
    displayer.economy = document.querySelector("span#economy")

    let upbutton = document.querySelector("button#up")
    let downbutton = document.querySelector("button#down")
    upbutton.addEventListener("click", input_up())
    downbutton.addEventListener("click", input_down())
    render()
}