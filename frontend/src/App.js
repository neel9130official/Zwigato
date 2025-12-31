// // // // import React, { useEffect, useState } from 'react';
// // // // import Home from './pages/Home';
// // // // import Cart from './pages/Cart';

// // // // function App(){
// // // //   const [page, setPage] = useState('home');
// // // //   const [token, setToken] = useState(localStorage.getItem('token') || null);
// // // //   const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')||'null'));

// // // //   const onLogin = (token, user) => {
// // // //     localStorage.setItem('token', token);
// // // //     localStorage.setItem('user', JSON.stringify(user));
// // // //     setToken(token); setUser(user);
// // // //   };
// // // //   const onLogout = () => {
// // // //     localStorage.removeItem('token'); localStorage.removeItem('user');
// // // //     setToken(null); setUser(null);
// // // //   };

// // // //   return (
// // // //     <div>
// // // //       <div className="header">
// // // //         <div style={{fontWeight:700}}>ZWIGATO</div>
// // // //         <div>
// // // //           <button className="button" onClick={()=>setPage('home')}>Home</button>{' '}
// // // //           <button className="button" onClick={()=>setPage('cart')}>Cart</button>{' '}
// // // //           {user ? <button className="button" onClick={onLogout}>Logout</button> :
// // // //             <span style={{color:'white', marginLeft:8}}>Guest</span>}
// // // //         </div>
// // // //       </div>
// // // //       <div className="container">
// // // //         {page==='home' && <Home token={token} onLogin={onLogin} />}
// // // //         {page==='cart' && <Cart token={token} onLogin={onLogin} />}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default App;
// // // import React, { useState } from 'react';
// // // import Home from './pages/Home';
// // // import Cart from './pages/Cart';
// // // import AuthModal from './parts/AuthModal';
// // // import Footer from './components/Footer';


// // // function App() {
// // //   const [page, setPage] = useState('home');
// // //   const [token, setToken] = useState(localStorage.getItem('token') || null);
// // //   const [user, setUser] = useState(JSON.parse(localStorage.getItem('user') || 'null'));
// // //   const [showAuth, setShowAuth] = useState(false);

// // //   const onLogin = (token, user) => {
// // //     localStorage.setItem('token', token);
// // //     localStorage.setItem('user', JSON.stringify(user));
// // //     setToken(token);
// // //     setUser(user);
// // //     setShowAuth(false);
// // //   };

// // //   const onLogout = () => {
// // //     localStorage.removeItem('token');
// // //     localStorage.removeItem('user');
// // //     setToken(null);
// // //     setUser(null);
// // //   };

// // //   return (
// // //     <div>
// // //       {/* 🔴 Header */}
// // //       <div className="header">
// // //         {/* ZWIGATO logo click → Home */}
// // //         <div
// // //           style={{ fontWeight: 700, cursor: 'pointer', fontSize: '22px' }}
// // //           onClick={() => setPage('home')}
// // //         >
// // //           ZWIGATO
// // //         </div>

// // //         {/* Right side buttons */}
// // //         <div>
// // //           {/* Login or Logout button */}
// // //           {user ? (
// // //             <>
// // //               <button className="button" onClick={() => setPage('cart')}>
// // //                 Cart
// // //               </button>{' '}
// // //               <button className="button" onClick={onLogout}>
// // //                 Logout
// // //               </button>
// // //             </>
// // //           ) : (
// // //             <>
// // //               <button className="button" onClick={() => setShowAuth(true)}>
// // //                 Login
// // //               </button>
// // //             </>
// // //           )}
// // //         </div>
// // //       </div>

// // //       {/* 🏠 Page Content */}
// // //       <div className="container">
// // //         {page === 'home' && <Home token={token} onLogin={onLogin} />}
// // //         {page === 'cart' && <Cart token={token} onLogin={onLogin} />}
// // //       </div>

// // //       {/* 🔐 Auth Modal */}
// // //       {/* {showAuth && <AuthModal onClose={() => setShowAuth(false)} onLogin={onLogin} />}
// // //     </div> */}
// // //       {showAuth && <AuthModal onClose={() => setShowAuth(false)} onLogin={onLogin} />}
// // //       <Footer />
// // //     </div>

