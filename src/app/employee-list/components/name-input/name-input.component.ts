import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { EmployeeData } from '../../services/tree-generator.service';

@Component({
  selector: 'app-name-input',
  templateUrl: './name-input.component.html',
  styleUrls: ['./name-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NameInputComponent implements OnInit {
  @Input() data: EmployeeData[];
  @Output() add = new EventEmitter<string>();
  
  value: string;
  constructor() { }

  ngOnInit(): void {
  }
  
  handleKey(event: any) {      
    this.add.emit(this.value);
    this.value = '';
  }

}
