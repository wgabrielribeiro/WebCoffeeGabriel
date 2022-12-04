import { ThemeComponent } from './theme/theme.component';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ThemeService } from './service/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isDarkMode!: boolean;
  showFiller = false;

  constructor(private http: HttpClient, private router: Router, private themeService: ThemeService, public dialog: MatDialog) { }

  ngOnInit(): void {

  }

  public tittle = "Café do Gabriel";

  toggleDarkMode() {
    this.isDarkMode = this.themeService.isDarkMode();

    this.isDarkMode
      ? this.themeService.update('light-mode')
      : this.themeService.update('dark-mode');
  }

  openDialog() {
    const dialogRef = this.dialog.open(ThemeComponent);
    dialogRef.afterClosed().subscribe(() => {
      console.log(`Dialog closed`);
    });
  }

}
