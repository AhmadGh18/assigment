// Base interface
interface BaseUser {
  name: string;
  email: string;
}


interface Admin extends BaseUser {
  createUser(user: User): void;
}


interface Moderator extends BaseUser {
  banUser(user: User): void;
}

interface RegularUser extends BaseUser {
  viewContent(): void;
}
type User = Admin | Moderator | RegularUser;
function isAdmin(user: User): user is Admin {
  return typeof (user as Admin).createUser === 'function';
}

function isModerator(user: User): user is Moderator {
  return typeof (user as Moderator).banUser === 'function';
}

function isRegularUser(user: User): user is RegularUser {
  return typeof (user as RegularUser).viewContent === 'function';
}
function performAdminTask(user: User, task: () => void): void {
  if (isAdmin(user)) {
    task();
  } else {
    console.error("User is not an Admin.");
  }
}

function getmoderateContent(user: User, contentId: string): void {
  if (isModerator(user)) {
    console.log(`Moderator ${user.name} banned content with ID: ${contentId}`);
  } else {
    console.error("User is not a Moderator.");
  }
}

function viewContentAsaUser(user: User): void {
  if (isRegularUser(user)) {
    user.viewContent();
  } else {
    console.error("User is not a Regular User.");
  }
}
type SuperUser = Admin & Moderator;
function superUserTask(user: SuperUser, task: () => void): void {
  task(); 
}
const regularUser: RegularUser = {
  name: "John Doe",
  email: "john@example.com",
  viewContent: () => console.log("Viewing content......"),
};

const admin: Admin = {
  name: "ali Admin",
  email: "ali@admin.com",
  createUser: (user: User) => console.log(`Created user: ${user.name}`),
};

const moderator: Moderator = {
  name: "mohammad Mod",
  email: ",phammad@mod.com",
  banUser: (user: User) => console.log(`Banned user: ${user.name}`),
};

const superUser: SuperUser = {
  name: "super ahmad ghzayel",
  email: "ahmad@super.com",
  createUser: (user: User) => console.log(`Created user: ${user.name}`),
  banUser: (user: User) => console.log(`Banned user: ${user.name}`),
};

performAdminTask(admin, () => console.log("Admin task done."));
getmoderateContent(moderator, "abc123");
viewContentAsaUser(regularUser);
superUserTask(superUser, () => {
  superUser.createUser(regularUser);
  superUser.banUser(regularUser);
});

