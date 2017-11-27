import { Component, OnInit } from '@angular/core';

import { BoardService } from './service/board.service';

import { ResponseObject } from '../common-layout/model/response-object';
import { Board } from './model/board';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  board: Board;

  constructor(private boardService: BoardService) { }

  ngOnInit() {
    this.board = new Board();
  }

  getBoard(id: string) {
    this.boardService.getBoard(id)
      .subscribe(        
        (model: ResponseObject<Board>)=>{
          this.board = model.data;
        },
        (err)=>{},
        ()=>{}
    );
  }

  private saveBoard() {
    this.boardService
      .saveBoard(this.board)
      .subscribe(
        (model: ResponseObject<Board>) => {
          console.log(model);
        },
        (err) => {
          console.log(err);
        },
        () => {
          console.log('완료');
        }
      );
  }

  private deleteBoard() {
    this.boardService
      .deleteBoard(this.board)      
      .subscribe(
        (model: ResponseObject<Board>) => {
          console.log(model);
        },
        (err) => {
          console.log(err);
        },
        () => {
          console.log('완료');
        }
      );
  }

}
