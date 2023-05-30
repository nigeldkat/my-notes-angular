import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { FormGroup, FormControl, Validators } from '@angular/forms';

// import { UIService } from '../../shared/ui.service';
// import can't be found due to relative pathing
import { Subscription} from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit, OnDestroy {
  signInForm!: FormGroup; //! was quick fix defined as "definite assurtion"

  public isLoading: boolean = false;
  private loadingSubs!: Subscription;
  authSubscription!: Subscription;
  
  constructor(
    public authService: AuthService,
    private router: Router
  ) { }
  ngOnInit() { 
    

    // requires uiService to function, isLoading is listed as any and causing issue
    // this.loadingSubs = this.uiService.loadingStateChanged.subscribe( 
    //   isLoading => {
    //     if(isLoading){
    //       this.isLoading = true;
    //     } else {
    //       this.isLoading = false;
    //     }
    //   });

    // authChange lists as doesn't exist while authStatus lists as any
    // this.authSubscription = this.authService.authChange.subscribe(authStatus => {
    //   if(authStatus == true){
    //     this.router.navigate(['/notelist']);
    //   }
    // })

    this.signInForm = new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required, Validators.email]
      }),
      password: new FormControl('', { validators: [Validators.required] })
    });

    /*
    Validator works, but required the import of MatInputModule in addition to MatForm.
    Found this out by checking the Console output using dev tools
    */

    


  }


// ToDo: get loadingSubs working to ensure that onDestroy functions properly
  ngOnDestroy(){
    // if(this.loadingSubs){
    //   this.loadingSubs.unsubscribe();
    // }    
    // if(this.authSubscription){
    //   this.authSubscription.unsubscribe();
    // }
  }

  onSubmit() {
    //console.log(this.loginForm);
    this.authService.SignIn(this.signInForm.value.email, this.signInForm.value.password);
  }
}
