import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewBoardComponent } from 'src/app/components/new-board/new-board.component';
import { BoardService } from 'src/app/services/board.service';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent implements OnInit {

  constructor(private matDialog:MatDialog, public boardService:BoardService) { }

  ngOnInit(): void {
  }

  openNewBoardDialog(){
    const dialogRef = this.matDialog.open(NewBoardComponent,{
      width:'500px'
    });
  }

}
