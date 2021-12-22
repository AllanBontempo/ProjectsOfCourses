import {Component, OnInit} from '@angular/core';
import {UserService} from "../user/user.service";
import {User} from "../user/user";
import {Observable} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user$!: Observable<User>;

  constructor(
    private userService: UserService
  ) {
    this.user$ = userService.getUser();
  }

  ngOnInit(): void {
  }

}
