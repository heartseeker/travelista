import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts;

  constructor(private http: ApiService) { }

  ngOnInit() {
    this.http.get('posts?_embed').subscribe(posts => {
      this.posts = posts;
    });
  }

}
