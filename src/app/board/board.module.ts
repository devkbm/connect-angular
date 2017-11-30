import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from '../../../node_modules/clarity-angular';

import { BoardComponent } from './component/board.component';
import { BoardGridComponent } from './component/board-grid.component';

import { BoardService } from './service/board.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ClarityModule
  ],
  declarations: [
    BoardComponent,
    BoardGridComponent
  ],
  providers: [
    BoardService
  ],
  exports: [
    BoardComponent
  ]
})
export class BoardModule { }
