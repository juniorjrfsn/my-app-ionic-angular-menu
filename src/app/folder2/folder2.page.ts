import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-folder',
  templateUrl: './folder2.page.html',
  styleUrls: ['./folder2.page.scss'],
})
export class Folder2Page implements OnInit {
  public folder2: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder2 = this.activatedRoute.snapshot.paramMap.get('id'); 
  }

}
