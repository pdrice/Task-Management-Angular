import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BoardService } from 'src/app/services/board.service';

@Component({
  selector: 'app-new-board',
  templateUrl: './new-board.component.html',
  styleUrls: ['./new-board.component.css']
})
export class NewBoardComponent implements OnInit {

  constructor(private dialogRef:MatDialogRef<NewBoardComponent>, public boardService:BoardService,
    private router:Router) { }

  ngOnInit(): void {
  }

  title:string = "";

  close(){
    this.dialogRef.close();
  }
  
  create(){
    this.boardService.createBoard(this.title);
    this.router.navigate(['/view-board', this.boardService.boards.length - 1]);
    this.dialogRef.close();

  }

}
