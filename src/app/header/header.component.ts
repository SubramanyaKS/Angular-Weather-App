import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
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
