// // import React, { useEffect, useState } from 'react';
// // import API from '../api';
// // import './Profile.css';

// // export default function Profile() {
// //   const [user, setUser] = useState(null);
// //   const [orders, setOrders] = useState([]);

// //   useEffect(() => {
// //     loadProfile();
// //   }, []);

// //   const loadProfile = async () => {
// //     const res = await API('/auth/profile');
// //     if (res.user) {
// //       setUser(res.user);
// //       setOrders(res.orders);
// //     }
// //   };
// //   <div className="profile-photo-section">
// //   <h3>Profile Photo</h3>
// //   {user.photo ? (
// //     <img
// //       src={`${process.env.REACT_APP_API_URL.replace('/api', '')}${user.photo}`}
// //       alt="Profile"
// //       className="profile-photo"
// //     />
// //   ) : (
// //     <p>No photo uploaded.</p>
// //   )}
// //   <label className="upload-btn">
// //     Change Photo
// //     <input
// //       type="file"
// //       accept="image/*"
// //       onChange={async (e) => {
// //         const fd = new FormData();
// //         fd.append('photo', e.target.files[0]);
// //         const res = await fetch(`${process.env.REACT_APP_API_URL}/auth/upload-photo`, {
// //           method: 'POST',
// //           headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
// //           body: fd
// //         }).then((r) => r.json());
// //         if (res.photo) {
// //           setUser({ ...user, photo: res.photo });
// //           alert('✅ Profile photo updated!');
// //         }
// //       }}
// //     />
// //   </label>
// // </div>


// //   if (!user) return <p>Loading profile...</p>;

// //   return (
// //     <div className="profile-page">
// //       <h2>My Profile</h2>

// //       <div className="profile-card">
// //         <h3>Personal Details</h3>
// //         <p><b>Name:</b> {user.name}</p>
// //         <p><b>Age:</b> {user.age}</p>
// //         <p><b>Mobile:</b> {user.mobile}</p>
// //         <p><b>Email:</b> {user.email}</p>
// //         <p><b>Address:</b> {user.address}</p>
// //         <p><b>Member Since:</b> {new Date(user.created_at).toLocaleDateString()}</p>
// //       </div>

// //       <div className="order-history">
// //         <h3>Order History</h3>
// //         {orders.length === 0 ? (
// //           <p>No orders yet.</p>
// //         ) : (
// //           orders.map((order) => (
// //             <div key={order.id} className="order-card">
// //               <div className="order-header">
// //                 <span>Order #{order.id}</span>
// //                 <span>{new Date(order.created_at).toLocaleString()}</span>
// //               </div>
// //               <div className="order-items">
// //                 {order.items.map((it, idx) => (
// //                   <div key={idx} className="order-item">
// //                     <span>{it.name}</span>
// //                     <span>
// //                       ₹{it.price} × {it.quantity}
// //                     </span>
// //                   </div>
// //                 ))}
// //               </div>
// //               <div className="order-total">
// //                 <b>Total: ₹{order.total}</b> <span>({order.status})</span>
// //               </div>
// //             </div>
// //           ))
// //         )}
// //       </div>
// //     </div>
// //   );
// // }
// import React, { useEffect, useState } from "react";
// import API from "../api";
// import "./Profile.css";

// export default function Profile() {
//   const [user, setUser] = useState(null);
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     loadProfile();
//   }, []);

//   // 🔹 Load profile and orders
// //   const loadProfile = async () => {
// //     try {
// //       const res = await API("/users/profile");
// //       if (res.user) {
// //         setUser(res.user);
// //         setOrders(res.orders || []);
// //       }
// //     } catch (err) {
// //       console.error("❌ Failed to load profile:", err);
// //       alert("Failed to load profile. Please log in again.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };
// const loadProfile = async () => {
//   try {
//     const res = await fetch(`${process.env.REACT_APP_API_URL}/users/profile`, {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("token")}`,
//       },
//     });

//     if (!res.ok) {
//       throw new Error("Failed to fetch profile");
//     }

