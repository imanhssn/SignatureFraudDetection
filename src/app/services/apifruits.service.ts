import { Injectable } from '@angular/core';
//import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApifruitsService {

  constructor(private http: HttpClient) { }

    public customVisionService(image){

      //let url = "https://southcentralus.api.cognitive.microsoft.com/customvision/v3.0/Prediction/c7960beb-79c3-4a4f-a14e-d358ee5ed36f/classify/iterations/Fruits%20Classification/url"
      let url = "https://fraudsignaturedetection.cognitiveservices.azure.com/customvision/v3.0/Prediction/1a049921-97eb-4d2e-a803-54b44578bda4/classify/iterations/Iteration1/image"
      let body = {
        //"url" : image,
        image
        //"url" : "https://image.shutterstock.com/image-photo/red-apple-isolated-on-white-260nw-1727544364.jpg"
      }
      const headers = new HttpHeaders({
        //'Content-Type': 'application/json',
        'Content-Type': 'application/octet-stream',
        'Prediction-Key': 'a7579626291543cdbfc35344fc43a326'
      });
      return this.http.post(url, image, {headers: headers})

      //const API = 'https://southcentralus.api.cognitive.microsoft.com/customvision/v3.0/Prediction/c7960beb-79c3-4a4f-a14e-d358ee5ed36f/classify/iterations/Fruits%20Classification/image'
      //const API = 'https://southcentralus.api.cognitive.microsoft.com/customvision/v3.0/Prediction/c7960beb-79c3-4a4f-a14e-d358ee5ed36f/classify/iterations/Fruits%20Classification/url'

      //const headers = new HttpHeaders(
        //{
        //'Content-Type': 'application/octet-stream',
        //'Content-Type': 'application/json',
        //'Prediction-Key': 'a2afa492040d4454925a9e8ce4c271b3'
        //}
      //);
      //let body = {"Url": ""}
      //return this.http.post(API , body, {headers: headers})
      //return this.http.post(API, {url: image}, {headers: headers})
  }
}
