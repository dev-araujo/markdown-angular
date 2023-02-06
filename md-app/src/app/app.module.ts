import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OptionsComponent } from './components/options/options.component';
import { MarkdownViewerComponent } from './components/markdown-viewer/markdown-viewer.component';

import { LMarkdownEditorModule } from 'ngx-markdown-editor';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [AppComponent, MarkdownViewerComponent, OptionsComponent],
  imports: [
    BrowserModule,
    FormsModule,
    LMarkdownEditorModule,
    ReactiveFormsModule,
    ClipboardModule,
    MatTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
