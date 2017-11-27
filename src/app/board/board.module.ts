import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';

import { BoardService } from './service/board.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BoardComponent],
  providers: [
    BoardService
  ]
})
export class BoardModule { }