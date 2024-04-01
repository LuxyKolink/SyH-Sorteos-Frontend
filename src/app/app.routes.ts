import { Routes } from '@angular/router';
// import { HomeComponent } from './ui/home/home.component';
import { DetailsComponent } from './details/details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RaffleComponent } from './dashboard/pages/raffle/raffle.component';
import { RafflesComponent } from './dashboard/pages/raffles/raffles.component';
import { ControlFlowComponent } from './dashboard/pages/control-flow/control-flow.component';

export const routes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        // title: 'Dashboard'
        children: [
            {
                path: 'raffle/:id',
                title: 'Raffle',
                component: RaffleComponent
            },
            {
                path: 'raffle-list',
                title: 'Raffle-list',
                component: RafflesComponent
            },
            {
                path: 'control-flow',
                title: 'Control-flow',
                component: ControlFlowComponent
            },
            {
                path: '',
                redirectTo: 'raffle-list',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
        // component: HomeComponent,
        // title: 'Home page',
    },
    {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Home details',
    },
    
];
