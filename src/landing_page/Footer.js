import React from 'react';

function Footer() {
    return ( 
      <footer style={{backgroundColor:"rgb(250, 250, 250)"}}>
        <div className='container border-top mt-5' >
            <div className="row mt-5 me-4">
                <div className="col me-4">
                    <img src="media/images/logo.svg" style={{width:"50%"}} />
                    <p className="text-muted mt-2" style={{fontSize:"13px"}}> 
                        &copy; 2010 - 2026, Zerodha Broking Ltd.<br/> All rights reserved.
                    </p>
                </div>
                <div className="col">
                    <h2 className="fs-5">Company</h2>
                    <a href="" className="d-block mb-2 text-muted" style={{textDecoration:"none"}}>About</a>
                    <a href="" className="d-block mb-2 text-muted" style={{textDecoration:"none"}}>Products</a>
                    <a href="" className="d-block mb-2 text-muted" style={{textDecoration:"none"}}>Pricing</a>
                    <a href="" className="d-block mb-2 text-muted" style={{textDecoration:"none"}}>Referral programms</a>
                    <a href="" className="d-block mb-2 text-muted" style={{textDecoration:"none"}}>Careers</a>
                    <a href="" className="d-block mb-2 text-muted" style={{textDecoration:"none"}}>Zerodha.tech</a>
                    <a href="" className="d-block mb-2 text-muted" style={{textDecoration:"none"}}>Press & media</a>
                    <a href="" className="d-block mb-2 text-muted" style={{textDecoration:"none"}}>Zerodha cares (CSR)</a>
                </div>
                <div className="col">
                    <h2 className="fs-5">Support</h2>
                    <a href="" className="d-block mb-2 text-muted" style={{textDecoration:"none"}}>Contact</a>
                    <a href="" className="d-block mb-2 text-muted" style={{textDecoration:"none"}}>Support portal</a>
                    <a href="" className="d-block mb-2 text-muted" style={{textDecoration:"none"}}>Z-connect blog</a>
                    <a href="" className="d-block mb-2 text-muted" style={{textDecoration:"none"}}>List of charges</a>
                    <a href="" className="d-block mb-2 text-muted" style={{textDecoration:"none"}}>Downloads & resources</a>
                </div>
                <div className="col">
                    <h2 className="fs-5">Account</h2>
                        <a href="" className="d-block mb-2 text-muted" style={{textDecoration:"none"}}>Open an account</a>
                        <a href="" className="d-block mb-2 text-muted" style={{textDecoration:"none"}}>Fund transfer</a>
                        <a href="" className="d-block mb-2 text-muted" style={{textDecoration:"none"}}>60 day challenge</a><br/>
                </div>
            </div>
            <div className="mt-5 text-muted " style={{fontSize:"13px"}}>
            <p>
                Zerodha Broking Limited: Member of NSE, BSE, MCX & MSEI – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Limited – SEBI Registration no.: IN-DP-431-2019, CIN: U65929KA2018PLC116815, Registered Address: #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
            </p>
            <p>
                Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of grievances
            </p>
            <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

            <p>
                "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers/depository participants. Receive information of your transactions directly from Exchange/Depositories on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.
            </p>
          </div>
          <div className="text-center mb-4">
            <a href="" className="text-muted me-5" style={{textDecoration:"none", fontSize:"13px"}}>NSE</a>
             <a href="" className="text-muted me-5" style={{textDecoration:"none", fontSize:"13px"}}>BSE</a>
              <a href="" className="text-muted me-5" style={{textDecoration:"none", fontSize:"13px"}}>MCK</a>
               <a href="" className="text-muted me-5" style={{textDecoration:"none", fontSize:"13px"}}>Terms & conditions</a>
                <a href="" className="text-muted me-5" style={{textDecoration:"none", fontSize:"13px"}}>Policies & procedures</a>
                 <a href="" className="text-muted me-5" style={{textDecoration:"none", fontSize:"13px"}}>Privacy policy</a>
                  <a href="" className="text-muted me-5" style={{textDecoration:"none", fontSize:"13px"}}>Disclosure</a>
               
          </div>
        </div>
      </footer>
     );
}

export default Footer;
