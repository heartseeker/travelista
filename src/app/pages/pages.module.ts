import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { SingleBlogComponent } from './single-blog/single-blog.component';
import { MainOutletComponent } from './main-outlet/main-outlet.component';
import { PageOutletComponent } from './page-outlet/page-outlet.component';
import { AboutComponent } from './about/about.component';
import { HotelsComponent } from './hotels/hotels.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { ContactComponent } from './contact/contact.component';
import { CategoryBlogComponent } from './category-blog/category-blog.component';


export const routes: Routes = [
  {
    path: 'p',
    data: { depth: 2 },
    children: [
      {
        path: 'about',
        component: AboutComponent,
      }
    ],
    component: PageOutletComponent,
  },
  {
    path: 'p',
    data: { depth: 2 },
    children: [
      {
        path: 'hotels',
        component: HotelsComponent,
      }
    ],
    component: PageOutletComponent,
  },
  {
    path: 'p',
    data: { depth: 2 },
    children: [
      {
        path: 'insurance',
        component: InsuranceComponent,
      }
    ],
    component: PageOutletComponent,
  },
  {
    path: 'p',
    data: { depth: 2 },
    children: [
      {
        path: 'contact',
        component: ContactComponent,
      }
    ],
    component: PageOutletComponent,
  },
  {
    path: ':category',
    data: { depth: 2 },
    children: [
      {
        path: ':slug',
        data: { depth: 3 },
        component: SingleBlogComponent,
      }
    ],
    component: MainOutletComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    HomeComponent,
    SingleBlogComponent,
    MainOutletComponent,
    AboutComponent,
    PageOutletComponent,
    HotelsComponent,
    InsuranceComponent,
    ContactComponent,
    CategoryBlogComponent,
  ]
})
export class PagesModule { }
