import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  @Output() delete = new EventEmitter()
  @Output() downloadText = new EventEmitter()


  constructor(public dialog: MatDialog, private _snackBar: MatSnackBar) { }

  clipMarkdown() {
    if (this.clipboard?.length > 0) {
      this.dynamicClass = 'bi bi-clipboard-check';
      setTimeout(() => {
        this.dynamicClass = 'bi bi-clipboard';
      }, this.transictionTime);

      this._snackBar.open('Texto copiado com SUCESSO!', '🎉', {
        duration: this.transictionTime,
        horizontalPosition: 'start',
        verticalPosition: 'top',
      })
    }
  }

  download(){
    this.downloadText.emit(true)
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      height: '200px',
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((res: string) => {
      this.delete.emit(true)
    });
  }
}
