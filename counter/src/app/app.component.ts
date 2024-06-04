import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  count=0
  
  incr()
  {
    this.count++
  }

  dicr()
  {
    if (this.count == 0) {
       
    }
    else {
        this.count--;
    }
  }

  reset()
  {
    this.count=0
  }

}
