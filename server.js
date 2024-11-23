const express=require("express");
const cors=require("cors");
const dotenv=require("dotenv")
const cookieParser=require("cookie-parser");

const app = express();
dotenv.config({
  path: './.env',
});

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
}));

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());


// import studentRoute from './routes/student.routes';
// import teacherRoute from './routes/teacher.routes';


// app.use("/api/v1/student", studentRoute);
// app.use("/api/v1/teacher", teacherRoute);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});


const port = process.env.PORT || 7000;
app.listen(port||7000, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
