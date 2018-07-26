import { Component, OnInit, HostListener, Renderer2, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  menuActive: boolean = false;
  url;

  constructor(
    private router: Router,
    private renderer: Renderer2,
    private location: Location
  ) { }

  ngOnInit() {
    // this.url = this.router.url;
    // console.log(this.router.url);
  }

  async routerLink(url) {
    await this.router.navigateByUrl(url);
    this.menuActive = false;
    this.renderer.removeClass(document.body, 'mobile-nav-active');
  }

  openMenu() {
    this.menuActive = true;
    this.renderer.addClass(document.body, 'mobile-nav-active');
  }

  @HostListener('document:click', ['$event', '$event.target'])
  onMenuClose(event: MouseEvent, element: HTMLElement): void {
    if (element.id === 'mobile-body-overly') {
      this.menuActive = false;
      this.renderer.removeClass(document.body, 'mobile-nav-active');
    }
  }

  back() {
    this.location.back();
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'mobile-nav-active');
  }

}
