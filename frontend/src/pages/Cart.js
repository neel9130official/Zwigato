import React, { useEffect, useState } from 'react';
import API from '../api';

export default function Cart({ token, onLogin }){
  const [cart, setCart] = useState({ items: [] });

  const load = async ()=> {
    const res = await API('/cart');
    if (res.error && res.error==='no token') { alert('Please login'); return; }
    setCart(res);
  };
  useEffect(()=>{ load(); }, []);

  const checkout = async () => {
    if (!localStorage.getItem('token')) { alert('login first'); return; }
    const res = await API('/orders/checkout', { method:'POST' });
    if (res.ok) { alert('Order placed! OrderId: ' + res.orderId); setCart({items:[]}); }
    else alert(res.error || 'checkout failed');
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.items && cart.items.length ? (
        <div>
          {cart.items.map(it=>(
            <div key={it.cart_item_id} className="card" style={{marginBottom:8}}>
              <b>{it.name}</b> — Qty: {it.quantity} — ₹{it.price}
            </div>
          ))}
          <button className="button" onClick={checkout}>Checkout (Mock payment)</button>
        </div>
      ) : <p>Cart empty</p>}
    </div>
  );
}
