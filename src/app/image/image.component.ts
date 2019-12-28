import { Component, OnInit } from '@angular/core';
import {NgbModal,NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

export class picturedetail {
  Img:string;
  Detail:string;
};

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  
  constructor(private modalService: NgbModal) { }
  
  isCollapsed1 = true;
  openScrollableContent(longContent1) {
    this.modalService.open(longContent1, { centered: true,size: 'lg' });
  }
  ngOnInit() {
    
  }
  password="";
  Unlocked='';
  Unlock($password){
    if($password=="soul0521"){
      this.Unlocked='unlock';
      window.alert("Unlock Success");
    }
    else if($password=="allsoul0521"){
      this.Unlocked='unlockall';
      window.alert("Unlock Success");
    }
    else{
      window.alert("Wrong password");
    }
  }
  
  //Gallery
  picturedetail = [
                  {Img:'soul0001.jpg', Detail:'830 Gathering(2019)'},
                  {Img:'soul0002.jpg', Detail:'HaiDiLao Hotpot (海底捞)'},
                  {Img:'soul0003.jpg', Detail:'JB Gathering'},
                  ]
  //Gallery1
  picturedetail1 = [
                  {Img:'a_soul00001_kk.jpg', Detail:'空空'},
                  {Img:'soul0001.jpg', Detail:'830 Gathering(2019)'},
                  {Img:'soul0002.jpg', Detail:'HaiDiLao Hotpot (海底捞)'},
                  {Img:'soul0003.jpg', Detail:'JB Gathering'},
                  ]

  /*
  //Toast Soul-MY Birthday
  Birthday1 = true;
  BirthdayName1="马来西亚Soul友";

  close() {
    this.Birthday1 = false;
    //setTimeout(() => this.show = false, 5000);
  }
  */

}
