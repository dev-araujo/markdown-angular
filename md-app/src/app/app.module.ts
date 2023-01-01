import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MarkdownViewerComponent } from './components/markdown-viewer/markdown-viewer.component';
import { FormsModule } from '@angular/forms';
import { LMarkdownEditorModule } from 'ngx-markdown-editor';

@NgModule({
  declarations: [AppComponent, MarkdownViewerComponent],
  imports: [BrowserModule, FormsModule, LMarkdownEditorModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
