import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms'
import { Routes, RouterModule } from '@angular/router'
import { DropdownModule,ModalModule } from 'ng2-bootstrap/ng2-bootstrap';

//import { CustomTimePipe,FormatDatePipe } from '../../pipes'

import ModalComponent from './modal.component'
import SnsLoginComponent from './snslogin.component'
// import TagsComponent from './tags.component'
// import ArticleListComponent from './articles.component'
// import LoadMoreComponent from './loadmore.component'
// import FooterComponent from './footer.component'
//import { TodoService } from './todo.service';
//import { MyTodoResolver } from './todo.resolver';
//import { MyTodoGuard, CanLeaveTodoDetailGuard } from './todo.guards';
//import { TagService } from '../../services'

@NgModule({
  imports: [ CommonModule,DropdownModule,ModalModule ],
  declarations: [
    SnsLoginComponent,ModalComponent
  ],
  exports: [ DropdownModule,ModalModule,SnsLoginComponent,ModalComponent ]
})
export class BootstrapModule {}