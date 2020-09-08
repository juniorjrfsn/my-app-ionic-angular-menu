import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { AjaxPage } from './ajax.page';

describe('AjaxPage', () => {
  let component: AjaxPage;
  let fixture: ComponentFixture<AjaxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjaxPage ],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(AjaxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
