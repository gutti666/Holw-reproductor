import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrinPage } from './prin.page';

describe('PrinPage', () => {
  let component: PrinPage;
  let fixture: ComponentFixture<PrinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrinPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
