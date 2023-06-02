import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportCardDataComponent } from './export-card-data.component';

describe('ExportCardDataComponent', () => {
  let component: ExportCardDataComponent;
  let fixture: ComponentFixture<ExportCardDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportCardDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExportCardDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
