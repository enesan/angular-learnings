import {Component, ElementRef, ContentChild} from '@angular/core'

@Component({
    selector: 'child-comp3',
    template: `
    <ng-content></ng-content>
    <p>{{counter}}</p>
    <button (click)="change()"></button>
    <data-comp></data-comp>
    `
})

export class ChildComponent3 {
    counter: number = 0;

    @ContentChild("headerContent", {static: false})
    headerString: ElementRef | undefined;


    change() {
        if(this.headerString !== undefined) {
            this.headerString.nativeElement.textContent = "Header has changed!";
        }
    }

    increment() {this.counter++}
    decrement() {this.counter--}
}
