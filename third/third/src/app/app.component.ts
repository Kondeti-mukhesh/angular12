import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name="mukhesh";
  age=22;
  url="https://images.pexels.com/photos/719396/pexels-photo-719396.jpeg?cs=srgb&dl=pexels-gabriel-peter-219375-719396.jpg&fm=jpg"
  isDisable = false
   fun()
  {
    alert("helolllllooooooooooo")
  }

}
