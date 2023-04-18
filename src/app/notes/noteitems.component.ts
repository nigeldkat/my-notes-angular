import { Component } from '@angular/core';

@Component({
  selector: 'app-noteitems',
  templateUrl: './noteitems.component.html',
  styleUrls: ['./noteitems.component.css']
})
export class NoteItemsComponent {
  noteitems = [
    {id: 1, desc : 'Beer'},
    {id: 2, desc : 'Chicken'},
    {id: 3, desc : 'lemons'},
    {id: 4, desc : 'wine'},
  ]
}