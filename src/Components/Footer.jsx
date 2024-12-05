import logo from "/DH.ico";

const Footer = () => {
    return (
    <>
        <footer>
            <p>Todos los derechos reservados: Digital House ©</p>
            <img src={logo} alt="DH-logo" />
            <div className="iconos">
            <img src="https://cdn-icons-png.flaticon.com/512/4138/4138124.png" alt="facebookImage" />
            <img src="https://cdn-icons-png.flaticon.com/512/4494/4494475.png" alt="instagramImage" />
            <img src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png" alt="tiktokImage" />
            <img src="https://cdn-icons-png.flaticon.com/512/3670/3670051.png" alt="wppImage" />
            </div>
        </footer>
        </>
    );
};

export default Footer;
