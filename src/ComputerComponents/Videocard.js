import { ComputerComponent } from "./ComputerComponent.js";

export class Videocard extends ComputerComponent {
  /**
      @param name - имя компонента, string.
      @param countOfVideoMemory - количество видеопамяти, number.
      @param company - компания, производящая эту видеокарту: nvidia, intel, amd. - string
      @param gpuFrequency - частота графического процессора видеокарты, number.
  */
  constructor({name, countOfVideoMemory, company, frequency} ) {
    super(name);
    this.countOfVideoMemory = countOfVideoMemory;
    this.frequency = frequency;
    this.company = company;
  }

  countStrength() {
    let strength = (this.countOfVideoMemory * 20) + this.frequency * 1.3;

    if (this.company.toLowerCase() === "nvidia") {
      return strength * 1.2
    }

    if (this.company.toLowerCase() === "amd") {
      return strength * 1.1
    }

    else {
      return strength
    }
  }
}
