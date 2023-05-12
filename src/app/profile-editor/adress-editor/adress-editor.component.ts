import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './adress-editor.component.html',
})
export class AddressComponent implements OnInit {
  @Input() parentFormGroup: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.parentFormGroup.addControl(
      'address',
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
