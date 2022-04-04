import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "User",
    email: "user@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Sunnat",
    email: "sunnat@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
