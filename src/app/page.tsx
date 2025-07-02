'use client';
import { Calendar, MapPin, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
        <div className="page-container">
            {/* Header */}
            <header className="header">
                <div className="container">
                    <div className="header-content">
                        <div className="logo-section">
                            <Image
                                src="/images/hoop_union_logo.png"
                                alt="Hoop Union Logo"
                                width={100}
                                height={100}
                            />
                        </div>
                        <nav className="nav">
                            <Link href="#tournaments" className="nav-link">
                                Tournaments
                            </Link>
                            <Link href="#register" className="nav-link">
                                Register
                            </Link>
                            <Link href="#contact" className="nav-link">
                                Contact
                            </Link>
                        </nav>
                        <button
                            className="sign-in-btn"
                            onClick={() =>
                                window.open(
                                    'https://basketball.exposureevents.com/organizations/32359/hoop-union',
                                    '_blank'
                                )
                            }
                        >
                            Register
                        </button>
                    </div>
                </div>
            </header>

            <main className="main">
                {/* Hero Section */}
                <section className="hero">
                    <div className="container">
                        <h2 className="hero-title">
                            <span className="hero-title-highlight">
                                Hoop Union
                            </span>
                            <span className="hero-title-main">Events</span>
                        </h2>
                        <div className="hero-buttons">
                            <button
                                className="btn-primary"
                                onClick={() =>
                                    window.open(
                                        'https://basketball.exposureevents.com/organizations/32359/hoop-union',
                                        '_blank'
                                    )
                                }
                            >
                                Register Your Team
                            </button>
                            <button className="btn-secondary">
                                View Schedule
                            </button>
                        </div>
                    </div>
                </section>

                {/* Upcoming Tournaments */}
                <section id="tournaments" className="tournaments">
                    <div className="container">
                        <div className="section-header">
                            <h3 className="section-title">
                                Upcoming Tournaments
                            </h3>
                            <p className="section-description">
                                Don&apos;t miss out on these exciting upcoming
                                tournaments. Register early to secure your spot.
                            </p>
                        </div>

                        <div className="tournaments-grid">
                            <div className="tournament-card">
                                <div className="card-header">
                                    <div className="card-title-row">
                                        <h4 className="card-title">
                                            Summer Circuit Finale
                                        </h4>
                                        <span className="badge badge-open">
                                            Open
                                        </span>
                                    </div>
                                    <p className="card-description">
                                        Elite tournament finale
                                    </p>
                                </div>
                                <div className="card-content">
                                    <Image
                                        src="/images/summer_circuit_finale.png"
                                        alt="Summer Circuit Finale"
                                        width={400}
                                        height={200}
                                        className="tournament-image"
                                    />
                                    <div className="tournament-details">
                                        <div className="detail-item">
                                            <Calendar className="detail-icon" />
                                            July 25-27, 2024
                                        </div>
                                        <div className="detail-item">
                                            <MapPin className="detail-icon" />
                                            Canton, GA
                                        </div>
										{/*
                                        <div className="detail-item">
                                            <Users className="detail-icon" />
                                            14/16 teams registered
                                        </div>
										*/}
                                    </div>
                                    <button
                                        className="btn-primary btn-full"
                                        onClick={() =>
                                            window.open(
                                                'https://basketball.exposureevents.com/247001/summer-circuit-finale',
                                                '_blank'
                                            )
                                        }
                                    >
                                        Register Now - $300
                                    </button>
                                </div>
                            </div>

                            <div className="tournament-card">
                                <div className="card-header">
                                    <div className="card-title-row">
                                        <h4 className="card-title">
                                            The Invitational
                                        </h4>
                                        <span className="badge badge-filling">
                                            Filling Fast
                                        </span>
                                    </div>
                                    <p className="card-description">
                                        Premier invitational tournament
                                    </p>
                                </div>
                                <div className="card-content">
                                    <Image
                                        src="/images/the_invitational.png"
                                        alt="The Invitational"
                                        width={400}
                                        height={200}
                                        className="tournament-image"
                                    />
                                    <div className="tournament-details">
                                        <div className="detail-item">
                                            <Calendar className="detail-icon" />
                                            August 1-3, 2024
                                        </div>
                                        <div className="detail-item">
                                            <MapPin className="detail-icon" />
                                            Canton, GA
                                        </div>
										{/*
                                        <div className="detail-item">
                                            <Users className="detail-icon" />
                                            10/12 teams registered
                                        </div>
										*/}
                                    </div>
                                    <button
                                        className="btn-primary btn-full"
                                        onClick={() =>
                                            window.open(
                                                'https://basketball.exposureevents.com/247004/the-invitational',
                                                '_blank'
                                            )
                                        }
                                    >
                                        Register Now - $300
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Registration CTA */}
                <section id="register" className="registration-cta">
                    <div className="container">
                        <h3 className="cta-title">Ready to Compete?</h3>
                        <p className="cta-description">
                            Join hundreds of teams in the most competitive
                            basketball tournaments in the region. Register your
                            team today and start your journey to championship
                            glory.
                        </p>
                        <div className="cta-button-container">
                            <button
                                className="btn-primary"
                                onClick={() =>
                                    window.open(
                                        'https://basketball.exposureevents.com/organizations/32359/hoop-union',
                                        '_blank'
                                    )
                                }
                            >
                                Register Your Team
                            </button>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer id="contact" className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-section">
                            <div className="logo-section">
                                {/* <Image
                                    src="/images/hoop-union-logo.jpg"
                                    alt="Hoop Union Logo"
                                    width={60}
                                    height={60}
                                    className="h-12 w-auto"
                                /> */}
                            </div>
                            <p>
                                Premier basketball tournaments bringing together
                                the best teams and players in competitive
                                basketball.
                            </p>
                        </div>

                        <div className="footer-section">
                            <h5>Quick Links</h5>
                            <ul>
                                <li>
                                    <Link
                                        href="#tournaments"
                                        className="footer-link"
                                    >
                                        Tournaments
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#register"
                                        className="footer-link"
                                    >
                                        Register
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="footer-section">
                            <h5>Support</h5>
                            <ul>
                                <li>
                                    <Link href="#" className="footer-link">
                                        Rules & Regulations
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="footer-link">
                                        FAQ
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="footer-link">
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="footer-link">
                                        Refund Policy
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="footer-section">
                            <h5>Follow Us</h5>
                            <div>
                                <p>📧 contact@hoopunionevents.com</p>
                                <p>📍 Atlanta, GA</p>
                                <div className="social-links">
                                    <Link
                                        href="https://twitter.com/HoopUnion_"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="footer-link"
                                    >
                                        🐦 @HoopUnion_
                                    </Link>
                                    <Link
                                        href="https://instagram.com/hoop_union"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="footer-link"
                                    >
                                        📷 @hoop_union
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p>
                            &copy; {new Date().getFullYear()} Hoop Union
                            Tournaments. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
