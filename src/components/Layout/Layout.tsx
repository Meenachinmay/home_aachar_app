import React from 'react'

type LayoutProps = {
    children: React.ReactNode;
}

const Layout:React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <div>
                {/* <Navbar /> */}
                <main>
                    { children }
                </main>
                {/* <Footer /> */}
            </div>
        </>
    )
}

export default Layout