import { Router } from '@angular/router';
import { EventService } from './../shared/events.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router'

@Injectable()
export class EventRouterActivator implements CanActivate {
    constructor(private eventService: EventService, private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot) {
        const eventExists = !!this.eventService.getEvent(+route.params['id']);
        if (!eventExists) {
            this.router.navigate(['/404']);
        }

        return eventExists;
    }
}