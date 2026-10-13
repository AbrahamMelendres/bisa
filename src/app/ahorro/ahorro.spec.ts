import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ahorro } from './ahorro';

describe('Ahorro', () => {
  let component: Ahorro;
  let fixture: ComponentFixture<Ahorro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ahorro],
    }).compileComponents();

    fixture = TestBed.createComponent(Ahorro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
