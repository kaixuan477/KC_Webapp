import React from "react";
//import { useState, useEffect } from "react";
//import { useKeycloak } from '@react-keycloak/web';

const Nav = ({ keycloak, initialized }) => {
// const { keycloak } = useKeycloak();

// const [authenticated, setAuthenticated] = useState(false);

// useEffect(() => {
//   const checkAuthentication = async () => {
//     if (initialized) {
//       const authenticated = await keycloak.authenticated;
//       setAuthenticated(authenticated);
//     }
//   };

//   checkAuthentication();
// }, [initialized, keycloak]);

 return (
   <div>
     <div className="top-0 w-full flex flex-wrap">
       <section className="x-auto">
         <nav className="flex justify-between bg-gray-200 text-blue-800 w-screen">
           <div className="px-5 xl:px-12 py-6 flex w-full items-center">
             <h1 className="text-3xl font-bold font-heading">
               Keycloak Webapp
             </h1>
             <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
               <li>
                 <a className="hover:text-blue-800" href="/">
                   Home
                 </a>
               </li>
               <li>
                 <a className="hover:text-blue-800" href="/public">
                   Public Page
                 </a>
               </li>
               <li>
                 <a className="hover:text-blue-800" href="/secured">
                   Private Page
                 </a>
               </li>
             </ul>
             <div className="hidden xl:flex items-center space-x-5">
               <div className="hover:text-gray-200">
                 {!keycloak.authenticated && (
                   <button
                     type="button"
                     className="text-blue-800"
                     onClick={() => keycloak.login()}
                   >
                     Login
                   </button>
                 )}

                 {keycloak.authenticated && (
                   <button
                     type="button"
                     className="text-blue-800"
                     onClick={() => keycloak.logout()}
                   >
                     Logout
                   </button>
                 )}
               </div>
             </div>
           </div>
         </nav>
       </section>
     </div>
   </div>
 );
};

export default Nav;
