import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-blog',
  templateUrl: './list-blog.component.html',
  styleUrls: ['./list-blog.component.scss']
})
export class ListBlogComponent implements OnInit {

  @Input('posts') posts;
  @Output('detail') detail = new EventEmitter<{}>();

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  async navigate(url, param) {
    await this.router.navigate(['/' + url, param]);
    this.detail.emit(true);
  }

}
