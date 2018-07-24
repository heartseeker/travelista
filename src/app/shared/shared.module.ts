import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { TopCategoryWidgetComponent } from './components/top-category-widget/top-category-widget.component';
import { SearchWidgetComponent } from './components/search-widget/search-widget.component';
import { UserInfoWidgetComponent } from './components/user-info-widget/user-info-widget.component';
import { PopularPostWidgetComponent } from './components/popular-post-widget/popular-post-widget.component';
import { PostCategoryWidgetComponent } from './components/post-category-widget/post-category-widget.component';
import { NewsletterWidgetComponent } from './components/newsletter-widget/newsletter-widget.component';
import { TagCloudWidgetComponent } from './components/tag-cloud-widget/tag-cloud-widget.component';
import { FooterComponent } from './components/footer/footer.component';
import { DetailBannerComponent } from './components/detail-banner/detail-banner.component';
import { ListBlogComponent } from './components/list-blog/list-blog.component';
import { RouterModule } from '../../../node_modules/@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent,
    BannerComponent,
    TopCategoryWidgetComponent,
    SearchWidgetComponent,
    UserInfoWidgetComponent,
    PopularPostWidgetComponent,
    PostCategoryWidgetComponent,
    NewsletterWidgetComponent,
    TagCloudWidgetComponent,
    FooterComponent,
    DetailBannerComponent,
    ListBlogComponent,
    HttpClientModule
  ],
  declarations: [
    HeaderComponent,
    BannerComponent,
    TopCategoryWidgetComponent,
    SearchWidgetComponent,
    UserInfoWidgetComponent,
    PopularPostWidgetComponent,
    PostCategoryWidgetComponent,
    NewsletterWidgetComponent,
    TagCloudWidgetComponent,
    FooterComponent,
    DetailBannerComponent,
    ListBlogComponent,
  ]
})
export class SharedModule { }
