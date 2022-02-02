import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {


  starRate = 2;
  heartRate = 4;
  radioGroupValue = 'This is value 2';

  constructor() { }

  ngOnInit(): void {
  }

}
