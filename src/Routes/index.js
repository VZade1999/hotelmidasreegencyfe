import Team from "../Component/Team"
import Homepage from "../Component/Homepage"
import Blog from "../Component/Blog"
import Footer from "../Component/Footer"

const authProtectedRoutes = [
    {
        path: '/bookroom',
        component: (
            <>

            </>
        )
    }
]

const publicRoutes = [
    {
        path : '/',
        component: (
            <>
            <Homepage/>
            </>
        )
    },
    {
        path : '/team',
        component: (
            <>
            <Team/>
            </>
        )
    },
    {
        path : '/blogs',
        component: (
            <>
            <Blog/>
            </>
        )
    },
    {
        path : '/about-us',
        component: (
            <>
            <Footer/>
            </>
        )
    }
]