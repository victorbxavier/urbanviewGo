import '../Assets/Styles/Footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
    return (
        <div class="container my-5">

            <footer class="bg-white text-center text-dark">
                {/* <!-- Grid container --> */}
                <div class="container p-4 pb-0">
                    {/* <!-- Section: Social media --> */}
                    <section class="mb-4">
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
                    © 2023 Copyright:
                    <a class="text-dark"> UrbaNView</a>
                </div>
            </footer>

        </div>
    );
}

export default Footer;
