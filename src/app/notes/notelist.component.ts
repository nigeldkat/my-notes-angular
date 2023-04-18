import { Component } from '@angular/core';

@Component({
  selector: 'app-notelist',
  templateUrl: './notelist.component.html',
  styleUrls: ['./notelist.component.css']
})
export class NoteListComponent {

  notelist = [
    {id: 1, desc : 'Grocery List'},
    {id: 2, desc : 'Cat Toy List'},
    {id: 3, desc : 'Costco List'},
    {id: 4, desc : 'ToDo List'},
  ]
}