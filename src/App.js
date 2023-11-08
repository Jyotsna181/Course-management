import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/home";
import CourseList from "./Components/Course/CourseList";
import Teachers from "./Components/Teachers/Teachers";
import Header from "./Components/Header/header";
import CourseDetail from "./Components/Course/CourseDetails";
import StudentDashboard from "./Components/Student/StudentDashboard"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />}>
          <Route index element={<Header />} />
          <Route path="Course" element={<CourseList />} />
          <Route path="/course/:id" element={<CourseDetail/>} />
          <Route path="/dashboard" element={<StudentDashboard/>} />
          <Route path="teacher" element={<Teachers />} />
        </Route>
          
      </Routes>
    </BrowserRouter>
  );
}


