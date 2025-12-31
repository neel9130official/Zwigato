// // // // // const API = (path, opts={}) => {
// // // // //   const base = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
// // // // //   const headers = opts.headers || {};
// // // // //   const token = localStorage.getItem('token');
// // // // //   if (token) headers['Authorization'] = 'Bearer ' + token;
// // // // //   return fetch(base + path, {...opts, headers}).then(r=>r.json());
// // // // // };
// // // // // export default API;
// // // // // const API = async (url, options = {}) => {
// // // // //   const res = await fetch(`${process.env.REACT_APP_API_URL}/items`, options);
// // // // //   return await res.json();
// // // // // };

// // // // // export default API;
// // // // const API_BASE = "http://localhost:5000/api"; // hardcoded for debug

// // // // //const API_BASE = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

// // // // /**
// // // //  * API(path, options)
// // // //  * - path starts with '/items' or '/cart' or '/users/...' (no /api prefix)
// // // //  * - options: fetch init (method, headers, body)
// // // //  */
// // // // export default async function API(path, options = {}) {
// // // //   const url = `${API_BASE}${path}`;
// // // //   const headers = {
// // // //     "Content-Type": "application/json",
// // // //     ...(options.headers || {}),
// // // //   };

// // // //   // keep token automatically (if present)
// // // //   if (!headers.Authorization) {
// // // //     const token = localStorage.getItem("token");
// // // //     if (token) headers.Authorization = `Bearer ${token}`;
// // // //   }

// // // //   const fetchOpts = { headers, ...options };
// // // //   try {
// // // //     const res = await fetch(url, fetchOpts);
// // // //     // if server returns not-json (HTML error) throw with text
// // // //     const text = await res.text();
// // // //     try {
// // // //       const json = JSON.parse(text || "{}");
// // // //       if (!res.ok) throw new Error(json.message || `Server error ${res.status}`);
// // // //       return json;
// // // //     } catch {
// // // //       // not json
// // // //       if (!res.ok) throw new Error(text || `Server error ${res.status}`);
// // // //       // if ok but not json return text
// // // //       return text;
// // // //     }
// // // //   } catch (err) {
// // // //     console.error("API error:", err);
// // // //     throw err;
// // // //   }
// // // // }

// // // // ✅ frontend/src/api.js
// // // const API_BASE = (process.env.REACT_APP_API_URL || "http://localhost:5000/api").replace(/\/+$/, "");

// // // export default async function API(path, options = {}) {
// // //   // Always prefix with /api
// // //   const endpoint = path.startsWith("/api") ? path : path.startsWith("/") ? `/api${path}` : `/api/${path}`;
// // //   const url = `${API_BASE}${endpoint.replace("/api/api", "/api")}`;

// // //   const headers = {
// // //     "Content-Type": "application/json",
// // //     ...(options.headers || {}),
// // //   };

// // //   const token = localStorage.getItem("token");
// // //   if (token && !headers.Authorization) {
// // //     headers.Authorization = `Bearer ${token}`;
// // //   }

// // //   console.log("🌐 API Request:", url); // 👈 helpful debug log

// // //   try {
// // //     const res = await fetch(url, { ...options, headers });
// // //     const text = await res.text();

// // //     try {
// // //       const data = JSON.parse(text);
// // //       if (!res.ok) throw new Error(data.message || `HTTP ${res.status}`);
// // //       return data;
// // //     } catch {
// // //       throw new Error(`Server error ${res.status}: ${text}`);
// // //     }
// // //   } catch (err) {
// // //     console.error("❌ API error:", err);
// // //     throw err;
// // //   }
// // // }
// // // ✅ frontend/src/api.js (final version)
// // const API_BASE = (process.env.REACT_APP_API_URL || "http://localhost:5000/api").replace(/\/+$/, "");

// // export default async function API(path, options = {}) {
// //   // ✅ Normalize: ensure exactly one "/api" in path
// //   let endpoint = path.startsWith("/api") ? path : `/api${path.startsWith("/") ? path : `/${path}`}`;
// //   endpoint = endpoint.replace(/\/api\/api/g, "/api"); // fix accidental double prefix

// //   const url = `${API_BASE}${endpoint.replace(API_BASE, "")}`; // safe join

// //   const headers = {
// //     "Content-Type": "application/json",
// //     ...(options.headers || {}),
// //   };

// //   const token = localStorage.getItem("token");
// //   if (token && !headers.Authorization) {
// //     headers.Authorization = `Bearer ${token}`;
// //   }

// //   console.log("🌐 API Request:", url); // debug log

// //   try {
// //     const res = await fetch(url, { ...options, headers });
// //     const text = await res.text();

