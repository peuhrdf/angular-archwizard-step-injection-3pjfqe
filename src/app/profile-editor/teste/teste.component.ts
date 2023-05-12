import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css'],
})
export class TesteComponent implements OnInit {
  @Input() parentFormGroup: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.parentFormGroup.addControl(
      'address2',
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
  public get teste(): boolean {
    console.log(this.parentFormGroup.valid);
  }
}
