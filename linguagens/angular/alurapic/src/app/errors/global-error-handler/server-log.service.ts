import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ServerLog} from "./server-log";
import {environment} from "../../../environments/environment";

const API_SERVER = environment.serverLog;

@Injectable({
  providedIn: 'root'
})
export class ServerLogService {

  constructor(
    private http: HttpClient
  ) { }

  log(serverLog: ServerLog) {
    return this.http.post(API_SERVER + '/infra/log', serverLog);
  }
}
