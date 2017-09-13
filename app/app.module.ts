import { Error404Component } from './errors/404.component';
import { CreateEventComponent } from './events/create-event.component';
import { appRoutes } from './routes';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventService } from './events/shared/events.service';
import { NavBarComponent } from './nav/navbar.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventsListComponent } from './events/events-list.component';
import { EventsAppComponent } from './events-app.component';
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavBarComponent,
        EventDetailsComponent,
        CreateEventComponent,
        Error404Component
    ],
    providers: [
        EventService
    ],
    bootstrap: [
        EventsAppComponent
    ]
})
export class AppModule {

}