// // //   );
// // // }

// // // export default App;
// // import React, { useState } from 'react';
// // import Home from './pages/Home';
// // import Cart from './pages/Cart';
// // import AuthModal from './parts/AuthModal';
// // import Footer from './components/Footer';
// // import Profile from './pages/Profile';

// // import './index.css';

// // function App() {
// //   const [page, setPage] = useState('home');
// //   const [token, setToken] = useState(localStorage.getItem('token') || null);
// //   const [user, setUser] = useState(JSON.parse(localStorage.getItem('user') || 'null'));
// //   const [showAuth, setShowAuth] = useState(false);

// //   const onLogin = (token, user) => {
// //     localStorage.setItem('token', token);
// //     localStorage.setItem('user', JSON.stringify(user));
// //     setToken(token);
// //     setUser(user);
// //     setShowAuth(false);
// //   };

// //   const onLogout = () => {
// //     localStorage.removeItem('token');
// //     localStorage.removeItem('user');
// //     setToken(null);
// //     setUser(null);
// //   };

// //   return (
// //     <div>
// //       {/* 🔴 Header */}
// //       <div className="header">
// //         {/* ZWIGATO Logo - Click → Home */}
// //         <div
// //           style={{ fontWeight: 700, cursor: 'pointer', fontSize: '22px' }}
// //           onClick={() => setPage('home')}
// //         >
// //           {/* <img
// //   src="/image.png"
// //   alt="Zwigato"
// //   className="site-logo"
// //   onClick={() => navigate('/')}
// //   style={{ cursor: 'pointer' }}
// // /> */}
// // <div className="logo" onClick={() => navigate('/')}>
// //   <span className="logo-icon">🍽️</span>
// //   <span className="logo-text">ZWIGATO</span>
// //   <span className="logo-sub">FAST & FRESH</span>
// // </div>


// //         </div>

// //         {/* Right-side buttons */}
// //         <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
// //           <button className="button" onClick={() => setPage('cart')}>
// //             Cart
// //           </button>

// //           {!user && (
// //             <button className="button" onClick={() => setShowAuth(true)}>
// //               Login
// //             </button>
// //           )}

// //           {user && (
// //             <div className="profile-wrapper">
// //               {/* <img
// //                 src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
// //                 alt="profile"
// //                 className="profile-pic" */}
// //               <img
// //                 src={
// //                   user?.photo
// //                     ? `${process.env.REACT_APP_API_URL.replace('/api', '')}${user.photo}`
// //                     : 'https://cdn-icons-png.flaticon.com/512/847/847969.png'
// //                 }
// //                 alt="profile"
// //                 className="profile-pic"

// //                 onClick={() =>
// //                   document
// //                     .querySelector('.profile-dropdown')
// //                     .classList.toggle('show')
// //                 }
// //               />
// //               <div className="profile-dropdown">
// //                 <p>Hello, {user.name?.split(' ')[0]}</p>
// //                 {/* <button onClick={() => alert('Profile page coming soon!')}>
// //                   View Profile
// //                 </button> */}
// //                 <button
// //                   onClick={() => {
// //                     setPage('profile');
// //                     document.querySelector('.profile-dropdown').classList.remove('show');
// //                   }}
// //                 >
// //                   View Profile
// //                 </button>

// //                 <button onClick={onLogout}>Logout</button>
// //               </div>
// //             </div>
// //           )}
// //         </div>
// //       </div>

// //       {/* 🏠 Page Content */}
// //       <div className="container">
// //         {/* {page === 'home' && <Home token={token} onLogin={onLogin} />}
// //         {page === 'cart' && <Cart token={token} onLogin={onLogin} />} */}
// //         {page === 'home' && <Home token={token} onLogin={onLogin} />}
// //         {page === 'cart' && <Cart token={token} onLogin={onLogin} />}
// //         {page === 'profile' && <Profile />}

// //       </div>

// //       {/* 🔐 Auth Modal */}
// //       {showAuth && <AuthModal onClose={() => setShowAuth(false)} onLogin={onLogin} />}

