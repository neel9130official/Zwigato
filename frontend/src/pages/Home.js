// // // // // // // // // // import React, { useEffect, useState } from 'react';
// // // // // // // // // // import API from '../api';
// // // // // // // // // // import AuthModal from '../parts/AuthModal';

// // // // // // // // // // export default function Home({ token, onLogin }){
// // // // // // // // // //   const [items, setItems] = useState([]);
// // // // // // // // // //   const [showAuth, setShowAuth] = useState(false);

// // // // // // // // // //   useEffect(()=>{ API('/items').then(data=>setItems(data || [])); },[]);

// // // // // // // // // //   const addToCart = async (item) => {
// // // // // // // // // //     if (!localStorage.getItem('token')) { setShowAuth(true); return; }
// // // // // // // // // //     await API('/cart/add', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ item_id: item.id, quantity:1 }) });
// // // // // // // // // //     alert('Added to cart');
// // // // // // // // // //   };

// // // // // // // // // //   return (
// // // // // // // // // //     <div>
// // // // // // // // // //       <h2>Menu</h2>
// // // // // // // // // //       <div className="grid">
// // // // // // // // // //         {items.map(it=>(
// // // // // // // // // //           <div key={it.id} className="card">
// // // // // // // // // //             <h4>{it.name}</h4>
// // // // // // // // // //             <p style={{minHeight:40}}>{it.description}</p>
// // // // // // // // // //             <div>₹{it.price}</div>
// // // // // // // // // //             <button className="button" onClick={()=>addToCart(it)}>Add to cart</button>
// // // // // // // // // //           </div>
// // // // // // // // // //         ))}
// // // // // // // // // //       </div>
// // // // // // // // // //       {showAuth && <AuthModal onClose={()=>setShowAuth(false)} onLogin={onLogin} />}
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // }
// // // // // // // // // // import React, { useEffect, useState } from 'react';
// // // // // // // // // // import API from '../api';
// // // // // // // // // // import AuthModal from '../parts/AuthModal';
// // // // // // // // // // import MiniCart from '../components/MiniCart';

// // // // // // // // // // export default function Home({ token, onLogin }) {
// // // // // // // // // //   const [items, setItems] = useState([]);
// // // // // // // // // //   const [showAuth, setShowAuth] = useState(false);
// // // // // // // // // //   const [showCart, setShowCart] = useState(false);

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     API('/items').then((data) => setItems(data || []));
// // // // // // // // // //   }, []);

// // // // // // // // // //   const addToCart = async (item) => {
// // // // // // // // // //     if (!localStorage.getItem('token')) {
// // // // // // // // // //       setShowAuth(true);
// // // // // // // // // //       return;
// // // // // // // // // //     }
// // // // // // // // // //     await API('/cart/add', {
// // // // // // // // // //       method: 'POST',
// // // // // // // // // //       headers: { 'Content-Type': 'application/json' },
// // // // // // // // // //       body: JSON.stringify({ item_id: item.id, quantity: 1 }),
// // // // // // // // // //     });
// // // // // // // // // //     setShowCart(true);
// // // // // // // // // //   };

// // // // // // // // // //   return (
// // // // // // // // // //     <div>
// // // // // // // // // //       <h2>Menu</h2>
// // // // // // // // // //       <div className="grid">
// // // // // // // // // //         {items.map((it) => (
// // // // // // // // // //           <div key={it.id} className="card">
// // // // // // // // // //             <h4>{it.name}</h4>
// // // // // // // // // //             <p style={{ minHeight: 40 }}>{it.description}</p>
// // // // // // // // // //             <div>₹{it.price}</div>
// // // // // // // // // //             <button className="button" onClick={() => addToCart(it)}>
// // // // // // // // // //               Add to cart
// // // // // // // // // //             </button>
// // // // // // // // // //           </div>
// // // // // // // // // //         ))}
// // // // // // // // // //       </div>

// // // // // // // // // //       {showAuth && (
// // // // // // // // // //         <AuthModal onClose={() => setShowAuth(false)} onLogin={onLogin} />
// // // // // // // // // //       )}

// // // // // // // // // //       <MiniCart show={showCart} onClose={() => setShowCart(false)} />
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // }
// // // // // // // // // // import React, { useEffect, useState } from 'react';
// // // // // // // // // // import API from '../api';
// // // // // // // // // // import AuthModal from '../parts/AuthModal';
// // // // // // // // // // import MiniCart from '../components/MiniCart';

// // // // // // // // // // export default function Home({ token, onLogin }) {
// // // // // // // // // //   const [items, setItems] = useState([]);
// // // // // // // // // //   const [showAuth, setShowAuth] = useState(false);
// // // // // // // // // //   const [showCart, setShowCart] = useState(false);
// // // // // // // // // //   const [cartReloadKey, setCartReloadKey] = useState(0);

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     API('/items').then((data) => setItems(data || []));
// // // // // // // // // //   }, []);

// // // // // // // // // //   const addToCart = async (item) => {
// // // // // // // // // //     if (!localStorage.getItem('token')) {
// // // // // // // // // //       setShowAuth(true);
// // // // // // // // // //       return;
// // // // // // // // // //     }
// // // // // // // // // //     await API('/cart/add', {
// // // // // // // // // //       method: 'POST',
// // // // // // // // // //       headers: { 'Content-Type': 'application/json' },
// // // // // // // // // //       body: JSON.stringify({ item_id: item.id, quantity: 1 }),
// // // // // // // // // //     });
// // // // // // // // // //     // immediately reload cart
// // // // // // // // // //     setCartReloadKey((prev) => prev + 1);
// // // // // // // // // //     setShowCart(true);
// // // // // // // // // //   };

// // // // // // // // // //   return (
// // // // // // // // // //     <div>
// // // // // // // // // //       <h2>Menu</h2>
// // // // // // // // // //       <div className="grid">
// // // // // // // // // //         {items.map((it) => (
// // // // // // // // // //           <div key={it.id} className="card">
// // // // // // // // // //             <h4>{it.name}</h4>
// // // // // // // // // //             <p style={{ minHeight: 40 }}>{it.description}</p>
// // // // // // // // // //             <div>₹{it.price}</div>
// // // // // // // // // //             <button className="button" onClick={() => addToCart(it)}>
// // // // // // // // // //               Add to cart
// // // // // // // // // //             </button>
// // // // // // // // // //           </div>
// // // // // // // // // //         ))}
// // // // // // // // // //       </div>

// // // // // // // // // //       {showAuth && (
// // // // // // // // // //         <AuthModal onClose={() => setShowAuth(false)} onLogin={onLogin} />
// // // // // // // // // //       )}

// // // // // // // // // //       <MiniCart
// // // // // // // // // //         show={showCart}
// // // // // // // // // //         onClose={() => setShowCart(false)}
// // // // // // // // // //         triggerReload={cartReloadKey}
// // // // // // // // // //       />
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // }
// // // // // // // // // // import React, { useEffect, useState } from 'react';
// // // // // // // // // // import API from '../api';
// // // // // // // // // // import AuthModal from '../parts/AuthModal';
// // // // // // // // // // import './Home.css';

// // // // // // // // // // export default function Home({ token, onLogin }) {
// // // // // // // // // //   const [items, setItems] = useState([]);
// // // // // // // // // //   const [showAuth, setShowAuth] = useState(false);
// // // // // // // // // //   const [cart, setCart] = useState([]);

// // // // // // // // // //   // Fetch menu and cart
// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     loadMenu();
// // // // // // // // // //     if (localStorage.getItem('token')) loadCart();
// // // // // // // // // //   }, []);

// // // // // // // // // //   const loadMenu = async () => {
// // // // // // // // // //     const data = await API('/items');
// // // // // // // // // //     setItems(data || []);
// // // // // // // // // //   };

// // // // // // // // // //   const loadCart = async () => {
// // // // // // // // // //     const res = await API('/cart');
// // // // // // // // // //     if (res.items) setCart(res.items);
// // // // // // // // // //   };

// // // // // // // // // //   // Add item to cart
// // // // // // // // // //   const addToCart = async (item) => {
// // // // // // // // // //     if (!localStorage.getItem('token')) {
// // // // // // // // // //       setShowAuth(true);
// // // // // // // // // //       return;
// // // // // // // // // //     }
// // // // // // // // // //     await API('/cart/add', {
// // // // // // // // // //       method: 'POST',
// // // // // // // // // //       headers: { 'Content-Type': 'application/json' },
// // // // // // // // // //       body: JSON.stringify({ item_id: item.id, quantity: 1 }),
// // // // // // // // // //     });
// // // // // // // // // //     loadCart();
// // // // // // // // // //   };

// // // // // // // // // //   // Increase item quantity
// // // // // // // // // //   const increaseQty = async (item) => {
// // // // // // // // // //     await API('/cart/add', {
// // // // // // // // // //       method: 'POST',
// // // // // // // // // //       headers: { 'Content-Type': 'application/json' },
// // // // // // // // // //       body: JSON.stringify({ item_id: item.id, quantity: 1 }),
// // // // // // // // // //     });
// // // // // // // // // //     loadCart();
// // // // // // // // // //   };

// // // // // // // // // //   // Decrease item quantity
// // // // // // // // // //   const decreaseQty = async (item) => {
// // // // // // // // // //     if (item.quantity === 1) {
// // // // // // // // // //       await API('/cart/remove', {
// // // // // // // // // //         method: 'POST',
// // // // // // // // // //         headers: { 'Content-Type': 'application/json' },
// // // // // // // // // //         body: JSON.stringify({ item_id: item.id }),
// // // // // // // // // //       });
// // // // // // // // // //     } else {
// // // // // // // // // //       await API('/cart/add', {
// // // // // // // // // //         method: 'POST',
// // // // // // // // // //         headers: { 'Content-Type': 'application/json' },
// // // // // // // // // //         body: JSON.stringify({ item_id: item.id, quantity: -1 }),
// // // // // // // // // //       });
// // // // // // // // // //     }
// // // // // // // // // //     loadCart();
// // // // // // // // // //   };

// // // // // // // // // //   const total = cart.reduce((t, i) => t + i.price * i.quantity, 0);

// // // // // // // // // //   return (
// // // // // // // // // //     <div className="split-layout">
// // // // // // // // // //       {/* LEFT: Menu */}
// // // // // // // // // //       <div className="menu-section">
// // // // // // // // // //         <h2>Menu</h2>
// // // // // // // // // //         <div className="grid">
// // // // // // // // // //           {items.map((it) => (
// // // // // // // // // //             <div key={it.id} className="card">
// // // // // // // // // //               <h4>{it.name}</h4>
// // // // // // // // // //               <p style={{ minHeight: 40 }}>{it.description}</p>
// // // // // // // // // //               <div>₹{it.price}</div>
// // // // // // // // // //               <button className="button" onClick={() => addToCart(it)}>
// // // // // // // // // //                 Add to Cart
// // // // // // // // // //               </button>
// // // // // // // // // //             </div>
// // // // // // // // // //           ))}
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>

// // // // // // // // // //       {/* RIGHT: Cart */}
// // // // // // // // // //       <div className="cart-section">
// // // // // // // // // //         <h2>Your Cart</h2>
// // // // // // // // // //         {cart.length ? (
// // // // // // // // // //           <>
// // // // // // // // // //             {cart.map((it) => (
// // // // // // // // // //               <div key={it.id} className="cart-item">
// // // // // // // // // //                 <div>
// // // // // // // // // //                   <b>{it.name}</b>
// // // // // // // // // //                 </div>
// // // // // // // // // //                 <div className="cart-actions">
// // // // // // // // // //                   <button onClick={() => decreaseQty(it)}>-</button>
// // // // // // // // // //                   <span>{it.quantity}</span>
// // // // // // // // // //                   <button onClick={() => increaseQty(it)}>+</button>
// // // // // // // // // //                 </div>
// // // // // // // // // //                 <div className="cart-price">₹{it.price * it.quantity}</div>
// // // // // // // // // //               </div>
// // // // // // // // // //             ))}
// // // // // // // // // //             <div className="cart-total">
// // // // // // // // // //               <h3>Total: ₹{total}</h3>
// // // // // // // // // //               <button
// // // // // // // // // //                 className="button"
// // // // // // // // // //                 onClick={async () => {
// // // // // // // // // //                   await API('/orders/checkout', { method: 'POST' });
// // // // // // // // // //                   loadCart();
// // // // // // // // // //                 }}
// // // // // // // // // //               >
// // // // // // // // // //                 Checkout
// // // // // // // // // //               </button>
// // // // // // // // // //             </div>
// // // // // // // // // //           </>
// // // // // // // // // //         ) : (
// // // // // // // // // //           <p>Your cart is empty.</p>
// // // // // // // // // //         )}
// // // // // // // // // //       </div>

// // // // // // // // // //       {/* Auth Modal */}
// // // // // // // // // //       {showAuth && (
// // // // // // // // // //         <AuthModal onClose={() => setShowAuth(false)} onLogin={onLogin} />
// // // // // // // // // //       )}
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // }

