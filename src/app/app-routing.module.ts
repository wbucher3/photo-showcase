import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage-components/homepage/homepage.component';
import { GalleryComponent } from './components/gallery-components/gallery/gallery.component';
import { CatPageComponent } from './components/cat-page/cat-page.component';

const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'cats', component: CatPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ scrollPositionRestoration: "enabled" } )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
