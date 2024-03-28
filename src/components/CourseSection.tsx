"use client"
import courseData from "../data/music_courses.json"
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
}

const CourseSection = () => {
    const featuredCourses = courseData.courses.filter((course: Course) => course.isFeatured);

    return (
        <div className="py-12 bg-gray-900">
            <div>
                <div className="text-center">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Featured Courses</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn With the Best</p>
                </div>
            </div>
            <div className="mt-10 mx-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {featuredCourses.map((course) => (
                        <div key={course.id} className="flex justify-center">
                            <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-gro">
                                    <img src={course.image} alt={course.title} className="w-full h-[200px] object-cover rounded-md" />
                                    <p className="text-lg sm:text-xl text-neutral-200 mt-4 mb-2 dark:text-neutral-20">{course.title}</p>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                                    <Link href={`/courses/${course.slug}`} className=" mt-4 px-4 py-2 rounded-[22px] border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-20">
                                        Learn More
                                    </Link>
                                </div>
                            </BackgroundGradient>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-20 text-center">
                <Link href={"/courses"} className="px-4 py-2 rounded-[22px] border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-20">
                View All courses
                </Link> 
            </div>
        </div>
    )
}

export default CourseSection;