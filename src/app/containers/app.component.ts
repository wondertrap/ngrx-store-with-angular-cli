import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { id } from '../utils/id';
import { people } from '../reducers/people';
import { ADD_PERSON, REMOVE_PERSON, ADD_GUEST, REMOVE_GUEST, TOGGLE_ATTENDING } from '../actions/actions';
// import { PersonList } from './person-list';
// import { PersonInput } from './person-input';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public people;
  private subscription;

  constructor(  private _store: Store<any>) {
    /* 
      demonstrating use without the async pipe,
      we will explore the async pipe in the next lesson
    */
    this.subscription = this._store
      .select('people')
      .subscribe(people => {
        this.people = people;
      });
  }
  // all state-changing actions get dispatched to and handled by reducers
  addPerson(name) {
    this._store.dispatch({ type: ADD_PERSON, payload: { id: id(), name: name }} );
  }

  addGuest(id) {
    this._store.dispatch({ type: ADD_GUEST, payload: id });
  }

  removeGuest(id) {
    this._store.dispatch({ type: REMOVE_GUEST, payload: id });
  }

  removePerson(id) {
    this._store.dispatch({ type: REMOVE_PERSON, payload: id });
  }

  toggleAttending(id) {
    this._store.dispatch({ type: TOGGLE_ATTENDING, payload: id })
  }
  /*
    if you do not use async pipe and create manual subscriptions
    always remember to unsubscribe in ngOnDestroy
  */
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
