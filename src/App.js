import './App.css';

function App() {
  return (
    <div className="bg-container">
        <form className="main-container" id="myForm" >
            <div className="header-container">
                <i className="fa-sharp fa-solid fa-xmark icon"></i>
                <img src="https://i.ibb.co/MDG6qFw/Screenshot-2023-04-21-115030.png" alt="logo" className="logo" draggable="false" />
            </div>
            <p className="register-heading">Register</p>
            <p className="register-desc">Please enter your details</p>
            <hr className="line"/>
            <div className="mobile-container">
                <select name="phone-code" id="countryCode" className="select-options">
                    <option value="+91">+91</option>
                    <option value="+1">+1</option>
                    <option value="+92">+92</option>
                    <option value="+61">+61</option>
                    <option value="+52">+52</option>
                </select>
                <input type="text" name="mobile number" maxlength="10" autocomplete="mobile" className="select-options input-box-phone" placeholder="Phone" id="phoneNumber" />
                <p className="warning" id="phoneWarning"></p>
            </div>
            <input type="text" name="Name" maxlength="10" autocomplete="name" className="select-options input-box-name" placeholder="Name" id="userName" />
            <div className="dob-container">
                <span className="dob-text">Date of birth</span>
                <select className="date-of-birth select-options" id="day">
                    <option value="DD">DD</option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                </select>
                <select className="date-of-birth select-options" id="month">
                    <option value="MM">MM</option>
                    <option value="1">01</option>
                    <option value="2">02</option>
                    <option value="3">03</option>
                    <option value="4">04</option>
                    <option value="5">05</option>
                    <option value="6">06</option>
                    <option value="7">07</option>
                    <option value="8">08</option>
                    <option value="9">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                </select>
                <select className="date-of-birth select-options year" id="year">
                    <option value="YYYY">YYYY</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                    <option value="2011">2011</option>
                    <option value="2010">2010</option>
                    <option value="2009">2009</option>
                    <option value="2008">2008</option>
                    <option value="2007">2007</option>
                    <option value="2006">2006</option>
                    <option value="2005">2005</option>
                    <option value="2004">2004</option>
                    <option value="2003">2003</option>
                    <option value="2002">2002</option>
                    <option value="2001">2001</option>
                </select>
            </div>
            <input type="email" name="Email" maxlength="10" autocomplete="name" className="select-options input-box-name" placeholder="Email" id="email" />
            <input type="text" name="Referral code" maxlength="10" autocomplete="name" className="select-options input-box-name referral-code" placeholder="Referral code" id="referralCode" />
            <p className="updates-text">Keep me updated about my orders, account & offers on:</p>
            <div className="updates-checkboxes">
                <div className="each-box">
                    <input type="checkbox" name="email" id="email" className="checkbox" />
                    <label for="email" className="label">Email</label>
                </div>
                <div className="each-box">
                    <input type="checkbox" name="phone" id="phone" className="checkbox" />
                    <label for="phone" className="label">Phone</label>
                </div>
                <div className="each-box">
                    <input type="checkbox" name="whatsapp" id="whatsapp" className="checkbox" />
                    <label for="whatsapp" className="label">WhatsApp</label>
                </div>
            </div>
            <button className="button" type="submit" id="submitButton">CONTINUE</button>
            <p className="updates-text terms-and-privacy">By clicking on Login, I accept the <span><a href="/"  className="terms">Terms & Conditions </a></span>& <span><a href="/" className="terms">Privacy Policy</a></span></p>
        </form>
    </div>
  );

}

// let phoneNumber = document.getElementById("phoneNumber");
// let userName = document.getElementById("userName");
// let day = document.getElementById("day");
// let month = document.getElementById("month");
// let year = document.getElementById("year");
// let email = document.getElementById("email");
// let myForm1 = document.getElementById("myForm");

// myForm1.addEventListener("submit", () => {
//   if(phoneNumber.value === "") {
//     return alert("Please enter phone number!");
//   } else if(userName.value==="") {
//     return alert("Please enter your name");
//   } else if (day.value === "DD") {
//     return alert("Please select a valid date");
//   } else if (month.value === "MM") {
//     return alert("Please select a valid month");
//   } else if (year.value === "YYYY") {
//     return alert("Please select a valid year");
//   } else if (email.value === "") {
//     return alert("Please enter your email");
//   }
// });

export default App;
