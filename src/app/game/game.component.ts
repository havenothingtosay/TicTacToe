import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  status:string='';
  state = {
    history:[{
      squares: Array(9).fill(null)
    }],
    xIsNext:true,
    stepNumber:0
  };
  winner:string='';

  constructor() { }

  ngOnInit() {
    console.log(`初始化`);
    console.log(this.state.history)
  }

  handleClick(i:number){
    console.log(`点击收到index：${i}`);
    const history = this.state.history.slice(0,this.state.stepNumber+1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (this.calculateWinner(squares) || squares[i]) {
      console.log(`赢了/重复`);
      return;
    }
    squares[i] = this.state.xIsNext?'X':'O';
    this.state.history=history.concat([{squares:squares}]);
    console.log(`点击后`);
    console.log(this.state.history);
    this.state.xIsNext=!this.state.xIsNext;
    console.log(`点击后${this.state.xIsNext}`);
    this.state.stepNumber=history.length;
    console.log(`点击后stepNumber：${this.state.stepNumber}`);

    this.calculateWinner(squares);
  }

  jumpTo(step) {
    this.state.stepNumber=step;
    this.state.xIsNext=(step % 2) ? false : true;
    this.calculateWinner(this.state.history[step].squares);
  }

  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        this.winner=squares[a];
        console.log(`${this.winner}获胜！！！！！`);
        return squares[a];
      }
    }
    this.winner='';
    return null;
  }
}
