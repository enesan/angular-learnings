import {Component, ViewChild, ElementRef} from '@angular/core';
import {ChildComponent3} from './templateVariables/child.component';

@Component({
    selector: 'my-app',
    template:  `
             <child-comp3 #counter></child-comp3>
             <button (click)="increment()">+</button>
             <button (click)="decrement()">-</button>
            <p #nameText>{{name}}</p>
            <p>{{nameText.textContent}}</p>
            <button (click)="change()">Изменить</button>
    `
})

export class AppComponent {
    @ViewChild("nameText", {static:false})
    nameParagraph: ElementRef|undefined;

    name: string = "Tom";

    change() {       
        if(this.nameParagraph!== undefined) {
            console.log(this.nameParagraph.nativeElement.textContent)
            this.nameParagraph.nativeElement.textContent = "hell";
        }
    }


    @ViewChild(ChildComponent3, {static: false})
    private counterComponent: ChildComponent3|undefined;

    increment() {this.counterComponent?.increment();}
    decrement() {this.counterComponent?.decrement();}
}
    