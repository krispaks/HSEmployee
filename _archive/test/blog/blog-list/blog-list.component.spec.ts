import { BlogListComponent } from '../../../app/components/blog/blog-list/blog-list.component';
import { BlogListItemComponent } from '../../../app/components/blog/blog-list-item/blog-list-item.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BlogService } from '../../../app/components/blog/blog.service';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BLOG_LIST } from '../../../app/components/in-memory-api/fake-backend-provider';

describe('BlogListComponent', function () {
  let de: DebugElement;
  let comp: BlogListComponent;
  let fixture: ComponentFixture<BlogListComponent>;
  let blogService: BlogService;
  let spy: any;

  let blogServiceStub = {
    getBlogs: function(){}
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule // need to import if your component has routing
      ],
      declarations: [ BlogListComponent, BlogListItemComponent],
      providers: [
          { provide: BlogService, useValue: blogServiceStub }
        ]
    })
    .compileComponents(); //used when you have external templates in your component
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogListComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
    blogService =fixture.debugElement.injector.get(BlogService);

    spy = spyOn(blogService, 'getBlogs')
          .and.returnValue(Promise.resolve(BLOG_LIST))
  });

  it('should create component', () => expect(comp).toBeDefined() );

  it('should call getBlogs during ngOninit', () => {
    fixture.detectChanges();
    expect(spy.calls.any()).toBe(true, 'Error with get blogs');
  });

  it('should return values for getBlogs', ()=>{
    fixture.detectChanges();
    fixture.whenStable().then(() => { // wait for async getQuote
      fixture.detectChanges();        // update view with quote
      expect(comp.blogs).toBe(BLOG_LIST);
    });
  });
});