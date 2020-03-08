import { Component, OnInit } from '@angular/core';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddMovieComponent } from '../add-movie/add-movie.component';
import { DalService } from '../dal.service';
import { Movie } from '../movie';
import { ActivatedRoute } from "@angular/router";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  categories:string[];
  movies:Movie[]
  currentCat:string;
  user:string;
  constructor (private modalService: NgbModal, private DalService:DalService, private route: ActivatedRoute, private AuthService:AuthService) { }

  open() {
    const modalRef =  this.modalService.open(AddMovieComponent);
    modalRef.componentInstance.addItem.subscribe(($e) => {
      modalRef.close();
      this.getCategoriesList();

    })
  }

  loadMovies(cat){
    this.currentCat = cat;
    this.DalService.getByCategory(cat).subscribe(data => this.movies = data)
  }


  getCategoriesList(){
    this.DalService.getCategories().subscribe(data => this.categories = data)
  }

  reloadEditor(){
    this.loadMovies(this.currentCat);
    this.getCategoriesList();
  }
  
  logOut(){
    this.AuthService.logoutUser();
  }
  ngOnInit(): void {
    this.user = this.route.snapshot.paramMap.get("user")
    this.getCategoriesList();
  }
}
