import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {ChildComponent} from './transferDataToChild/child.component'
import {ChildComponent2} from './EventChildBinding/child.component'
import {ChildComponent3} from './templateVariables/child.component'

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, ChildComponent, ChildComponent2, ChildComponent3],
    bootstrap: [AppComponent]
})

export class AppModule {}