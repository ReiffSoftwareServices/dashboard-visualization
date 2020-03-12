import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Test Erfolgreich!!', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Local', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-dashboard-table',
  templateUrl: './dashboard-table.component.html',
  styleUrls: ['./dashboard-table.component.css']
})
export class DashboardTableComponent implements OnInit {
  displayedColumns: string[] = ['anlage', 'montag', 'dienstag', 'mittwoch', 'donnerstag', 'freitag'];
  dataSource = ELEMENT_DATA;
  exampleDataSet;
  constructor() {
    this.exampleDataSet = [
      { subanlage: '6.1.2', kolonne: '1',
        von: new Date('2020-01-01T08:00'),
        bis: new Date('2020-01-01T10:00'),
        color: '#55efc4'
      },
      { subanlage: '6.1.2', kolonne: '1',
        von: new Date('2020-01-01T10:30'),
        bis: new Date('2020-01-01T12:00'),
        color: '#81ecec'
      },
      { subanlage: '6.1.2', kolonne: '1',
        von: new Date('2020-01-01T09:00'),
        bis: new Date('2020-01-01T17:00'),
        color: '#74b9ff'
      },
      { subanlage: '6.1.2', kolonne: '1',
        von: new Date('2020-01-01T08:00'),
        bis: new Date('2020-01-01T10:00'),
        color: '#a29bfe'
      },
      { subanlage: '6.1.2', kolonne: '1',
        von: new Date('2020-01-01T10:30'),
        bis: new Date('2020-01-01T12:00'),
        color: '#ffeaa7'
      },
      { subanlage: '6.1.2', kolonne: '1',
        von: new Date('2020-01-01T09:00'),
        bis: new Date('2020-01-01T17:00'),
        color: '#b2bec3'
      },
      { subanlage: '6.1.2', kolonne: '1',
        von: new Date('2020-01-01T08:00'),
        bis: new Date('2020-01-01T10:00'),
        color: '#fab1a0'
      },
      { subanlage: '6.1.2', kolonne: '1',
        von: new Date('2020-01-01T10:30'),
        bis: new Date('2020-01-01T12:00'),
        color: '#ff7675'
      },
      { subanlage: '6.1.2', kolonne: '1',
        von: new Date('2020-01-01T09:00'),
        bis: new Date('2020-01-01T17:00'),
        color: '#fd79a8'
      },
    ];
  }

  ngOnInit(): void {
  }

}
