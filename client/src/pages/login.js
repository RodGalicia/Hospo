import api from "../utils/api";
import { useRef } from "react";
const Login = () => {
    const username = useRef();
    const password = useRef();
    const handleSubmit = async e => {
        e.preventDefault();
        const user = await api.login({
            username: username.current.value,
            password: password.current.value
        });
        console.log(user)
        // inputRef.current.value = "";
    };
    return (
        <div>
            <header>
                <div class="container-fluid py-2 negro">

                    <div class="row">
                        <div class="col-6 col-sm-4 text-right">
                            <a class="texto-claro" href="#" >Home </a>
                            <a class="texto-claro" href="#" > About Us</a>
                            <a class="texto-claro" href="#" > Company</a>
                        </div>
                        <div class="col-sm-4 d-none d-sm-block"></div>
                        <div class="col-6 col-sm-4" >
                            <a class="texto-claro" href="#" target="_new"><i class="fab fa-facebook-square"></i></a>
                            <a class="texto-claro" href="#" target="_new"><i class="fab fa-twitter-square"></i></a>
                            <a class="texto-claro" href="#" target="_new"><i class="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>



                <div class="border-bottom">
                    <div class="container py-2 text-center">
                        <img src="img/hospo.png" class="img-fluid" />
                    </div>
                </div>

            </header>

            <div class="section">
                <div class="container">
                    <div class="py-2">&nbsp;</div>




                    <div class="text-center" >
                        <div class="logo">login</div>
                        <div class="login-form-1">


                            <form id="login-form" class="text-left" onSubmit={handleSubmit}>
                                <div class="login-form-main-message"></div>
                                <div class="main-login-form">
                                    <div class="login-group">
                                        <div class="form-group">
                                            <label for="username" class="sr-only">Username</label>
                                            <input type="text" class="form-control" ref={username} name="username" placeholder="username" />
                                        </div>
                                        <div class="form-group">
                                            <label for="password" class="sr-only">Password</label>
                                            <input type="password" class="form-control" ref={password} name="password" placeholder="password" />
                                        </div>
                                    </div>
                                    <button type="submit" class="login-button" ><i class="fa fa-chevron-right"></i></button>

                                </div>
                                <div class="etc-login-form">
                                    <p>new user? <a href="./register">create new account</a></p>
                                </div>
                            </form>


                        </div>
                    </div>
                    <div class="py-5">&nbsp;</div>
                    <div class="py-3">&nbsp;</div>


                </div>
            </div>




            <footer class="mt-auto">
                <div class="container-fluid py-2 negro">
                    <div class="row align-items-center">
                        <div class="col-12 col-md-6 text-center text-md-left">
                            <p class="texto-claro">&copy; Hospo</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Login