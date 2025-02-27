import React from "react";
import "./Courses.css";
import img7 from "./../assets/img7.avif";
import img8 from "./../assets/img8.avif";
import img9 from "./../assets/img9.avif";
import img10 from "./../assets/img10.avif";
import img11 from "./../assets/img11.avif";
import img12 from "./../assets/img12.avif";
import { Link } from "react-router-dom";

// import { Link } from "react-router-dom";

const Courses = () => {
  const courses = [
    {
      src: img7,
      alt: "Web Development Basics",
      title: "Web Development Basics",
      date: "December 1, 2023",
      duration: "6 weeks",
      seats: 20,
      rating: "⭐⭐⭐⭐☆ (4.5)",
      description:
        "Learn the fundamentals of web development including HTML, CSS, and JavaScript.",
    },
    {
      src: img8,
      alt: "Data Science Introduction",
      title: "Introduction to Data Science",
      date: "January 15, 2024",
      duration: "8 weeks",
      seats: 25,
      rating: "⭐⭐⭐⭐⭐ (4.8)",
      description:
        "An introductory course on data science concepts, including Python, data analysis, and visualization.",
    },
    {
      src: img9,
      alt: "Advanced JavaScript",
      title: "Advanced JavaScript",
      date: "February 5, 2024",
      duration: "10 weeks",
      seats: 15,
      rating: "⭐⭐⭐⭐☆ (4.7)",
      description:
        "Dive deep into JavaScript concepts and frameworks to enhance your development skills.",
    },
    {
      src: img10,
      alt: "UI/UX Design Essentials",
      title: "UI/UX Design Essentials",
      date: "March 10, 2024",
      duration: "5 weeks",
      seats: 30,
      rating: "⭐⭐⭐⭐⭐ (4.9)",
      description:
        "Learn the principles of UI/UX design, including user-centered design and prototyping.",
    },
    {
      src: img11,
      alt: "Machine Learning Foundations",
      title: "Machine Learning Foundations",
      date: "April 1, 2024",
      duration: "12 weeks",
      seats: 10,
      rating: "⭐⭐⭐⭐☆ (4.6)",
      description:
        "Gain a solid foundation in machine learning algorithms and applications.",
    },
    {
      src: img12,
      alt: "Artificial Intelligence",
      title: "Artificial Intelligence",
      date: "April 1, 2024",
      duration: "12 weeks",
      seats: 10,
      rating: "⭐⭐⭐⭐☆ (4.6)",
      description:
        "Explore the basics of artificial intelligence, covering neural networks, AI ethics, and applications.",
    },
  ];

  return (
    <div className="course">
      <h1>
        Let's Check Our <span>Courses</span>
      </h1>
      <p>
        It is a long established fact that a button will be distracted by the
        content of a page when looking at its layout.
      </p>
      <div className="courses">
        {courses.map((course, index) => (
          <>
            <div className="course1" key={index}>
              <div className="coursesimg">
                <img src={course.src} />
              </div>

              <div className="course-content">
                <p className="date">Start Date: {course.date}</p>
                <h2>{course.title}</h2>
                <p>{course.description}</p>
                <p>
                  <strong>Duration:</strong> {course.duration}
                </p>
                <p>
                  <strong>Available Seats:</strong> {course.seats}
                </p>
                <p>
                  <strong>Rating:</strong> {course.rating}
                </p>
                <Link to="/enroll-now">
                  <button>Enroll Now</button>
                </Link>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Courses;
