import { Component, ElementRef, HostListener, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

// export const fadeInAnimation = trigger('fadeInAnimation', [
//     transition(':enter', [
//         query('.section', style({ opacity: 0, transform: 'translateY(100px)' })),
//         query('.section', stagger('300ms', [
//             animate('500ms', style({ opacity: 1, transform: 'translateY(0)' }))
//         ]))
//     ])
// ]);

export const fadeInAnimation = trigger('fadeInAnimation', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('1.5s', style({ opacity: 1 })),
    ]),
  ]);


@Component({
    selector: 'app-about-me',
    templateUrl: './about-me.component.html',
    styleUrls: ['./about-me.component.scss'],
    animations: [fadeInAnimation]
})
export class AboutMeComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                entry.target.classList.add('active');
              }
            });
          }, { threshold: 0.5 });
        
          const sections = document.querySelectorAll('.section-contents');
          sections.forEach(section => {
            observer.observe(section);
          });
    }

}
