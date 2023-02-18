import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      content: [''],
    });
  }

  delete(event: boolean): any {
    if (event) this.form.controls['content'].setValue('')
  }
  download(event: boolean, id: string, fileName: string): void {
    if (event) {
      let file: any = document.querySelector('#' + id)

      html2canvas(file).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL();
        console.log(link.href)
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
      });
    }



  }

  ngOnInit() { }
}