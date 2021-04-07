export class AppUser  {
  email = '';
  password = '';
}

// user Auth
export class AppUserAuth {
  userId: any;
  email = '';
  bearerToken = '';
  isAuthenticated = false;
  roles: any;
  message!: string;
}
