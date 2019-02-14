import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  editFlag = false
  index = ''
  data = []
  add() {
    this.data.push(
      {
        name: this.input_a,
        name2: this.input_b
      })

    this.input_b = ''
    this.input_a = ''
    // alert(JSON.stringify(this.data))
  }
  input_a;
  input_b;
  del(index) {
    this.data.splice(index, 1)
  }
  edit(index) {
    this.input_a = this.data[index].name
    this.input_b = this.data[index].name2
    this.editFlag = true
    this.index = index;
  }
  update() {
    this.data[this.index].name=this.input_a
    this.data[this.index].name2=this.input_b
  }

}
