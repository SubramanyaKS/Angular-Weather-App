// theme.service.ts

import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private currentTheme: string = 'light-theme';
  private renderer: Renderer2;

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
    this.applyThemeClass(this.currentTheme);
  }

  getCurrentTheme(): string {
    return this.currentTheme;
  }

  setTheme(theme: string): void {
    this.currentTheme = theme;
    this.applyThemeClass(theme);
  }

  toggleTheme(): void {
    this.currentTheme === 'light-theme'
      ? this.setTheme('dark-theme')
      : this.setTheme('light-theme');
  }

  private applyThemeClass(theme: string): void {
    this.renderer.removeClass(document.body, 'light-theme');
    this.renderer.removeClass(document.body, 'dark-theme');
    this.renderer.addClass(document.body, theme);
  }
}
