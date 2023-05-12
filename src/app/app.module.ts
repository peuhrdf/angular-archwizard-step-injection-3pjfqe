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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private fb: FormBuilder) {}

  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    aliases: this.fb.array([this.fb.control('')]),
  });
}

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
    Teste2Component,
    Teste2Component,
    AddressComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
