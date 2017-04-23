import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-personlist',
  template: `
<ul>
  <li *ngFor="let person of people" [class.attending]="person.attending">
    {{person.name}} - Guests: {{person.guests}}
    <button (click)="addGuest.emit(person.id)">+</button>
    <button *ngIf="person.guests" (click)="removeGuest.emit(person.id)">-</button>
    Attending?
    <input type="checkbox" [(ngModel)]="person.attending" (change)="toggleAttending.emit(person.id)" />
    <button (click)="removePerson.emit(person.id)">Delete</button>
  </li>
</ul>
  `,
  styles: []
})
export class PersonlistComponent implements OnInit {
  /*
    "dumb" components do nothing but display data based on input and 
    emit relevant events back up for parent, or "container" components to handle
  */
  @Input() people;
  @Output() addGuest = new EventEmitter();
  @Output() removeGuest = new EventEmitter();
  @Output() removePerson = new EventEmitter();
  @Output() toggleAttending = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}