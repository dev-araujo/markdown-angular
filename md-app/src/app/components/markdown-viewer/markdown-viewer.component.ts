import { Component, Input } from '@angular/core';

@Component({
  selector: 'markdown-viewer',
  templateUrl: './markdown-viewer.component.html',
  styleUrls: ['./markdown-viewer.component.scss'],
})
export class MarkdownViewerComponent {
  @Input() viewer: string | any;
}
