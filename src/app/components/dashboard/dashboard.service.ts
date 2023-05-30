import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Subscription } from "rxjs";

import { AngularFirestore } from "@angular/fire/compat/firestore";
import { AngularFirestoreDocument } from "@angular/fire/compat/firestore";
import { NoteList } from "./dashboard.model";
import { AuthService } from "src/app/shared/services/auth.service";

@Injectable()
export class DashboardService {
    notesChanged = new Subject<NoteList[]>();
    private fbSubs: Subscription[] = [];

    constructor(private db: AngularFirestore, private authService: AuthService) { }

    

    fetchNotes() {
        const uid :string = this.authService.userData.uid;
        //8OBRDpgo38aWAIIsHktriVTE4Bp1
        this.fbSubs.push(
            
            //changed to any and error went away
            this.db.collection(`Lists`, ref => ref.where(`Members.${uid}`,'==',true)).valueChanges().subscribe(
                (notes: any) => {
                    this.notesChanged.next(notes);
                }
            )            

            // this.db.collection(`Lists`, ref => ref.where(`Members.${uid}`,'==',true)).valueChanges().subscribe(
            //     (notes: NoteList[]) => {
            //         this.notesChanged.next(notes);
            //     }
            // )   


            // this.db.collection(`Lists`, ref => ref.where('Desc',"==",'Groceries')).valueChanges().subscribe(
            //     (notes: NoteList[]) => {
            //         this.notesChanged.next(notes);
            //     }
            // )
        
        );
    }

    addNoteToNoteList(desc: string){
        const uid :string = this.authService.userData.uid;
        let item: NoteList = {
            Creator : uid,
            Desc : desc,
            ID : 'tempid',
            Members : {[uid]: true}
        } 
        //console.log('item - ', item);
        this.db.collection(`Lists`).add(item).then(data => {
            //console.log('in then data - ', data);
            //console.log('data id - ', data.id);

            const list : AngularFirestoreDocument<NoteList> = this.db.doc(`Lists/${data.id}`)
            item.ID = data.id;
            
            //for now hard code Kathy
            //const newUID: string = 'zGrpwEsF0xc25bR6O6KuTHFkZxM2';
            //item.Members[newUID] = true;
            // let result = '';
            // for (let i in item.Members){
            //     console.log('in for');
            //     if(item.Members.hasOwnProperty(i)){
            //         console.log('memlist.' + i + item.Members[i]);
            //     }
            // }

            //console.log(item.Members.toString);
            list.set(item, {merge: true});


        });
    }

    deleteNoteList(ID: string){
        const list : AngularFirestoreDocument<NoteList> = this.db.doc(`Lists/${ID}`);
        list.delete();
    }

    cancelSubscriptions() {
        this.fbSubs.forEach(sub => {
            if (sub) {
                sub.unsubscribe();
            }
        });
    }

}