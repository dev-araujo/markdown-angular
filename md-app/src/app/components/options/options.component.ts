import { Component, Input } from '@angular/core';

@Component({
  selector: 'options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss'],
})
export class OptionsComponent {
  dynamicClass = 'bi bi-clipboard';
  transictionTime = 2000;
  @Input() clipboard: string | any;

  clipMarkdown() {
    this.dynamicClass = 'bi bi-clipboard-check';
    setTimeout(() => {
      this.dynamicClass = 'bi bi-clipboard';
    }, this.transictionTime);
  }
}
