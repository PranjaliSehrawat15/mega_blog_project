// import React from 'react'
// import {Container, Logo, LogoutBtn} from '../index'
// import { Link } from 'react-router-dom'
// import {useSelector} from 'react-redux'
// import { useNavigate } from 'react-router-dom'

// function Header() {
//   const authStatus = useSelector((state) => state.auth.status)
//   const navigate = useNavigate()

//   const navItems = [
//     {
//       name: 'Home',
//       slug: "/",
//       active: true
//     }, 
//     {
//       name: "Login",
//       slug: "/login",
//       active: !authStatus,
//   },
//   {
//       name: "Signup",
//       slug: "/signup",
//       active: !authStatus,
//   },
//   {
//       name: "All Posts",
//       slug: "/all-posts",
//       active: authStatus,
//   },
//   {
//       name: "Add Post",
//       slug: "/add-post",
//       active: authStatus,
//   },
//   ]


//   return (
//     <header className='py-3 shadow bg-gray-500'>
//       <Container>
//         <nav className='flex'>
//           <div className='mr-4'>
//             <Link to='/'>
//               <Logo width='70px'   />

//               </Link>
//           </div>
//           <ul className='flex ml-auto'>
//             {navItems.map((item) => 
//             item.active ? (
//               <li key={item.name}>
//                 <button
//                 onClick={() => navigate(item.slug)}
//                 className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
//                 >{item.name}</button>
//               </li>
//             ) : null
//             )}
//             {authStatus && (
//               <li>
//                 <LogoutBtn />
//               </li>
//             )}
//           </ul>
//         </nav>
//         </Container>
//     </header>
//   )
// }

// export default Header


import React from 'react'
import { Container, Logo, LogoutBtn } from '../index'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    { name: 'Home', slug: '/', active: true },
    { name: 'Login', slug: '/login', active: !authStatus },
    { name: 'Signup', slug: '/signup', active: !authStatus },
    { name: 'All Posts', slug: '/all-posts', active: authStatus },
    { name: 'Add Post', slug: '/add-post', active: authStatus },
  ]

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-tr from-[#2c3e50] to-[#3498db] shadow-lg">
      <Container>
        <nav className="flex items-center py-3">
          <Link to="/" className="flex items-center mr-8">
            <img src="https://cdn-icons-png.flaticon.com/512/60/60736.png" alt="Blogora Logo" width="35" className="rounded" />
            <span className="ml-2 text-2xl font-bold text-black tracking-wide">Blogora</span>
          </Link>
          <ul className="flex ml-auto gap-2">
            {navItems.map(
              (item) =>
                item.active && (
                  <li key={item.name}>
                    <button
                      onClick={() => navigate(item.slug)}
                      className="px-5 py-2 rounded-full text-white font-medium hover:bg-white hover:text-blue-700 transition-colors duration-200"
                    >
                      {item.name}
                    </button>
                  </li>
                )
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header