import { Component, OnInit } from '@angular/core';
import {NgbModal,NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

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
    //this.close();
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
  Name="";
  show = true;

  close() {
    this.show = false;
    //setTimeout(() => this.show = false, 5000);
  }


}
