import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule} from '@angular/router';
import { AdminComponent} from './admin.component';
import { CenterComponent} from './center/center.component';
import { EditComponent} from './edit/edit.component';

import { AuthGuard } from '../../shared/auth.guard';

const routes:Routes=[
  {
    path:'admin',
    component:AdminComponent,
    canActivate:[AuthGuard],
    children:[
      {
        path:'',
        children:[
          {path:'center',component:CenterComponent},
          {path:'edit/:id', component:EditComponent}
        ]
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AdminRoutingModule { }
