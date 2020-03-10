import { Component, OnInit } from '@angular/core';
import {addFontsToIndex} from '@angular/material/schematics/ng-add/fonts/material-fonts';


@Component({
  selector: 'app-d3-visualization',
  templateUrl: './d3-visualization.component.html',
  styleUrls: ['./d3-visualization.component.css']
})
export class D3VisualizationComponent implements OnInit {
  data;
  dataTransformed;
  svgWidth;
  svgHeight;

  constructor() {
    this.svgHeight = 80;
    this.svgWidth = '100%';
    this.data = [
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
    this.dataTransformed = this.getTimeDataAsBarData(this.data);

  }

  ngOnInit(): void {
  }
  onBubbleSelected(value) {
    console.log(value);
  }
  getTimeDataAsBarData(timeDataJson) {
    const startTime = new Date('2020-01-01T08:00');
    const endTime = new Date('2020-01-01T17:00');
    const barHeight = (100 / (timeDataJson.length));
    const hourWidth = 100 / (endTime.getHours() - startTime.getHours());
    var i;
    var element = {color: '', x: '', y: '', height: '', width: ''};
    var barDataJson = [];
    i = 0;
    for (var key in timeDataJson) {
      if (timeDataJson.hasOwnProperty(key)) {
        var element = {color: '', x: '', y: '', height: '', width: ''};
        console.log(key + ' -> ' + timeDataJson[key].color);
        element.color = timeDataJson[key].color;
        element.x = hourWidth * (timeDataJson[key].von.getHours() - startTime.getHours()) + '%';
        element.width = hourWidth * (timeDataJson[key].bis.getHours() - timeDataJson[key].von.getHours()) + '%';
        element.y = i * (barHeight) + '%';
        element.height = barHeight + '%';
        barDataJson.push(element);
        i = i + 1;
      }
    }
    return barDataJson;
  }


}
