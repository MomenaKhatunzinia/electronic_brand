

const Footer = () => {
    return (
        <div className="mt-20">
         <footer className="footer p-10 bg-base-200 text-base-content">
  <aside>
    <img
    className="
    w-1/5 rounded-3xl
    " src="https://i.ibb.co/HNvk3b0/altumcode-Ui3z-Mjp-Mrm-M-unsplash.jpg" alt="" />
    <p>Electronic Shop<br/>Providing reliable tech since 1992</p>
  </aside> 
  <nav>
    <header className="footer-title">Services</header> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>   
        </div>
    );
};

export default Footer;