import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HeadlinesComponent }   from './headlines.component';
import { SportsComponent }     from './sports.component';
import {DefaultPageComponent} from './default-page.component';
import { NewsDescDirective } from './news-desc.directive';
import { TagServiceService } from './tag-service.service';

const appRoutes: Routes = [
  { path: 'headlines', component: HeadlinesComponent },
  { path: 'sports', component: SportsComponent },
  { path: '', component: DefaultPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SportsComponent,
    HeadlinesComponent,
    DefaultPageComponent,
    NewsDescDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [TagServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
