import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Movie } from '../movie';
import { DalService } from '../dal.service';


@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent  {

  constructor(public activeModal: NgbActiveModal,private Dal:DalService) {}
  @Output() addItem = new EventEmitter<string>();

  movie:Movie = {
    name:'',
    category:'',
     imdbLink:'',
     img:''
  }
  msg:string;
  
  addMovie(valid){  
    this.Dal.addMovie(this.movie).subscribe(data => console.log(data));
    this.addItem.emit('add video');
  }

  checkLink(value){
    console.log(value);
  }

  
  validImdbLink(){
      let result;
      let match;
      if (match = 'http://imdb.com'.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n\?\=]+)/im)) {
          result = match[1]
          if (match = result.match(/^[^\.]+\.(.+\..+)$/)) {
              result = match[1]
          }
      } 
      return result;
  }

}
