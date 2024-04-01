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

function auto_grow(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight)+"px";
}

function onload() {
    auto_grow(document.getElementById("result"));
}

function generate() {
    let subject = document.getElementById("subject").value;
    let event = document.getElementById("event").value;
    let event2 = document.getElementById("event2").value;
    if (subject.length==0 || event.length==0 || event2.length==0)
        return;
    let result = `　　${subject}${event}是怎么回事呢？${subject}相信大家都很熟悉，但是${subject}${event}是怎么回事呢，下面就让小编带大家一起了解吧。\r\n　　${subject}${event}，其实就是${event2}，大家可能会很惊讶${subject}怎么会${event}呢？但事实就是这样，小编也感到非常惊讶。\r\n　　这就是关于${subject}${event}的事情了，大家有什么想法呢，欢迎在评论区告诉小编一起讨论哦！`;
    document.getElementById("result").value = result;
    auto_grow(document.getElementById("result"));
}