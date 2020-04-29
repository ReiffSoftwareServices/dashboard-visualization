import { Component } from '@angular/core';

@Component({
  selector: 'app-backend-fetch',
  templateUrl: './backend-fetch.component.html',
  styleUrls: ['./backend-fetch.component.css']
})
export class BackendFetchComponent {

  getData() {
    const url = 'https://rohrer.herokuapp.com/api/clients/';
    console.log(url);
    // @ts-ignore
    fetch(url, {
      method: 'GET',
      headers: new Headers({
        Authorization: 'Basic YWRtaW46SGFtc3Rlck5yLjE5'
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.warn('Success:', data);
        // this.notify.emit(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

}
