import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonListComponent } from './person-list.component';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient, withInterceptorsFromDi, withXhr } from '@angular/common/http';
import { of } from 'rxjs';
import { Person } from '../model/person';
import { PersonService } from '../service/person.service';
import { vi } from 'vitest';


describe('PersonListComponent', () => {
  let component: PersonListComponent;
  let fixture: ComponentFixture<PersonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonListComponent],
      providers: [
        {
          provide: PersonService,
          useValue: {
            findAll: () => of([])
          }
        },
        provideHttpClient(withXhr(), withInterceptorsFromDi()),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PersonListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should render the table', async () => {
    const personService = TestBed.inject(PersonService);
    const mockPersons: Person[] = [
      { id: '1', name: 'John Doe', email: 'john@example.com', capacity: 10 },
      { id: '2', name: 'Jane Doe', email: '', capacity: 20 }
    ];
    vi.spyOn(personService, 'findAll').mockReturnValue(of(mockPersons));

    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('table')).toBeTruthy();
    const rows = compiled.querySelectorAll('tbody tr');
    expect(rows.length).toBe(2);
    expect(rows[0].textContent).toContain('John Doe');
    expect(rows[0].textContent).toContain('john@example.com');
    expect(rows[1].textContent).toContain('Jane Doe');
    expect(rows[1].textContent).toContain('No email');
  });
});
