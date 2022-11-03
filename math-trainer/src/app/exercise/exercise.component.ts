import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ExerciseService, IExercise } from './exercise.service';


@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent{
public exercises : IExercise[];
public showResults: boolean;

  constructor(public exerciseService : ExerciseService) {
    this.exercises = exerciseService.generateExercises();
    this.showResults = false;
  }

  public check(){
    this.showResults = true;
  }

  public refresh(){
    this.exercises = this.exerciseService.generateExercises();
    this.showResults = false;
  }

  public getColor(index:number){
    if(this.exercises[index].input === this.exercises[index].result ){
      return  "color: green";
    }
    return `color: red`;
  }
}
