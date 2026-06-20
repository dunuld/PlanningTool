import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonFormComponent } from './person-form.component';
import { RouterTestingModule } from "@angular/router/testing";
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi, withXhr } from '@angular/common/http';

describe('PersonFormComponent', () => {
  let component: PersonFormComponent;
  let fixture: ComponentFixture<PersonFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [FormsModule,
        RouterTestingModule, PersonFormComponent],
    providers: [provideHttpClient(withXhr(), withInterceptorsFromDi()), provideHttpClientTesting()]
});
    fixture = TestBed.createComponent(PersonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
