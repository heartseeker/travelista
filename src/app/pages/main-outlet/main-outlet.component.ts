import { ApiService } from './../../core/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '../../../../node_modules/@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-main-outlet',
  templateUrl: './main-outlet.component.html',
  styleUrls: ['./main-outlet.component.scss']
})
export class MainOutletComponent implements OnInit {

  isPostDetail: boolean = false;
  posts;
  params;

  constructor(
    private route: ActivatedRoute,
    private http: ApiService
  ) { }

  ngOnInit() {
    this.isPostDetail = this.route.snapshot.children.length > 0 ? true : false;

    this.route.params.subscribe(params => {
      const categorySlug = params['category'];
      if (!this.isPostDetail) {
        this.http.get(`categories?slug=${categorySlug}`)
        .pipe(switchMap((categories) => {
          return this.http.get(`posts?_embed&categories=${categories[0].id}`);
        }))
        .subscribe(posts => {
          this.posts = posts;
        });
      }
    });

  }

  isDetail(e) {
    this.isPostDetail = true;
  }

}
