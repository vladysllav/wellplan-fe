import "src/pages/Footer/Footer.css";

const Policies = () => {
    return (

<ul id="footer-policies">
        <h1 className="footer-header">Policies</h1>
        <li className="footer-nav-item">
          <a href="/privacyPolicy">Privacy policy</a>
        </li>
        <li className="footer-nav-item">
          <a href="/terms">Terms of service</a>
        </li>
      </ul>
    )
    };

    export default Policies;
    


// const Policies = () => {
//   return (
//     <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
//       <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//         <ul id="footer-policies" className="text-white">
//           <h1 className="font-bold text-lg">Policies</h1>
//           <li className="mt-2">
//             <a
//               href="/privacyPolicy"
//               className="text-indigo-600 hover:underline"
//             >
//               Privacy policy
//             </a>
//           </li>
//           <li className="mt-2">
//             <a href="/terms" className="text-indigo-600 hover:underline">
//               Terms of service
//             </a>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Policies;
