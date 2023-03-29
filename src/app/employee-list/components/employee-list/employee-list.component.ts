import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EmployeeData } from '../../services/tree-generator.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  @Input() data: EmployeeData[];
  @Input() department: string;

  @Output() remove = new EventEmitter<EmployeeData>();
  @Output() add = new EventEmitter<string>();
  
  label: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
