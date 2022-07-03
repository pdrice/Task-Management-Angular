import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, } from '@angular/material/dialog';
import { BoardService } from 'src/app/services/board.service';

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.css']
})
export class NewCardComponent implements OnInit {

  constructor(private dialogRef:MatDialogRef<NewCardComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any, public boardService:BoardService) { }

  ngOnInit(): void {
    if(this.data.editMode){
      this.title = this.boardService.boards[this.data.boardIndex].cards[this.data.cardIndex].title;
      this.tasksLoop = this.boardService.boards[this.data.boardIndex].cards[this.data.cardIndex].status;
      this.tasks = this.boardService.boards[this.data.boardIndex].cards[this.data.cardIndex].checklist;

    }
  }

  title:string = "";
  tasksLoop:any = [false];
  tasks:Array<string> = [""];

  addTask(){
    this.tasks.push("");
    this.tasksLoop.push(false);
  }

  deleteTask(index:any){
    this.tasks.splice(index, 1);
    this.tasksLoop.splice(index, 1);
  }

  close(){
    this.dialogRef.close();
  }

  create(){
    if(!this.data.editMode){
      this.boardService.boards[this.data.boardIndex].cards.push({
        title: this.title,
        checklist: this.tasks,
        status: this.tasksLoop
      });
    }
    else{
      this.boardService.boards[this.data.boardIndex].cards[this.data.cardIndex].title = this.title;
      this.boardService.boards[this.data.boardIndex].cards[this.data.cardIndex].status = this.tasksLoop;
      this.boardService.boards[this.data.boardIndex].cards[this.data.cardIndex].checklist = this.tasks ;
    }

    this.boardService.updateDataToLocalStorage();
    this.close();
  }

}
