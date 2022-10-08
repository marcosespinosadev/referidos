import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent implements OnInit, AfterViewInit {
  card!: NodeListOf<Element>;

  nextBtn!: HTMLButtonElement;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.card = document.querySelectorAll('.content__right__card')!;
    this.nextBtn = document.querySelector('.content__left__buttons__next')!;
  }

  nextCard() {
    this.card.forEach((el) => {
      if (el.classList.contains('first')) {
        el.classList.remove('first');
        el.classList.add('third');
        this.nextBtn.style.backgroundColor = 'rgb(39, 0, 130)';
      } else if (el.classList.contains('second')) {
        el.classList.remove('second');
        el.classList.add('first');
        this.nextBtn.style.backgroundColor = 'rgb(250, 88, 182)';
      } else if (el.classList.contains('third')) {
        el.classList.remove('third');
        el.classList.add('second');
        this.nextBtn.style.backgroundColor = 'rgb(122, 11, 192)';
      }
    });
  }

  viewCard(
    cardOne: HTMLDivElement,
    cardTwo: HTMLDivElement,
    cardThree: HTMLDivElement
  ) {
    if (cardOne.classList.contains('first')) {
      this.router.navigate(['card-one'], { relativeTo: this.route });
    } else if (cardTwo.classList.contains('first')) {
      this.router.navigate(['card-two'], { relativeTo: this.route });
    } else if (cardThree.classList.contains('first')) {
      this.router.navigate(['card-three'], { relativeTo: this.route });
    }
  }
}
