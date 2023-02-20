import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  form!: FormGroup;
  initial=`#  Markdown previewer

  ![](https://www.pixelstalk.net/wp-content/uploads/images6/Aesthetic-Wallpaper-Anime-Wallpaper-Bedroom.jpg)

   Esse é um dos desafios  do bootcamp *Front End Development Libraries*  do [FreeCodeCamp](https://www.freecodecamp.org/) 
   
   Você pode digitar texto em formato **markdown** ou <strong>HTML</strong>`

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      content: [this.initial],
    });
  }

  delete(event: boolean): any {
    if (event) {
      this.form.controls['content'].setValue('')
    }
  }


  ngOnInit() { }
}