import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor() { 
    let str = localStorage.getItem('boards');
    if(str != null){
      this.boards = JSON.parse(str);
    }
  }

 public boards:Array<any> = [];

  createBoard(title:string){
    let newBoardObj = { title:title, cards:[]};
    this.boards.push(newBoardObj);
    localStorage.setItem('boards', JSON.stringify(this.boards));
  }

  public updateDataToLocalStorage(){
    localStorage.setItem('boards', JSON.stringify(this.boards));
  }

  board={
    title:'',
    card:[
      {title:'', checklist:['task1','task2'],
        status:[true, false]}
    ]
  }
}
