import {Component} from '@angular/core';
import {GooglePlus} from '@ionic-native/google-plus/ngx';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  data: any;

  constructor(
    private googlePlus: GooglePlus,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.data = JSON.parse(params.data);
    });
  }

  onLogout() {
    this.googlePlus.logout().then(async () => {
      await this.router.navigate(['/login']);
    });
  }
}
