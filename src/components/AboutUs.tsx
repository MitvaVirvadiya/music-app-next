"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
     {
        "title": "Expert Guidance, Personalized Learning",
        "description": "Our music school offers expert guidance tailored to your unique learning style. Whether you're a beginner or an experienced musician, we're here to help you reach your musical goals."
     },
     {
        "title": "Comprehensive Curriculum, Endless Possibilities",
        "description": "With our comprehensive curriculum, you'll explore a wide range of musical genres and techniques. From classical to contemporary, we provide the tools and resources for you to unleash your creativity and explore endless possibilities."
     },
     {
        "title": "Passionate Instructors, Inspiring Mentorship",
        "description": "At our music school, you'll learn from passionate instructors who are dedicated to nurturing your talent and inspiring your musical journey. With their guidance and mentorship, you'll not only refine your skills but also discover your unique musical voice."
     },
     {
        "title": "State-of-the-Art Facilities, Immersive Learning Environment",
        "description": "Immerse yourself in a state-of-the-art learning environment designed to enhance your musical experience. Our modern facilities and technology-infused classrooms create the perfect atmosphere for you to thrive and excel in your musical endeavors."
     },
     {
        "title": "Community Connection, Lifelong Relationships",
        "description": "Join our vibrant music community and forge lifelong relationships with fellow musicians. From collaborative performances to networking opportunities, you'll be part of a supportive community that shares your passion for music and fosters growth and connection."
     }
]

const AboutUs = () => {
  return (
    <StickyScroll content={content} />
  )
}

export default AboutUs;