// // // // // // // // // import React, { useEffect, useState } from 'react';
// // // // // // // // // import API from '../api';
// // // // // // // // // import AuthModal from '../parts/AuthModal';
// // // // // // // // // import './Home.css';

// // // // // // // // // export default function Home({ token, onLogin }) {
// // // // // // // // //   const [items, setItems] = useState([]);
// // // // // // // // //   const [showAuth, setShowAuth] = useState(false);
// // // // // // // // //   const [cart, setCart] = useState([]);
// // // // // // // // //   const [showCart, setShowCart] = useState(false); // controls split view

// // // // // // // // //   // Fetch menu and cart
// // // // // // // // //   useEffect(() => {
// // // // // // // // //     loadMenu();
// // // // // // // // //     if (localStorage.getItem('token')) loadCart();
// // // // // // // // //   }, []);

// // // // // // // // //   const loadMenu = async () => {
// // // // // // // // //     const data = await API('/items');
// // // // // // // // //     setItems(data || []);
// // // // // // // // //   };

// // // // // // // // //   const loadCart = async () => {
// // // // // // // // //     const res = await API('/cart');
// // // // // // // // //     if (res.items) {
// // // // // // // // //       setCart(res.items);
// // // // // // // // //       setShowCart(res.items.length > 0); // show/hide cart dynamically
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   // Add item to cart
// // // // // // // // //   const addToCart = async (item) => {
// // // // // // // // //     if (!localStorage.getItem('token')) {
// // // // // // // // //       setShowAuth(true);
// // // // // // // // //       return;
// // // // // // // // //     }
// // // // // // // // //     await API('/cart/add', {
// // // // // // // // //       method: 'POST',
// // // // // // // // //       headers: { 'Content-Type': 'application/json' },
// // // // // // // // //       body: JSON.stringify({ item_id: item.id, quantity: 1 }),
// // // // // // // // //     });
// // // // // // // // //     loadCart();
// // // // // // // // //   };

// // // // // // // // //   // Increase item quantity
// // // // // // // // //   const increaseQty = async (item) => {
// // // // // // // // //     await API('/cart/add', {
// // // // // // // // //       method: 'POST',
// // // // // // // // //       headers: { 'Content-Type': 'application/json' },
// // // // // // // // //       body: JSON.stringify({ item_id: item.id, quantity: 1 }),
// // // // // // // // //     });
// // // // // // // // //     loadCart();
// // // // // // // // //   };

// // // // // // // // //   // Decrease item quantity
// // // // // // // // //   const decreaseQty = async (item) => {
// // // // // // // // //     if (item.quantity === 1) {
// // // // // // // // //       await API('/cart/remove', {
// // // // // // // // //         method: 'POST',
// // // // // // // // //         headers: { 'Content-Type': 'application/json' },
// // // // // // // // //         body: JSON.stringify({ item_id: item.id }),
// // // // // // // // //       });
// // // // // // // // //     } else {
// // // // // // // // //       await API('/cart/add', {
// // // // // // // // //         method: 'POST',
// // // // // // // // //         headers: { 'Content-Type': 'application/json' },
// // // // // // // // //         body: JSON.stringify({ item_id: item.id, quantity: -1 }),
// // // // // // // // //       });
// // // // // // // // //     }
// // // // // // // // //     loadCart();
// // // // // // // // //   };

// // // // // // // // //   // Checkout: place order, clear cart, go back to full menu
// // // // // // // // //   const checkout = async () => {
// // // // // // // // //     await API('/orders/checkout', { method: 'POST' });
// // // // // // // // //     setCart([]);
// // // // // // // // //     setShowCart(false); // hide cart after checkout
// // // // // // // // //   };

// // // // // // // // //   const total = cart.reduce((t, i) => t + i.price * i.quantity, 0);

// // // // // // // // //   return (
// // // // // // // // //     <div className={`split-layout ${showCart ? '' : 'full-width'}`}>
// // // // // // // // //       {/* LEFT: Menu */}
// // // // // // // // //       <div className="menu-section">
// // // // // // // // //         <h2>Menu</h2>
// // // // // // // // //         <div className="grid">
// // // // // // // // //           {items.map((it) => (
// // // // // // // // //             <div key={it.id} className="card">
// // // // // // // // //               <h4>{it.name}</h4>
// // // // // // // // //               <p style={{ minHeight: 40 }}>{it.description}</p>
// // // // // // // // //               <div>₹{it.price}</div>
// // // // // // // // //               <button className="button" onClick={() => addToCart(it)}>
// // // // // // // // //                 Add to Cart
// // // // // // // // //               </button>
// // // // // // // // //             </div>
// // // // // // // // //           ))}
// // // // // // // // //         </div>
// // // // // // // // //       </div>

// // // // // // // // //       {/* RIGHT: Cart (visible only when not empty) */}
// // // // // // // // //       {showCart && (
// // // // // // // // //         <div className="cart-section">
// // // // // // // // //           <h2>Your Cart</h2>
// // // // // // // // //           {cart.length ? (
// // // // // // // // //             <>
// // // // // // // // //               {cart.map((it) => (
// // // // // // // // //                 <div key={it.id} className="cart-item">
// // // // // // // // //                   <div>
// // // // // // // // //                     <b>{it.name}</b>
// // // // // // // // //                   </div>
// // // // // // // // //                   <div className="cart-actions">
// // // // // // // // //                     <button onClick={() => decreaseQty(it)}>-</button>
// // // // // // // // //                     <span>{it.quantity}</span>
// // // // // // // // //                     <button onClick={() => increaseQty(it)}>+</button>
// // // // // // // // //                   </div>
// // // // // // // // //                   <div className="cart-price">₹{it.price * it.quantity}</div>
// // // // // // // // //                 </div>
// // // // // // // // //               ))}
// // // // // // // // //               <div className="cart-total">
// // // // // // // // //                 <h3>Total: ₹{total}</h3>
// // // // // // // // //                 <button className="button" onClick={checkout}>
// // // // // // // // //                   Checkout
// // // // // // // // //                 </button>
// // // // // // // // //               </div>
// // // // // // // // //             </>
// // // // // // // // //           ) : (
// // // // // // // // //             <p>Your cart is empty.</p>
// // // // // // // // //           )}
// // // // // // // // //         </div>
// // // // // // // // //       )}

// // // // // // // // //       {/* Auth Modal */}
// // // // // // // // //       {showAuth && (
// // // // // // // // //         <AuthModal onClose={() => setShowAuth(false)} onLogin={onLogin} />
// // // // // // // // //       )}
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // }
// // // // // // // // // import React, { useEffect, useState } from 'react';
// // // // // // // // // import API from '../api';
// // // // // // // // // import AuthModal from '../parts/AuthModal';
// // // // // // // // // import './Home.css';

// // // // // // // // // export default function Home({ token, onLogin }) {
// // // // // // // // //   const [items, setItems] = useState([]);
// // // // // // // // //   const [filteredItems, setFilteredItems] = useState([]);
// // // // // // // // //   const [cart, setCart] = useState([]);
// // // // // // // // //   const [showAuth, setShowAuth] = useState(false);
// // // // // // // // //   const [showCart, setShowCart] = useState(false);
// // // // // // // // //   const [search, setSearch] = useState('');
// // // // // // // // //   const [selectedCategory, setSelectedCategory] = useState('All');

// // // // // // // // //   const categories = [
// // // // // // // // //     'All',
// // // // // // // // //     'Rice',
// // // // // // // // //     'Roti',
// // // // // // // // //     'Pizza',
// // // // // // // // //     'Burger',
// // // // // // // // //     'Cold Drink',
// // // // // // // // //     'Dessert',
// // // // // // // // //     'Snacks',
// // // // // // // // //   ];

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     loadMenu();
// // // // // // // // //     if (localStorage.getItem('token')) loadCart();
// // // // // // // // //   }, []);

// // // // // // // // //   const loadMenu = async () => {
// // // // // // // // //     const data = await API('/api/items');
// // // // // // // // //     setItems(data || []);
// // // // // // // // //     setFilteredItems(data || []);
// // // // // // // // //   };

