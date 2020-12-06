import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaireEnvoieComponent } from './faire-envoie.component';

describe('FaireEnvoieComponent', () => {
  let component: FaireEnvoieComponent;
  let fixture: ComponentFixture<FaireEnvoieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaireEnvoieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaireEnvoieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
