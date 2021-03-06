import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from '../../../node_modules/clarity-angular';

import { BoardService } from './service/board.service';

import { BoardFormComponent } from './component/board-form.component';
import { BoardTreeComponent } from './component/board-tree.component';
import { BoardGridComponent } from './component/board-grid.component';
import { ArticleGridComponent } from './component/article-grid.component';
import { BoardComponent } from './component/board.component';
import { ArticleFormComponent } from './component/article-form.component';


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
    ArticleGridComponent,
    ArticleFormComponent,
    BoardComponent
  ],
  providers: [
    BoardService
  ],
  exports: [
    BoardFormComponent
  ]
})
export class BoardModule { }
