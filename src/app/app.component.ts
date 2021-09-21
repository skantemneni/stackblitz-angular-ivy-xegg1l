import { Component, VERSION, OnInit } from '@angular/core';
import {of, from } from 'rxjs';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    of(20, 30, 40).subscribe(value => console.log('Value:' + value));

//    from ([10, 20, 30, 60]).subscribe (
//      value => console.log('Value:' + value),
//      error => console.log('ERROR:'),
//      () => console.log('Complete!')
//    )
    from ([10, 20, 30, 60]).subscribe ({
      next: (value) => console.log(`Value: ${value}`),
      error: (err) => console.log(`ERROR: ${err}`),
      complete: () => console.log('Complete!')
    })
    
    
  }
  
  name = 'Angular ' + VERSION.major;

}
