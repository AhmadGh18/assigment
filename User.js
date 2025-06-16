// function isAdmin(user) {
//     return typeof user.createUser === 'function';
// }
// function isModerator(user) {
//     return typeof user.banUser === 'function';
// }
// function isRegularUser(user) {
//     return typeof user.viewContent === 'function';
// }
// function performAdminTask(user, task) {
//     if (isAdmin(user)) {
//         task();
//     }
//     else {
//         console.error("User is not an Admin.");
//     }
// }
// function moderateContent(user, contentId) {
//     if (isModerator(user)) {
//         // Example: Find user to ban or log the action
//         console.log("Moderator ".concat(user.name, " banned content with ID: ").concat(contentId));
//     }
//     else {
//         console.error("User is not a Moderator.");
//     }
// }
// function viewContentAsUser(user) {
//     if (isRegularUser(user)) {
//         user.viewContent();
//     }
//     else {
//         console.error("User is not a Regular User.");
//     }
// }
// function superUserTask(user, task) {
//     task();
// }
// var regularUser = {
//     name: "John Doe",
//     email: "john@example.com",
//     viewContent: function () { return console.log("Viewing content..."); },
// };
// var admin = {
//     name: "Alice Admin",
//     email: "alice@admin.com",
//     createUser: function (user) { return console.log("Created user: ".concat(user.name)); },
// };
// var moderator = {
//     name: "Mike Mod",
//     email: "mike@mod.com",
//     banUser: function (user) { return console.log("Banned user: ".concat(user.name)); },
// };
// var superUser = {
//     name: "Super Sam",
//     email: "sam@super.com",
//     createUser: function (user) { return console.log("Created user: ".concat(user.name)); },
//     banUser: function (user) { return console.log("Banned user: ".concat(user.name)); },
// };
// // Testing the functions
// performAdminTask(admin, function () { return console.log("Admin task done."); });
// moderateContent(moderator, "abc123");
// viewContentAsUser(regularUser);
// superUserTask(superUser, function () {
//     superUser.createUser(regularUser);
//     superUser.banUser(regularUser);
// });
