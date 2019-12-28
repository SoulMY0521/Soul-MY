import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoupleComponent } from './couple/couple.component';
import { VideoComponent } from './video/video.component';
import { HomeComponent } from './home/home.component';
import { ImageComponent } from './image/image.component';
import { CommentComponent } from './comment/comment.component';
import { AboutusComponent } from './aboutus/aboutus.component';


const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: '#', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent
  //,canActivate:[AuthGuard] 
  },
  { path: 'Couple', component: CoupleComponent },
  { path: 'Video', component: VideoComponent },
  { path: 'Image', component: ImageComponent },
  { path: 'Comment', component: CommentComponent },
  { path: 'AboutUs', component: AboutusComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
