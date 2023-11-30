import {Directive, Input, ElementRef, Renderer2, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Directive({
  selector: '[Link]'
})
export class DynamicLinkDirective implements OnInit {
  @Input('Link') link: any;
  constructor(private el: ElementRef, private renderer: Renderer2, private router: Router) {
  }

  ngOnInit() {
    if (this.link.startsWith('http://') || this.link.startsWith('https://')) {
      this.renderer.setAttribute(this.el.nativeElement, 'href', this.link);
      this.renderer.setAttribute(this.el.nativeElement, 'target', '_blank');
    } else if (this.link.startsWith('/')) {
      this.renderer.listen(this.el.nativeElement, 'click', (event) => {
        event.preventDefault();
        this.router.navigateByUrl(this.link);
      });
    } else if (this.link.startsWith('#')) {
      this.renderer.listen(this.el.nativeElement, 'click', (event) => {
        event.preventDefault();
        this.scrollToId(this.link);
      });
    }
  }

  scrollToId(id: any) {
    id = id.substring(1);
    if (this.router.url !== '/') {
      this.router.navigate(['/'])
      setTimeout(() => {
        // @ts-ignore
        document.getElementById(id).scrollIntoView();
      }, 100)
    } else {
      // @ts-ignore
      document.getElementById(id).scrollIntoView();
    }
  }
}
