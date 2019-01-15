import {Subject} from "rxjs/internal/Subject";
import {BehaviorSubject} from "rxjs/internal/BehaviorSubject";


export class GameService {
  betChanged = new BehaviorSubject<number>(1);
  winChanceChanged = new Subject<number>();
}
