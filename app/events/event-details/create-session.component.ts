import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ISession, restrictedWords } from '../index';

@Component({
    templateUrl: 'app/events/event-details/create-session.component.html',
    styles: [`
    em {float: right; color: #e05c65; padding-left: 10px; }
    .error input, .error select, .error textarea { background-color: #e3c3c5; }
    .error ::-webkit-input-placeholder { color: #999 }
  `]
})
export class CreateSessionComponent implements OnInit {
    newSessionForm: FormGroup;
    abstract: FormControl;
    level: FormControl;
    duration: FormControl;
    presenter: FormControl;
    name: FormControl;

    ngOnInit(): void {
        this.name = new FormControl('', Validators.required);
        this.presenter = new FormControl('', Validators.required);
        this.duration = new FormControl('', Validators.required);
        this.level = new FormControl('', Validators.required);
        this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), restrictedWords(['foo', 'bar'])]);

        this.newSessionForm = new FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract
        })
    };

    saveSession(formValues) {
        let session: ISession = {
            id: undefined,
            name: formValues.name,
            duration: +formValues.duration,
            level: formValues.duration,
            presenter: formValues.presenter,
            abstract: formValues.abstract,
            voters: []
        };

        console.log(session);
    };

}