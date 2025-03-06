import { Outlet } from "react-router";


export function BasePageLayout({children}){

    return(
        <>
            <Header />

            <Outlet />

            <Footer />
        </>
    )
}