import mongoose from "mongoose";
import dotenv from "dotenv";
import Employee from "./models/employee.model.js";
import { connectDB } from "./config/db.js";

dotenv.config();

const seedEmployees = [
{
    firstName: "Rajesh",
    lastName: "Kumar",
    email: "rajesh.kumar@example.com",
    mobile: "9876543210",
    position: "Senior Developer"
},
{
    firstName: "Priya",
    lastName: "Patel",
    email: "priya.patel@example.com",
    mobile: "8765432109",
    position: "UI/UX Designer"
},
{
    firstName: "Amit",
    lastName: "Sharma",
    email: "amit.sharma@example.com",
    mobile: "7654321098",
    position: "Business Analyst"
},
{
    firstName: "Deepa",
    lastName: "Singh",
    email: "deepa.singh@example.com",
    mobile: "6543210987",
    position: "QA Engineer"
},
{
    firstName: "Suresh",
    lastName: "Verma",
    email: "suresh.verma@example.com",
    mobile: "5432109876",
    position: "System Architect"
},
{
    firstName: "Neha",
    lastName: "Gupta",
    email: "neha.gupta@example.com",
    mobile: "4321098765",
    position: "Team Lead"
},
{
    firstName: "Rakesh",
    lastName: "Mishra",
    email: "rakesh.mishra@example.com",
    mobile: "3210987654",
    position: "DevOps Engineer"
},
{
    firstName: "Anita",
    lastName: "Yadav",
    email: "anita.yadav@example.com",
    mobile: "2109876543",
    position: "Frontend Developer"
},
{
    firstName: "Sanjay",
    lastName: "Joshi",
    email: "sanjay.joshi@example.com",
    mobile: "1098765432",
    position: "Backend Developer"
},
{
    firstName: "Meena",
    lastName: "Reddy",
    email: "meena.reddy@example.com",
    mobile: "9087654321",
    position: "Data Analyst"
},
{
    firstName: "Vijay",
    lastName: "Malhotra",
    email: "vijay.malhotra@example.com",
    mobile: "8976543210",
    position: "Product Manager"
},
{
    firstName: "Kavita",
    lastName: "Iyer",
    email: "kavita.iyer@example.com",
    mobile: "7865432109",
    position: "Technical Writer"
},
{
    firstName: "Ramesh",
    lastName: "Nair",
    email: "ramesh.nair@example.com",
    mobile: "6754321098",
    position: "Full Stack Developer"
},
{
    firstName: "Sunita",
    lastName: "Raj",
    email: "sunita.raj@example.com",
    mobile: "5643210987",
    position: "HR Manager"
},
{
    firstName: "Arun",
    lastName: "Chatterjee",
    email: "arun.chatterjee@example.com",
    mobile: "4532109876",
    position: "Software Architect"
},
{
    firstName: "Pooja",
    lastName: "Mehta",
    email: "pooja.mehta@example.com",
    mobile: "3421098765",
    position: "Database Administrator"
},
{
    firstName: "Mohan",
    lastName: "Kapoor",
    email: "mohan.kapoor@example.com",
    mobile: "2310987654",
    position: "Network Engineer"
},
{
    firstName: "Lakshmi",
    lastName: "Menon",
    email: "lakshmi.menon@example.com",
    mobile: "1209876543",
    position: "Cloud Engineer"
},
{
    firstName: "Dinesh",
    lastName: "Trivedi",
    email: "dinesh.trivedi@example.com",
    mobile: "9198765432",
    position: "Security Analyst"
},
{
    firstName: "Anjali",
    lastName: "Desai",
    email: "anjali.desai@example.com",
    mobile: "8087654321",
    position: "Scrum Master"
}
];

const seedDB = async () => {
  await connectDB();
  await Employee.deleteMany({});
  await Employee.insertMany(seedEmployees);
  console.log("Database seeded!");
  mongoose.connection.close();
};

seedDB();