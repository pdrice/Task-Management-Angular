import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { NewCardComponent } from 'src/app/components/new-card/new-card.component';
import { BoardService } from 'src/app/services/board.service';

@Component({
  selector: 'app-view-board',
  templateUrl: './view-board.component.html',
  styleUrls: ['./view-board.component.css']
})
export class ViewBoardComponent implements OnInit {

  constructor(private dialog:MatDialog, private route:ActivatedRoute, 
    public boardService:BoardService) { }

  ngOnInit(): void {
    this.boardIndex = this.route.snapshot.paramMap.get('boardIndex');
  }

  boardIndex:any = 0;

  newCard(){
    this.dialog.open(NewCardComponent,{
      width:'500px',
      data: {boardIndex: this.boardIndex, editMode: false, cardIndex:-1}
    });
  }

  editCard(cardIndex:any){
    this.dialog.open(NewCardComponent,{
      width:'500px',
      data: {boardIndex: this.boardIndex, editMode: true, cardIndex:cardIndex}
    });
  }

  deleteCard(cardIndex:any){
    this.boardService.boards[this.boardIndex].cards.splice(cardIndex, 1);
    this.boardService.updateDataToLocalStorage();
  }

}
