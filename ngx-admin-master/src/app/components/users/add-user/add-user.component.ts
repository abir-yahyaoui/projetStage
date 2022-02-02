import { Component, OnInit } from '@angular/core';
import { NbComponentShape, NbComponentSize, NbComponentStatus } from '@nebular/theme';

@Component({
  selector: 'ngx-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {


  starRate = 2;
  heartRate = 4;
  radioGroupValue = 'This is value 2';


  constructor() { }

  ngOnInit(): void {
  }

}