// //       {/* ⚙️ Footer */}
// //       {/* <Footer /> */}
// //       {/* <footer>
// //   <p>© 2025 ZWIGATO — Fast & Fresh</p>
// //   <p>
// //     Developed by <a href="https://github.com/neelkanth">Neelkanth</a>
// //   </p>
// // </footer> */}
// // <footer className="footer">
// //   <div className="footer-container">

// //     {/* About */}
// //     <div className="footer-col">
// //       <h3>ZWIGATO</h3>
// //       <p>
// //         Order delicious meals from your favorite restaurants, delivered fast and fresh
// //         right to your doorstep. Explore a wide range of cuisines and enjoy the taste of happiness!
// //       </p>
// //     </div>

// //     {/* Quick Links */}
// //     <div className="footer-col">
// //       <h4>Quick Links</h4>
// //       <ul>
// //         <li><a href="/">Home</a></li>
// //         <li><a href="/menu">Menu</a></li>
// //         <li><a href="/cart">Cart</a></li>
// //         <li><a href="/profile">Profile</a></li>
// //       </ul>
// //     </div>

// //     {/* Legal */}
// //     <div className="footer-col">
// //       <h4>Legal</h4>
// //       <ul>
// //         <li><a href="#">Terms & Conditions</a></li>
// //         <li><a href="#">Privacy Policy</a></li>
// //         <li><a href="#">Refund Policy</a></li>
// //       </ul>
// //     </div>

// //     {/* Contact / Developer */}
// //     <div className="footer-col">
// //       <h4>Contact</h4>
// //       <p>Email: support@zwigato.com</p>
// //       <p>Phone: +91 98765 43210</p>

// //       <div className="social-links">
// //         <a href="#"><i className="fab fa-facebook"></i></a>
// //         <a href="#"><i className="fab fa-instagram"></i></a>
// //         <a href="#"><i className="fab fa-twitter"></i></a>
// //       </div>

// //       <p className="developer">
// //         Developed by <a href="https://github.com/neelkanth" target="_blank" rel="noreferrer">Neelkanth</a>
// //       </p>
// //     </div>
// //   </div>

// //   <div className="footer-bottom">
// //     © 2025 ZWIGATO — Fast & Fresh. All rights reserved.
// //   </div>
// // </footer>


// //     </div>
// //   );
// // }

// // export default App;
// import React, { useState } from 'react';
// import Home from './pages/Home';
// import Cart from './pages/Cart';
// import AuthModal from './parts/AuthModal';
// import Profile from './pages/Profile';
// import './index.css';
// import Swal from 'sweetalert2';
// import 'sweetalert2/dist/sweetalert2.min.css';
// import ZwigatoPopup from './components/ZwigatoPopup';



// function App() {
//   const [page, setPage] = useState('home');
//   const [token, setToken] = useState(localStorage.getItem('token') || null);
//   const [user, setUser] = useState(JSON.parse(localStorage.getItem('user') || 'null'));
//   const [showAuth, setShowAuth] = useState(false);
//   const [showPopup, setShowPopup] = useState(false);


//   const onLogin = (token, user) => {
//     localStorage.setItem('token', token);
//     localStorage.setItem('user', JSON.stringify(user));
//     setToken(token);
//     setUser(user);
//     setShowAuth(false);
//   };

//   const onLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('user');
//     setToken(null);
//     setUser(null);
//   };

//   // Handle Cart click (prevent showing empty cart if not logged in)
//   // const handleCartClick = () => {
//   //   if (!user) {
//   //     alert('Please login first to view your cart.');
//   //     setPage('home');
//   //     return;
//   //   }
//   //   setPage('cart');
//   // };
//   //   const handleCartClick = () => {
//   //   if (!user) {
//   //     Swal.fire({
//   //       title: '🍕 Whoa there, foodie!',
//   //       text: 'You need to log in before filling your cart! 😋',
//   //       icon: 'info',
//   //       confirmButtonText: 'Login Now',
//   //       confirmButtonColor: '#00b050',
//   //       background: '#f8fff8',
//   //       color: '#007a33',
//   //       backdrop: `rgba(0,176,80,0.2)`,
//   //       customClass: {
//   //         popup: 'animated fadeInDown faster',
//   //       },
//   //     }).then((result) => {
//   //       if (result.isConfirmed) {
//   //         setShowAuth(true); // Open login modal automatically
//   //       }
//   //     });
//   //     setPage('home');
//   //     return;
//   //   }
//   //   setPage('cart');
//   // };
//   const handleCartClick = () => {
//     if (!user) {
//       setShowPopup(true);
//       return;
//     }
//     setPage('cart');
//   };



