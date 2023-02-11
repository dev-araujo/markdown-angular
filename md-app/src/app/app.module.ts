import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { OptionsComponent } from './components/options/options.component';
import { MarkdownViewerComponent } from './components/markdown-viewer/markdown-viewer.component';
import { DialogComponent } from './components/options/dialog/dialog.component';

import { LMarkdownEditorModule } from 'ngx-markdown-editor';
import { ClipboardModule } from '@angular/cdk/clipboard';

import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    MarkdownViewerComponent,
    OptionsComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    LMarkdownEditorModule,
    ReactiveFormsModule,
    ClipboardModule,
    MatTooltipModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
