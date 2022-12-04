import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AutenticaService } from 'src/app/service/Autentica.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isCollapsed = true;
  constructor(private autenticaService: AutenticaService) { }

  ngOnInit() {
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['<a class= "carousel-control-prev" data-slide="prev"><i class="fa-solid fa-arrow-left fa-fw"></i></a>', '<a class= "carousel-control-next" data-slide="next"><i class="fa-solid fa-arrow-right fa-fw"></i></a>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }

  fnLogout(){
    this.autenticaService.logout();
  }

}
