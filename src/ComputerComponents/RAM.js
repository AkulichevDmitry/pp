import {ComputerComponent} from "./ComputerComponent";

export class RAM extends ComputerComponent {
    constructor({name, countOfRAM, frequency, countOfRAMCards = 1}) {
        super(name);
        this.countOfRAM = countOfRAM;
        this.frequency = frequency
        this.countOfRAMCards = countOfRAMCards
    }

    countStrength() {
       return this.countOfRAM * this.countOfRAMCards * 10 * this.frequency / 20
    }
}