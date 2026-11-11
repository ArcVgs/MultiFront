import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServiciosGenerales } from './servicios-generales';

describe('ServiciosGenerales', () => {
  let component: ServiciosGenerales;
  let fixture: ComponentFixture<ServiciosGenerales>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiciosGenerales],
    }).compileComponents();

    fixture = TestBed.createComponent(ServiciosGenerales);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
