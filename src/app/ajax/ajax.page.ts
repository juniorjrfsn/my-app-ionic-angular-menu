import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
@Component({
  selector: 'app-ajax',
  templateUrl: './ajax.page.html',
  styleUrls: ['./ajax.page.scss'],
})
export class AjaxPage implements OnInit {
  public ajax: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.ajax = this.activatedRoute.snapshot.paramMap.get('id');
                  
  }

}
