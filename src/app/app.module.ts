import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { ArchwizardModule, WizardStep } from 'angular-archwizard';
import { Teste2Component } from './profile-editor/teste2/teste2.component';
import { AddressComponent } from './profile-editor/adress-editor/adress-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { TesteComponent } from './profile-editor/teste/teste.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {}

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styles: [
    `
    :host { display: block; margin: .5em; }
  `,
  ],
})
export class StepComponent {
  constructor(public step: WizardStep) {}
}

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ArchwizardModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AppComponent,
    StepComponent,
    TesteComponent,
    Teste2Component,
    AddressComponent,
    ProfileEditorComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
