import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TagCloudComponent} from "./components/tag-cloud/tag-cloud.component";


const routes: Routes = [
  {path: "", loadChildren: () => import('./article/article.module').then(m => m.ArticleModule)},
  {path: "user", loadChildren: () => import('./user/user.module').then(u => u.UserModule)},
  {path: "article", loadChildren: () => import('./article/article.module').then(m => m.ArticleModule)},
  {path: "event", loadChildren: () => import('./event/event.module').then(m => m.EventModule)},
  {path: "tagCloud", component: TagCloudComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
