import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  public plus : boolean
  public questions: number
  public minus : boolean
  public mult : boolean
  public div : boolean
  public digits : number

  constructor() {
    this.questions = 10;
    this.plus = true;
    this.minus = true;
    this.mult = true;
    this.div = true;
    this.digits = 1;
   }
}
