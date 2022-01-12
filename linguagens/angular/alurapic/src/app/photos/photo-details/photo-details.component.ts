import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PhotoService} from "../photo/photo.service";
import {Photo} from "../photo/photo";
import {Observable} from "rxjs";
import {AlertService} from "../../shared/components/alert/alert.service";
import {UserService} from "../../core/user/user.service";

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.css']
})
export class PhotoDetailsComponent implements OnInit {

  photo$!: Observable<Photo>;
  photoId!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService,
    private router: Router,
    private alertService: AlertService,
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.findPhoto();
  }

  findPhoto() {
    this.photoId = this.activatedRoute.snapshot.params['photoId'];
    this.photo$ = this.photoService.findById(this.photoId);
    this.photo$.subscribe(() => {
    }, () => {
      this.router.navigate(['not-found'])
    });
  }

  removePhoto() {
    this.photoService.removePhoto(this.photoId)
      .subscribe(() => {
        this.alertService.success('Photo removed!');
        this.router.navigate(['/user', this.userService.getUserName()],
          {replaceUrl: true});
      }, (err) => {
        console.log(err);
        this.alertService.warning('Could not delete the photo!');
      });
  }

  like(photo: Photo) {
    this.photoService.like(photo.id)
      .subscribe((liked) => {
        if (liked) {
          this.photo$ = this.photoService.findById(photo.id);
        }
      }, err => alert(err));
  }

}
