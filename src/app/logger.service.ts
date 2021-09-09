import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  public LogMessage()
  {
    return "This is from LoggerService inside ProductListMFE";
  }
}