// // // // // // // // //   const loadCart = async () => {
// // // // // // // // //     const res = await API('/cart');
// // // // // // // // //     if (res.items) {
// // // // // // // // //       setCart(res.items);
// // // // // // // // //       setShowCart(res.items.length > 0);
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   const addToCart = async (item) => {
// // // // // // // // //     if (!localStorage.getItem('token')) {
// // // // // // // // //       setShowAuth(true);
// // // // // // // // //       return;
// // // // // // // // //     }
// // // // // // // // //     await API('/cart/add', {
// // // // // // // // //       method: 'POST',
// // // // // // // // //       headers: { 'Content-Type': 'application/json' },
// // // // // // // // //       body: JSON.stringify({ item_id: item.id, quantity: 1 }),
// // // // // // // // //     });
// // // // // // // // //     loadCart();
// // // // // // // // //   };

// // // // // // // // //   const increaseQty = async (item) => {
// // // // // // // // //     await API('/cart/add', {
// // // // // // // // //       method: 'POST',
// // // // // // // // //       headers: { 'Content-Type': 'application/json' },
// // // // // // // // //       body: JSON.stringify({ item_id: item.id, quantity: 1 }),
// // // // // // // // //     });
// // // // // // // // //     loadCart();
// // // // // // // // //   };

// // // // // // // // //   const decreaseQty = async (item) => {
// // // // // // // // //     if (item.quantity === 1) {
// // // // // // // // //       await API('/cart/remove', {
// // // // // // // // //         method: 'POST',
// // // // // // // // //         headers: { 'Content-Type': 'application/json' },
// // // // // // // // //         body: JSON.stringify({ item_id: item.id }),
// // // // // // // // //       });
// // // // // // // // //     } else {
// // // // // // // // //       await API('/cart/add', {
// // // // // // // // //         method: 'POST',
// // // // // // // // //         headers: { 'Content-Type': 'application/json' },
// // // // // // // // //         body: JSON.stringify({ item_id: item.id, quantity: -1 }),
// // // // // // // // //       });
// // // // // // // // //     }
// // // // // // // // //     loadCart();
// // // // // // // // //   };

// // // // // // // // //   const checkout = async () => {
// // // // // // // // //     await API('/orders/checkout', { method: 'POST' });
// // // // // // // // //     setCart([]);
// // // // // // // // //     setShowCart(false);
// // // // // // // // //   };

// // // // // // // // //   // Filter items by search & category
// // // // // // // // //   useEffect(() => {
// // // // // // // // //     let list = [...items];
// // // // // // // // //     if (selectedCategory !== 'All') {
// // // // // // // // //       list = list.filter((i) => i.category === selectedCategory);
// // // // // // // // //     }
// // // // // // // // //     if (search.trim()) {
// // // // // // // // //       list = list.filter((i) =>
// // // // // // // // //         i.name.toLowerCase().includes(search.toLowerCase())
// // // // // // // // //       );
// // // // // // // // //     }
// // // // // // // // //     setFilteredItems(list);
// // // // // // // // //   }, [search, selectedCategory, items]);

// // // // // // // // //   const total = cart.reduce((t, i) => t + i.price * i.quantity, 0);

// // // // // // // // //   return (
// // // // // // // // //     <div className={`split-layout ${showCart ? '' : 'full-width'}`}>
// // // // // // // // //       {/* LEFT: MENU */}
// // // // // // // // //       <div className="menu-section">
// // // // // // // // //         <h2>Menu</h2>

// // // // // // // // //         {/* 🔍 Search Bar */}
// // // // // // // // //         <input
// // // // // // // // //           type="text"
// // // // // // // // //           placeholder="Search for dishes..."
// // // // // // // // //           value={search}
// // // // // // // // //           onChange={(e) => setSearch(e.target.value)}
// // // // // // // // //           className="search-bar"
// // // // // // // // //         />

// // // // // // // // //         {/* 🍽 Category Tabs */}
// // // // // // // // //         <div className="categories">
// // // // // // // // //           {categories.map((cat) => (
// // // // // // // // //             <button
// // // // // // // // //               key={cat}
// // // // // // // // //               className={`cat-btn ${
// // // // // // // // //                 selectedCategory === cat ? 'active' : ''
// // // // // // // // //               }`}
// // // // // // // // //               onClick={() => setSelectedCategory(cat)}
// // // // // // // // //             >
// // // // // // // // //               {cat}
// // // // // // // // //             </button>
// // // // // // // // //           ))}
// // // // // // // // //         </div>

// // // // // // // // //         {/* 🍲 Menu Grid */}
// // // // // // // // //         <div className="grid">
// // // // // // // // //           {filteredItems.map((it) => (
// // // // // // // // //             <div key={it.id} className="card">
// // // // // // // // //               <h4>{it.name}</h4>
// // // // // // // // //               <p>{it.description}</p>
// // // // // // // // //               <div>₹{it.price}</div>
// // // // // // // // //               <button className="button" onClick={() => addToCart(it)}>
// // // // // // // // //                 Add to Cart
// // // // // // // // //               </button>
// // // // // // // // //             </div>
// // // // // // // // //           ))}
// // // // // // // // //           {filteredItems.length === 0 && <p>No items found.</p>}
// // // // // // // // //         </div>
// // // // // // // // //       </div>

// // // // // // // // //       {/* RIGHT: CART */}
// // // // // // // // //       {showCart && (
// // // // // // // // //         <div className="cart-section">
// // // // // // // // //           <h2>Your Cart</h2>
// // // // // // // // //           {cart.length ? (
// // // // // // // // //             <>
// // // // // // // // //               {cart.map((it) => (
// // // // // // // // //                 <div key={it.id} className="cart-item">
// // // // // // // // //                   <div>
// // // // // // // // //                     <b>{it.name}</b>
// // // // // // // // //                   </div>
// // // // // // // // //                   <div className="cart-actions">
// // // // // // // // //                     <button onClick={() => decreaseQty(it)}>-</button>
// // // // // // // // //                     <span>{it.quantity}</span>
// // // // // // // // //                     <button onClick={() => increaseQty(it)}>+</button>
// // // // // // // // //                   </div>
// // // // // // // // //                   <div className="cart-price">₹{it.price * it.quantity}</div>
// // // // // // // // //                 </div>
// // // // // // // // //               ))}
// // // // // // // // //               <div className="cart-total">
// // // // // // // // //                 <h3>Total: ₹{total}</h3>
// // // // // // // // //                 <button className="button" onClick={checkout}>
// // // // // // // // //                   Checkout
// // // // // // // // //                 </button>
// // // // // // // // //               </div>
// // // // // // // // //             </>
// // // // // // // // //           ) : (
// // // // // // // // //             <p>Your cart is empty.</p>
// // // // // // // // //           )}
// // // // // // // // //         </div>
// // // // // // // // //       )}

// // // // // // // // //       {showAuth && (
// // // // // // // // //         <AuthModal onClose={() => setShowAuth(false)} onLogin={onLogin} />
// // // // // // // // //       )}
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // }


// // // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // // import API from "../api";
// // // // // // // // import AuthModal from "../parts/AuthModal";
// // // // // // // // import "./Home.css";

// // // // // // // // export default function Home({ token, onLogin }) {
// // // // // // // //   const [items, setItems] = useState([]);
// // // // // // // //   const [filteredItems, setFilteredItems] = useState([]);
// // // // // // // //   const [cart, setCart] = useState([]);
// // // // // // // //   const [showAuth, setShowAuth] = useState(false);
// // // // // // // //   const [showCart, setShowCart] = useState(false);
// // // // // // // //   const [search, setSearch] = useState("");
// // // // // // // //   const [selectedCategory, setSelectedCategory] = useState("All");

// // // // // // // //   const categories = [
// // // // // // // //     "All",
// // // // // // // //     "Rice",
// // // // // // // //     "Roti",
// // // // // // // //     "Pizza",
// // // // // // // //     "Burger",
// // // // // // // //     "Cold Drink",
// // // // // // // //     "Dessert",
// // // // // // // //     "Snacks",
// // // // // // // //   ];

// // // // // // // //   // ✅ Load menu and user cart
// // // // // // // //   useEffect(() => {
// // // // // // // //     loadMenu();
// // // // // // // //     if (localStorage.getItem("token")) loadCart();
// // // // // // // //   }, []);

// // // // // // // //   // ✅ Load menu items
// // // // // // // //   const loadMenu = async () => {
// // // // // // // //     try {
// // // // // // // //       const data = await API("/items"); // ✅ API helper automatically adds /api prefix
// // // // // // // //       setItems(data || []);
// // // // // // // //       setFilteredItems(data || []);
// // // // // // // //     } catch (err) {
// // // // // // // //       console.error("❌ Failed to load menu:", err);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   // ✅ Load user's cart
// // // // // // // //   const loadCart = async () => {
// // // // // // // //     try {
// // // // // // // //       const res = await API("/cart", {
// // // // // // // //         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
// // // // // // // //       });
// // // // // // // //       if (res.cart) {
// // // // // // // //         setCart(res.cart);
// // // // // // // //         setShowCart(res.cart.length > 0);
// // // // // // // //       }
// // // // // // // //     } catch (err) {
// // // // // // // //       console.error("❌ Failed to load cart:", err);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   // ✅ Add item to cart (backend /api/cart/add)
// // // // // // // //   // const addToCart = async (item) => {
// // // // // // // //   //   if (!localStorage.getItem("token")) {
// // // // // // // //   //     setShowAuth(true);
// // // // // // // //   //     return;
// // // // // // // //   //   }
// // // // // // // //   //   try {
// // // // // // // //   //     await API("/cart/add", {
// // // // // // // //   //       method: "POST",
// // // // // // // //   //       headers: {
// // // // // // // //   //         "Content-Type": "application/json",
// // // // // // // //   //         Authorization: `Bearer ${localStorage.getItem("token")}`,
// // // // // // // //   //       },
// // // // // // // //   //       body: JSON.stringify({ item_id: item.id, quantity: 1 }),
// // // // // // // //   //     });
// // // // // // // //   //     loadCart();
// // // // // // // //   //   } catch (err) {
// // // // // // // //   //     console.error("❌ Add to cart failed:", err);
// // // // // // // //   //   }
// // // // // // // //   // };
// // // // // // // //   const addToCart = async (item) => {
// // // // // // // //     console.log("Adding to cart:", item);
// // // // // // // //     if (!localStorage.getItem("token")) {
// // // // // // // //       setShowAuth(true);
// // // // // // // //       return;
// // // // // // // //     }
// // // // // // // //     try {
// // // // // // // //       console.log("Request ->", `${process.env.REACT_APP_API_URL || 'http://localhost:5000/api'}/cart/add`, "token:", localStorage.getItem("token"));
// // // // // // // //       await API("/cart/add", {
// // // // // // // //         method: "POST",
// // // // // // // //         body: JSON.stringify({ item_id: item.id, quantity: 1 }),
// // // // // // // //       });
// // // // // // // //       console.log("Added - reloading cart");
// // // // // // // //       loadCart();
// // // // // // // //     } catch (err) {
// // // // // // // //       console.error("AddToCart error:", err);
// // // // // // // //       alert("Failed to add to cart: " + err.message);
// // // // // // // //     }
// // // // // // // //   };


// // // // // // // //   // ✅ Increase item quantity
// // // // // // // //   const increaseQty = async (item) => {
// // // // // // // //     try {
// // // // // // // //       await API("/cart/add", {
// // // // // // // //         method: "POST",
// // // // // // // //         headers: {
// // // // // // // //           "Content-Type": "application/json",
// // // // // // // //           Authorization: `Bearer ${localStorage.getItem("token")}`,
// // // // // // // //         },
// // // // // // // //         body: JSON.stringify({ item_id: item.item_id, quantity: 1 }),
// // // // // // // //       });
// // // // // // // //       loadCart();
// // // // // // // //     } catch (err) {
// // // // // // // //       console.error("❌ Increase quantity failed:", err);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   // ✅ Decrease item quantity or remove if 1
// // // // // // // //   const decreaseQty = async (item) => {
// // // // // // // //     try {
// // // // // // // //       if (item.quantity <= 1) {
// // // // // // // //         await API(`/cart/remove/${item.cart_id}`, {
// // // // // // // //           method: "DELETE",
// // // // // // // //           headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
// // // // // // // //         });
// // // // // // // //       } else {
// // // // // // // //         await API("/cart/add", {
// // // // // // // //           method: "POST",
// // // // // // // //           headers: {
// // // // // // // //             "Content-Type": "application/json",
// // // // // // // //             Authorization: `Bearer ${localStorage.getItem("token")}`,
// // // // // // // //           },
// // // // // // // //           body: JSON.stringify({ item_id: item.item_id, quantity: -1 }),
// // // // // // // //         });
// // // // // // // //       }
// // // // // // // //       loadCart();
// // // // // // // //     } catch (err) {
// // // // // // // //       console.error("❌ Decrease quantity failed:", err);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   // ✅ Checkout (simple clear cart)
// // // // // // // //   const checkout = async () => {
// // // // // // // //     alert("✅ Order placed successfully!");
// // // // // // // //     setCart([]);
// // // // // // // //     setShowCart(false);
// // // // // // // //   };

// // // // // // // //   // ✅ Filter items by search & category
// // // // // // // //   useEffect(() => {
// // // // // // // //     let list = [...items];
// // // // // // // //     if (selectedCategory !== "All") {
// // // // // // // //       list = list.filter((i) => i.category === selectedCategory);
// // // // // // // //     }
// // // // // // // //     if (search.trim()) {
// // // // // // // //       list = list.filter((i) =>
// // // // // // // //         i.name.toLowerCase().includes(search.toLowerCase())
// // // // // // // //       );
// // // // // // // //     }
// // // // // // // //     setFilteredItems(list);
// // // // // // // //   }, [search, selectedCategory, items]);

// // // // // // // //   const total = cart.reduce((t, i) => t + i.price * i.quantity, 0);

// // // // // // // //   return (
// // // // // // // //     <div className={`split-layout ${showCart ? "" : "full-width"}`}>
// // // // // // // //       {/* LEFT: MENU */}
// // // // // // // //       <div className="menu-section">
// // // // // // // //         <h2>Menu</h2>

// // // // // // // //         {/* 🔍 Search Bar */}
// // // // // // // //         <input
// // // // // // // //           type="text"
// // // // // // // //           placeholder="Search for dishes..."
// // // // // // // //           value={search}
// // // // // // // //           onChange={(e) => setSearch(e.target.value)}
// // // // // // // //           className="search-bar"
// // // // // // // //         />

// // // // // // // //         {/* 🍽 Category Tabs */}
// // // // // // // //         <div className="categories">
// // // // // // // //           {categories.map((cat) => (
// // // // // // // //             <button
// // // // // // // //               key={cat}
// // // // // // // //               className={`cat-btn ${selectedCategory === cat ? "active" : ""}`}
// // // // // // // //               onClick={() => setSelectedCategory(cat)}
// // // // // // // //             >
// // // // // // // //               {cat}
// // // // // // // //             </button>
// // // // // // // //           ))}
// // // // // // // //         </div>

// // // // // // // //         {/* 🍲 Menu Grid */}
// // // // // // // //         <div className="grid">
// // // // // // // //           {filteredItems.map((it) => (
// // // // // // // //             <div key={it.id} className="card">
// // // // // // // //               <h4>{it.name}</h4>
// // // // // // // //               <p>{it.description}</p>
// // // // // // // //               <div>₹{it.price}</div>
// // // // // // // //               <button className="button" onClick={() => addToCart(it)}>
// // // // // // // //                 Add to Cart
// // // // // // // //               </button>
// // // // // // // //             </div>
// // // // // // // //           ))}
// // // // // // // //           {filteredItems.length === 0 && <p>No items found.</p>}
// // // // // // // //         </div>
// // // // // // // //       </div>

// // // // // // // //       {/* RIGHT: CART */}
// // // // // // // //       {showCart && (
// // // // // // // //         <div className="cart-section">
// // // // // // // //           <h2>Your Cart</h2>
// // // // // // // //           {cart.length ? (
// // // // // // // //             <>
// // // // // // // //               {cart.map((it) => (
// // // // // // // //                 <div key={it.cart_id} className="cart-item">
// // // // // // // //                   <div>
// // // // // // // //                     <b>{it.name}</b>
// // // // // // // //                   </div>
// // // // // // // //                   <div className="cart-actions">
// // // // // // // //                     <button onClick={() => decreaseQty(it)}>-</button>
// // // // // // // //                     <span>{it.quantity}</span>
// // // // // // // //                     <button onClick={() => increaseQty(it)}>+</button>
// // // // // // // //                   </div>
// // // // // // // //                   <div className="cart-price">₹{it.price * it.quantity}</div>
// // // // // // // //                 </div>
// // // // // // // //               ))}
// // // // // // // //               <div className="cart-total">
// // // // // // // //                 <h3>Total: ₹{total}</h3>
// // // // // // // //                 <button className="button" onClick={checkout}>
// // // // // // // //                   Checkout
// // // // // // // //                 </button>
// // // // // // // //               </div>
// // // // // // // //             </>
// // // // // // // //           ) : (
// // // // // // // //             <p>Your cart is empty.</p>
// // // // // // // //           )}
// // // // // // // //         </div>
// // // // // // // //       )}

// // // // // // // //       {showAuth && (
// // // // // // // //         <AuthModal onClose={() => setShowAuth(false)} onLogin={onLogin} />
// // // // // // // //       )}
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }
// // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // import API from "../api";
// // // // // // // import AuthModal from "../parts/AuthModal";
// // // // // // // import "./Home.css";

// // // // // // // export default function Home({ token, onLogin }) {
// // // // // // //   const [items, setItems] = useState([]);
// // // // // // //   const [filteredItems, setFilteredItems] = useState([]);
// // // // // // //   const [cart, setCart] = useState([]);
// // // // // // //   const [showAuth, setShowAuth] = useState(false);
// // // // // // //   const [showCart, setShowCart] = useState(false);
// // // // // // //   const [search, setSearch] = useState("");
// // // // // // //   const [selectedCategory, setSelectedCategory] = useState("All");

