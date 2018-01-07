import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  // status:string='Next player: '+(this.state.xIsNext?'X':'O');
  // status:string='';
  defaultsquares:number[][]=[[0,1,2],[3,4,5],[6,7,8]];
  // state = {
  //   squares: Array(9).fill(null),
  //   xIsNext:true
  // };
  // winner:string='';

  @Output() clickEvent:EventEmitter<number>=new EventEmitter();
  @Input() squares:any[];

  constructor() { }

  ngOnInit() {
    // console.log(this.state);
    // this.winner=this.calculateWinner(this.state.squares);
    // if (this.winner){
    //   this.status = 'Winner: ' + this.winner;
    // }else {
    //   this.status='Next player: '+(this.state.xIsNext?'X':'O');
    // }
  }

  handleClick(i:number){
    this.clickEvent.emit(i);
    
    // console.log(`点击收到index：${i}`);
    // const squares = this.state.squares.slice();
    // if (this.calculateWinner(squares) || squares[i]) {
    //   console.log(`赢了`);
    //   return;
    // }
    // squares[i] = this.state.xIsNext?'X':'O';
    // this.state.squares=squares;
    // console.log(`点击后${this.state.squares}`);
    // this.state.xIsNext=!this.state.xIsNext;
    // console.log(`点击后${this.state.xIsNext}`);
    //
    // this.calculateWinner(this.state.squares);
  }

}
