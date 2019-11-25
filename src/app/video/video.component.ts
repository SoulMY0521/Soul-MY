import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  password="";
  Unlocked='';
  Unlock($password){
    if($password=="soul0521"){
      this.Unlocked='unlock';
      window.alert("Unlock Success");
    }
    else{
      window.alert("Wrong password");
    }
  }

}
