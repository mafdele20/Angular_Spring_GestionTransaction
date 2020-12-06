import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvoiesComponent } from './envoies.component';

describe('EnvoiesComponent', () => {
  let component: EnvoiesComponent;
  let fixture: ComponentFixture<EnvoiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvoiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvoiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
