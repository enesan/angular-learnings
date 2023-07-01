import {Component, ViewChild, ElementRef} from '@angular/core';
import {ChildComponent3} from './templateVariables/child.component';

@Component({
    selector: 'my-app',
    template:  `
             <child-comp3>
             <h3 #headerContent>Добро пожаловать {{name}}!</h3>
             </child-comp3>
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
    