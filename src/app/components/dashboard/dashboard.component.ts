import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription} from 'rxjs';

import { Router } from '@angular/router';
import { DashboardService } from './dashboard.service';
import { NoteList } from './dashboard.model';
import { NgForm } from '@angular/forms';

//not in origional code may not need...
import { AuthService } from '../../shared/services/auth.service';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  private noteSubscription!: Subscription;
  public noteList: NoteList[] = [];
  @ViewChild('f') templateForm! : NgForm;

  //may want to remove authService? not in origional but from new auth code
  constructor(public authService: AuthService, private nService: DashboardService, private router: Router) {}

  ngOnInit(): void {
    this.noteSubscription = this.nService.notesChanged.subscribe(
      (notes: NoteList[]) => {
        this.noteList = notes;
        debugger;
        console.log(this.noteList);
      }
    );
    this.nService.fetchNotes();
  }

  ngOnDestroy(): void{
    if(this.noteSubscription){
      this.noteSubscription.unsubscribe();
    }}

     
  addNewList(form: NgForm){
    this.nService.addNoteToNoteList(form.value.noteDesc);
    //this.nService.addDataToDatabase({text: form.value.listItem});
    this.templateForm.resetForm();
  }

  goToAddMember(id: string){
    this.router.navigate([`/notemembers/${id}`]);
  }

  goToViewList(id: string, desc: string){
    this.router.navigate([`/note/${id}/${desc}`]);
  }

  deleteNoteList(ID: string){
    if (confirm('Are you sure you want delete this list?')) {
      this.nService.deleteNoteList(ID);
    } 
    
  }
}