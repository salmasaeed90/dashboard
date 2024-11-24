import { PlansComponent } from './components/plans/plans.component';
import { ProfileComponent } from './components/profile/profile.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    
    {path:'dashboard', loadComponent:()=>import('../app/components/dashboard/dashboard.component').then((m)=>m.DashboardComponent)},
    {path:'setting', loadComponent:()=>import('../app/components/setting/setting.component').then((m)=>m.SettingComponent)},
    {path:'profile', loadComponent:()=>import('../app/components/profile/profile.component').then((m)=>m.ProfileComponent)},
    {path:'projects', loadComponent:()=>import('../app/components/projects/projects.component').then((m)=>m.ProjectsComponent)},
    {path:'courses', loadComponent:()=>import('../app/components/courses/courses.component').then((m)=>m.CoursesComponent)},
    {path:'friends', loadComponent:()=>import('../app/components/friends/friends.component').then((m)=>m.FriendsComponent)},
    {path:'files', loadComponent:()=>import('../app/components/files/files.component').then((m)=>m.FilesComponent)},
    {path:'plans', loadComponent:()=>import('../app/components/plans/plans.component').then((m)=>m.PlansComponent)},


    
];
