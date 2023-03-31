class User {
    constructor(username, password) {
      this.username = username;
      this._password = password;
    }
  
    get password() {
      return this._password.replace(/./g, '*');
    }
  
    set password(newPassword) {
      if (newPassword.length < 8 || !/\d/.test(newPassword) || !/[A-Z]/.test(newPassword)) {
        console.error('Invalid password! Password must be at least 8 characters long and contain at least one number and one uppercase letter.');
      } else {
        this._password = newPassword;
      }
    }
}


const user = new User('Mithun', 'Password123');
console.log(user.password); // output: "***********"
user.password = 'invalid'; // output: "Invalid password! Password must be at least 8 characters long and contain at least one number and one uppercase letter."
user.password = 'newValidPassword1'; // sets the new password
console.log(user.password); // output: "********************"

  