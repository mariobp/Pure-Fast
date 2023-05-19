import { Component, Inject, Injector, OnInit, WritableSignal, effect, signal } from '@angular/core';
import { ListGenerator, EmployeeData } from './employee-list/services/tree-generator.service';
import { Names } from './names';

const NumRange: [number, number] = [23, 28];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  salesList: WritableSignal<EmployeeData[]> = signal(this.generator.generate(Names, NumRange, 100));
  rndList: WritableSignal<EmployeeData[]> = signal(this.generator.generate(Names, NumRange, 100));
  label: string;

  constructor(private generator: ListGenerator,
    private injector: Injector) {}

    showAlert = effect(() => {
      if (this.salesList().length > 101) {
        alert('We have more than 100 employees');
      }
    })
    
  ngOnInit() {
  }

  add(list: EmployeeData[], name: string) {
    list.unshift({ label: name, num: this.generator.generateNumber(NumRange) });
  }

  addToSales(name: string) {    
    this.salesList.update(list => ([{ label: name, num: this.generator.generateNumber(NumRange) }, ...list]));
  }

  addToRndList(name: string) {    
    this.rndList.update(list => ([{ label: name, num: this.generator.generateNumber(NumRange) }, ...list]));
  }

  removeFromSales(node: EmployeeData) {
    this.salesList.update(list => list.filter(item => item !== node));
  }

  removeFromRndList(node: EmployeeData) {
    this.rndList.update(list => list.filter(item => item !== node));
  }

  remove(list: EmployeeData[], node: EmployeeData) {
    list.splice(list.indexOf(node), 1);
  }
}
