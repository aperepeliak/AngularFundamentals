import { Routes } from '@angular/router';

import {
    EventsListResolver,
    EventRouterActivator,
    CreateEventComponent,
    EventDetailsComponent,
    EventsListComponent,
    CreateSessionComponent
} from './events/index';

import { Error404Component } from './errors/404.component';

export const appRoutes: Routes = [
    {
        path: 'events/new',
        component: CreateEventComponent,
        canDeactivate: ['canDeactivateCreateEvent']
    },
    {
        path: 'events',
        component: EventsListComponent,
        resolve: {
            events: EventsListResolver
        }
    },
    {
        path: 'events/:id',
        component: EventDetailsComponent,
        canActivate: [EventRouterActivator]
    },
    {
        path: 'events/session/new',
        component: CreateSessionComponent
    },
    {
        path: '404',
        component: Error404Component
    },
    {
        path: '',
        redirectTo: '/events',
        pathMatch: 'full'
    },
    {
        path: 'user',
        loadChildren: 'app/user/user.module#UserModule'
    }
];