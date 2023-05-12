import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css'],
})
export class ProfileEditorComponent {
  // public fb: FormBuilder;
  profileForm: FormGroup;

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  constructor(private fb: FormBuilder) {
    // this.fb = new FormBuilder();
    console.log(this.fb);

    this.profileForm = this.fb.group({
      firstName: ['2', Validators.required],
      lastName: [''],
      aliases: this.fb.array([this.fb.control('')]),
    });
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street',
      },
    });
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  onSubmit() {
    console.log(this.profileForm.valid);
    console.log(this.profileForm.controls);
  }
}
