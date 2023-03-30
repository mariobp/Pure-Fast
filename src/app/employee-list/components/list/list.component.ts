import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { EmployeeData } from '../../services/tree-generator.service';

const fibonacci = (num: number): number => {
  if (num === 1 || num === 2) {
    return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
};

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
  @Input() data: EmployeeData[];
  @Output() remove = new EventEmitter<EmployeeData>();

  constructor() { }

  ngOnInit(): void {
  }

  calculate(num: number) {
    console.log('Calculate');
    return fibonacci(num);
  }
}
