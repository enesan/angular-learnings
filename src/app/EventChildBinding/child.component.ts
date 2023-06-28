import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'child-comp2',
    template: `<input [(ngModel)]="userName" (ngModelChange)="onNameChange($event)"/>
                <input [value]="userAge" (ngModelChange)="onAgeChange($event)"/>`
})

export class ChildComponent2 {
    @Input() userName: string;
    @Output() userNameChange = new EventEmitter<string>();
    onNameChange(model: string) {
        this.userNameChange.emit(model);
    
    }

     @Input() userAge: number;
    @Output() userAgeChange = new EventEmitter<number>();
    onAgeChange(age:number) {

        this.userAgeChange.emit(age);
    }
}