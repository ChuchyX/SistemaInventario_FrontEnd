import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { AuthService } from '../../../Services/auth.service';
import { UserDTO } from '../../../Models/UserDTO-interface';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort} from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { RegisterUserComponent } from '../components/register-user/register-user.component';

@Component({
  selector: 'app-home-usuarios',
  templateUrl: './home-usuarios.component.html',
  styleUrl: './home-usuarios.component.scss',
})
export class HomeUsuariosComponent implements OnInit {
 
  authService = inject(AuthService);
  dialog = inject(MatDialog);
  users: MatTableDataSource<UserDTO> = new MatTableDataSource<UserDTO>([]);
  displayedColumns: string[] = ['position','username', 'email', 'age', 'gender', 'role'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;

  constructor(){}

  ngOnInit(): void {   
    this.authService.GetAllUsers().subscribe(result => {
      this.users = new MatTableDataSource<UserDTO>(result);
      this.users.sort = this.matSort;
      this.users.paginator = this.paginator;
    });
  }

  applyFilter(event: Event)
  {
    this.users.filter = (event.target as HTMLInputElement).value;
  }

  openRegisterUserComponent()
  {
    let dialogRef = this.dialog.open(RegisterUserComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

}
