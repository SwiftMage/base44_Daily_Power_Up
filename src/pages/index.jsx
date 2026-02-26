import Layout from "./Layout.jsx";

import Home from "./Home";
import Admin from "./Admin";
import FAQ from "./FAQ";
import Blog from "./Blog";
import BlogPost from "./BlogPost";
import Privacy from "./Privacy";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

const PAGES = {

    Home: Home,
    Admin: Admin,
    FAQ: FAQ,
    Blog: Blog,

}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
            <ScrollToTop />
            <Routes>

                    <Route path="/" element={<Home />} />


                <Route path="/Home" element={<Home />} />

                <Route path="/Admin" element={<Admin />} />

                <Route path="/FAQ" element={<FAQ />} />

                <Route path="/Blog" element={<Blog />} />

                <Route path="/blog/:slug" element={<BlogPost />} />

                <Route path="/Privacy" element={<Privacy />} />

            </Routes>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}