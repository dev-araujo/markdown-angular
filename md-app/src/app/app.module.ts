import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MarkdownViewerComponent } from './components/markdown-viewer/markdown-viewer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LMarkdownEditorModule } from 'ngx-markdown-editor';

@NgModule({
  declarations: [AppComponent, MarkdownViewerComponent],
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
