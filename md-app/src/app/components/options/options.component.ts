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
  @Input() textContent: string | any;
  @Output() delete = new EventEmitter()
  @Output() downloadText = new EventEmitter()

  messageSuccessCopy = 'Texto copiado com SUCESSO!'
  messageNoText = 'Não há conteúdo para ser copiado!'

  dynamicClass = 'bi bi-clipboard';
  transictionTime = 1500;

  constructor(public dialog: MatDialog, private _snackBar: MatSnackBar) { }

  clipMarkdown() {
    if (this.textContent?.length > 0) {
      this.dynamicClass = 'bi bi-clipboard-check';
      setTimeout(() => {
        this.dynamicClass = 'bi bi-clipboard';
      }, this.transictionTime);

      this.alert(this.messageSuccessCopy, true)
    }

    this.alert(this.messageNoText, false)

  }


  alert(text: string, success: boolean): void {

    const emoji: any = success ? '🎉' : '🤔'

    this._snackBar.open(text, emoji, {
      duration: this.transictionTime,
      horizontalPosition: 'start',
      verticalPosition: 'top',
    })
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      height: '200px',
      width: '400px',
      data: {
        isContent: this.textContent ? true : false
      }
    });

    dialogRef.afterClosed().subscribe((del: boolean) => {
      if (del) {
        this.delete.emit(true)
      }
    });
  }
}
