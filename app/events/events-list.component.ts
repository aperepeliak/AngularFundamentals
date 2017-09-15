import { EventService } from './shared/events.service';
import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: 'app/events/events-list.component.html'
})
export class EventsListComponent implements OnInit {
    events: any[];

    constructor(private eventService: EventService) {
    }

    ngOnInit() {
        this.eventService.getEvents().subscribe(events => { this.events = events });
    }
}