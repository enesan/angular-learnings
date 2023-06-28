import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template:  `
            <child-comp3 #counter></child-comp3>
            <button (click)="counter.increment()">+</button>
            <button (click)="counter.decrement()">-</button>
    `
})

export class AppComponent {

}
    