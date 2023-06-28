import {Component} from '@angular/core'

@Component({
    selector: 'child-comp3',
    template: `<p>{{counter}}</p>`
})

export class ChildComponent3 {
    counter: number = 0;
    increment() {this.counter++}
    decrement() {this.counter--}
}
