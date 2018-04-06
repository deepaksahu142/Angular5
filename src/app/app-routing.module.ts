import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { PostsComponent } from './posts/posts.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  { path: 'posts', component: PostsComponent },
  { path: 'contact',      component: ContactComponent },
  { path: 'lazy', loadChildren: 'app/lazy/lazy.module#LazyModule'}
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
export const routingComponents = [HomeComponent, AboutComponent, PostsComponent , ContactComponent];
