import { Component, OnInit } from '@angular/core';
import { User } from '../user/user';


@Component({
  selector: 'user-register',
  templateUrl: './register.component.html',

})
export class RegisterComponent implements OnInit {

  private user: User = new User();
  private roles: Array<string>;

  constructor() { }

  ngOnInit() {
    this.roles = ['Etudiant', 'Developpeur', 'Manager']
  }

  register(){
    console.log('Inscription de : ' + this.user.username);
  }

}
