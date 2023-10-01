import logo from '../../assets/images/logo.png';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/logSign');
    };

    return (
        <div className="bg-indigo-900 text-white">
            <nav className="mx-auto flex flex-col lg:flex-row items-center justify-between p-6 lg:px-8">
                <div className="lg:w-1/4 w-full flex items-center justify-center">
                    <img src={logo} alt="Healthcare logo" className="mx-auto max-w-[130px]" />
                </div>

                <div className="w-full flex items-center justify-center lg:justify-between">
                    <ul
                        id="main-menu"
                        className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-6"
                    >
                        <li className="main-menu-item">
                            <Link to="/">Homepage</Link>
                        </li>
                        <li className="main-menu-item">
                            <Link to="/about">About us</Link>
                        </li>
                        <li className="main-menu-item">
                            <Link to="/profile">Profile</Link>
                        </li>
                        <li className="main-menu-item">
                            <Link to="/services">Services</Link>
                        </li>
                    </ul>
                </div>

                <div className="lg:w-1/4 w-full flex items-center justify-center lg:justify-end">
                    <Link to="/user-profile">
                        <span className="main-menu-item">
                            {' '}
                            {/* TODO get user name and surname */}
                            User name
                        </span>
                    </Link>

                    <button
                        className="ml-2 text-base font-semibold h-full leading-8 text-gray-900 bg-F8E8EA rounded-lg py-0 px-4 whitespace-nowrap"
                        style={{
                            backgroundColor: '#F8E8EA',
                            color: '#18172B',
                            borderRadius: '8px',
                        }}
                        onClick={handleLoginClick}
                    >
                        Log in
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default Header;

{
    /* {/* const Header = () => {
 return (
 <div className="bg-indigo-900 text-white">
 <nav className="mx-auto flex flex-col lg:flex-row items-center justify-between p-6 lg:px-8">
 <div className="lg:w-1/4 w-full flex items-center justify-center">
 <img
 src={logo}
 alt="Healthcare logo"
 className="mx-auto max-w-[130px]"
 />
 </div>

 <div className="w-full flex items-center justify-center lg:justify-between">
 <ul
 id="main-menu"
 className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-6"
 >
 <li className="main-menu-item">
 <Link to="/">Homepage</Link>
 </li>
 <li className="main-menu-item">
 <Link to="/about">About us</Link>
 </li>
 <li className="main-menu-item">
 <Link to="/profile">Profile</Link>
 </li>
 <li className="main-menu-item">
 <Link to="/services">Services</Link>
 </li>
 </ul>
 </div>

 <div className="lg:w-1/4 w-full flex items-center justify-center lg:justify-end">
 <button
 className="text-base font-semibold h-full leading-8 text-gray-900 bg-F8E8EA rounded-lg py-0 px-4 whitespace-nowrap"
 style={{
 backgroundColor: "#F8E8EA",
 color: "#18172B",
 borderRadius: "8px",
 }}
 onClick={() => (window.location.href = "/logSign")}
 >
 Log in
 </button>

 </div>
 </nav>
 </div>
 );
 };

 export default Header; */
}

{
    /* // import React, { useState, Fragment } from "react";

 // import logo from "../../assets/images/logo.png";
 // import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";

 // function classNames(...classes: string[]) {
 //     return classes.filter(Boolean).join(' ');
 //   }

 // const Header = () => }
 //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

 //   const callsToAction = [
 //     { name: 'Watch demo', href: '#'  },
 //     { name: 'Contact sales', href: '#' },
 //   ];

 //   const Header = () => {
 //     const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

 //     const services = [
 //       { name: "Homepage", href: "/home" },
 //       { name: "About us", href: "/about" },
 //       { name: "Profile", href: "/profile" },
 //       { name: "Services", href: "/services" },
 //     ];

 //     return (
 //       <div className="bg-indigo-900 text-white">
 //         <nav className="mx-auto flex items-center justify-between p-6 lg:px-8">
 //           <div className="lg:w-1/4 w-full flex items-center justify-start">
 //             <a href="#" className="-m-1.5 p-1.5">
 //               <span className="sr-only">Your Company</span>
 //               <img
 //                 src={logo}
 //                 alt="Healthcare logo"
 //                 className="mx-auto"
 //                 style={{ maxWidth: "130px", height: "auto", margin: "0" }}
 //               />
 //             </a>
 //           </div>

 //           <div className="flex items-center justify-center w-full">
 //             <ul id="main-menu" className="flex items-center space-x-6 justify-center">
 //               {services.map((item) => (
 //                 <li className="main-menu-item" key={item.name}>
 //                   <a href={item.href}>{item.name}</a>
 //                 </li>
 //               ))}
 //             </ul>
 //           </div>

 //           <div className="lg:w-1/4 w-full flex items-center justify-end">
 //             <button
 //               className="text-base font-semibold h-full leading-8 text-gray-900 bg-F8E8EA rounded-lg py-0 px-4 whitespace-nowrap"
 //               style={{
 //                 backgroundColor: "#F8E8EA",
 //                 color: "#18172B",
 //                 borderRadius: "8px",
 //               }}
 //               onClick={() => (window.location.href = "#")}
 //             >
 //               Log in
 //             </button>
 //           </div>

 //           <div className="flex lg:hidden">
 //             <button
 //               type="button"
 //               className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
 //               onClick={() => setMobileMenuOpen(true)}
 //             >
 //               <span className="sr-only">Open main menu</span>
 //               {/* <Bars3Icon className="h-6 w-6" aria-hidden="true" /> */
}
//             </button>
//           </div>

//           <Popover.Group className="hidden lg:flex lg:gap-x-12">
//             <Popover className="relative">
//               <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
//                 Services
//                 {/* <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" /> */}
//               </Popover.Button>

//               <Transition
//                 as={Fragment}
//                 enter="transition ease-out duration-200"
//                 enterFrom="opacity-0 translate-y-1"
//                 enterTo="opacity-100 translate-y-0"
//                 leave="transition ease-in duration-150"
//                 leaveFrom="opacity-100 translate-y-0"
//                 leaveTo="opacity-0 translate-y-1"
//               >
//                 <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
//                   <div className="p-4">
//                     {services.map((item) => (
//                       <div
//                         key={item.name}
//                         className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
//                       >
//                         <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
//                           {/* <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" /> */}
//                         </div>
//                         <div className="flex-auto">
//                           <a href={item.href} className="block font-semibold text-gray-900">
//                             {item.name}
//                             <span className="absolute inset-0" />
//                           </a>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </Popover.Panel>
//               </Transition>
//             </Popover>

//             {/* Додайте інші пункти меню тут */}
//           </Popover.Group>
//         </nav>
//       </div>
//     );
//   };
// };
//   export default Header; */}
