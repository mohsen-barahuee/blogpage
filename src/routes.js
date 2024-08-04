import Home from "./pages/Home/Home.js"
import Blog from "./pages/Blogs/Blog.js"


const router = [
    { path: '/', element: <Home /> },
    { path: '/blog', element: <Blog /> }
]

export default router