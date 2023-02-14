import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'select-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss'],
})
export class OptionsComponent {
  @Input() copyText: string | any;
  dynamicClass = 'bi bi-clipboard';
  transictionTime = 2000;

  @Output() clearText = new EventEmitter();

  constructor(
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private clipboard: Clipboard
  ) {}

  clipMarkdown() {
    this.dynamicClass = 'bi bi-clipboard-check';
    this.clipboard.copy(this.copyText);
    this._snackBar.open('Texto copiado com sucesso!', '✅', {
      duration: this.transictionTime,
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      height: '200px',
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((clear: boolean) => {
      if (clear) {
        this.clearText.emit();
      }
    });
  }
}
