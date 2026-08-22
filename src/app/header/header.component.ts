import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MatFabButton } from '@angular/material/button';
import { MatSlideToggle } from '@angular/material/slide-toggle';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    imports: [MatToolbar, MatIcon, MatFabButton, MatSlideToggle]
})
export class HeaderComponent implements OnInit {

  constructor(private themeService: ThemeService) {}

  getCurrentTheme(): string {
    return this.themeService.getCurrentTheme();
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  ngOnInit(): void {
  }
  openGitHub() {
    // Add your GitHub-related functionality here
    window.open('https://github.com/SubramanyaKS/Angular-Weather-App', '_blank');
  }

}
