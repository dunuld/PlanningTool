import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PersonService } from '../service/person.service';
import { Person } from '../model/person';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class PersonFormComponent {
  person: Person;

  constructor(
    private router: Router,
    private personService: PersonService) {
    this.person = new Person();
  }

  onSubmit() {
    this.personService.save(this.person).subscribe(result => this.gotoPersonList());
  }

  gotoPersonList() {
    this.router.navigate(['persons']);
  }
}
