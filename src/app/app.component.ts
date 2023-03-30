import { Component, OnInit } from '@angular/core';
import { ListGenerator, EmployeeData } from './employee-list/services/tree-generator.service';
import { Names } from './names';

const NumRange: [number, number] = [23, 28];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  salesList: EmployeeData[];
  rndList: EmployeeData[];
  label: string;

  constructor(private generator: ListGenerator) {}

  ngOnInit() {
    this.salesList = this.generator.generate(Names, NumRange, 100);
    this.rndList = this.generator.generate(Names, NumRange, 100);
  }

  add(list: EmployeeData[], name: string) {
    list.unshift({ label: name, num: this.generator.generateNumber(NumRange) });
  }

  addToSales(name: string) {    
    this.salesList = [
      { label: name, num: this.generator.generateNumber(NumRange) },
      ...this.salesList
    ];
  }

  addToRndList(name: string) {    
    this.rndList = [
      { label: name, num: this.generator.generateNumber(NumRange) },
      ...this.rndList
    ];
  }

  remove(list: EmployeeData[], node: EmployeeData) {
    list.splice(list.indexOf(node), 1);
  }
}
