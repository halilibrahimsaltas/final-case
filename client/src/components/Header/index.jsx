import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const user = JSON.parse(localStorage.getItem('user'));

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/signin');
    };

    // Hide auth buttons on auth pages
    const shouldShowAuthButtons = !['/signin', '/signup'].includes(location.pathname);

    return (
        <Navbar bg="light" expand="lg" className="shadow-sm">
            <Container>
                <Navbar.Brand as={Link} to={user ? "/dashboard" : "/"}>E-Commerce</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {user ? (
                            <>
                                <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                                <Nav.Link as={Link} to="/products">Products</Nav.Link>
                            </>
                        ) : (
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                        )}
                    </Nav>
                    <Nav className="d-flex align-items-center">
                        {user ? (
                            <>
                                <span className="me-3">Welcome, {user.name}</span>
                                <Button 
                                    variant="outline-danger" 
                                    size="sm" 
                                    onClick={handleLogout}
                                    className="px-3"
                                >
                                    Logout
                                </Button>
                            </>
                        ) : shouldShowAuthButtons && (
                            <>
                                <Link to="/signin">
                                    <Button 
                                        variant="outline-primary" 
                                        size="sm" 
                                        className="me-2 px-3"
                                    >
                                        Sign In
                                    </Button>
                                </Link>
                                <Link to="/signup">
                                    <Button 
                                        variant="primary" 
                                        size="sm"
                                        className="px-3"
                                    >
                                        Sign Up
                                    </Button>
                                </Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header; 