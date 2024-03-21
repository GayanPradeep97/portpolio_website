import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsAndExperinceComponent } from './skills-and-experince.component';

describe('SkillsAndExperinceComponent', () => {
  let component: SkillsAndExperinceComponent;
  let fixture: ComponentFixture<SkillsAndExperinceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsAndExperinceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkillsAndExperinceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
