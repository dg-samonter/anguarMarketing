import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertaPrecisoComponent } from './oferta-preciso.component';

describe('OfertaPrecisoComponent', () => {
  let component: OfertaPrecisoComponent;
  let fixture: ComponentFixture<OfertaPrecisoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertaPrecisoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertaPrecisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
