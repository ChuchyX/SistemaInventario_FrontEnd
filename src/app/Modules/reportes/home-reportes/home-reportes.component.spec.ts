import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeReportesComponent } from './home-reportes.component';

describe('HomeReportesComponent', () => {
  let component: HomeReportesComponent;
  let fixture: ComponentFixture<HomeReportesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeReportesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeReportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
