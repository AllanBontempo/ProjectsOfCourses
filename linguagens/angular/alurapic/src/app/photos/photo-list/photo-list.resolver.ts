import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";

import {PhotoService} from "../photo/photo.service";
import {Photo} from "../photo/photo";

@Injectable({
  providedIn: 'root'
})
export class PhotoListResolver implements Resolve<Observable<Photo[]>>{
  constructor(private service: PhotoService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Photo[]> {

    // @ts-ignore
    const userName = route.params.userName;

    return this.service.listFromUserPaginated(userName, 1);
  }
}