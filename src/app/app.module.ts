import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ThemeService } from './theme.service';
import { SmallCardComponent } from './small-card/small-card.component';


@NgModule({ declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        CardComponent,
        SearchBarComponent,
        SmallCardComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        FormsModule], providers: [ThemeService, provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
