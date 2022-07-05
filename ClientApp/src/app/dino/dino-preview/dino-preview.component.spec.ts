import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinoPreviewComponent } from './dino-preview.component';

describe('DinoPreviewComponent', () => {
  let component: DinoPreviewComponent;
  let fixture: ComponentFixture<DinoPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DinoPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DinoPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
