import {Component, OnInit} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {MediaService} from '../media.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.scss'],
})
export class FrontComponent implements OnInit {

  constructor(public mediaService: MediaService, private router: Router) {
  }

  mediaArray: any;

  ngOnInit() {
    if (localStorage.getItem('token') !== null) {
      this.mediaService.getUserData().subscribe(res => {
        console.log('Welcome ' + res['full_name']);
      }, (error: HttpErrorResponse) => {
        console.log(error.message);
        this.router.navigate(['login']);
      });
    } else {
      this.router.navigate(['login']);
    }
    this.mediaService.getAllMedia().subscribe(data => {
      this.mediaArray = data;
    });
  }
}