// // // // // // //   const categories = ["All", "Rice", "Roti", "Pizza", "Burger", "Cold Drink", "Dessert", "Snacks"];

// // // // // // //   useEffect(() => {
// // // // // // //     loadMenu();
// // // // // // //     if (localStorage.getItem("token")) loadCart();
// // // // // // //   }, []);

// // // // // // //   const loadMenu = async () => {
// // // // // // //     try {
// // // // // // //       console.log("🍽 Fetching menu...");
// // // // // // //       const data = await API("/items"); // ✅ No '/api' prefix here
// // // // // // //       console.log("✅ Menu items:", data);
// // // // // // //       setItems(data || []);
// // // // // // //       setFilteredItems(data || []);
// // // // // // //     } catch (err) {
// // // // // // //       console.error("❌ Failed to load items:", err);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const loadCart = async () => {
// // // // // // //     try {
// // // // // // //       const res = await API("/cart");
// // // // // // //       if (res.items) {
// // // // // // //         setCart(res.items);
// // // // // // //         setShowCart(res.items.length > 0);
// // // // // // //       }
// // // // // // //     } catch (err) {
// // // // // // //       console.error("❌ Failed to load cart:", err);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const addToCart = async (item) => {
// // // // // // //     if (!localStorage.getItem("token")) {
// // // // // // //       setShowAuth(true);
// // // // // // //       return;
// // // // // // //     }
// // // // // // //     try {
// // // // // // //       await API("/cart/add", {
// // // // // // //         method: "POST",
// // // // // // //         headers: { "Content-Type": "application/json" },
// // // // // // //         body: JSON.stringify({ item_id: item.id, quantity: 1 }),
// // // // // // //       });
// // // // // // //       loadCart();
// // // // // // //     } catch (err) {
// // // // // // //       console.error("❌ Add to cart error:", err);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const increaseQty = async (item) => {
// // // // // // //     await API("/cart/add", {
// // // // // // //       method: "POST",
// // // // // // //       headers: { "Content-Type": "application/json" },
// // // // // // //       body: JSON.stringify({ item_id: item.id, quantity: 1 }),
// // // // // // //     });
// // // // // // //     loadCart();
// // // // // // //   };

// // // // // // //   const decreaseQty = async (item) => {
// // // // // // //     if (item.quantity === 1) {
// // // // // // //       await API("/cart/remove", {
// // // // // // //         method: "POST",
// // // // // // //         headers: { "Content-Type": "application/json" },
// // // // // // //         body: JSON.stringify({ item_id: item.id }),
// // // // // // //       });
// // // // // // //     } else {
// // // // // // //       await API("/cart/add", {
// // // // // // //         method: "POST",
// // // // // // //         headers: { "Content-Type": "application/json" },
// // // // // // //         body: JSON.stringify({ item_id: item.id, quantity: -1 }),
// // // // // // //       });
// // // // // // //     }
// // // // // // //     loadCart();
// // // // // // //   };

// // // // // // //   const checkout = async () => {
// // // // // // //     await API("/orders/checkout", { method: "POST" });
// // // // // // //     setCart([]);
// // // // // // //     setShowCart(false);
// // // // // // //   };

// // // // // // //   // ✅ Filter by search/category
// // // // // // //   useEffect(() => {
// // // // // // //     let list = [...items];
// // // // // // //     if (selectedCategory !== "All") {
// // // // // // //       list = list.filter((i) => i.category === selectedCategory);
// // // // // // //     }
// // // // // // //     if (search.trim()) {
// // // // // // //       list = list.filter((i) => i.name.toLowerCase().includes(search.toLowerCase()));
// // // // // // //     }
// // // // // // //     setFilteredItems(list);
// // // // // // //   }, [search, selectedCategory, items]);

// // // // // // //   const total = cart.reduce((t, i) => t + i.price * i.quantity, 0);

// // // // // // //   return (
// // // // // // //     <div className={`split-layout ${showCart ? "" : "full-width"}`}>
// // // // // // //       {/* LEFT: MENU */}
// // // // // // //       <div className="menu-section">
// // // // // // //         <h2>Menu</h2>

// // // // // // //         <input
// // // // // // //           type="text"
// // // // // // //           placeholder="Search for dishes..."
// // // // // // //           value={search}
// // // // // // //           onChange={(e) => setSearch(e.target.value)}
// // // // // // //           className="search-bar"
// // // // // // //         />

// // // // // // //         <div className="categories">
// // // // // // //           {categories.map((cat) => (
// // // // // // //             <button
// // // // // // //               key={cat}
// // // // // // //               className={`cat-btn ${selectedCategory === cat ? "active" : ""}`}
// // // // // // //               onClick={() => setSelectedCategory(cat)}
// // // // // // //             >
// // // // // // //               {cat}
// // // // // // //             </button>
// // // // // // //           ))}
// // // // // // //         </div>

// // // // // // //         <div className="grid">
// // // // // // //           {filteredItems.map((it) => (
// // // // // // //             <div key={it.id} className="card">
// // // // // // //               <h4>{it.name}</h4>
// // // // // // //               <p>{it.description}</p>
// // // // // // //               <div>₹{it.price}</div>
// // // // // // //               <button className="button" onClick={() => addToCart(it)}>
// // // // // // //                 Add to Cart
// // // // // // //               </button>
// // // // // // //             </div>
// // // // // // //           ))}
// // // // // // //           {filteredItems.length === 0 && <p>No items found.</p>}
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       {/* RIGHT: CART */}
// // // // // // //       {showCart && (
// // // // // // //         <div className="cart-section">
// // // // // // //           <h2>Your Cart</h2>
// // // // // // //           {cart.length ? (
// // // // // // //             <>
// // // // // // //               {cart.map((it) => (
// // // // // // //                 <div key={it.id} className="cart-item">
// // // // // // //                   <div>
// // // // // // //                     <b>{it.name}</b>
// // // // // // //                   </div>
// // // // // // //                   <div className="cart-actions">
// // // // // // //                     <button onClick={() => decreaseQty(it)}>-</button>
// // // // // // //                     <span>{it.quantity}</span>
// // // // // // //                     <button onClick={() => increaseQty(it)}>+</button>
// // // // // // //                   </div>
// // // // // // //                   <div className="cart-price">₹{it.price * it.quantity}</div>
// // // // // // //                 </div>
// // // // // // //               ))}
// // // // // // //               <div className="cart-total">
// // // // // // //                 <h3>Total: ₹{total}</h3>
// // // // // // //                 <button className="button" onClick={checkout}>
// // // // // // //                   Checkout
// // // // // // //                 </button>
// // // // // // //               </div>
// // // // // // //             </>
// // // // // // //           ) : (
// // // // // // //             <p>Your cart is empty.</p>
// // // // // // //           )}
// // // // // // //         </div>
// // // // // // //       )}

// // // // // // //       {showAuth && <AuthModal onClose={() => setShowAuth(false)} onLogin={onLogin} />}
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }
// // // // // // import React, { useEffect, useState } from "react";
// // // // // // import API from "../api";
// // // // // // import AuthModal from "../parts/AuthModal";
// // // // // // import "./Home.css";

// // // // // // export default function Home({ token, onLogin }) {
// // // // // //   const [items, setItems] = useState([]);
// // // // // //   const [filteredItems, setFilteredItems] = useState([]);
// // // // // //   const [cart, setCart] = useState([]);
// // // // // //   const [showAuth, setShowAuth] = useState(false);
// // // // // //   const [showCart, setShowCart] = useState(false);
// // // // // //   const [search, setSearch] = useState("");
// // // // // //   const [selectedCategory, setSelectedCategory] = useState("All");

// // // // // //   const categories = [
// // // // // //     "All",
// // // // // //     "Rice",
// // // // // //     "Roti",
// // // // // //     "Pizza",
// // // // // //     "Burger",
// // // // // //     "Cold Drink",
// // // // // //     "Dessert",
// // // // // //     "Snacks",
// // // // // //   ];

// // // // // //   // ✅ Load menu + cart initially
// // // // // //   useEffect(() => {
// // // // // //     loadMenu();
// // // // // //     if (localStorage.getItem("token")) loadCart();
// // // // // //   }, []);

// // // // // //   // ✅ Fetch menu items
// // // // // //   const loadMenu = async () => {
// // // // // //     try {
// // // // // //       console.log("🍽 Fetching menu...");
// // // // // //       const data = await API("/items");
// // // // // //       setItems(data || []);
// // // // // //       setFilteredItems(data || []);
// // // // // //     } catch (err) {
// // // // // //       console.error("❌ Failed to load menu:", err);
// // // // // //     }
// // // // // //   };

// // // // // //   // ✅ Fetch cart items
// // // // // //   const loadCart = async () => {
// // // // // //     try {
// // // // // //       const res = await API("/cart");
// // // // // //       if (res.items) {
// // // // // //         // Normalize and ensure unique keys
// // // // // //         const normalized = res.items.map((it) => ({
// // // // // //           id: it.cart_id || it.id || it.item_id,
// // // // // //           item_id: it.item_id,
// // // // // //           name: it.name,
// // // // // //           price: Number(it.price),
// // // // // //           quantity: Number(it.quantity),
// // // // // //         }));
// // // // // //         setCart(normalized);
// // // // // //         setShowCart(normalized.length > 0);
// // // // // //       }
// // // // // //     } catch (err) {
// // // // // //       console.error("❌ Failed to load cart:", err);
// // // // // //     }
// // // // // //   };

// // // // // //   // ✅ Add item to cart
// // // // // //   const addToCart = async (item) => {
// // // // // //     if (!localStorage.getItem("token")) {
// // // // // //       setShowAuth(true);
// // // // // //       return;
// // // // // //     }
// // // // // //     try {
// // // // // //       await API("/cart/add", {
// // // // // //         method: "POST",
// // // // // //         headers: { "Content-Type": "application/json" },
// // // // // //         body: JSON.stringify({ item_id: item.id, quantity: 1 }),
// // // // // //       });
// // // // // //       await loadCart();
// // // // // //     } catch (err) {
// // // // // //       console.error("❌ Add to cart error:", err);
// // // // // //     }
// // // // // //   };

// // // // // //   // ✅ Increase quantity for a single item
// // // // // //   const increaseQty = async (item) => {
// // // // // //     try {
// // // // // //       await API("/cart/add", {
// // // // // //         method: "POST",
// // // // // //         headers: { "Content-Type": "application/json" },
// // // // // //         body: JSON.stringify({ item_id: item.item_id, quantity: 1 }),
// // // // // //       });
// // // // // //       await loadCart();
// // // // // //     } catch (err) {
// // // // // //       console.error("❌ Increase quantity failed:", err);
// // // // // //     }
// // // // // //   };

// // // // // //   // ✅ Decrease quantity for a single item
// // // // // //   const decreaseQty = async (item) => {
// // // // // //     try {
// // // // // //       if (item.quantity <= 1) {
// // // // // //         await API("/cart/remove", {
// // // // // //           method: "POST",
// // // // // //           headers: { "Content-Type": "application/json" },
// // // // // //           body: JSON.stringify({ item_id: item.item_id }),
// // // // // //         });
// // // // // //       } else {
// // // // // //         await API("/cart/add", {
// // // // // //           method: "POST",
// // // // // //           headers: { "Content-Type": "application/json" },
// // // // // //           body: JSON.stringify({ item_id: item.item_id, quantity: -1 }),
// // // // // //         });
// // // // // //       }
// // // // // //       await loadCart();
// // // // // //     } catch (err) {
// // // // // //       console.error("❌ Decrease quantity failed:", err);
// // // // // //     }
// // // // // //   };

// // // // // //   // ✅ Checkout (clear cart)
// // // // // //   const checkout = async () => {
// // // // // //     try {
// // // // // //       await API("/cart/checkout", { method: "POST" });
// // // // // //       alert("✅ Order placed successfully!");
// // // // // //       setCart([]);
// // // // // //       setShowCart(false);
// // // // // //     } catch (err) {
// // // // // //       console.error("❌ Checkout failed:", err);
// // // // // //     }
// // // // // //   };

// // // // // //   // ✅ Filter menu items by search & category
// // // // // //   useEffect(() => {
// // // // // //     let list = [...items];
// // // // // //     if (selectedCategory !== "All") {
// // // // // //       list = list.filter((i) => i.category === selectedCategory);
// // // // // //     }
// // // // // //     if (search.trim()) {
// // // // // //       list = list.filter((i) =>
// // // // // //         i.name.toLowerCase().includes(search.toLowerCase())
// // // // // //       );
// // // // // //     }
// // // // // //     setFilteredItems(list);
// // // // // //   }, [search, selectedCategory, items]);

// // // // // //   // ✅ Calculate total correctly
// // // // // //   const total = cart.reduce(
// // // // // //     (sum, item) => sum + (Number(item.price) || 0) * (Number(item.quantity) || 0),
// // // // // //     0
// // // // // //   );

// // // // // //   // ✅ JSX
// // // // // //   return (
// // // // // //     <div className={`split-layout ${showCart ? "" : "full-width"}`}>
// // // // // //       {/* LEFT: MENU */}
// // // // // //       <div className="menu-section">
// // // // // //         <h2>Menu</h2>

