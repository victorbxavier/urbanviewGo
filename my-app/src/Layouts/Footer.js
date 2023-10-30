import '../Assets/Styles/Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
    return (
        <div class="container my-5">

            <footer class="bg-light text-center text-white">
                {/* <!-- Grid container --> */}
                <div class="container p-4 pb-0">
                    {/* <!-- Section: Social media --> */}
                    <section class="mb-4">
                        {/* <!-- Facebook --> */}
                        <a
                            class="footer facebook btn btn-primary btn-floating m-1"
                            href="#!"
                            role="button"
                        ><FacebookIcon />
                        </a>

                        {/* <!-- Twitter --> */}
                        <a
                            class="footer twitter btn btn-primary btn-floating m-1"
                            href="#!"
                            role="button"
                        ><TwitterIcon />
                        </a>

                        {/* <!-- Google --> */}
                        <a
                            class="footer google btn btn-primary btn-floating m-1"
                            href="#!"
                            role="button"
                        ><GoogleIcon />
                        </a>

                        {/* Instagram */}
                        <a
                            class="footer instagram btn btn-primary btn-floating m-1"
                            href="#!"
                            role="button"
                        ><InstagramIcon />
                        </a>

                        {/* Linkedin */}
                        <a
                            class="footer linkedin footer btn btn-primary btn-floating m-1"
                            href="#!"
                            role="button"
                        ><LinkedInIcon />
                        </a>
                        {/* Github */}
                        <a
                            class="footer github btn btn-primary btn-floating m-1"
                            href="#!"
                            role="button"
                        ><GitHubIcon />
                        </a>
                    </section>
                </div>
                <div class="footer text-center p-3">
                    © 2020 Copyright:
                    <a class="text-white" href="https://mdbootstrap.com/"> MDBootstrap.com</a>
                </div>
            </footer>

        </div>
    );
}

export default Footer;