//     const data = await res.json();
//     if (data.user) {
//       setUser(data.user);
//       setOrders(data.orders || []);
//     } else {
//       alert(data.message || "Could not load profile");
//     }
//   } catch (err) {
//     console.error("❌ Failed to load profile:", err);
//     alert("Failed to load profile. Please log in again.");
//   } finally {
//     setLoading(false);
//   }
// };


//   // 🔹 Handle photo upload
//   const handlePhotoUpload = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     try {
//       const fd = new FormData();
//       fd.append("photo", file);

//       const res = await fetch(
//         `${process.env.REACT_APP_API_URL}/users/upload-photo`,
//         {
//           method: "POST",
//           headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//           body: fd,
//         }
//       ).then((r) => r.json());

//       if (res.photo) {
//         setUser({ ...user, photo: res.photo });
//         alert("✅ Profile photo updated successfully!");
//       } else {
//         alert(res.message || "Failed to update photo");
//       }
//     } catch (err) {
//       console.error("❌ Upload error:", err);
//       alert("Something went wrong while uploading photo.");
//     }
//   };

//   if (loading) return <p className="loading">Loading profile...</p>;
//   if (!user) return <p className="loading">No profile data found.</p>;

//   return (
//     <div className="profile-page">
//       <h2 className="profile-title">My Profile</h2>

//       {/* 🖼 Profile Photo Section */}
//       <div className="profile-photo-section">
//         <h3>Profile Photo</h3>
//         {user?.photo ? (
//           <img
//             src={`${process.env.REACT_APP_API_URL.replace("/api", "")}${
//               user.photo
//             }`}
//             alt="Profile"
//             className="profile-photo"
//           />
//         ) : (
//           <p className="no-photo">No photo uploaded.</p>
//         )}

//         <label className="upload-btn">
//           Change Photo
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handlePhotoUpload}
//             hidden
//           />
//         </label>
//       </div>

//       {/* 🧍 Personal Details */}
//       <div className="profile-card">
//         <h3>Personal Details</h3>
//         <p>
//           <b>Name:</b> {user?.name}
//         </p>
//         <p>
//           <b>Age:</b> {user?.age}
//         </p>
//         <p>
//           <b>Mobile:</b> {user?.mobile}
//         </p>
//         <p>
//           <b>Email:</b> {user?.email}
//         </p>
//         <p>
//           <b>Address:</b> {user?.address}
//         </p>
//         <p>
//           <b>Member Since:</b>{" "}
//           {user?.created_at
//             ? new Date(user.created_at).toLocaleDateString()
//             : "N/A"}
//         </p>
//       </div>

//       {/* 🛍 Order History */}
//       <div className="order-history">
//         <h3>Order History</h3>
//         {orders.length === 0 ? (
//           <p>No orders yet.</p>
//         ) : (
//           orders.map((order) => (
//             <div key={order.id} className="order-card">
//               <div className="order-header">
//                 <span>Order #{order.id}</span>
//                 <span>
//                   {new Date(order.created_at).toLocaleString("en-IN")}
//                 </span>
//               </div>
//               <div className="order-items">
//                 {order.items?.map((it, idx) => (
//                   <div key={idx} className="order-item">
//                     <span>{it.name}</span>
//                     <span>
//                       ₹{it.price} × {it.quantity}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//               <div className="order-total">
//                 <b>Total: ₹{order.total}</b>{" "}
//                 <span className={`status ${order.status?.toLowerCase()}`}>
//                   ({order.status})
//                 </span>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import "./Profile.css";

