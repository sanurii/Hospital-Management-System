import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDashboadComponent } from './login-dashboad.component';

describe('LoginDashboadComponent', () => {
  let component: LoginDashboadComponent;
  let fixture: ComponentFixture<LoginDashboadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginDashboadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginDashboadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Testing all html element", () =>{
    const data = fixture.nativeElement;
    expect(data.querySelector(".sss").textContent).toContain("Patient Login")
  })

  it("Testing html details", () =>{
    const data = fixture.nativeElement;
    expect(data.querySelector(".sss").textContent).toContain("Patient Login")
  })
});