// // // // // //         {/* 🔍 Search Bar */}
// // // // // //         <input
// // // // // //           type="text"
// // // // // //           placeholder="Search for dishes..."
// // // // // //           value={search}
// // // // // //           onChange={(e) => setSearch(e.target.value)}
// // // // // //           className="search-bar"
// // // // // //         />

// // // // // //         {/* 🍽 Categories */}
// // // // // //         <div className="categories">
// // // // // //           {categories.map((cat) => (
// // // // // //             <button
// // // // // //               key={cat}
// // // // // //               className={`cat-btn ${selectedCategory === cat ? "active" : ""}`}
// // // // // //               onClick={() => setSelectedCategory(cat)}
// // // // // //             >
// // // // // //               {cat}
// // // // // //             </button>
// // // // // //           ))}
// // // // // //         </div>

// // // // // //         {/* 🍲 Menu Grid */}
// // // // // //         <div className="grid">
// // // // // //           {filteredItems.map((it) => (
// // // // // //             <div key={it.id} className="card">
// // // // // //               <h4>{it.name}</h4>
// // // // // //               <p>{it.description}</p>
// // // // // //               <div>₹{it.price}</div>
// // // // // //               <button className="button" onClick={() => addToCart(it)}>
// // // // // //                 Add to Cart
// // // // // //               </button>
// // // // // //             </div>
// // // // // //           ))}
// // // // // //           {filteredItems.length === 0 && <p>No items found.</p>}
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* RIGHT: CART */}
// // // // // //       {showCart && (
// // // // // //         <div className="cart-section">
// // // // // //           <h2>Your Cart</h2>
// // // // // //           {cart.length > 0 ? (
// // // // // //             <>
// // // // // //               {cart.map((it) => (
// // // // // //                 <div key={it.id} className="cart-item">
// // // // // //                   <div className="cart-info">
// // // // // //                     <b>{it.name}</b>
// // // // // //                   </div>
// // // // // //                   <div className="cart-actions">
// // // // // //                     <button onClick={() => decreaseQty(it)}>-</button>
// // // // // //                     <span>{it.quantity}</span>
// // // // // //                     <button onClick={() => increaseQty(it)}>+</button>
// // // // // //                   </div>
// // // // // //                   <div className="cart-price">
// // // // // //                     ₹{(it.price * it.quantity).toFixed(2)}
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               ))}

// // // // // //               <div className="cart-total">
// // // // // //                 <h3>Total: ₹{total.toFixed(2)}</h3>
// // // // // //                 <button className="button" onClick={checkout}>
// // // // // //                   Checkout
// // // // // //                 </button>
// // // // // //               </div>
// // // // // //             </>
// // // // // //           ) : (
// // // // // //             <p>Your cart is empty.</p>
// // // // // //           )}
// // // // // //         </div>
// // // // // //       )}

// // // // // //       {/* 🔐 Login Modal */}
// // // // // //       {showAuth && (
// // // // // //         <AuthModal onClose={() => setShowAuth(false)} onLogin={onLogin} />
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // }
// // // // // import React, { useEffect, useState } from "react";
// // // // // import API from "../api";
// // // // // import AuthModal from "../parts/AuthModal";
// // // // // import "./Home.css";

// // // // // export default function Home({ token, onLogin }) {
// // // // //   const [items, setItems] = useState([]);
// // // // //   const [filteredItems, setFilteredItems] = useState([]);
// // // // //   const [cart, setCart] = useState([]);
// // // // //   const [showAuth, setShowAuth] = useState(false);
// // // // //   const [showCart, setShowCart] = useState(false);
// // // // //   const [search, setSearch] = useState("");
// // // // //   const [selectedCategory, setSelectedCategory] = useState("All");

// // // // //   const categories = [
// // // // //     "All",
// // // // //     "Rice",
// // // // //     "Roti",
// // // // //     "Pizza",
// // // // //     "Burger",
// // // // //     "Cold Drink",
// // // // //     "Dessert",
// // // // //     "Snacks",
// // // // //   ];

// // // // //   // Load menu + cart initially
// // // // //   useEffect(() => {
// // // // //     loadMenu();
// // // // //     if (localStorage.getItem("token")) loadCart();
// // // // //   }, []);

// // // // //   // Fetch menu items
// // // // //   const loadMenu = async () => {
// // // // //     try {
// // // // //       console.log("🍽 Fetching menu...");
// // // // //       const data = await API("/items");
// // // // //       setItems(data || []);
// // // // //       setFilteredItems(data || []);
// // // // //     } catch (err) {
// // // // //       console.error("❌ Failed to load menu:", err);
// // // // //     }
// // // // //   };

// // // // //   // Fetch cart items
// // // // //   const loadCart = async () => {
// // // // //     try {
// // // // //       const res = await API("/cart");
// // // // //       if (res.items) {
// // // // //         // Normalize and ensure unique keys
// // // // //         const normalized = res.items.map((it) => ({
// // // // //           id: it.cart_id || it.id || it.item_id, // React key
// // // // //           item_id: it.item_id, // Product ID
// // // // //           name: it.name,
// // // // //           price: Number(it.price),
// // // // //           quantity: Number(it.quantity),
// // // // //         }));
// // // // //         setCart(normalized);
// // // // //         setShowCart(normalized.length > 0);
// // // // //       }
// // // // //     } catch (err) {
// // // // //       console.error("❌ Failed to load cart:", err);
// // // // //     }
// // // // //   };

// // // // //   // Add item to cart
// // // // //   const addToCart = async (item) => {
// // // // //     if (!localStorage.getItem("token")) {
// // // // //       setShowAuth(true);
// // // // //       return;
// // // // //     }
// // // // //     try {
// // // // //       await API("/cart/add", {
// // // // //         method: "POST",
// // // // //         headers: { "Content-Type": "application/json" },
// // // // //         body: JSON.stringify({ item_id: item.id, quantity: 1 }),
// // // // //       });
// // // // //       await loadCart();
// // // // //     } catch (err) {
// // // // //       console.error("❌ Add to cart error:", err);
// // // // //     }
// // // // //   };

// // // // //   // Increase quantity for a single item
// // // // //   const increaseQty = async (item) => {
// // // // //     try {
// // // // //       await API("/cart/add", {
// // // // //         method: "POST",
// // // // //         headers: { "Content-Type": "application/json" },
// // // // //         body: JSON.stringify({ item_id: item.item_id, quantity: 1 }),
// // // // //       });
// // // // //       await loadCart();
// // // // //     } catch (err) {
// // // // //       console.error("❌ Increase quantity failed:", err);
// // // // //     }
// // // // //   };

// // // // //   // Decrease quantity for a single item
// // // // //   const decreaseQty = async (item) => {
// // // // //     try {
// // // // //       if (item.quantity <= 1) {
// // // // //         await API("/cart/remove", {
// // // // //           method: "POST",
// // // // //           headers: { "Content-Type": "application/json" },
// // // // //           body: JSON.stringify({ item_id: item.item_id }),
// // // // //         });
// // // // //       } else {
// // // // //         await API("/cart/add", {
// // // // //           method: "POST",
// // // // //           headers: { "Content-Type": "application/json" },
// // // // //           body: JSON.stringify({ item_id: item.item_id, quantity: -1 }),
// // // // //         });
// // // // //       }
// // // // //       await loadCart();
// // // // //     } catch (err) {
// // // // //       console.error("❌ Decrease quantity failed:", err);
// // // // //     }
// // // // //   };

// // // // //   // Checkout (clear cart)
// // // // //   const checkout = async () => {
// // // // //     try {
// // // // //       await API("/cart/checkout", { method: "POST" });
// // // // //       alert("✅ Order placed successfully!");
// // // // //       setCart([]);
// // // // //       setShowCart(false);
// // // // //     } catch (err)
// // // // //      { console.error("❌ Checkout failed:", err);
// // // // //     }
// // // // //   };

// // // // //   // Filter menu items by search & category
// // // // //   useEffect(() => {
// // // // //     let list = [...items];
// // // // //     if (selectedCategory !== "All") {
// // // // //       list = list.filter((i) => i.category === selectedCategory);
// // // // //     }
// // // // //     if (search.trim()) {
// // // // //       list = list.filter((i) =>
// // // // //         i.name.toLowerCase().includes(search.toLowerCase())
// // // // //       );
// // // // //     }
// // // // //     setFilteredItems(list);
// // // // //   }, [search, selectedCategory, items]);

// // // // //   // Calculate total correctly
// // // // //   const total = cart.reduce(
// // // // //     (sum, item) => sum + (Number(item.price) || 0) * (Number(item.quantity) || 0),
// // // // //     0
// // // // //   );

// // // // //   // JSX
// // // // //   return (
// // // // //     <div className={`split-layout ${showCart ? "" : "full-width"}`}>
// // // // //       {/* LEFT: MENU */}
// // // // //       <div className="menu-section">
// // // // //         <h2>Menu</h2>

// // // // //         {/* 🔍 Search Bar */}
// // // // //         <input
// // // // //           type="text"
// // // // //           placeholder="Search for dishes..."
// // // // //           value={search}
// // // // //           onChange={(e) => setSearch(e.target.value)}
// // // // //           className="search-bar"
// // // // //         />

// // // // //         {/* 🍽 Categories */}
// // // // //         <div className="categories">
// // // // //           {categories.map((cat) => (
// // // // //             <button
// // // // //               key={cat}
// // // // //               className={`cat-btn ${selectedCategory === cat ? "active" : ""}`}
// // // // //               onClick={() => setSelectedCategory(cat)}
// // // // //             >
// // // // //               {cat}
// // // // //             </button>
// // // // //           ))}
// // // // //         </div>

// // // // //         {/* 🍲 Menu Grid */}
// // // // //         <div className="grid">
// // // // //           {filteredItems.map((it) => (
// // // // //             <div key={it.id} className="card">
// // // // //               <h4>{it.name}</h4>
// // // // //               <p>{it.description}</p>
// // // // //               <div>₹{it.price}</div>
// // // // //               <button className="button" onClick={() => addToCart(it)}>
// // // // //                 Add to Cart
// // // // //               </button>
// // // // //             </div>
// // // // //           ))}
// // // // //           {filteredItems.length === 0 && <p>No items found.</p>}
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* RIGHT: CART */}
// // // // //       {showCart && (
// // // // //         <div className="cart-section">
// // // // //           <h2>Your Cart</h2>
// // // // //           {cart.length > 0 ? (
// // // // //             <>
// // // // //               {cart.map((it) => (
// // // // //                 <div key={it.id} className="cart-item">
// // // // //                   <div className="cart-info">
// // // // //                     <b>{it.name}</b>
// // // // //                   </div>
// // // // //                   <div className="cart-actions">
// // // // //                     <button onClick={() => decreaseQty(it)}>-</button>
// // // // //                     <span>{it.quantity}</span>
// // // // //                     <button onClick={() => increaseQty(it)}>+</button>
// // // // //                   </div>
// // // // //                   <div className="cart-price">
// // // // //                     ₹{(it.price * it.quantity).toFixed(2)}
// // // // //                   </div>
// // // // //                 </div>
// // // // //               ))}

// // // // //               <div className="cart-total">
// // // // //                 <h3>Total: ₹{total.toFixed(2)}</h3>
// // // // //                 <button className="button" onClick={checkout}>
// // // // //                   Checkout
// // // // //                 </button>
// // // // //               </div>
// // // // //             </>
// // // // //           ) : (
// // // // //             <p>Your cart is empty.</p>
// // // // //           )}
// // // // //         </div>
// // // // //       )}

// // // // //       {/* 🔐 Login Modal */}
// // // // //       {showAuth && (
// // // // //         <AuthModal onClose={() => setShowAuth(false)} onLogin={onLogin} />
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // import React, { useEffect, useState } from "react";
// // // // import API from "../api";
// // // // import AuthModal from "../parts/AuthModal";
// // // // import "./Home.css";

// // // // export default function Home({ token, onLogin }) {
// // // //   const [items, setItems] = useState([]);
// // // //   const [filteredItems, setFilteredItems] = useState([]);
// // // //   const [cart, setCart] = useState([]);
// // // //   const [showAuth, setShowAuth] = useState(false);
// // // //   const [showCart, setShowCart] = useState(false);
// // // //   const [search, setSearch] = useState("");
// // // //   const [selectedCategory, setSelectedCategory] = useState("All");

// // // //   const categories = [
// // // //     "All",
// // // //     "Rice",
// // // //     "Roti",
// // // //     "Pizza",
// // // //     "Burger",
// // // //     "Cold Drink",
// // // //     "Dessert",
// // // //     "Snacks",
// // // //   ];

// // // //   // Load menu + cart initially
// // // //   useEffect(() => {
// // // //     loadMenu();
// // // //     // Only load cart if a token exists
// // // //     if (localStorage.getItem("token")) {
// // // //       loadCart();
// // // //     }
// // // //   }, []);

