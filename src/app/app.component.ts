import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  projectStatus = ['Stable', 'Critical', 'Finished'];

  projectForm = new FormGroup({
    'project': new FormControl(null, [Validators.required, this.notAllowedProjectName]),
    'email': new FormControl(null, [Validators.email, Validators.required]),
    'status': new FormControl(null)
  })

  notAllowedProjectName(control: FormControl): {[s: string]: boolean} {
    if(control.value === 'Test') {
      return {'notAllowed': true}
    }
    return null;
  }
}
