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
  endTime = new Date('2020-01-01T18:00');
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

  onBubbleSelected(d) {
    console.log('Kolonne: ' + d.kolonne);
    console.log('Kolonne: ' + d.von);
    console.log('Kolonne: ' + d.bis);
  }

  getAxe() {
    const lineCoordinates = [];
    let i: number;
    const numberOfHours = this.endTime.getHours() - this.startTime.getHours();
    for (i = 1; i <= numberOfHours + 1; i = i + 2) {
      const line = {time: 0, x1: '', x2: '', y1: '', y2: '', color: '#bdc3c7'};
      line.time = this.startTime.getHours() + (i - 1);
      line.x1 = (i - 1) * 100 / numberOfHours + '%';
      line.x2 = (i - 1) * 100 / numberOfHours + '%';
      line.y1 = 100 + '%';
      line.y2 = 0 + '%';
      lineCoordinates.push(line);
    }
    return lineCoordinates;
  }

  getTimeDataAsBarData(timeDataJson) {

    const barHeight = (100 / (timeDataJson.length + 1));

    let i;
    const barDataJson = [];
    i = 0;
    for (const key in timeDataJson) {
      if (timeDataJson.hasOwnProperty(key)) {
        const element = {color: '', x: '', y: '', height: '', width: '', kolonne: '',
          von: new Date('2020-01-01T08:00'),
          bis: new Date('2020-01-01T08:00'), subanlage: ''};
        element.color = timeDataJson[key].color;
        element.x = this.hourWidth * (timeDataJson[key].von.getHours() - this.startTime.getHours()) + '%';
        element.width = this.hourWidth * (timeDataJson[key].bis.getHours() - timeDataJson[key].von.getHours()) + '%';
        element.y = i * (barHeight) + '%';
        element.height = barHeight + '%';
        element.kolonne = timeDataJson[key].kolonne;
        element.von = timeDataJson[key].von;
        element.bis = timeDataJson[key].bis;
        element.subanlage = timeDataJson[key].subanlage;
        barDataJson.push(element);
        i = i + 1;
      }
    }
    return barDataJson;
  }


}
