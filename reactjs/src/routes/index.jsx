import { Routes, Route } from 'react-router-dom'
import Home from '../views/home'
import PostIndex from '../views/posts'
import PostCreate from '../views/create'
import PostEdit from '../views/edit'

function RoutesIndex() {
    return (
        <Routes>

            {/* route "/" */}
            <Route path="/" element={<Home />} />

            {/* route "/posts" */}
            <Route path="/posts" element={<PostIndex />} />

            {/* route "/posts/create" */}
            <Route path="posts/create" element={<PostCreate />} />

            {/* route "/posts/edit/:id" */}
            <Route path="/posts/edit/:id" element={<PostEdit />} />

        </Routes>
    )
}

export default RoutesIndex