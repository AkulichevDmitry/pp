/*
  Абстрактный класс компьютерного компонента,
  от него наследуются другие компоненты пк
 */
export class ComputerComponent {
    /*
        @param name должен быть у каждого компьютерного компонента, string!
    */
    constructor(name) {
        this.name = name;
    }

    countStrength() {} // override
}