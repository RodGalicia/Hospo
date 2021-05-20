const Home = () => {
//     {
//         <script>
//     const req = new XMLHttpRequest();
//     req.onreadystatechange = function () {
//       if (req.readyState == 4 && req.status == 200) {
//         const user = JSON.parse(req.response).user;
//         document.getElementById("welcome-message").innerText = `Welcome ${user.username}!!`;
//       }
//     };
//     req.open("GET", "http://localhost:3000/user", true);
//     req.send();
//   </script>
//     }
    return (
        <div class="message-box">
            <h1 id="welcome-message"></h1>
            <a href="/private">Go to private area</a>
        </div>
    )
}
export default Home