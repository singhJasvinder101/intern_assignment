"use client"
import { useEffect, useState } from "react";
import dynamic from 'next/dynamic'
import "bootstrap/dist/css/bootstrap.min.css";
import Image from 'next/image'
import Link from 'next/link'
import Sidebar from "./Sidebar";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [searchIsOpen, setSearchIsOpen] = useState(false)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            require('bootstrap/dist/js/bootstrap.bundle.min.js');
        }
    }, []);

    function toggleSidebar() {
        setIsOpen(!isOpen)
        if (!isOpen) {
            document.body.classList.add('toggle-sidebar');
        } else {
            document.body.classList.remove('toggle-sidebar');
        }
    }

    function toggleSearchBar() {
        setSearchIsOpen(!searchIsOpen)
        document.querySelector('.search-bar').classList.toggle('search-bar-show');
    }

    return (
        <div>
            <header id="header" className="header fixed-top d-flex align-items-center">
                <div className="d-flex align-items-center justify-content-between">
                    <Image
                        onClick={toggleSidebar}
                        className="toggle-sidebar-btn d-lg-none"
                        src="/assets/hamburger.svg"
                        alt="Menu"
                        width={40}
                        height={40}
                    />
                    <div className="d-flex align-items-center">
                        <Link href="/">
                            <Image
                                className="logo"
                                src="/assets/logo.svg"
                                alt="Logo"
                                width={96}
                                height={84}
                            />
                        </Link>
                        <div className="search-bar">
                            <form className="search-form d-flex align-items-center" method="POST" action="#">
                                <input type="text" name="query" placeholder="Search" title="Enter search keyword" />
                                <button className="submit-btn" type="submit" title="Search">
                                    <Image
                                        src="/assets/search.svg"
                                        alt="Search Image"
                                        width={14}
                                        height={14}
                                    />
                                </button>
                            </form>
                        </div>
                    </div>

                </div>



                <nav className="header-nav ms-auto">
                    <ul className="d-flex align-items-center">
                        <li className="nav-item d-block d-lg-none">
                            <span className="nav-link nav-icon search-bar-toggle" href="#">
                                <Image
                                    onClick={toggleSearchBar}
                                    src="/assets/search.svg"
                                    alt="Add Image"
                                    width={24}
                                    height={24}
                                />
                            </span>
                        </li>

                        <li className="explore nav-item dropdown">
                            <span className="nav-link d-flex mx-2" data-bs-toggle="dropdown">
                                <Image
                                    src="/assets/compass.svg"
                                    alt="Notification"
                                    width={20}
                                    height={24}
                                />
                                <span className="dropdown-toggle px-1">Explore</span>
                                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">

                                    <li>
                                        <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                                            <i className="bi bi-gear"></i>
                                            <span>People - Community</span>
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>

                                    <li>
                                        <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                                            <i className="bi bi-gear"></i>
                                            <span>Places - Venues</span>
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>

                                    <li>
                                        <a className="dropdown-item d-flex align-items-center" href="pages-faq.html">
                                            <i className="bi bi-question-circle"></i>
                                            <span>Programs - Events</span>
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>

                                    <li>
                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                            <i className="bi bi-box-arrow-right"></i>
                                            <span>Predicts - store</span>
                                        </a>
                                    </li>
                                </ul>
                            </span>
                        </li>

                        <li className="hobbies nav-item dropdown">
                            <span className="nav-link d-flex mx-4" data-bs-toggle="dropdown">
                                <Image
                                    src="/assets/star.svg"
                                    alt="Notification"
                                    width={20}
                                    height={24}
                                />
                                <span className="dropdown-toggle px-1">Hobbies</span>
                                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                                    <li className="dropdown-header">
                                        <h6>Kevin Anderson</h6>
                                        <span>Web Designer</span>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>

                                    <li>
                                        <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                                            <i className="bi bi-person"></i>
                                            <span>My Profile</span>
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>

                                    <li>
                                        <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                                            <i className="bi bi-gear"></i>
                                            <span>Account Settings</span>
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>

                                    <li>
                                        <a className="dropdown-item d-flex align-items-center" href="pages-faq.html">
                                            <i className="bi bi-question-circle"></i>
                                            <span>Need Help?</span>
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>

                                    <li>
                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                            <i className="bi bi-box-arrow-right"></i>
                                            <span>Sign Out</span>
                                        </a>
                                    </li>
                                </ul>
                            </span>
                        </li>

                        <li className="nav-item dropdown">
                            <span className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                                <Image
                                    src="/assets/notification.svg"
                                    alt="Notification"
                                    width={24}
                                    height={24}
                                />
                                <span className="badge bg-primary badge-number">4</span>
                            </span>

                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                                <li className="dropdown-header">
                                    You have 4 new notifications
                                    <a href="#"><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>

                                <li className="notification-item">
                                    <i className="bi bi-exclamation-circle text-warning"></i>
                                    <div>
                                        <h4>Lorem Ipsum</h4>
                                        <p>Quae dolorem earum veritatis oditseno</p>
                                        <p>30 min. ago</p>
                                    </div>
                                </li>

                                <li>
                                    <hr className="dropdown-divider" />
                                </li>

                                <li className="notification-item">
                                    <i className="bi bi-x-circle text-danger"></i>
                                    <div>
                                        <h4>Atque rerum nesciunt</h4>
                                        <p>Quae dolorem earum veritatis oditseno</p>
                                        <p>1 hr. ago</p>
                                    </div>
                                </li>

                                <li>
                                    <hr className="dropdown-divider" />
                                </li>

                                <li className="notification-item">
                                    <i className="bi bi-check-circle text-success"></i>
                                    <div>
                                        <h4>Sit rerum fuga</h4>
                                        <p>Quae dolorem earum veritatis oditseno</p>
                                        <p>2 hrs. ago</p>
                                    </div>
                                </li>

                                <li>
                                    <hr className="dropdown-divider" />
                                </li>

                                <li className="notification-item">
                                    <i className="bi bi-info-circle text-primary"></i>
                                    <div>
                                        <h4>Dicta reprehenderit</h4>
                                        <p>Quae dolorem earum veritatis oditseno</p>
                                        <p>4 hrs. ago</p>
                                    </div>
                                </li>

                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li className="dropdown-footer">
                                    <a href="#">Show all notifications</a>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link nav-icon" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <Image
                                    src="/assets/cart.svg"
                                    alt="Add Image"
                                    width={24}
                                    height={24}
                                />
                                <span className="badge bg-success badge-number">3</span>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
                                <li className="dropdown-header">
                                    You have 3 new messages
                                    <a href="#"><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>

                                <li className="message-item">
                                    <a href="#">
                                        <img src="assets/img/messages-1.jpg" alt="" className="rounded-circle" />
                                        <div>
                                            <h4>Maria Hudson</h4>
                                            <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                                            <p>4 hrs. ago</p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>

                                <li className="message-item">
                                    <a href="#">
                                        <img src="assets/img/messages-2.jpg" alt="" className="rounded-circle" />
                                        <div>
                                            <h4>Anna Nelson</h4>
                                            <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                                            <p>6 hrs. ago</p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>

                                <li className="message-item">
                                    <a href="#">
                                        <img src="assets/img/messages-3.jpg" alt="" className="rounded-circle" />
                                        <div>
                                            <h4>David Muldon</h4>
                                            <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                                            <p>8 hrs. ago</p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>

                                <li className="dropdown-footer">
                                    <a href="#">Show all messages</a>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown pe-3">
                            <span className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                                <img src="/assets/profile-img.jpg" alt="Profile" className="rounded-circle" />
                                <span className="d-none d-md-block dropdown-toggle ps-2">K. Anderson</span>

                                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                                    <li className="dropdown-header">
                                        <h6>Kevin Anderson</h6>
                                        <span>Web Designer</span>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>

                                    <li>
                                        <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                                            <i className="bi bi-person"></i>
                                            <span>My Profile</span>
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>

                                    <li>
                                        <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                                            <i className="bi bi-gear"></i>
                                            <span>Account Settings</span>
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>

                                    <li>
                                        <a className="dropdown-item d-flex align-items-center" href="pages-faq.html">
                                            <i className="bi bi-question-circle"></i>
                                            <span>Need Help?</span>
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>

                                    <li>
                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                            <i className="bi bi-box-arrow-right"></i>
                                            <span>Sign Out</span>
                                        </a>
                                    </li>
                                </ul>
                            </span>
                        </li>
                    </ul>
                </nav>


            </header>

            <Sidebar />
        </div>
    )
}

export default Header
