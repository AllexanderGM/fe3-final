import logo from "/DH.ico";
const Footer = () => {
    return (
    <>
        <footer>
            <p>Todos los derechos reservados: Digital House ©</p>
            <img src={logo} alt="DH-logo" />
            <div className="iconos">
            <a href="https://www.instagram.com/" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/4138/4138124.png" alt="facebookImage" /></a>
            <a href="https://www.facebook.com/" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/4494/4494475.png" alt="instagramImage" /></a>
            <a href="https://www.tiktok.com/" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png" alt="tiktokImage" /></a>
            <a href="https://web.whatsapp.com/" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/3670/3670051.png" alt="wppImage" /></a>
            </div>
        </footer>
        </>
    );
};

export default Footer;
