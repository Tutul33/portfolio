import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEntryComponent } from './profile-entry.component';

describe('ProfileEntryComponent', () => {
  let component: ProfileEntryComponent;
  let fixture: ComponentFixture<ProfileEntryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileEntryComponent]
    });
    fixture = TestBed.createComponent(ProfileEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
