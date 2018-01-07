import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {
  @Input() defaultvalue:number;
  
  @Input() newvalue:number;
  @Output() clickEvent:EventEmitter<number>=new EventEmitter();

  // state={
  //   value:null
  // };

  constructor() { }

  ngOnInit() {
    console.log(`defaultvalue默认值：${this.defaultvalue}`);
    // this.state.value=this.defaultvalue
  }

  clickbtn(){
    // this.state.value='X';

    console.log(`点击事件index：${this.defaultvalue}`);
    this.clickEvent.emit(this.defaultvalue);
  }
}
