import {ComputerComponent} from "./ComputerComponent";

export class MemoryStorage extends ComputerComponent {
    /*
       Реализация:
           Параметры:
               readingSpeed - скорость чтения
               writeSpeed - скорость записи
               type - SSD/HDD
           Считаем мощность так:

     */

    constructor(name, size, writeSpeed, readSpeed) {
        super(name);
        this.size = size;
        this.writeSpeed = writeSpeed;
        this.readSpeed = readSpeed;
    }

    countStrength() {
        let strength = ( this.size / 3 ) + this.writeSpeed / 100 + this.readSpeed / 100

        return strength
    }
}