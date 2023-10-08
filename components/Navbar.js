'use client';
import Link from "next/link"
import React from "react"
import { useState } from "react";
import { useEffect } from "react";
const Navbar = () => {

    const [activeSection, setActiveSection] = useState('home');
    const handleScroll = () => {
        const homeElement = document.getElementById("home");
        const aboutElement = document.getElementById("about");
        const contactElement = document.getElementById("contact");
        const projectsElement = document.getElementById("projects");
        const servicesElement = document.getElementById("services");

        const scrollY = window.scrollY;
        const vh10 = window.innerHeight * 0.1;
        const vh15 = window.innerHeight * 0.25;
        if (scrollY > homeElement.offsetTop - vh10 && scrollY < aboutElement.offsetTop - vh10) {
            setActiveSection('home');
        } else if (scrollY > aboutElement.offsetTop - vh10 && scrollY < projectsElement.offsetTop - vh10) {
            setActiveSection('about');
        } else if (scrollY > projectsElement.offsetTop - vh10 && scrollY < servicesElement.offsetTop - vh10) {
            setActiveSection('projects');
        } else if (scrollY > projectsElement.offsetTop - vh10 && scrollY < contactElement.offsetTop - vh10) {
            setActiveSection('services');
        } else if (scrollY > contactElement.offsetTop - vh15) {
            setActiveSection('contact');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToHome = () => {
        const aboutElement = document.getElementById("home");
        if (aboutElement) {
            aboutElement.scrollIntoView({ behavior: "smooth" });
            setActiveSection('home');
        }
    };
    const scrollToAbout = () => {
        const aboutElement = document.getElementById("about");
        if (aboutElement) {
            aboutElement.scrollIntoView({ behavior: "smooth" });
            setActiveSection('about');
        }
    };
    const scrollToContact = () => {
        const aboutElement = document.getElementById("contact");
        if (aboutElement) {
            aboutElement.scrollIntoView({ behavior: "smooth" });
            setActiveSection('contact');
        }
    };
    const scrollToProjects = () => {
        const aboutElement = document.getElementById("projects");
        if (aboutElement) {
            aboutElement.scrollIntoView({ behavior: "smooth" });
            setActiveSection('projects');
        }
    };
    const scrollToServices = () => {
        const aboutElement = document.getElementById("services");
        if (aboutElement) {
            aboutElement.scrollIntoView({ behavior: "smooth" });
            setActiveSection('services');
        }

    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 w-full h-[10vh] Navbg flex justify-between items-center px-28 border-2 font-sans bg-white">
            <div className="flex gap-3">
                <img className="rounded" src="/logo.png" alt="Logo" width={38} height={47} />
                <p className="text-custom-blue font-extrabold text-3xl mt-2 italic">
                    TheBox
                </p>
            </div>
            <div className="flex gap-10 text-lg">
                <a className={`cursor-pointer ${activeSection === "home" ? "text-custom-orange" : ""}`} onClick={scrollToHome}>Home</a>
                <a className={`cursor-pointer ${activeSection === "about" ? "text-custom-light-orange" : ""}`} onClick={scrollToAbout}>About us</a>
                <a className={`cursor-pointer ${activeSection === "projects" ? "text-custom-light-orange" : ""}`} onClick={scrollToProjects}>Projects</a>
                <a className={`cursor-pointer ${activeSection === "services" ? "text-custom-light-orange" : ""}`} onClick={scrollToServices}>Services</a>
                <a className={`cursor-pointer ${activeSection === "contact" ? "text-custom-light-orange" : ""}`} onClick={scrollToContact}>Contact us</a>

            </div>
        </nav>
    )
}

export default Navbar
