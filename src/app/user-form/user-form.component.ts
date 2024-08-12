import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  //styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(0)]],
      phone: ['', Validators.required],
      status: ['', Validators.required],
      designation: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      this.userService.addUser(this.userForm.value).subscribe(() => {
        this.userForm.reset();
      });
    }
  }
}
