import { SettingsService } from "../settings.service";
import { SettingsComponent } from "../settings/settings.component";
import { ExerciseService, IExercise } from "./exercise.service";

describe('Exercise service',()=>{
  it('creates right amount of questions',()=>{
    let settings: SettingsService = new SettingsService();
    let service: ExerciseService = new ExerciseService(settings);
    service.settings.questions = 18;
    let exercises: IExercise[] = service.generateExercises();

    expect(exercises.length).toBe(18);
  });

  it('creates right questions with rigth operator',()=>{
    let settings: SettingsService = new SettingsService();
    let service: ExerciseService = new ExerciseService(settings);
    settings.div = false;
    settings.minus = false;
    settings.mult = false;
    let exercise: IExercise[] = service.generateExercises();
    for(let i = 0; i< exercise.length; i++){
      expect(exercise[i].operator).toBe("+");
    }
  });

});
