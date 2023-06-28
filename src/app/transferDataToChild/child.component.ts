import {Input, Component} from '@angular/core';

@Component({
    selector: 'child-comp',
    template: `
    <ng-content selector="h2"></ng-content>
    <h2>Привет, {{name}}!</h2>
    <h2>Возраста {{userAge}}</h2>
    <ng-content selector="h2"></ng-content>`,
    styles: [`h2, p {color:navy;}`]
})

export class ChildComponent {
    @Input()
    name = "Влад";

     _userAge: number = 22;

    @Input()
    set userAge(age: number) {
        if (age < 0)
            this._userAge = 0;
        else if (age >100) 
            this._userAge = 100;
        else 
            this._userAge = age;
    }

    get userAge() {
        return this._userAge;
    }
}