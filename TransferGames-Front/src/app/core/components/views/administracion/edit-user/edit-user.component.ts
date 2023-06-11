import { Component, OnInit } from '@angular/core';
import { UserResponse } from 'src/app/core/models/user.interface';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user:UserResponse = {
    id: 0,
    name: '',
    email: '',
    image: ''
  }

  constructor(private userService: UserService){}

  ngOnInit(): void {
    const id: string | null = localStorage.getItem('editUser');
    if(id!=null){
      this.userService.getById(id).subscribe(data=>{
        this.user = data;
      });
    }
   
  }

}
