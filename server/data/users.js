import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("1234567", 10),
    isAdmin: true,
  },
  {
    name: "John Abraham",
    email: "john@example.com",
    password: bcrypt.hashSync("1234567", 10),
  },
  {
    name: "Suraiya Nishi",
    email: "suraiya@example.com",
    password: bcrypt.hashSync("1234567", 10),
  },
  {
    name: "Saif Ali",
    email: "saif@example.com",
    password: bcrypt.hashSync("1234567", 10),
    isAdmin: true,
  },
];

export default users;
