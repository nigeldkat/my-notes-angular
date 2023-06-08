import { Component, OnInit, OnDestroy  } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { NgForm } from '@angular/forms';  //for two way binding or template form
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

// import { UIService } from '../../shared/ui.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit, OnDestroy  {

  isLoading: boolean = false;
  private loadingSubs!: Subscription;

  constructor(
    public authService: AuthService,
    //private uiService: UIService,
    private router: Router
  ) { }


  ngOnInit() { 
    // this.loadingSubs = this.uiService.loadingStateChanged.subscribe(
    //   isLoading => {
    //     if (isLoading) {
    //       this.isLoading = true;
    //     } else {
    //       this.isLoading = false;
    //     }
    //   });
  }

  //ToDo: get loadingSubs working to ensure that onDestroy functions properly
  ngOnDestroy(){
    // if(this.loadingSubs){
    //   this.loadingSubs.unsubscribe();
    // }
  }


  onSubmit(form: NgForm) {
    return this.authService.SignUp( form.value.email, form.value.password )
    .then(() => this.router.navigate(['/notelist']));
  }
}