// //     try {
// //       const data = JSON.parse(text);
// //       if (!res.ok) throw new Error(data.message || `HTTP ${res.status}`);
// //       return data;
// //     } catch {
// //       throw new Error(`Server error ${res.status}: ${text}`);
// //     }
// //   } catch (err) {
// //     console.error("❌ API error:", err);
// //     throw err;
// //   }
// // }
// // ✅ Final working version
// const API_BASE = (process.env.REACT_APP_API_URL || "http://localhost:5000")
//   .replace(/\/+$/, ""); // remove trailing slashes

// export default async function API(path, options = {}) {
//   // ✅ Always ensure exactly one /api in final URL
//   let endpoint = path.startsWith("/") ? path : `/${path}`;
//   if (!endpoint.startsWith("/api")) endpoint = `/api${endpoint}`;

//   const url = `${API_BASE}${endpoint}`; // e.g. http://localhost:5000/api/items
//   console.log("🌐 Final API URL:", url);

//   const headers = {
//     "Content-Type": "application/json",
//     ...(options.headers || {}),
//   };

//   const token = localStorage.getItem("token");
//   if (token) headers.Authorization = `Bearer ${token}`;

//   try {
//     const res = await fetch(url, { ...options, headers });
//     const text = await res.text();

//     try {
//       const data = JSON.parse(text);
//       if (!res.ok) throw new Error(data.message || `HTTP ${res.status}`);
//       return data;
//     } catch {
//       throw new Error(`Server error ${res.status}: ${text}`);
//     }
//   } catch (err) {
//     console.error("❌ API error:", err);
//     throw err;
//   }
// }
// ✅ frontend/src/api.js (bulletproof final version)
// let API_BASE = process.env.REACT_APP_API_URL || "http://localhost:5000";
// API_BASE = API_BASE.replace(/\/+$/, ""); // remove trailing slashes

// // Remove trailing '/api' if already present
// API_BASE = API_BASE.replace(/\/api$/, "");

// console.log("🔍 API Base URL =", API_BASE);

// export default async function API(path, options = {}) {
//   // Normalize path
//   let endpoint = path.startsWith("/") ? path : `/${path}`;
//   if (!endpoint.startsWith("/api")) endpoint = `/api${endpoint}`;

//   const url = `${API_BASE}${endpoint}`;
//   console.log("🌐 Final API URL:", url);

//   // Headers
//   const headers = {
//     "Content-Type": "application/json",
//     ...(options.headers || {}),
//   };

//   const token = localStorage.getItem("token");
//   if (token && !headers.Authorization) {
//     headers.Authorization = `Bearer ${token}`;
//   }

//   try {
//     const res = await fetch(url, { ...options, headers });
//     const text = await res.text();

//     // Handle HTML responses (errors)
//     if (text.startsWith("<!DOCTYPE") || text.startsWith("<html")) {
//       throw new Error(`Server error ${res.status}: Received HTML instead of JSON`);
//     }

//     const data = JSON.parse(text);
//     if (!res.ok) throw new Error(data.message || `HTTP ${res.status}`);

//     return data;
//   } catch (err) {
//     console.error("❌ API error:", err);
//     throw err;
//   }
// }
let API_BASE = process.env.REACT_APP_API_URL || "http://localhost:5000";

// Remove trailing slashes
API_BASE = API_BASE.replace(/\/+$/, "");

// Remove trailing "/api" if present
API_BASE = API_BASE.replace(/\/api$/, "");

console.log("🔍 API Base URL =", API_BASE);

export default async function API(path, options = {}) {
  // Normalize path
  let endpoint = path.startsWith("/") ? path : `/${path}`;
  if (!endpoint.startsWith("/api")) endpoint = `/api${endpoint}`;

  const url = `${API_BASE}${endpoint}`;
  console.log("🌐 Final API URL:", url);

  // Build headers
  const headers = {
    "Content-Type": "application/json",
    ...(options.headers || {}),
  };

  // Add token if present
  const token = localStorage.getItem("token");
  if (token && !headers.Authorization) {
    headers.Authorization = `Bearer ${token}`;
  }

  try {
    const res = await fetch(url, { ...options, headers });
    const text = await res.text();

    console.log("📥 Raw response text:", text);

    // If backend sends HTML → it's an error page
    if (text.startsWith("<!DOCTYPE") || text.startsWith("<html")) {
      throw new Error(`Server error ${res.status}: Received HTML instead of JSON`);
    }

    // SAFE JSON PARSE
    let data;
    try {
      data = text ? JSON.parse(text) : {};
    } catch (parseError) {
      console.error("❌ JSON parse failed! Raw response:", text);
      throw new Error("Invalid JSON response from server");
    }

    // Handle HTTP errors
    if (!res.ok) {
      throw new Error(data.message || `HTTP ${res.status}`);
    }

    return data;

  } catch (err) {
    console.error("❌ API error:", err);
    throw err;
  }
}