//   return (
//     <div>
//       {/* 🌿 NAVBAR */}
//       <nav className="navbar">
//         {/* Logo */}
//         <div className="logo" onClick={() => setPage('home')}>
//           <span className="logo-icon">🍽️</span>
//           <span className="logo-text">ZWIGATO</span>
//           <span className="logo-sub">FAST & FRESH</span>
//         </div>

//         {/* Right-side Buttons */}
//         <div className="nav-links">
//           <button className="nav-btn cart-btn" onClick={handleCartClick}>
//             🛒 Cart
//           </button>

//           {!user && (
//             <button className="nav-btn login-btn" onClick={() => setShowAuth(true)}>
//               🔐 Login
//             </button>
//           )}

//           {user && (
//             <div className="profile-wrapper">
//               <img
//                 src={
//                   user?.photo
//                     ? `${process.env.REACT_APP_API_URL?.replace('/api', '')}${user.photo}`
//                     : 'https://cdn-icons-png.flaticon.com/512/847/847969.png'
//                 }
//                 alt="profile"
//                 className="profile-pic"
//                 onClick={() =>
//                   document.querySelector('.profile-dropdown')?.classList.toggle('show')
//                 }
//               />
//               <div className="profile-dropdown">
//                 <p>Hello, {user.name?.split(' ')[0]}</p>
//                 <button
//                   onClick={() => {
//                     setPage('profile');
//                     document.querySelector('.profile-dropdown').classList.remove('show');
//                   }}
//                 >
//                   View Profile
//                 </button>
//                 <button onClick={onLogout}>Logout</button>
//               </div>
//             </div>
//           )}
//         </div>
//       </nav>

//       <ZwigatoPopup
//         show={showPopup}
//         title="🍕 Whoa there, foodie!"
//         message="You need to log in before filling your cart! Hungry people must sign in first 😋"
//         onClose={() => setShowPopup(false)}
//         onConfirm={() => {
//           setShowPopup(false);
//           setShowAuth(true); // Opens login modal
//         }}
//       />

//       {/* 🏠 Page Content */}
//       <div className="container">
//         {page === 'home' && <Home token={token} onLogin={onLogin} />}
//         {page === 'cart' && user && <Cart token={token} onLogin={onLogin} />}
//         {page === 'profile' && <Profile />}
//       </div>

//       {/* 🔐 Auth Modal */}
//       {showAuth && <AuthModal onClose={() => setShowAuth(false)} onLogin={onLogin} />}

//       {/* 🌿 FOOTER */}
//       <footer className="footer">
//         <div className="footer-container">
//           <div className="footer-col">
//             <h3>ZWIGATO</h3>
//             <p>
//               Order delicious meals from your favorite restaurants, delivered fast and fresh
//               right to your doorstep. Explore a wide range of cuisines and enjoy the taste of happiness!
//             </p>
//           </div>

//           <div className="footer-col">
//             <h4>Quick Links</h4>
//             <ul>
//               <li><a href="/">Home</a></li>
//               <li><a href="/menu">Menu</a></li>
//               <li><a href="/cart">Cart</a></li>
//               <li><a href="/profile">Profile</a></li>
//             </ul>
//           </div>

//           <div className="footer-col">
//             <h4>Legal</h4>
//             <ul>
//               <li><a href="#">Terms & Conditions</a></li>
//               <li><a href="#">Privacy Policy</a></li>
//               <li><a href="#">Refund Policy</a></li>
//             </ul>
//           </div>

//           <div className="footer-col">
//             <h4>Contact</h4>
//             <p>Email: support@zwigato.com</p>
//             <p>Phone: +91 98765 43210</p>
//             <div className="social-links">
//               <a href="#"><i className="fab fa-facebook"></i></a>
//               <a href="#"><i className="fab fa-instagram"></i></a>
//               <a href="#"><i className="fab fa-twitter"></i></a>
//             </div>
//             <p className="developer">
//               Developed by{' '}
//               <a href="https://github.com/neelkanth" target="_blank" rel="noreferrer">
//                 Neelkanth
//               </a>
//             </p>
//           </div>
//         </div>

