import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { EmdrShowcaseComponent } from './pages/projects/showcases/emdr-showcase/emdr-showcase.component';
import { PvdbShowcaseComponent } from './pages/projects/showcases/pvdb-showcase/pvdb-showcase.component';
import { SketchShowcaseComponent } from './pages/projects/showcases/sketch-showcase/sketch-showcase.component';
import { SpacetraderShowcaseComponent } from './pages/projects/showcases/spacetrader-showcase/spacetrader-showcase.component';

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
      path: 'project/emdr',
      component: EmdrShowcaseComponent,
      title: 'Emdr therapy tool',
    },
    {
      path: 'project/praktijkvanderboom',
      component: PvdbShowcaseComponent,
      title: 'Praktijk van der Boom',
    },
    {
      path: 'project/sketchstudio2d',
      component: SketchShowcaseComponent,
      title: 'Sketch studio 2d',
    },
    {
      path: 'project/spacetrader',
      component: SpacetraderShowcaseComponent,
      title: 'SpaceTrader',
    },
    {
      path: 'contact',
      component: ContactComponent,
      title: 'Contact',
    },
];