// // // //   // Fetch menu items
// // // //   const loadMenu = async () => {
// // // //     try {
// // // //       console.log("🍽 Fetching menu...");
// // // //       const data = await API("/items");
// // // //       setItems(data || []);
// // // //       setFilteredItems(data || []);
// // // //     } catch (err) {
// // // //       console.error("❌ Failed to load menu:", err);
// // // //     }
// // // //   };

// // // //   // Fetch cart items
// // // //   const loadCart = async () => {
// // // //     try {
// // // //       const res = await API("/cart", {
// // // //         headers: {
// // // //           Authorization: `Bearer ${localStorage.getItem("token")}`,
// // // //         },
// // // //       });
      
// // // //       if (res.items) {
// // // //         // Normalize and ensure unique keys
// // // //         const normalized = res.items.map((it) => ({
// // // //           id: it.cart_id || it.id || it.item_id, // React key
// // // //           item_id: it.item_id, // Product ID
// // // //           name: it.name,
// // // //           price: Number(it.price),
// // // //           quantity: Number(it.quantity),
// // // //         }));
// // // //         setCart(normalized);
// // // //         setShowCart(normalized.length > 0);
// // // //       }
// // // //     } catch (err) {
// // // //       console.error("❌ Failed to load cart:", err);
// // // //     }
// // // //   };

// // // //   // Add item to cart
// // // //   const addToCart = async (item) => {
// // // //     const token = localStorage.getItem("token");
// // // //     if (!token) {
// // // //       setShowAuth(true);
// // // //       return;
// // // //     }
// // // //     try {
// // // //       await API("/cart/add", {
// // // //         method: "POST",
// // // //         headers: {
// // // //           "Content-Type": "application/json",
// // // //           Authorization: `Bearer ${token}`, // Pass token
// // // //         },
// // // //         body: JSON.stringify({ item_id: item.id, quantity: 1 }),
// // // //       });
// // // //       await loadCart();
// // // //     } catch (err) {
// // // //       console.error("❌ Add to cart error:", err);
// // // //     }
// // // //   };

// // // //   // Increase quantity for a single item
// // // //   const increaseQty = async (item) => {
// // // //     const token = localStorage.getItem("token");
// // // //     if (!token) return; // Should not happen if cart is visible, but good check
    
// // // //     try {
// // // //       await API("/cart/add", {
// // // //         method: "POST",
// // // //         headers: {
// // // //           "Content-Type": "application/json",
// // // //           Authorization: `Bearer ${token}`, // ✅ **FIX: Added token**
// // // //         },
// // // //         body: JSON.stringify({ item_id: item.item_id, quantity: 1 }),
// // // //       });
// // // //       await loadCart();
// // // //     } catch (err) {
// // // //       console.error("❌ Increase quantity failed:", err);
// // // //     }
// // // //   };

// // // //   // Decrease quantity for a single item
// // // //   const decreaseQty = async (item) => {
// // // //     const token = localStorage.getItem("token");
// // // //     if (!token) return;

// // // //     try {
// // // //       if (item.quantity <= 1) {
// // // //         // Remove item if quantity is 1
// // // //         await API("/cart/remove", {
// // // //           method: "POST",
// // // //           headers: {
// // // //             "Content-Type": "application/json",
// // // //             Authorization: `Bearer ${token}`, // ✅ **FIX: Added token**
// // // //           },
// // // //           body: JSON.stringify({ item_id: item.item_id }),
// // // //         });
// // // //       } else {
// // // //         // Otherwise, just decrease quantity by 1
// // // //         await API("/cart/add", {
// // // //           method: "POST",
// // // //           headers: {
// // // //             "Content-Type": "application/json",
// // // //             Authorization: `Bearer ${token}`, // ✅ **FIX: Added token**
// // // //           },
// // // //           body: JSON.stringify({ item_id: item.item_id, quantity: -1 }),
// // // //         });
// // // //       }
// // // //       await loadCart();
// // // //     } catch (err) {
// // // //       console.error("❌ Decrease quantity failed:", err);
// // // //     }
// // // //   };

// // // //   // Checkout (clear cart)
// // // //   const checkout = async () => {
// // // //     try {
// // // //       await API("/cart/checkout", {
// // // //         method: "POST",
// // // //         headers: {
// // // //           Authorization: `Bearer ${localStorage.getItem("token")}`,
// // // //         },
// // // //       });
// // // //       alert("✅ Order placed successfully!");
// // // //       setCart([]);
// // // //       setShowCart(false);
// // // //     } catch (err) {
// // // //       console.error("❌ Checkout failed:", err);
// // // //     }
// // // //   };

// // // //   // Filter menu items by search & category
// // // //   useEffect(() => {
// // // //     let list = [...items];
// // // //     if (selectedCategory !== "All") {
// // // //       list = list.filter((i) => i.category === selectedCategory);
// // // //     }
// // // //     if (search.trim()) {
// // // //       list = list.filter((i) =>
// // // //         i.name.toLowerCase().includes(search.toLowerCase())
// // // //       );
// // // //     }
// // // //     setFilteredItems(list);
// // // //   }, [search, selectedCategory, items]);

// // // //   // Calculate total correctly
// // // //   const total = cart.reduce(
// // // //     (sum, item) => sum + (Number(item.price) || 0) * (Number(item.quantity) || 0),
// // // //     0
// // // //   );

// // // //   // JSX
// // // //   return (
// // // //     <div className={`split-layout ${showCart ? "" : "full-width"}`}>
// // // //       {/* LEFT: MENU */}
// // // //       <div className="menu-section">
// // // //         <h2>Menu</h2>

// // // //         {/* 🔍 Search Bar */}
// // // //         <input
// // // //           type="text"
// // // //           placeholder="Search for dishes..."
// // // //           value={search}
// // // //           onChange={(e) => setSearch(e.target.value)}
// // // //           className="search-bar"
// // // //         />

// // // //         {/* 🍽 Categories */}
// // // //         <div className="categories">
// // // //           {categories.map((cat) => (
// // // //             <button
// // // //               key={cat}
// // // //               className={`cat-btn ${selectedCategory === cat ? "active" : ""}`}
// // // //               onClick={() => setSelectedCategory(cat)}
// // // //             >
// // // //               {cat}
// // // //             </button>
// // // //           ))}
// // // //         </div>

// // // //         {/* 🍲 Menu Grid */}
// // // //         <div className="grid">
// // // //           {filteredItems.map((it) => (
// // // //             <div key={it.id} className="card">
// // // //               <h4>{it.name}</h4>
// // // //               <p>{it.description}</p>
// // // //               <div>₹{it.price}</div>
// // // //               <button className="button" onClick={() => addToCart(it)}>
// // // //                 Add to Cart
// // // //               </button>
// // // //             </div>
// // // //           ))}
// // // //           {filteredItems.length === 0 && <p>No items found.</p>}
// // // //         </div>
// // // //       </div>

// // // //       {/* RIGHT: CART */}
// // // //       {showCart && (
// // // //         <div className="cart-section">
// // // //           <h2>Your Cart</h2>
// // // //           {cart.length > 0 ? (
// // // //             <>
// // // //               {cart.map((it) => (
// // // //                 <div key={it.id} className="cart-item">
// // // //                   <div className="cart-info">
// // // //                     <b>{it.name}</b>
// // // //                   </div>
// // // //                   <div className="cart-actions">
// // // //                     <button onClick={() => decreaseQty(it)}>-</button>
// // // //                     <span>{it.quantity}</span>
// // // //                     <button onClick={() => increaseQty(it)}>+</button>
// // // //                   </div>
// // // //                   <div className="cart-price">
// // // //                     ₹{(it.price * it.quantity).toFixed(2)}
// // // //                   </div>
// // // //                 </div>
// // // //               ))}

// // // //               <div className="cart-total">
// // // //                 <h3>Total: ₹{total.toFixed(2)}</h3>
// // // //                 <button className="button" onClick={checkout}>
// // // //                   Checkout
// // // //                 </button>
// // // //               </div>
// // // //             </>
// // // //           ) : (
// // // //             <p>Your cart is empty.</p>
// // // //           )}
// // // //         </div>
// // // //       )}

// // // //       {/* 🔐 Login Modal */}
// // // //       {showAuth && (
// // // //         <AuthModal onClose={() => setShowAuth(false)} onLogin={onLogin} />
// // // //       )}
// // // //     </div>
// // // //   );
// // // // }
// // // import React, { useEffect, useState } from "react";
// // // import API from "../api";
// // // import AuthModal from "../parts/AuthModal";
// // // import "./Home.css";

// // // export default function Home({ token, onLogin }) {
// // //   const [items, setItems] = useState([]);
// // //   const [filteredItems, setFilteredItems] = useState([]);
// // //   const [cart, setCart] = useState([]);
// // //   const [showAuth, setShowAuth] = useState(false);
// // //   const [showCart, setShowCart] = useState(false);
// // //   const [search, setSearch] = useState("");
// // //   const [selectedCategory, setSelectedCategory] = useState("All");

// // //   const categories = [
// // //     "All",
// // //     "Rice",
// // //     "Roti",
// // //     "Pizza",
// // //     "Burger",
// // //     "Cold Drink",
// // //     "Dessert",
// // //     "Snacks",
// // //   ];

// // //   // 🧩 Load menu + cart initially
// // //   useEffect(() => {
// // //     loadMenu();
// // //     if (localStorage.getItem("token")) loadCart();
// // //   }, []);

// // //   // 🍽 Fetch menu
// // //   const loadMenu = async () => {
// // //     try {
// // //       console.log("🍽 Fetching menu...");
// // //       const data = await API("/items");
// // //       setItems(data || []);
// // //       setFilteredItems(data || []);
// // //     } catch (err) {
// // //       console.error("❌ Failed to load menu:", err);
// // //     }
// // //   };

// // //   // 🛒 Fetch cart
// // //   const loadCart = async () => {
// // //     try {
// // //       const res = await API("/cart", {
// // //         headers: {
// // //           Authorization: `Bearer ${localStorage.getItem("token")}`,
// // //         },
// // //       });

// // //       const list = res.items || res.cart || [];
// // //       const normalized = list.map((it) => ({
// // //         id: it.cart_id || it.id || it.item_id,
// // //         item_id: it.item_id || it.id,
// // //         name: it.name,
// // //         price: Number(it.price),
// // //         quantity: Number(it.quantity),
// // //       }));

// // //       setCart(normalized);
// // //       setShowCart(normalized.length > 0);
// // //     } catch (err) {
// // //       console.error("❌ Failed to load cart:", err);
// // //     }
// // //   };

// // //   // ➕ Add to cart
// // //   const addToCart = async (item) => {
// // //     const token = localStorage.getItem("token");
// // //     if (!token) {
// // //       setShowAuth(true);
// // //       return;
// // //     }

// // //     const itemId = item.item_id || item.id;
// // //     console.log("🛒 Adding:", itemId, item.name);

// // //     // Optimistic UI update
// // //     setCart((prev) => {
// // //       const exists = prev.find((c) => c.item_id === itemId);
// // //       if (exists) {
// // //         return prev.map((c) =>
// // //           c.item_id === itemId ? { ...c, quantity: c.quantity + 1 } : c
// // //         );
// // //       } else {
// // //         return [...prev, { ...item, item_id: itemId, quantity: 1 }];
// // //       }
// // //     });
// // //     setShowCart(true);

// // //     try {
// // //       await API("/cart/add", {
// // //         method: "POST",
// // //         headers: {
// // //           "Content-Type": "application/json",
// // //           Authorization: `Bearer ${token}`,
// // //         },
// // //         body: JSON.stringify({ item_id: itemId, quantity: 1 }),
// // //       });
// // //     } catch (err) {
// // //       console.error("❌ Add to cart failed:", err);
// // //       alert("Failed to add item. Check console.");
// // //     }
// // //   };

// // //   // ➕ Increase quantity
// // //   const increaseQty = async (item) => {
// // //     const token = localStorage.getItem("token");
// // //     if (!token) return;

// // //     const itemId = item.item_id || item.id;
// // //     console.log("🟢 Increasing:", itemId, item.name);

// // //     // Update instantly
// // //     setCart((prev) =>
// // //       prev.map((c) =>
// // //         c.item_id === itemId ? { ...c, quantity: c.quantity + 1 } : c
// // //       )
// // //     );

// // //     try {
// // //       await API("/cart/add", {
// // //         method: "POST",
// // //         headers: {
// // //           "Content-Type": "application/json",
// // //           Authorization: `Bearer ${token}`,
// // //         },
// // //         body: JSON.stringify({ item_id: itemId, quantity: 1 }),
// // //       });
// // //     } catch (err) {
// // //       console.error("❌ Increase quantity failed:", err);
// // //     }
// // //   };

// // //   // ➖ Decrease quantity or remove if 0
// // //   const decreaseQty = async (item) => {
// // //     const token = localStorage.getItem("token");
// // //     if (!token) return;

// // //     const itemId = item.item_id || item.id;
// // //     console.log("🔻 Decreasing:", itemId, item.name);

// // //     if (item.quantity <= 1) {
// // //       // Remove item visually
// // //       setCart((prev) => prev.filter((c) => c.item_id !== itemId));

