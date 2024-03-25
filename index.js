import {Videocard} from "./src/ComputerComponents/Videocard.js";
import {Processor} from "./src/ComputerComponents/Processor.js";
import {RAM} from "./src/ComputerComponents/RAM.js";
import {ComputerComponent} from "./src/ComputerComponents/ComputerComponent.js";

const result_field = document.querySelector(".result")
const result_button = document.querySelector(".result-button")

const getVideocardInfo = () => {
    const name = document.querySelector(".gpu__name").value;
    const frequency = Number(document.querySelector(".gpu__clock").value);
    const company = document.querySelector(".gpu__company").value;
    const countOfVideoMemory= Number(document.querySelector(".gpu__size").value)

    return {name, company, countOfVideoMemory}
}

const getProcessorInfo = () => {
    const name = document.querySelector(".processor-name").value
    const frequency = Number(document.querySelector(".processor-frequency").value);
    const company = document.querySelector(".processor-company").value
    const countOfCors = Number(document.querySelector(".processor-cors").value)

    return {name, countOfCors, frequency, company}
}

const getRAMInfo = () => {
    const name = document.querySelector(".ram-name").value;
    const count_of_ram = Number(document.querySelector(".count-of-ram").value)
    const count_of_ram_cards = Number(document.querySelector(".count-of-ram-cards").value)
    const frequency = Number(document.querySelector(".ram-frequency").value)

    return {name, count_of_ram, count_of_ram_cards}
}

const getMotherboardInfo = () => {
    const name = document.querySelector(".motherboard-name");
}

result_button.addEventListener("click", () => {
    const v = new Videocard(getVideocardInfo())
    const p = new Processor(getProcessorInfo())
    const r = new RAM(getRAMInfo())

    result_field.innerHTML = v.countStrength() + p.countStrength() + r.countStrength()
    console.log(v)
})
