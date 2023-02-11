import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss'],
})
export class OptionsComponent {
  dynamicClass = 'bi bi-clipboard';
  transictionTime = 2000;
  @Input() clipboard: string | any;

  constructor(public dialog: MatDialog) {}

  clipMarkdown() {
    this.dynamicClass = 'bi bi-clipboard-check';
    setTimeout(() => {
      this.dynamicClass = 'bi bi-clipboard';
    }, this.transictionTime);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      height: '200px',
      width: '400px',
      data: { name: 'works' },
    });

    dialogRef.afterClosed().subscribe((res: string) => {
      console.log(res);
    });
  }
}
