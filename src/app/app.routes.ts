import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Home',
    },
    {
      path: 'about',
      component: AboutComponent,
      title: 'About',
    },
    {
      path: 'projects',
      component: ProjectsComponent,
      title: 'Projects',
    },
    {
      path: 'contact',
      component: ContactComponent,
      title: 'Contact',
    },
];
