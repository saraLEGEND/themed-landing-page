import { Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { AppRoute } from './app-routes.enum';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './page-404/page-404.component';
import { SkillsComponent } from './skills/skills.component';

export const routes: Routes = [
  {
    path: AppRoute.HOME,
    component: HomeComponent,
    title: AppRoute.HOME
  },
  {
    path: AppRoute.SKILLS,
    component: SkillsComponent,
    title: AppRoute.SKILLS
  },
  {
    path: AppRoute.ABOUT_ME,
    component: AboutMeComponent,
    title: AppRoute.ABOUT_ME
  },
  {
    path: '',
    redirectTo: AppRoute.HOME,
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: '404'
  }
];
