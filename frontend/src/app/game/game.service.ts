import {Subject} from "rxjs";
import {BehaviorSubject} from "rxjs";


export class GameService {
  betChanged = new BehaviorSubject<number>(1);
  winChanceChanged = new Subject<number>();

  temporaryUsersInfoArray = [
    {
      tx: '0xddy',
      ethers: 0.15,
      bet: 11,
      result: ['two', 'six'],
      win: 1.25,
      jackpot: 27
    },
    {
      tx: '0dxd2tr',
      ethers: 0.33,
      bet: 6,
      result: ['one', 'five'],
      win: '---',
      jackpot: '---'
    },
    {
      tx: '0dxd2tr',
      ethers: 2.34,
      bet: 6,
      result: ['one', 'four'],
      win: '2.75',
      jackpot: 5
    },
    {
      tx: '0dxd2tr',
      ethers: 1.78,
      bet: 6,
      result: ['two', 'three'],
      win: '---',
      jackpot: '---'
    }
  ];

  getUsersInfoArray() {
    return this.temporaryUsersInfoArray.slice();
  }
}