// // //       try {
// // //         await API("/cart/remove", {
// // //           method: "POST",
// // //           headers: {
// // //             "Content-Type": "application/json",
// // //             Authorization: `Bearer ${token}`,
// // //           },
// // //           body: JSON.stringify({ item_id: itemId }),
// // //         });
// // //       } catch (err) {
// // //         console.error("❌ Remove failed:", err);
// // //       }
// // //     } else {
// // //       // Decrease quantity
// // //       setCart((prev) =>
// // //         prev.map((c) =>
// // //           c.item_id === itemId ? { ...c, quantity: c.quantity - 1 } : c
// // //         )
// // //       );

// // //       try {
// // //         await API("/cart/add", {
// // //           method: "POST",
// // //           headers: {
// // //             "Content-Type": "application/json",
// // //             Authorization: `Bearer ${token}`,
// // //           },
// // //           body: JSON.stringify({ item_id: itemId, quantity: -1 }),
// // //         });
// // //       } catch (err) {
// // //         console.error("❌ Decrease failed:", err);
// // //       }
// // //     }
// // //   };

// // //   // 💳 Checkout
// // //   const checkout = async () => {
// // //     try {
// // //       await API("/cart/checkout", {
// // //         method: "POST",
// // //         headers: {
// // //           Authorization: `Bearer ${localStorage.getItem("token")}`,
// // //         },
// // //       });
// // //       alert("✅ Order placed successfully!");
// // //       setCart([]);
// // //       setShowCart(false);
// // //     } catch (err) {
// // //       console.error("❌ Checkout failed:", err);
// // //     }
// // //   };

// // //   // 🔍 Filter by category & search
// // //   useEffect(() => {
// // //     let list = [...items];
// // //     if (selectedCategory !== "All") {
// // //       list = list.filter((i) => i.category === selectedCategory);
// // //     }
// // //     if (search.trim()) {
// // //       list = list.filter((i) =>
// // //         i.name.toLowerCase().includes(search.toLowerCase())
// // //       );
// // //     }
// // //     setFilteredItems(list);
// // //   }, [search, selectedCategory, items]);

// // //   // 💰 Total
// // //   const total = cart.reduce(
// // //     (sum, i) => sum + (Number(i.price) || 0) * (Number(i.quantity) || 0),
// // //     0
// // //   );

// // //   return (
// // //     <div className={`split-layout ${showCart ? "" : "full-width"}`}>
// // //       {/* LEFT: MENU */}
// // //       <div className="menu-section">
// // //         <h2>Menu</h2>

// // //         {/* Search Bar */}
// // //         <input
// // //           type="text"
// // //           placeholder="Search for dishes..."
// // //           value={search}
// // //           onChange={(e) => setSearch(e.target.value)}
// // //           className="search-bar"
// // //         />

// // //         {/* Categories */}
// // //         <div className="categories">
// // //           {categories.map((cat) => (
// // //             <button
// // //               key={cat}
// // //               className={`cat-btn ${selectedCategory === cat ? "active" : ""}`}
// // //               onClick={() => setSelectedCategory(cat)}
// // //             >
// // //               {cat}
// // //             </button>
// // //           ))}
// // //         </div>

// // //         {/* Menu Items */}
// // //         <div className="grid">
// // //           {filteredItems.map((it) => (
// // //             <div key={it.id} className="card">
// // //               <h4>{it.name}</h4>
// // //               <p>{it.description}</p>
// // //               <div>₹{it.price}</div>
// // //               <button className="button" onClick={() => addToCart(it)}>
// // //                 Add to Cart
// // //               </button>
// // //             </div>
// // //           ))}
// // //           {filteredItems.length === 0 && <p>No items found.</p>}
// // //         </div>
// // //       </div>

// // //       {/* RIGHT: CART */}
// // //       {showCart && (
// // //         <div className="cart-section">
// // //           <h2>Your Cart</h2>
// // //           {cart.length > 0 ? (
// // //             <>
// // //               {cart.map((it) => (
// // //                 <div key={it.item_id} className="cart-item">
// // //                   <div>
// // //                     <b>{it.name}</b>
// // //                   </div>
// // //                   <div className="cart-actions">
// // //                     <button onClick={() => decreaseQty(it)}>-</button>
// // //                     <span>{it.quantity}</span>
// // //                     <button onClick={() => increaseQty(it)}>+</button>
// // //                   </div>
// // //                   <div className="cart-price">
// // //                     ₹{(it.price * it.quantity).toFixed(2)}
// // //                   </div>
// // //                 </div>
// // //               ))}

// // //               <div className="cart-total">
// // //                 <h3>Total: ₹{total.toFixed(2)}</h3>
// // //                 <button className="button" onClick={checkout}>
// // //                   Checkout
// // //                 </button>
// // //               </div>
// // //             </>
// // //           ) : (
// // //             <p>Your cart is empty.</p>
// // //           )}
// // //         </div>
// // //       )}

// // //       {/* Auth Modal */}
// // //       {showAuth && (
// // //         <AuthModal onClose={() => setShowAuth(false)} onLogin={onLogin} />
// // //       )}
// // //     </div>
// // //   );
// // // }
// // import React, { useEffect, useState } from "react";
// // import API from "../api";
// // import AuthModal from "../parts/AuthModal";
// // import "./Home.css";

// // export default function Home({ token, onLogin }) {
// //   const [items, setItems] = useState([]);
// //   const [filteredItems, setFilteredItems] = useState([]);
// //   const [cart, setCart] = useState([]);
// //   const [showAuth, setShowAuth] = useState(false);
// //   const [showCart, setShowCart] = useState(false);
// //   const [search, setSearch] = useState("");
// //   const [selectedCategory, setSelectedCategory] = useState("All");

// //   const categories = [
// //     "All",
// //     "Rice",
// //     "Roti",
// //     "Pizza",
// //     "Burger",
// //     "Cold Drink",
// //     "Dessert",
// //     "Snacks",
// //   ];

// //   // Load menu + cart initially
// //   useEffect(() => {
// //     loadMenu();
// //     if (localStorage.getItem("token")) loadCart();
// //   }, []);

// //   // Fetch menu
// //   const loadMenu = async () => {
// //     try {
// //       const data = await API("/items");
// //       setItems(data || []);
// //       setFilteredItems(data || []);
// //     } catch (err) {
// //       console.error("❌ Failed to load menu:", err);
// //     }
// //   };

// //   // Fetch cart
// //   const loadCart = async () => {
// //     try {
// //       const res = await API("/cart", {
// //         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
// //       });
// //       const list = res.items || res.cart || [];
// //       const normalized = list.map((it) => ({
// //         id: it.cart_id || it.id || it.item_id,
// //         item_id: it.item_id || it.id,
// //         name: it.name,
// //         price: Number(it.price),
// //         quantity: Number(it.quantity),
// //       }));
// //       setCart(normalized);
// //       setShowCart(normalized.length > 0);
// //     } catch (err) {
// //       console.error("❌ Failed to load cart:", err);
// //     }
// //   };

// //   // ➕ Add to cart (smart add)
// //   const addToCart = async (item) => {
// //     const token = localStorage.getItem("token");
// //     if (!token) {
// //       setShowAuth(true);
// //       return;
// //     }

// //     const itemId = item.item_id || item.id;
// //     console.log("🛒 Add/Increase:", itemId, item.name);

// //     // ✅ Optimistic update: increase if exists, else add
// //     setCart((prev) => {
// //       const existing = prev.find((c) => c.item_id === itemId);
// //       if (existing) {
// //         return prev.map((c) =>
// //           c.item_id === itemId ? { ...c, quantity: c.quantity + 1 } : c
// //         );
// //       } else {
// //         return [...prev, { ...item, item_id: itemId, quantity: 1 }];
// //       }
// //     });
// //     setShowCart(true);

// //     try {
// //       await API("/cart/add", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //           Authorization: `Bearer ${token}`,
// //         },
// //         body: JSON.stringify({ item_id: itemId, quantity: 1 }),
// //       });
// //     } catch (err) {
// //       console.error("❌ Add to cart failed:", err);
// //     }
// //   };

// //   // Increase quantity
// //   const increaseQty = async (item) => {
// //     const token = localStorage.getItem("token");
// //     if (!token) return;
// //     const itemId = item.item_id || item.id;

// //     setCart((prev) =>
// //       prev.map((c) =>
// //         c.item_id === itemId ? { ...c, quantity: c.quantity + 1 } : c
// //       )
// //     );

// //     try {
// //       await API("/cart/add", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //           Authorization: `Bearer ${token}`,
// //         },
// //         body: JSON.stringify({ item_id: itemId, quantity: 1 }),
// //       });
// //     } catch (err) {
// //       console.error("❌ Increase quantity failed:", err);
// //     }
// //   };

// //   // Decrease quantity or remove
// //   const decreaseQty = async (item) => {
// //     const token = localStorage.getItem("token");
// //     if (!token) return;
// //     const itemId = item.item_id || item.id;

// //     if (item.quantity <= 1) {
// //       // Remove item
// //       setCart((prev) => prev.filter((c) => c.item_id !== itemId));

// //       try {
// //         await API("/cart/remove", {
// //           method: "POST",
// //           headers: {
// //             "Content-Type": "application/json",
// //             Authorization: `Bearer ${token}`,
// //           },
// //           body: JSON.stringify({ item_id: itemId }),
// //         });
// //       } catch (err) {
// //         console.error("❌ Remove failed:", err);
// //       }
// //     } else {
// //       // Decrease quantity
// //       setCart((prev) =>
// //         prev.map((c) =>
// //           c.item_id === itemId ? { ...c, quantity: c.quantity - 1 } : c
// //         )
// //       );

// //       try {
// //         await API("/cart/add", {
// //           method: "POST",
// //           headers: {
// //             "Content-Type": "application/json",
// //             Authorization: `Bearer ${token}`,
// //           },
// //           body: JSON.stringify({ item_id: itemId, quantity: -1 }),
// //         });
// //       } catch (err) {
// //         console.error("❌ Decrease failed:", err);
// //       }
// //     }
// //   };

// //   // Checkout
// //   const checkout = async () => {
// //     try {
// //       await API("/cart/checkout", {
// //         method: "POST",
// //         headers: {
// //           Authorization: `Bearer ${localStorage.getItem("token")}`,
// //         },
// //       });
// //       alert("✅ Order placed successfully!");
// //       setCart([]);
// //       setShowCart(false);
// //     } catch (err) {
// //       console.error("❌ Checkout failed:", err);
// //     }
// //   };

// //   // Filter menu items
// //   useEffect(() => {
// //     let list = [...items];
// //     if (selectedCategory !== "All") {
// //       list = list.filter((i) => i.category === selectedCategory);
// //     }
// //     if (search.trim()) {
// //       list = list.filter((i) =>
// //         i.name.toLowerCase().includes(search.toLowerCase())
// //       );
// //     }
// //     setFilteredItems(list);
// //   }, [search, selectedCategory, items]);

// //   // Total
// //   const total = cart.reduce(
// //     (sum, i) => sum + (Number(i.price) || 0) * (Number(i.quantity) || 0),
// //     0
// //   );

// //   return (
// //     <div className={`split-layout ${showCart ? "" : "full-width"}`}>
// //       {/* LEFT: MENU */}
// //       <div className="menu-section">
// //         <h2>Menu</h2>

// //         {/* Search */}
// //         <input
// //           type="text"
// //           placeholder="Search for dishes..."
// //           value={search}
// //           onChange={(e) => setSearch(e.target.value)}
// //           className="search-bar"
// //         />

// //         {/* Categories */}
// //         <div className="categories">
// //           {categories.map((cat) => (
// //             <button
// //               key={cat}
// //               className={`cat-btn ${selectedCategory === cat ? "active" : ""}`}
// //               onClick={() => setSelectedCategory(cat)}
// //             >
// //               {cat}
// //             </button>
// //           ))}
// //         </div>

// //         {/* Menu Grid */}
// //         <div className="grid">
// //           {filteredItems.map((it) => (
// //             <div key={it.id} className="card">
// //               <h4>{it.name}</h4>
// //               <p>{it.description}</p>
// //               <div>₹{it.price}</div>
// //               <button className="button" onClick={() => addToCart(it)}>
// //                 Add to Cart
// //               </button>
// //             </div>
// //           ))}
// //           {filteredItems.length === 0 && <p>No items found.</p>}
// //         </div>
// //       </div>

// //       {/* RIGHT: CART */}
// //       {showCart && (
// //         <div className="cart-section">
// //           <h2>Your Cart</h2>
// //           {cart.length > 0 ? (
// //             <>
// //               {cart.map((it) => (
// //                 <div key={it.item_id} className="cart-item">
// //                   <div>
// //                     <b>{it.name}</b>
// //                   </div>
// //                   <div className="cart-actions">
// //                     <button onClick={() => decreaseQty(it)}>-</button>
// //                     <span>{it.quantity}</span>
// //                     <button onClick={() => increaseQty(it)}>+</button>
// //                   </div>
// //                   <div className="cart-price">
// //                     ₹{(it.price * it.quantity).toFixed(2)}
// //                   </div>
// //                 </div>
// //               ))}
// //               <div className="cart-total">
// //                 <h3>Total: ₹{total.toFixed(2)}</h3>
// //                 <button className="button" onClick={checkout}>
// //                   Checkout
// //                 </button>
// //               </div>
// //             </>
// //           ) : (
// //             <p>Your cart is empty.</p>
// //           )}
// //         </div>
// //       )}

