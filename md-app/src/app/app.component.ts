import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  content = `
  Angular Markdown
  ----
  is easy to display \`console.log('foo');\`
  
  this sample is for [stackoverflow question](https://stackoverflow.com/questions/50285467/markdown-editor-in-angular-4) !
  `;
}
