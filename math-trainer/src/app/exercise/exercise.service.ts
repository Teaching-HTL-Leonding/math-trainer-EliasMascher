import { Injectable } from '@angular/core';
import { SettingsService } from '../settings.service';

export interface IExercise {
  firstNumber: number;
  secondNumber: number;
  operator: string;
  result: number;
  input?: number;
}

@Injectable({
  providedIn: 'root',
})
export class ExerciseService {
  constructor(public settings: SettingsService) {}

  public generateExercises(): IExercise[] {
    let exercises: IExercise[] = new Array(this.settings.questions);
    for (let i = 0; i < this.settings.questions; i++) {
      exercises[i] = this.generateExercise();
    }
    return exercises;
  }

  private generateExercise(): IExercise {
   let exercise: IExercise = {firstNumber: 0, secondNumber:0, operator:"",result:0};
   let operators : string[] =["+","-","*","/"];
   let max: number = Math.pow(10,this.settings.digits);
   let min: number = 0;
   exercise.firstNumber =Math.floor(Math.random() * (max-min) + min);
   exercise.secondNumber = Math.floor(Math.random() * (max-min) + min);
   exercise.operator = operators[Math.floor(Math.random()*4)];

   //add
   if(this.settings.plus && exercise.operator === "+" ){
    exercise.result = exercise.firstNumber + exercise.secondNumber;
   }
   //sub
   else if( this.settings.minus && exercise.operator === "-" ){
    while(exercise.secondNumber > exercise.firstNumber) {
      exercise.secondNumber = Math.floor(Math.random() * (max-min) + min);
    }
    exercise.result = exercise.firstNumber - exercise.secondNumber;
   }
   //mult
   else if(this.settings.mult && exercise.operator === "*"){
    exercise.result = exercise.firstNumber * exercise.secondNumber;
   }
   //div
   else if(this.settings.div && exercise.operator === "/"  ){
    while(exercise.firstNumber % exercise.secondNumber !== 0){
      exercise.secondNumber = Math.floor(Math.random() * (max-min) + min);
    }
    if(exercise.firstNumber % exercise.secondNumber === 0){
        exercise.result = exercise.firstNumber / exercise.secondNumber;
      }
   }else{
    exercise = this.generateExercise();
   }
    return exercise;
  }
}