//         <div className="footer-bottom">
//           © 2025 ZWIGATO — Fast & Fresh. All rights reserved.
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default App;
import React, { useState } from "react";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import AuthModal from "./parts/AuthModal";
import Profile from "./pages/Profile";
import ZwigatoPopup from "./components/ZwigatoPopup";
import "./index.css";

function App() {
  const [page, setPage] = useState("home");
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  // const [user, setUser] = useState(
  //   JSON.parse(localStorage.getItem("user") || "null")
  // );
  const [user, setUser] = useState(() => {
  try {
    const raw = localStorage.getItem("user");
    if (!raw || raw === "undefined" || raw === "null") return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
});

  const [showAuth, setShowAuth] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const onLogin = (token, user) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    setToken(token);
    setUser(user);
    setShowAuth(false);
  };

  const onLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    setUser(null);
  };

  const handleCartClick = () => {
    if (!user) {
      setShowPopup(true);
      return;
    }
    setPage("cart");
  };

  return (
    <div>
      {/* 🌿 NAVBAR */}
      <nav className="navbar white-navbar">
        {/* Logo Section */}
        <div className="logo" onClick={() => setPage("home")}>
          <span className="logo-icon">🍽️</span>
          <span className="logo-text green-text">ZWIGATO</span>
          <span className="logo-sub">FAST & FRESH</span>
        </div>

        {/* Right-side Buttons */}
        <div className="nav-links">
          <button className="nav-btn cart-btn" onClick={handleCartClick}>
            🛒 Cart
          </button>

          {!user && (
            <button className="nav-btn login-btn" onClick={() => setShowAuth(true)}>
              🔐 Login
            </button>
          )}

          {user && (
            <div className="profile-wrapper">
              <img
                src={
                  user?.photo
                    ? `${process.env.REACT_APP_API_URL?.replace("/api", "")}${user.photo}`
                    : "https://cdn-icons-png.flaticon.com/512/847/847969.png"
                }
                alt="profile"
                className="profile-pic"
                onClick={() =>
                  document.querySelector(".profile-dropdown")?.classList.toggle("show")
                }
              />
              <div className="profile-dropdown">
                <p>Hello, {user.name?.split(" ")[0]}</p>
                <button
                  onClick={() => {
                    setPage("profile");
                    document.querySelector(".profile-dropdown").classList.remove("show");
                  }}
                >
                  View Profile
                </button>
                <button onClick={onLogout}>Logout</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* 🍕 Funny Popup */}
      <ZwigatoPopup
        show={showPopup}
        title="🍕 Whoa there, foodie!"
        message="You need to log in before filling your cart! Hungry people must sign in first 😋"
        onClose={() => setShowPopup(false)}
        onConfirm={() => {
          setShowPopup(false);
          setShowAuth(true);
        }}
      />

      {/* 🏠 Page Content */}
      <div className="container">
        {page === "home" && <Home token={token} onLogin={onLogin} />}
        {page === "cart" && user && <Cart token={token} onLogin={onLogin} />}
        {page === "profile" && <Profile />}
      </div>

      {/* 🔐 Auth Modal */}
      {showAuth && <AuthModal onClose={() => setShowAuth(false)} onLogin={onLogin} />}

      {/* 🌿 FOOTER */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-col">
            <h3>ZWIGATO</h3>
            <p>
              Order delicious meals from your favorite restaurants, delivered fast and fresh
              right to your doorstep. Explore a wide range of cuisines and enjoy the taste of happiness!
            </p>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/menu">Menu</a></li>
              <li><a href="/cart">Cart</a></li>
              <li><a href="/profile">Profile</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Refund Policy</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <p>Email: support@zwigato.com</p>
            <p>Phone: +91 9130142934</p>

            <div className="social-links">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
            </div>

            <p className="developer">
              Developed by{" "}
              <a href="https://github.com/neelkanth" target="_blank" rel="noreferrer">
                Neelkanth
              </a>
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          © 2025 ZWIGATO — Fast & Fresh. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
