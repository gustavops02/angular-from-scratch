import { Component, Input } from '@angular/core';

@Component({
  selector: 'parent-data',
  templateUrl: './parent-data.component.html',
  styleUrl: './parent-data.component.css'
})
export class ParentDataComponent {


  @Input() data!: { name:string, email:string, role:string }

}
