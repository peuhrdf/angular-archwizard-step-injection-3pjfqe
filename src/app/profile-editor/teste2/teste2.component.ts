import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-teste2',
  templateUrl: './teste2.component.html',
  styleUrls: ['./teste2.component.css'],
})
export class Teste2Component implements OnInit {
  @Input() parentFormGroup: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.parentFormGroup.addControl(
      'address3',
      this.fb.group({
        street: ['', Validators.required],
        city: [''],
        state: [''],
        zip: [''],
      })
    );
  }

  public get isValid(): boolean {
    return this.parentFormGroup.controls.address.valid;
  }

  public get isDirty(): boolean {
    return this.parentFormGroup.controls.address.dirty;
  }
 
}
