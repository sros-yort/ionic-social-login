import {Component, OnInit} from '@angular/core';
import {GooglePlus} from '@ionic-native/google-plus/ngx';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private googlePlus: GooglePlus,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  onSignIn() {
    this.googlePlus.login({})
      .then(async res => {
        await this.router.navigate(['/home'], {queryParams: {
            data: JSON.stringify(res)
          }});
      })
      .catch(err => console.error(err));
  }
}
