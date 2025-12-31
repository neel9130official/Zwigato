// import React, { useEffect, useState } from 'react';
// import API from '../api';
// import './MiniCart.css';

// export default function MiniCart({ show, onClose }) {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     if (show) {
//       loadCart();
//     }
//   }, [show]);

//   const loadCart = async () => {
//     const res = await API('/cart');
//     if (res.items) setItems(res.items);
//   };

//   const total = items.reduce((t, i) => t + i.price * i.quantity, 0);

//   return (
//     <div className={`mini-cart ${show ? 'show' : ''}`}>
//       <div className="mini-cart-header">
//         <h3>Your Cart</h3>
//         <button onClick={onClose}>✕</button>
//       </div>
//       <div className="mini-cart-body">
//         {items.length ? (
//           items.map((it) => (
//             <div key={it.cart_item_id} className="mini-item">
//               <span>{it.name}</span>
//               <span>₹{it.price} × {it.quantity}</span>
//             </div>
//           ))
//         ) : (
//           <p>Your cart is empty.</p>
//         )}
//       </div>
//       <div className="mini-cart-footer">
//         <p>Total: <b>₹{total}</b></p>
//         <button onClick={() => window.location.reload()}>Go to Cart</button>
//       </div>
//     </div>
//   );
// }
// import React, { useEffect, useState } from 'react';
// import API from '../api';
// import './MiniCart.css';

// export default function MiniCart({ show, onClose, triggerReload }) {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     if (show) loadCart();
//   }, [show, triggerReload]); // re-fetch when triggered externally

//   const loadCart = async () => {
//     const res = await API('/cart');
//     if (res.items) setItems(res.items);
//   };

//   const total = items.reduce((t, i) => t + i.price * i.quantity, 0);

//   return (
//     <>
//       {/* Overlay */}
//       <div
//         className={`mini-cart-overlay ${show ? 'show' : ''}`}
//         onClick={onClose}
//       ></div>

//       {/* Sidebar */}
//       <div className={`mini-cart ${show ? 'show' : ''}`}>
//         <div className="mini-cart-header">
//           <h3>Your Cart</h3>
//           <button onClick={onClose}>✕</button>
//         </div>
//         <div className="mini-cart-body">
//           {items.length ? (
//             items.map((it) => (
//               <div key={it.cart_item_id} className="mini-item">
//                 <span>{it.name}</span>
//                 <span>
//                   ₹{it.price} × {it.quantity}
//                 </span>
//               </div>
//             ))
//           ) : (
//             <p>Your cart is empty.</p>
//           )}
//         </div>
//         <div className="mini-cart-footer">
//           <p>
//             Total: <b>₹{total}</b>
//           </p>
//           <button onClick={() => window.location.reload()}>Go to Cart</button>
//         </div>
//       </div>
//     </>
//   );
// }
import React, { useEffect, useState } from 'react';
import API from '../api';
import './MiniCart.css';

export default function MiniCart({ show, onClose, triggerReload }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (show) loadCart();
  }, [show, triggerReload]);

  const loadCart = async () => {
    const res = await API('/cart');
    if (res.items) setItems(res.items);
  };

  const removeItem = async (itemId) => {
    if (!window.confirm('Remove this item from cart?')) return;
    await API('/cart/remove', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ item_id: itemId }),
    });
    // reload cart immediately
    loadCart();
  };

  const total = items.reduce((t, i) => t + i.price * i.quantity, 0);

  return (
    <>
      {/* Overlay */}
      <div
        className={`mini-cart-overlay ${show ? 'show' : ''}`}
        onClick={onClose}
      ></div>

      {/* Sidebar */}
      <div className={`mini-cart ${show ? 'show' : ''}`}>
        <div className="mini-cart-header">
          <h3>Your Cart</h3>
          <button onClick={onClose}>✕</button>
        </div>

        <div className="mini-cart-body">
          {items.length ? (
            items.map((it) => (
              <div key={it.cart_item_id} className="mini-item">
                <div>
                  <strong>{it.name}</strong>
                  <div className="price-line">
                    ₹{it.price} × {it.quantity}
                  </div>
                </div>
                <button
                  className="delete-btn"
                  title="Remove item"
                  onClick={() => removeItem(it.id)}
                >
                  🗑️
                </button>
              </div>
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>

        <div className="mini-cart-footer">
          <p>
            Total: <b>₹{total}</b>
          </p>
          <button onClick={() => window.location.reload()}>Go to Cart</button>
        </div>
      </div>
    </>
  );
}
