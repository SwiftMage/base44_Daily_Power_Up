import NavBar from "../components/landing/NavBar";

export default function Layout({ children }) {
    return (
        <div className="overflow-x-hidden">
            {/* <NavBar /> */}
            {children}
        </div>
    )
}
