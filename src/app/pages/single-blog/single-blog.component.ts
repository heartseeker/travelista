import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { ApiService } from '../../core/api.service';


@Component({
  selector: 'app-single-blog',
  templateUrl: './single-blog.component.html',
  styleUrls: ['./single-blog.component.scss']
})
export class SingleBlogComponent implements OnInit {

  post$;

  constructor(
    private route: ActivatedRoute,
    private http: ApiService
  ) { }

  ngOnInit() {
    const slug = this.route.snapshot.params['slug'];
    this.post$ = this.http.get(`posts?_embed&slug=${slug}`);

    this.http.get(`posts?_embed&slug=${slug}`).subscribe(post => {
      console.log(post[0]._embedded['wp:term']);
    });

  }

}