export default function Profile() {
    const [user, setUser] = useState(null);
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadProfile();
    }, []);

    // const loadProfile = async () => {
    //     try {
    //         console.log("🟢 Fetching profile from:", `${process.env.REACT_APP_API_URL}/users/profile`);

    //         //   const res = await fetch(`${process.env.REACT_APP_API_URL}/users/profile`, {
    //         //     headers: {
    //         //       Authorization: `Bearer ${localStorage.getItem("token")}`,
    //         //     },
    //         //   });
    //         const res = await fetch(`${process.env.REACT_APP_API_URL}/users/profile`, {
    //             headers: {
    //                 Authorization: `Bearer ${localStorage.getItem("token")}`,
    //             },
    //         });


    //         if (!res.ok) {
    //             throw new Error("Failed to fetch profile");
    //         }

    //         const data = await res.json();
    //         console.log("✅ Profile Data:", data);

    //         if (data.user) {
    //             setUser(data.user);
    //             setOrders(data.orders || []);
    //         } else {
    //             alert(data.message || "Could not load profile");
    //         }
    //     } catch (err) {
    //         console.error("❌ Failed to load profile:", err);
    //         alert("Failed to load profile. Please log in again.");
    //     } finally {
    //         setLoading(false);
    //     }
    // };
   console.log("🌐 Using API base:", process.env.REACT_APP_API_URL);

    const loadProfile = async () => {
        try {
            const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:5000/api";
            const token = localStorage.getItem("token");

            if (!token) {
                alert("Please log in again.");
                return;
            }

            console.log("🌐 Fetching profile from:", `${apiUrl}/users/profile`);
            console.log("🔐 Using token:", token);

            const res = await fetch(`${apiUrl}/users/profile`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!res.ok) {
                const errText = await res.text();
                console.error("❌ Backend error response:", errText);
                throw new Error(`Server error ${res.status}: ${errText}`);
            }

            const data = await res.json();
            console.log("✅ Profile data received:", data);

            if (data.user) {
                setUser(data.user);
                setOrders(data.orders || []);
            } else {
                throw new Error("Invalid profile response");
            }
        } catch (err) {
            console.error("❌ Failed to load profile:", err);
            alert("Failed to load profile. Please log in again.");
        }
    };

    const handlePhotoUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const fd = new FormData();
        fd.append("photo", file);

        try {
            const res = await fetch(`${process.env.REACT_APP_API_URL}/users/upload-photo`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                body: fd,
            });

            const data = await res.json();
            if (data.photo) {
                setUser({ ...user, photo: data.photo });
                alert("✅ Profile photo updated!");
            } else {
                alert(data.message || "Upload failed");
            }
        } catch (err) {
            console.error("❌ Upload failed:", err);
            alert("Error uploading photo");
        }
    };

    if (loading) return <p>Loading profile...</p>;

    if (!user)
        return (
            <p style={{ color: "red", textAlign: "center", marginTop: "40px" }}>
                Failed to load profile. Please log in again.
            </p>
        );

    return (
        <div className="profile-page">
            <h2>My Profile</h2>

            <div className="profile-photo-section">
                <h3>Profile Photo</h3>
                {user.photo ? (
                    <img
                        src={`${process.env.REACT_APP_API_URL.replace("/api", "")}${user.photo}`}
                        alt="Profile"
                        className="profile-photo"
                    />
                ) : (
                    <p>No photo uploaded.</p>
                )}
                <label className="upload-btn">
                    Change Photo
                    <input type="file" accept="image/*" onChange={handlePhotoUpload} hidden />
                </label>
            </div>

            <div className="profile-card">
                <h3>Personal Details</h3>
                <p><b>Name:</b> {user.name}</p>
                <p><b>Age:</b> {user.age}</p>
                <p><b>Mobile:</b> {user.mobile}</p>
                <p><b>Email:</b> {user.email}</p>
                <p><b>Address:</b> {user.address}</p>
                <p><b>Member Since:</b> {new Date(user.created_at).toLocaleDateString()}</p>
            </div>

            <div className="order-history">
                <h3>Order History</h3>
                {orders.length === 0 ? (
                    <p>No orders yet.</p>
                ) : (
                    orders.map((order) => (
                        <div key={order.id} className="order-card">
                            <div className="order-header">
                                <span>Order #{order.id}</span>
                                <span>{new Date(order.created_at).toLocaleString()}</span>
                            </div>
                            <div className="order-items">
                                {order.items.map((it, idx) => (
                                    <div key={idx} className="order-item">
                                        <span>{it.name}</span>
                                        <span>
                                            ₹{it.price} × {it.quantity}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <div className="order-total">
                                <b>Total: ₹{order.total}</b> <span>({order.status})</span>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
