import {Component, OnInit} from '@angular/core';
import {Input} from '@angular/core';


@Component({
  selector: 'app-d3-visualization',
  templateUrl: './d3-visualization.component.html',
  styleUrls: ['./d3-visualization.component.css']
})
export class D3VisualizationComponent implements OnInit {
  @Input() data;
  dataTransformed;
  svgWidth;
  svgHeight;
  axe;
  startTime = new Date('2020-01-01T08:00');
  endTime = new Date('2020-01-01T17:00');
  hourWidth;

  constructor() {
    this.svgHeight = 80;
    this.svgWidth = '100%';

  }

  ngOnInit(): void {
    this.hourWidth = 100 / (this.endTime.getHours() - this.startTime.getHours());
    this.dataTransformed = this.getTimeDataAsBarData(this.data);
    this.axe = this.getAxe();

  }

  onBubbleSelected(value) {
    console.log(value);
  }

  getAxe() {
    const lineCoordinates = [];
    let i: number;
    const numberOfHours = this.endTime.getHours() - this.startTime.getHours();
    for (i = 1; i <= numberOfHours + 1; i++) {
      const line = {x1: '', x2: '', y1: 0, y2: 0};
      line.x1 = (i - 1) * 100 / numberOfHours + '%';
      line.x2 = (i - 1) * 100 / numberOfHours + '%';
      line.y1 = 9;
      line.y2 = 1;
      lineCoordinates.push(line);
    }
    return lineCoordinates;
  }

  getTimeDataAsBarData(timeDataJson) {

    const barHeight = (100 / (timeDataJson.length));

    let i;
    const barDataJson = [];
    i = 0;
    for (const key in timeDataJson) {
      if (timeDataJson.hasOwnProperty(key)) {
        const element = {color: '', x: '', y: '', height: '', width: ''};
        console.log(key + ' -> ' + timeDataJson[key].color);
        element.color = timeDataJson[key].color;
        element.x = this.hourWidth * (timeDataJson[key].von.getHours() - this.startTime.getHours()) + '%';
        element.width = this.hourWidth * (timeDataJson[key].bis.getHours() - timeDataJson[key].von.getHours()) + '%';
        element.y = i * (barHeight) + '%';
        element.height = barHeight + '%';
        barDataJson.push(element);
        i = i + 1;
      }
    }
    return barDataJson;
  }


}
