import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  api: string = 'https://api.github.com/users/llauu';
  data: any;


  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(this.api).subscribe(res => {
      this.data = res;
    })
  }
}
