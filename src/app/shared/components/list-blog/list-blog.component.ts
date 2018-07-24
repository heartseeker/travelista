import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-blog',
  templateUrl: './list-blog.component.html',
  styleUrls: ['./list-blog.component.scss']
})
export class ListBlogComponent implements OnInit {

  @Input('posts') posts;

  constructor() { }

  ngOnInit() {
  }

}
