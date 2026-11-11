import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlanillaViaticos } from './planilla-viaticos';

describe('PlanillaViaticos', () => {
  let component: PlanillaViaticos;
  let fixture: ComponentFixture<PlanillaViaticos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanillaViaticos],
    }).compileComponents();

    fixture = TestBed.createComponent(PlanillaViaticos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
