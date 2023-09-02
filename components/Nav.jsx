"use client"
import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";

const Navbar = () => {

	const [isOpen, setIsOpen] = useState(false);
	const [activeLink, setActiveLink] = useState("/");

	const handleActive = (link) => {
		setActiveLink(link);
		setIsOpen(false);
	}

	const scrollToBottom = () => {
		setIsOpen(false);
		window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
	};

	return (
		<div className="h-20 ">
			<nav className=" shadow-sm fixed w-full z-10 bg-white">
				<div className="w-full">
					<div className="flex items-center h-20 w-full">
						<div className="flex items-center  mx-10  justify-between w-full">
							<div className="flex justify-center items-center flex-shrink-0 ">
								<h1 className=" font-bold font-sang  -mx-6 text-xl md:m-0  md:text-3xl cursor-pointer text-gray-500">
								Varanasi Photo Tours
								</h1>
							</div>
							<div className="hidden md:block">
								<div className="ml-10 flex items-baseline space-x-4">
									<Link href="/" legacyBehavior>
										<a onClick={() => setActiveLink("/")} className={`cursor-pointer hover:bg-gray-500 ${activeLink === "/" ? "text-white bg-gray-500 opacity-50" : "text-black"} hover:text-white px-3 py-2 rounded-md text-base font-medium`}
										>
											Home</a>
									</Link>
									<Link href="/tours-workshops" legacyBehavior>
										<a onClick={() => setActiveLink("/tours-workshops")} className={`cursor-pointer hover:bg-gray-500 ${activeLink === "/tours-workshops" ? "text-white bg-gray-500 opacity-50" : "text-black"} hover:text-white px-3 py-2 rounded-md text-base font-medium`}
										>
											Tours & Workshops</a>
									</Link>
									<Link href="/tours-workshops/fixers" legacyBehavior>
										<a onClick={() => setActiveLink("/fixers")} className={`cursor-pointer hover:bg-gray-500 ${activeLink === "/fixers" ? "text-white bg-gray-500 opacity-50" : "text-black"} hover:text-white px-3 py-2 rounded-md text-base font-medium`}
										>
											Fixers</a>
									</Link>

									<Link href="/reviews" legacyBehavior>
										<a onClick={() => setActiveLink("/reviews")} className={`cursor-pointer hover:bg-gray-500 ${activeLink === "/reviews" ? "text-white bg-gray-500 opacity-50" : "text-black"} hover:text-white px-3 py-2 rounded-md text-base font-medium`}
										>
											Reviews</a>
									</Link>
									<Link href="/gallery" legacyBehavior>
										<a onClick={() => setActiveLink("/gallery")} className={`cursor-pointer hover:bg-gray-500 ${activeLink === "/gallery" ? "text-white bg-gray-500 opacity-50" : "text-black"} hover:text-white px-3 py-2 rounded-md text-base font-medium`}
										>
											Gallery</a>
									</Link>
									<Link href="/about" legacyBehavior>
										<a onClick={() => setActiveLink("/about")} className={`cursor-pointer hover:bg-gray-500 ${activeLink === "/about" ? "text-white bg-gray-500 opacity-50" : "text-black"} hover:text-white px-3 py-2 rounded-md text-base font-medium`}
										>
											About</a>
									</Link>
								

									<Link href="/contact" legacyBehavior>
										<button href="" onClick={() => setActiveLink("/contact")} className="cursor-pointer bg-gray-500 text-white px-3 py-2 rounded-md text-base font-medium hover:bg-black"
										>
											Contact</button>
									</Link>

								</div>
							</div>
						</div>
						<div className="mr-10 flex md:hidden ">
							<button
								onClick={() => setIsOpen(!isOpen)}
								type="button"
								className="bg-gray-500 inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
								aria-controls="mobile-menu"
								aria-expanded="false"
							>
								<span className="sr-only">Open main menu</span>
								{!isOpen ? (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								) : (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>

				<Transition
					show={isOpen}
					enter="transition ease-out duration-500 transform"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="transition ease-in duration-300 transform"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					{(ref) => (
						<div className="md:hidden" id="mobile-menu">
							<div
								ref={ref}
								className="bg-white pt-2 pb-3 space-y-2  px-4 flex flex-col font-ste"
							>
								<Link
									href="/"
									activeClass="about"
									to="about"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-gray-500 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
									legacyBehavior
								>
									<a onClick={() => handleActive("/")}
									>
										Home</a>
								</Link>
								<Link
									href="/tours-workshops"
									activeClass="about"
									to="about"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-gray-500 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
									legacyBehavior
								>
									<a onClick={() => handleActive("/tours-workshops")}
									>
										Tours & Workshops</a>
								</Link>

								<Link
									href="/tours-workshops/fixers"
									activeClass="work"
									to="work"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-gray-500 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
									legacyBehavior
								>
									<a onClick={() => handleActive("/fixers")}
									>
										Fixers</a>
								</Link>
								<Link
									href="/reviews"
									activeClass="services"
									to="services"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-gray-500 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
									legacyBehavior
								>
									<a onClick={() => handleActive("/reviews")}
									>
										Reviews</a>
								</Link>

								<Link
									href="/gallery"
									activeClass="work"
									to="work"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-gray-500 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
									legacyBehavior
								>
									<a onClick={() => handleActive("/gallery")}
									>
										Gallery</a>
								</Link>
								<Link
									href="/about"
									activeClass="work"
									to="work"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-gray-500 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
									legacyBehavior
								>
									<a onClick={() => handleActive("/about")}
									>
										About</a>
								</Link>
								<button
									className="cursor-pointer hover:bg-gray-500 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
									onClick={scrollToBottom}
								>
									Contact
								</button>
							</div>
						</div>
					)}
				</Transition>
			</nav>
		</div>
	);
}

export default Navbar;