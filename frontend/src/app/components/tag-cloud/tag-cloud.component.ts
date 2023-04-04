import { Component, OnInit } from '@angular/core';
import { HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-tag-cloud',
  templateUrl: './tag-cloud.component.html',
  styleUrls: ['./tag-cloud.component.scss']
})
export class TagCloudComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '4fed009c3cmshe15f7bede688926p15a16ajsn162b35958842',
        'X-RapidAPI-Host': 'textvis-word-cloud-v1.p.rapidapi.com'
      },
      body: '{"text":"This is a test. I repeat, this is a test. We are only testing the functionality of this api, nothing else. End of test.","scale":0.5,"width":400,"height":400,"colors":["#375E97","#FB6542","#FFBB00","#3F681C"],"font":"Tahoma","use_stopwords":true,"language":"en","uppercase":false}'
    };

    this.http.post('https://textvis-word-cloud-v1.p.rapidapi.com/v1/textToCloud', options.body, options).subscribe(
      (res) => console.log(res)
    )
  }

}
