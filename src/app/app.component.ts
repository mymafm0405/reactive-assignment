import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  projectStatus = ['Stable', 'Critical', 'Finished'];

  projectForm = new FormGroup({
    'project': new FormControl(null, [Validators.required, this.asNotAllowed]),
    'email': new FormControl(null, [Validators.email, Validators.required]),
    'status': new FormControl('Stable')
  })

  notAllowedProjectName(control: FormControl): {[s: string]: boolean} {
    if(control.value === 'Test') {
      return {'notAllowed': true}
    }
    return null;
  }

  asNotAllowed(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Test') {
          resolve({'notAllowed': true})
        } else {
          resolve(null);
        }
      }, 1500)
    })
    return promise;
  }

  onSubmit() {
    console.log(this.projectForm.value);
  }

}