// //       {/* Auth Modal */}
// //       {showAuth && (
// //         <AuthModal onClose={() => setShowAuth(false)} onLogin={onLogin} />
// //       )}
// //     </div>
// //   );
// // }

// import React, { useEffect, useState } from "react";
// import API from "../api";
// import AuthModal from "../parts/AuthModal";
// import "./Home.css";

// export default function Home({ token, onLogin }) {
//   const [items, setItems] = useState([]);
//   const [filteredItems, setFilteredItems] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [showAuth, setShowAuth] = useState(false);
//   const [showCart, setShowCart] = useState(false);
//   const [search, setSearch] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const categories = [
//     "All",
//     "Rice",
//     "Roti",
//     "Pizza",
//     "Burger",
//     "Cold Drink",
//     "Dessert",
//     "Snacks",
//   ];

//   // Load menu and cart
//   useEffect(() => {
//     loadMenu();
//     if (localStorage.getItem("token")) loadCart();
//   }, []);

//   // 🍽 Load Menu
//   const loadMenu = async () => {
//     try {
//       const data = await API("/items");
//       setItems(data || []);
//       setFilteredItems(data || []);
//     } catch (err) {
//       console.error("❌ Failed to load menu:", err);
//     }
//   };

//   // 🛒 Load Cart
//   const loadCart = async () => {
//     try {
//       const res = await API("/cart", {
//         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//       });

//       const list = res.items || res.cart || [];
//       const normalized = list.map((it) => ({
//         id: Number(it.cart_id || it.id || it.item_id),
//         item_id: Number(it.item_id || it.id),
//         name: it.name,
//         price: Number(it.price),
//         quantity: Number(it.quantity),
//       }));

//       setCart(normalized);
//       setShowCart(normalized.length > 0);
//     } catch (err) {
//       console.error("❌ Failed to load cart:", err);
//     }
//   };

//   // ✅ Add or Increase Cart Item
//   const addToCart = async (item) => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       setShowAuth(true);
//       return;
//     }

//     const itemId = Number(item.item_id || item.id);
//     console.log("🛒 Adding/Increasing item:", itemId, item.name);

//     // ✅ Check if item already exists in cart
//     const exists = cart.find((c) => Number(c.item_id) === itemId);

//     if (exists) {
//       // If it exists, just increase its quantity
//       setCart((prev) =>
//         prev.map((c) =>
//           Number(c.item_id) === itemId
//             ? { ...c, quantity: c.quantity + 1 }
//             : c
//         )
//       );
//     } else {
//       // Otherwise, add new item
//       setCart((prev) => [
//         ...prev,
//         {
//           item_id: itemId,
//           name: item.name,
//           price: Number(item.price),
//           quantity: 1,
//         },
//       ]);
//     }

//     setShowCart(true);

//     // ✅ Sync with backend
//     try {
//       await API("/cart/add", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({ item_id: itemId, quantity: 1 }),
//       });
//     } catch (err) {
//       console.error("❌ Add to cart failed:", err);
//     }
//   };

//   // ➕ Increase Quantity
//   const increaseQty = async (item) => {
//     const token = localStorage.getItem("token");
//     if (!token) return;

//     const itemId = Number(item.item_id || item.id);
//     setCart((prev) =>
//       prev.map((c) =>
//         Number(c.item_id) === itemId
//           ? { ...c, quantity: c.quantity + 1 }
//           : c
//       )
//     );

//     try {
//       await API("/cart/add", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({ item_id: itemId, quantity: 1 }),
//       });
//     } catch (err) {
//       console.error("❌ Increase quantity failed:", err);
//     }
//   };

//   // ➖ Decrease Quantity
//   const decreaseQty = async (item) => {
//     const token = localStorage.getItem("token");
//     if (!token) return;

//     const itemId = Number(item.item_id || item.id);

//     if (item.quantity <= 1) {
//       // Remove item from UI
//       setCart((prev) => prev.filter((c) => Number(c.item_id) !== itemId));
//       try {
//         await API("/cart/remove", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify({ item_id: itemId }),
//         });
//       } catch (err) {
//         console.error("❌ Remove failed:", err);
//       }
//     } else {
//       // Just decrease locally
//       setCart((prev) =>
//         prev.map((c) =>
//           Number(c.item_id) === itemId
//             ? { ...c, quantity: c.quantity - 1 }
//             : c
//         )
//       );

//       try {
//         await API("/cart/add", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify({ item_id: itemId, quantity: -1 }),
//         });
//       } catch (err) {
//         console.error("❌ Decrease failed:", err);
//       }
//     }
//   };

//   // 💳 Checkout
//   const checkout = async () => {
//     try {
//       await API("/cart/checkout", {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       });
//       alert("✅ Order placed successfully!");
//       setCart([]);
//       setShowCart(false);
//     } catch (err) {
//       console.error("❌ Checkout failed:", err);
//     }
//   };

//   // 🔍 Filter
//   useEffect(() => {
//     let list = [...items];
//     if (selectedCategory !== "All") {
//       list = list.filter((i) => i.category === selectedCategory);
//     }
//     if (search.trim()) {
//       list = list.filter((i) =>
//         i.name.toLowerCase().includes(search.toLowerCase())
//       );
//     }
//     setFilteredItems(list);
//   }, [search, selectedCategory, items]);

//   const total = cart.reduce(
//     (sum, i) => sum + (Number(i.price) || 0) * (Number(i.quantity) || 0),
//     0
//   );

//   return (
//     <div className={`split-layout ${showCart ? "" : "full-width"}`}>
//       {/* LEFT: MENU */}
//       <div className="menu-section">
//         <h2>Menu</h2>

//         <input
//           type="text"
//           placeholder="Search for dishes..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="search-bar"
//         />

//         <div className="categories">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               className={`cat-btn ${selectedCategory === cat ? "active" : ""}`}
//               onClick={() => setSelectedCategory(cat)}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         <div className="grid">
//           {filteredItems.map((it) => (
//             <div key={it.id} className="card">
//               <h4>{it.name}</h4>
//               <p>{it.description}</p>
//               <div>₹{it.price}</div>
//               <button className="button" onClick={() => addToCart(it)}>
//                 Add to Cart
//               </button>
//             </div>
//           ))}
//           {filteredItems.length === 0 && <p>No items found.</p>}
//         </div>
//       </div>

//       {/* RIGHT: CART */}
//       {showCart && (
//         <div className="cart-section">
//           <h2>Your Cart</h2>
//           {cart.length > 0 ? (
//             <>
//               {cart.map((it) => (
//                 <div key={it.item_id} className="cart-item">
//                   <div>
//                     <b>{it.name}</b>
//                   </div>
//                   <div className="cart-actions">
//                     <button onClick={() => decreaseQty(it)}>-</button>
//                     <span>{it.quantity}</span>
//                     <button onClick={() => increaseQty(it)}>+</button>
//                   </div>
//                   <div className="cart-price">
//                     ₹{(it.price * it.quantity).toFixed(2)}
//                   </div>
//                 </div>
//               ))}
//               <div className="cart-total">
//                 <h3>Total: ₹{total.toFixed(2)}</h3>
//                 <button className="button" onClick={checkout}>
//                   Checkout
//                 </button>
//               </div>
//             </>
//           ) : (
//             <p>Your cart is empty.</p>
//           )}
//         </div>
//       )}

//       {/* Auth Modal */}
//       {showAuth && (
//         <AuthModal onClose={() => setShowAuth(false)} onLogin={onLogin} />
//       )}
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import API from "../api";
import AuthModal from "../parts/AuthModal";
import "./Home.css";

export default function Home({ token, onLogin }) {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [showAuth, setShowAuth] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All", "Rice", "Roti", "Pizza", "Burger", "Cold Drink", "Dessert", "Snacks"
  ];

  // Load menu + cart
  useEffect(() => {
    loadMenu();
    if (localStorage.getItem("token")) loadCart();
  }, []);

  // Fetch menu
  const loadMenu = async () => {
    try {
      const data = await API("/items");
      setItems(data || []);
      setFilteredItems(data || []);
    } catch (err) {
      console.error("❌ Failed to load menu:", err);
    }
  };

  // Fetch cart
  const loadCart = async () => {
    try {
      const res = await API("/cart", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      const list = res.items || res.cart || [];
      const normalized = list.map((it) => ({
        id: Number(it.cart_id || it.id || it.item_id),
        item_id: Number(it.item_id || it.id),
        name: it.name,
        price: Number(it.price),
        quantity: Number(it.quantity),
      }));
      setCart(normalized);
      setShowCart(normalized.length > 0);
    } catch (err) {
      console.error("❌ Failed to load cart:", err);
    }
  };

  // Add to cart (smart)
  const addToCart = async (item) => {
    const token = localStorage.getItem("token");
    if (!token) {
      setShowAuth(true);
      return;
    }

    const itemId = Number(item.item_id || item.id);
    const exists = cart.find((c) => Number(c.item_id) === itemId);

    // Optimistic update
    if (exists) {
      setCart((prev) =>
        prev.map((c) =>
          Number(c.item_id) === itemId
            ? { ...c, quantity: c.quantity + 1 }
            : c
        )
      );
    } else {
      setCart((prev) => [
        ...prev,
        { item_id: itemId, name: item.name, price: Number(item.price), quantity: 1 },
      ]);
    }
    setShowCart(true);

    // Backend sync
    try {
      await API("/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ item_id: itemId, quantity: 1 }),
      });
    } catch (err) {
      console.error("❌ Add to cart failed:", err);
    }
  };

  // Increase / Decrease / Remove
  const updateQty = async (item, change) => {
    const token = localStorage.getItem("token");
    if (!token) return;
    const itemId = Number(item.item_id || item.id);

    const newQty = item.quantity + change;

    if (newQty <= 0) {
      setCart((prev) => prev.filter((c) => Number(c.item_id) !== itemId));
      try {
        await API("/cart/remove", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ item_id: itemId }),
        });
      } catch (err) {
        console.error("❌ Remove failed:", err);
      }
    } else {
      setCart((prev) =>
        prev.map((c) =>
          Number(c.item_id) === itemId
            ? { ...c, quantity: newQty }
            : c
        )
      );

      try {
        await API("/cart/add", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ item_id: itemId, quantity: change }),
        });
      } catch (err) {
        console.error("❌ Update qty failed:", err);
      }
    }
  };

  const checkout = async () => {
    try {
      await API("/cart/checkout", {
        method: "POST",
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      alert("✅ Order placed successfully!");
      setCart([]);
      setShowCart(false);
    } catch (err) {
      console.error("❌ Checkout failed:", err);
    }
  };

  const total = cart.reduce(
    (sum, i) => sum + (Number(i.price) || 0) * (Number(i.quantity) || 0),
    0
  );

  // Filter menu
  useEffect(() => {
    let list = [...items];
    if (selectedCategory !== "All") {
      list = list.filter((i) => i.category === selectedCategory);
    }
    if (search.trim()) {
      list = list.filter((i) =>
        i.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    setFilteredItems(list);
  }, [search, selectedCategory, items]);

  return (
    <div className={`split-layout ${showCart ? "" : "full-width"}`}>
      {/* LEFT: MENU */}
      <div className="menu-section">
        <h2>Menu</h2>

        <input
          type="text"
          placeholder="Search for dishes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-bar"
        />

        <div className="categories">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`cat-btn ${selectedCategory === cat ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid">
          {filteredItems.map((it) => (
            <div key={it.id} className="card">
              <h4>{it.name}</h4>
              <p>{it.description}</p>
              <div>₹{it.price}</div>
              <button className="button" onClick={() => addToCart(it)}>
                Add to Cart
              </button>
            </div>
          ))}
          {filteredItems.length === 0 && <p>No items found.</p>}
        </div>
      </div>

      {/* RIGHT: CART (Scrollable) */}
      {showCart && (
        <div className="cart-section scrollable-cart">
          <h2>Your Cart</h2>
          {cart.length > 0 ? (
            <>
              <div className="cart-scroll-area">
                {cart.map((it) => (
                  <div key={it.item_id} className="cart-item">
                    <div className="cart-name"><b>{it.name}</b></div>
                    <div className="cart-actions">
                      <button onClick={() => updateQty(it, -1)}>-</button>
                      <span>{it.quantity}</span>
                      <button onClick={() => updateQty(it, 1)}>+</button>
                    </div>
                    <div className="cart-price">
                      ₹{(it.price * it.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="cart-total">
                <h3>Total: ₹{total.toFixed(2)}</h3>
                <button className="button" onClick={checkout}>
                  Checkout
                </button>
              </div>
            </>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
      )}

      {showAuth && <AuthModal onClose={() => setShowAuth(false)} onLogin={onLogin} />}
    </div>
  );
}
