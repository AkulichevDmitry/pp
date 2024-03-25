import {ComputerComponent} from "./ComputerComponent.js";

export class Processor extends ComputerComponent {
    /*
    * как тут все устроено:
    * есть параметры:
    * имя, частота, производитель и т.д, смотри все остальные поля в миро
    * Есть метод - countStrength(), он считает мощность. Вот принцип работы:
    * он берет каждый параметр процессора и умножает на коэфициент важности, пример:
    * return this.frequency * 1.5 // в данном случае this.frequency - частота процессора, а 1.5 - коэфициент важности
    * таким образом мы получим мощьность в числовом значении и сможем ее измерить и сложить с мощью других комплектующих
    *
     */

    constructor({name, company, frequency, countOfCors}) {
        super(name);
        this.frequency = frequency;
        this.company = company;
        this.countOfCors = countOfCors
    }

    countStrength() {
        let strength = this.countOfCors * (this.frequency / 2.5);

        if (this.company.trim().toLowerCase() === "intel") {
            return strength * 1.2
        }

        if (this.company.trim().toLowerCase() === "amd") {
            return strength * 1.1
        }

        else {
            return strength;
        }
    }
}