import Header from "../../pages/Header/Header";
import Footer from "../../pages/Footer/Footer";
import ScrollToTopButton from "../../components/Button/ScrollToTopButton";

const Terms = () => {
    return (

<div className="container-terms bg-gray-100 min-h-screen">
  <Header />
  <section className="md:p-10 p-5 bg-violet-100">
    <div>
      <h1 className="terms-main-title font-bold text-4xl">Terms and Conditions</h1>

      <h2 className="text-2xl font-bold mt-4 text-left">1. Definition of Terms</h2>

      <ol className="terms-list pl-6 text-left">
        <li className="terms-list-item"><strong>1.1. The Contractor</strong>  is HeathCare Company, a legal entity that provides the Customer with access to the Service of the Contractor in accordance with the Software Supply Agreement concluded with the Customer in electronic form through the latter's electronic office</li>
        <li className="terms-list-item"><strong>1.2. The Customer</strong>  is a Site User who posts information about his/her services/goods on the Site and cooperates with the Contractor within the framework of the Software Supply Agreement.</li>
        <li className="terms-list-item"><strong>1.3. A user</strong>  is a person who has registered on the Site.</li>
        <li className="terms-list-item"><strong>1.4. The Client</strong>  is the User of the Site, a natural person who has reached the age of 14 and intends to obtain information about, purchase, reserve, or otherwise gain access to the Customer's goods or services using the Contractor's Service.</li>
        <li className="terms-list-item"><strong>1.5. Order</strong>  - a call from the Client (or an online application on the Site) to the Contractor, the purpose of which is to receive services provided by the Client, or to obtain information about the price and availability, as well as to make a reservation (for medicines) or purchase the Client's goods.</li>
        <li className="terms-list-item"><strong>1.6. Service rules </strong> - a document published on the Internet at https://, which describes the rules for using the Contractor's Service. The service rules are mandatory for all Users of the Contractor's Service.</li>
        <li className="terms-list-item"><strong>1.7. Authorization </strong> is the procedure of entering the Personal account by entering the login and password created by the User during registration.</li>
        <li className="terms-list-item"><strong>1.8. Account </strong> - a unique user name (login) and password for User Authorization on the site.</li>
        <li className="terms-list-item"><strong>1.9. The User's Personal Cabinet</strong>  is the User's service section on the website, available only after Authorization, which gives the User access to their orders, editing of personal information, and the ability to form feedback.</li>
        <li className="terms-list-item"><strong>1.10. The Customer's Personal Cabinet</strong>  is the Customer's service section on the website, available only after Authorization, which gives the Customer access to Customer Orders, editing of information about the Customer and his specialists, statistics, and the mechanism for creating shares.</li>
        <li className="terms-list-item"><strong>1.11. Registration</strong> is the procedure for the User to fill in the information necessary to create an Account. When registering, the user specifies his unique name (login) from among those available for registration and access password. Further identification of the User is carried out on the basis of a login and password.</li>
      </ol>
      <h2 className="text-2xl font-bold mt-4 text-left">2. Terms</h2>

      <ol className="terms-list pl-6 text-left">
        <li className="terms-list-item"><strong>2.1.</strong> The Contractor's service is a platform that facilitates (i) provision of up-to-date information about and possibilities of ordering services by Clients that are legally provided by Clients - legal entities (including health care institutions), individual entrepreneurs and individual experts. The Site also functions as an information platform that provides Users with various information related to health and a healthy lifestyle.</li>
        <li className="terms-list-item"><strong>2.2.</strong> The subject of these Service Rules (hereinafter "Rules") are relations regarding the use of the Site and the Services placed on it.</li>
        <li className="terms-list-item"><strong>2.3.</strong> According to Article 633 of the Civil Code of Ukraine, this document is a public contract (offer), and in case of acceptance of its terms, the person undertakes to comply with the terms of the Service Rules.</li>
        <li className="terms-list-item"><strong>2.4.</strong> In accordance with these Rules, the Contractor provides the User with access to the Service of the Contractor, and the User undertakes to accept services in accordance with the terms of these Rules.</li>
        <li className="terms-list-item"><strong>2.5.</strong> The Site user can be any legally competent natural person or business entity registered by the state in accordance with the established procedure.</li>
        <li className="terms-list-item"><strong>2.6.</strong> These Rules may be changed by the Contractor at any time unilaterally by publishing an updated version of the Rules on the Site.</li>
        <li className="terms-list-item"><strong>2.7.</strong> All messages, claims and any other correspondence that the parties send to each other are considered to be properly sent in electronic form using e-mail messages, as well as in the form of messages within the site, provided for by its functional features. Correspondence is also considered properly sent if it is sent by the parties in writing with the necessary details, in the manner provided by the current legislation of Ukraine.</li>
        <li className="terms-list-item"><strong>2.8.</strong> The User's access to the Contractor's Site or Service and its use means the User's acceptance of these Service Rules.</li>
        <li className="terms-list-item"><strong>2.9.</strong> All rights to the Contractor's Site and Service and its individual elements belong to the Contractor.</li>
      </ol>
      <h2 className="text-2xl font-bold mt-4 text-left">3. Rules of Use of the Site by Users</h2>

      <ol className="terms-list pl-6 text-left">
        <li className="terms-list-item"><strong>3.1.</strong> The User's registration on the Site consists in filling in his unique login (e-mail or phone) from among those available for registration, a password, acceptance of the terms of the current Rules and further confirmation of access to the specified e-mail address.</li>
        <li className="terms-list-item"><strong>3.2.</strong> The User registration procedure allows:
          <ul className="list-disc pl-6">
            <li>Edit personal data, namely: surname, first name, patronymic, contact phone number, gender;</li>
            <li>Change the password to access your Account;</li>
            <li>Form a list of selected doctors, health care facilities and other Customers offering their services using the Site;</li>
            <li>Form applications for appointments with the Customer's specialists;</li>
            <li>Review the list of your applications for appointments with the Customer's specialists or for reservations (regarding medicines) or the purchase of goods from the Customer;</li>
            <li>Cancel created applications for appointments with specialists or for reservations (regarding medicines) or purchase of goods from Customers;</li>
            <li>Leave feedback about the Customer's specialists.</li>
          </ul>
        </li>
        <li className="terms-list-item"><strong>3.3.</strong> The user agrees:
          <ul className="list-disc pl-6">
            <li>To enter your personal data into the Site user database, to process your personal data, namely inclusion in databases, transfer of your personal data for the purpose of providing Services, systematization, sending information of an advertising and/or non-advertising nature and/or any other purposes that do not contradict the legislation of Ukraine.</li>
            <li>Upon receipt by the Contractor's employees of the User's confirmation of the fact of the reception or the reason for its cancellation, as well as the publication of the User's feedback on the Site on behalf of the User.</li>
            <li>To receive up-to-date information about the Customer's services or goods, promotions and bonus programs, etc. to your e-mail and/or in the form of SMS messages (hereinafter referred to as "services"). The user confirms that receiving information to his e-mail and/or in the form of sms messages is not spam. The User has the right to refuse the services at any time by contacting the Contractor's Support Service at the phone number or e-mail indicated on the Site. The basis for termination of services to the User is the User's application, made according to the form established by the Contractor, which the User fills out and sends to the Contractor's e-mail. In this case, the deadline for consideration of the User's application by the Contractor does not exceed 5 (five) working days from the moment the Contractor receives the User's application.</li>
          </ul>
        </li>
        <li className="terms-list-item"><strong>3.4.</strong> The user is prohibited from:
          <ul className="list-disc pl-6">
            <li>Post and otherwise transmit information of an advertising nature, computer codes intended to disrupt or limit the functionality of any computer equipment or programs;</li>
            <li>Publish materials that were not personally created by the User, and if they violate the copyrights of third parties.</li>
          </ul>
        </li>
        <li className="terms-list-item"><strong>3.5.</strong> The user undertakes to enter true information in his account, as well as to make changes to the data specified in the User's account at each change of these data.</li>
      </ol>
      <h2 className="text-2xl font-bold mt-4 text-left">4. Rules of use of the site by users</h2>

<ol className="terms-list pl-6 text-left">
  <li className="terms-list-item"><strong>4.1</strong> The User's registration on the Site consists in filling in his unique login (e-mail or phone) from among those available for registration, a password, acceptance of the terms of the current Rules and further confirmation of access to the specified e-mail address.</li>
  <li className="terms-list-item"><strong>4.2</strong> The User registration procedure allows:
    <ul className="list-disc pl-6">
      <li>Edit personal data, namely: surname, first name, patronymic, contact phone number, gender;</li>
      <li>Change the password to access your Account;</li>
      <li>Form a list of selected doctors, health care facilities and other Customers offering their services using the Site;</li>
      <li>Form applications for appointments with the Customer's specialists;</li>
      <li>Review the list of your applications for appointments with the Customer's specialists or for reservations (regarding medicines) or the purchase of goods from the Customer;</li>
      <li>Cancel created applications for appointments with specialists or for reservations (regarding medicines) or purchase of goods from Customers;</li>
      <li>Leave feedback about the Customer's specialists.</li>
    </ul>
  </li>
  <li className="terms-list-item"><strong>4.3</strong> The user agrees:
    <ul className="list-disc pl-6">
      <li>To enter your personal data into the Site user database, to process your personal data, namely inclusion in databases, transfer of your personal data for the purpose of providing Services, systematization, sending information of an advertising and/or non-advertising nature and/or any other purposes that do not contradict the legislation of Ukraine.</li>
      <li>Upon receipt by the Contractor's employees of the User's confirmation of the fact of the reception or the reason for its cancellation, as well as the publication of the User's feedback on the Site on behalf of the User.</li>
      <li>To receive up-to-date information about the Customer's services or goods, promotions and bonus programs, etc. to your e-mail and/or in the form of SMS messages (hereinafter referred to as "services"). The user confirms that receiving information to his e-mail and/or in the form of sms messages is not spam. The User has the right to refuse the services at any time by contacting the Contractor's Support Service at the phone number or e-mail indicated on the Site. The basis for termination of services to the User is the User's application, made according to the form established by the Contractor, which the User fills out and sends to the Contractor's e-mail. In this case, the deadline for consideration of the User's application by the Contractor does not exceed 5 (five) working days from the moment the Contractor receives the User's application.</li>
    </ul>
  </li>
  <li className="terms-list-item"><strong>4.4</strong> The user is prohibited from:
    <ul className="list-disc pl-6">
      <li>Post and otherwise transmit information of an advertising nature, computer codes intended to disrupt or limit the functionality of any computer equipment or programs;</li>
      <li>Publish materials that were not personally created by the User, and if they violate the copyrights of third parties.</li>
    </ul>
  </li>
  <li className="terms-list-item"><strong>4.5</strong> The user undertakes to enter true information in his account, as well as to make changes to the data specified in the User's account at each change of these data.</li>
</ol>
<h2 className="text-2xl font-bold mt-4 text-left">5. Rights and Obligations of the Executor</h2>

<ol className="terms-list pl-6 text-left">
  <li className="terms-list-item"><strong>5.1 The executor has the right to:</strong>
    <ul className="list-disc pl-6">
      <li>Check the information about the Customer both at the request of the Users and on their own initiative in order to update the information on the Site;</li>
      <li>Demand from the Customer appropriate documentary confirmation of the truthfulness of the information entered in the Customer's Personal account in each case of change of this information. The procedure for providing and the list of necessary documents is indicated in the corresponding application of the Contractor to the Customer. The Contractor has the right to deny the Customer the use of the Site in case of failure to provide the necessary documents in the specified order, as well as if the provided documents contain information that does not confirm the data entered by the Customer;</li>
      <li>The Contractor accepts, moderates and places the information provided by the Customer on its website within 10 (ten) working days from the moment of receiving the information;</li>
      <li>Upon detection of duplicate accounts of the Customers, the Contractor has the right to delete one of these accounts;</li>
      <li>Change the structure of the site at your discretion;</li>
      <li>Receive confirmation from the Clients about the fact of the reception or the reasons for its cancellation, receiving the goods from the Customer, as well as receiving feedback from the Clients about the Customer and his specialists and publishing the Client's feedback on the Site on behalf of the Client;</li>
      <li>Process the personal data of Users in any way, namely include them in databases, transfer them to other third parties, for the purpose of systematization, sending information of an advertising and/or non-advertising nature and/or any other purposes that do not contradict the legislation of Ukraine ;</li>
      <li>Conduct marketing activities, including by sending the User to his e-mail and/or in the form of sms-messages, up-to-date information about the Customer's services, promotions, bonus programs, etc.;</li>
      <li>Involve any third parties in the provision of Services in accordance with these Rules, while maintaining responsibility to the Users;</li>
      <li>Suspend the operation of the Site or its parts for the necessary period to perform current or extraordinary maintenance, error correction and other changes.</li>
    </ul>
  </li>
  <li className="terms-list-item"><strong>5.2 The performer undertakes:</strong>
    <ul className="list-disc pl-6">
      <li>Ensure the possibility of registering the Customer as a User on the Site.</li>
      <li>Not to disclose the Customer's account information to third parties.</li>
    </ul>
  </li>
</ol>
<h2 className="text-2xl font-bold mt-4 text-left">6. Services</h2>

<ol className="terms-list pl-6 text-left">
  <li className="terms-list-item"><strong> 6.1 </strong>Users acknowledge and agree that the Site and Services of the Contractor are intended for the interaction of Customers and Customers. Customers are persons independent of the Contractor. Agreements regarding services and/or goods offered by Customers through the Contractor's Services are concluded between Customers and Clients. The executor is not a party to them and does not control the execution of such agreements. Responsibility for the legality, proper performance and quality of the provided services / goods is borne exclusively by the Customers.</li>

  <li className="terms-list-item"><strong>6.2 The Client's Appointment for a Consultation with a Doctor (including online) or an Appointment to Receive Another Service Provided by the Customer:</strong>
    <ul className="list-disc pl-6 text-left">
      <li>The Client can order a doctor's consultation, diagnostic or other medical or non-medical services from the relevant Customer using the Contractor's Service. At the same time, the order is placed directly on the Contractor's Service, and payment is made, depending on the chosen method, on prepayment (online) or postpayment (offline) terms. The order of payment by the Customer for software supply by the Contractor is determined in the Software Supply Agreement.</li>
      <li>Medical services can be offered and provided to Clients only by Customers who are legal entities or natural persons - entrepreneurs who have received licenses for the conduct of business activities for medical practice in accordance with the established procedure, according to the medical specialties covered by such licenses. If the services offered by the Clients to the Clients using the Contractor's Service require obtaining a different type of license, accreditation or permission in accordance with the legislation of Ukraine, the Client can offer such services to the clients only if such a license, accreditation or permission is available. The customer is fully responsible for the compliance of the services he offers using the Contractor's Service with the requirements of the legislation of Ukraine, including the provision of medical services and the implementation of medical practice.</li>
    </ul>
  </li>

  <li className="terms-list-item"><strong>6.3 Placement of Advertising / Informational Materials on the Site:</strong>
    <ul className="list-disc pl-6 text-left">
      <li>The Contractor provides the Customers with the opportunity to post advertising and informational materials about their products and services on the Site. Customers are responsible for the content of such materials, their authenticity and undertake to ensure their compliance with the requirements of the legislation of Ukraine, including the Law of Ukraine "On Advertising," the Law of Ukraine "On Medicinal Products," the Law of Ukraine "Basics of the Legislation of Ukraine on Health Care," etc. Advertising / informational materials should also not violate the intellectual property rights of third parties.</li>
      <li>Any claims by third parties related to the use of such advertising materials, or regarding the use of trademarks depicted in the advertising materials, will be presented to the Customer, who will be responsible for all reasonable claims.</li>
    </ul>
  </li>
  <li className="terms-list-item"><strong>6.4 Placement of Advertising / Informational Materials on the Site:</strong>
    <ul className="list-disc pl-6 text-left">
      <li>The Contractor provides the Customers with the opportunity to post advertising and informational materials about their products and services on the Site. Customers are responsible for the content of such materials, their authenticity and undertake to ensure their compliance with the requirements of the legislation of Ukraine, including the Law of Ukraine "On Advertising," the Law of Ukraine "On Medicinal Products," the Law of Ukraine "Basics of the Legislation of Ukraine on Health Care," etc. Advertising / informational materials should also not violate the intellectual property rights of third parties.</li>
      <li>Any claims by third parties related to the use of such advertising materials, or regarding the use of trademarks depicted in the advertising materials, will be presented to the Customer, who will be responsible for all reasonable claims.</li>
      <li>The Contractor does not change the materials provided by the Customers without their approval, but such materials are subject to approval by the Contractor. The Contractor has the right to deny the Customer the placement of advertising / informational materials if they violate these Terms of Service, the requirements of Ukrainian legislation or for any other reason at the Contractor's discretion. The Contractor also has the right to request documents from the Customer to confirm / substantiate the statements contained in the Customer's advertising / information materials, or to propose changes to such materials, which are subject to agreement with the Customer.</li>
    </ul>
</li>

</ol>
<h2 className="text-2xl font-bold mt-4 text-left">7. Liability of the Executor</h2>
<ol className="terms-list pl-6 text-left">
    <li className="terms-list-item"><strong>7.1.</strong> The Contractor does not guarantee that the Services will meet the personal expectations and requirements of the Users and/or will undoubtedly bring the results expected by the Users. The Contractor is not responsible to Users and third parties for possible consequences of their use of the Site.</li>
    <li className="terms-list-item"><strong>7.2. </strong>The Contractor is not responsible to the Clients for the content, quality, or consequences of the services provided by the Clients or the goods sold by the Clients.</li>
    <li className="terms-list-item"><strong>7.3.</strong> The Contractor is not responsible for the reliability and content of the information posted by the Customers on the Contractor's Service.</li>
    <li className="terms-list-item"><strong>7.4.</strong> The Contractor does not guarantee and is not responsible for any Services advertised or offered to Users by Customers on the Contractor's Service.</li>
    <li className="terms-list-item"><strong>7.5.</strong> The User agrees that he uses the Site and the Contractor's Service at his own risk on an "AS IS" and "AS AVAILABLE" basis without any guarantees.</li>
    <li className="terms-list-item"><strong>7.6.</strong> The Contractor shall not be liable for any loss (including loss of money, relationships or reputation, profit, other non-material loss, any direct or indirect loss) as a result (directly or indirectly):
        <ul className="list-disc pl-6">
            <li>The User's use of the Site or the User's inability to use the Site;</li>
            <li>Improper provision of Services by Customers;</li>
            <li>Viruses and other malicious software;</li>
            <li>Damage to the User's devices due to the use of any functions of the Site.</li>
        </ul>
    </li>
</ol>
<h2 className="text-2xl font-bold mt-4 text-left">8. Termination of Access to the Site</h2>
<ol className="terms-list pl-6 text-left">
    <li className="terms-list-item"><strong>8.1.</strong> The User may terminate his Account at any time by sending a letter with a corresponding request to the email address info@. After the User receives confirmation, his access to the Site and the Contractor's Service will be terminated.</li>
    <li className="terms-list-item"><strong>8.2.</strong>The Contractor may, at its sole discretion, remove or suspend access to the entire Site, the Contractor's Service, or any part thereof for any reason, including the User's violation or failure to comply with these Terms of Service.</li>
</ol>


<ScrollToTopButton />
    </div>
  </section>
  <Footer />
</div>

 );
};
    export default Terms;
