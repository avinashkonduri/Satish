import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ak-new-scroll-top',
  templateUrl: './new-scroll-top.component.html',
  styleUrls: ['./new-scroll-top.component.css']
})
export class NewScrollTopComponent implements OnInit {
   // Scroll
   // Scroll
  public isShowBtnScrollTop!: boolean;
   public isShowBtnScrollbottom!: boolean;
  ngOnInit(): void {
  }

  // new Scroll
  public scrollTo(className: string): void {
    try {
      const elementList = document.querySelectorAll('.' + className);
      const element = elementList[0] as HTMLElement;
      // https://www.w3schools.com/cssref/pr_scroll-behavior.asp
      element.scrollIntoView({ behavior: 'smooth' });
    } catch (error) { }
  }

  @HostListener('scroll', ['$event'])
  onScroll(event: any) {
    // visible height + pixel scrolled >= total height
    if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight) {
      this.isShowBtnScrollbottom = false;
    } else {
      this.isShowBtnScrollbottom = true;
    }
    if (event.target.scrollTop <= 1) {
      this.isShowBtnScrollTop = false;
    } else {
      this.isShowBtnScrollTop = true;
    }
  }
}
