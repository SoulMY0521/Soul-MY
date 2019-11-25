import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {

  }
  isCollapsed = true;
  openScrollableContent(longContent) {
    this.modalService.open(longContent, { scrollable: true });
  }
}
