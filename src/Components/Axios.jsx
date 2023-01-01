// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function Axios() {
//     const [post, setPost] = useState({});
//   const [id, setId] = useState(1);
//   const [idButtonClick, setIdButtonClick] = useState(1);
//   const clickToFetch = () => {
//     setIdButtonClick(id);
//   };
//   useEffect(() => {
//     axios.get(`https://jsonplaceholderss.typicode.com/posts/${idButtonClick}`)
//     .then(res => {
//       setPost(res.data);
//     }) 
//     .catch(err => {
//       alert("There is an error with this posts");
//     });
//   }, [idButtonClick]);
 
//   return (
//     <div>
//       <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
//       <button onClick={clickToFetch}>Fetch Post</button>
//       <div>{post.title}</div>
//     </div>
//   );
// }

// export default Axios;
