import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MarkdownViewerComponent } from './components/markdown-viewer/markdown-viewer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LMarkdownEditorModule } from 'ngx-markdown-editor';
import { OptionsComponent } from './components/options/options.component';

@NgModule({
  declarations: [AppComponent, MarkdownViewerComponent, OptionsComponent],
  imports: [
    BrowserModule,
    FormsModule,
    LMarkdownEditorModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
