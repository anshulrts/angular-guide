import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-and-event-binding-component',
  templateUrl: './property-and-event-binding-component.component.html',
  styleUrls: ['./property-and-event-binding-component.component.css']
})
export class PropertyAndEventBindingComponentComponent implements OnInit {

  paraDetails: string;

  constructor() { 
    this.paraDetails = "This is the para details value"
  }

  ngOnInit(): void {
  }

  paraClicked() : void {
    alert("Ohhh! You clicked the para");
  }

}
