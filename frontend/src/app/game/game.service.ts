import {Subject} from "rxjs";
import {BehaviorSubject} from "rxjs";


export class GameService {
  betChanged = new BehaviorSubject<number>(1);
  winChanceChanged = new Subject<number>();
}
