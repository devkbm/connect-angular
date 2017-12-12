import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from '../../../node_modules/clarity-angular';

import { BoardFormComponent } from './component/board-form.component';
import { BoardTreeComponent } from './component/board-tree.component';
import { BoardGridComponent } from './component/board-grid.component';
import { ArticleGridComponent } from './component/article-grid.component';

import { BoardService } from './service/board.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ClarityModule
  ],
  declarations: [
    BoardFormComponent,
    BoardGridComponent,
    BoardTreeComponent,
    ArticleGridComponent
  ],
  providers: [
    BoardService
  ],
  exports: [
    BoardFormComponent
  ]
})
export class BoardModule { }
