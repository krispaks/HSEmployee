import { AppComponent } from '../app/app.component';
import { TitleComponent } from '../app/components/core/title/title.component';
import { RouterTestingModule } from '@angular/router/testing';
import { UserService } from '../app/components/core/user/user.service';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('AppComponent', function () {
  let de: DebugElement;
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let userService: UserService;

  let userServiceStub = {
    username: 'krispaks'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ AppComponent, TitleComponent],
      providers: [
          { provide: UserService, useValue: userServiceStub }
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
    //userService = TestBed.get(UserService);
  });

  it('should create component', () => expect(comp).toBeDefined() );

  /*it('should have expected <h1> text', () => {
    fixture.detectChanges();
    const h1 = de.nativeElement;
    expect(h1.innerText).toMatch(/angular/i,
      '<h1> should say something about "Angular"');
  });*/
});