/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from "@headlessui/react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Cek Pesanan", href: "/a", current: false },
  { name: "Daftar", href: "#", current: false },
  { name: "Login", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavbarComponent() {
  return (
    <Disclosure as="nav" className="bg-gray-800 shadow-lg">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <FaTimes className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <FaBars className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <Link to="/">
                    <img
                      className="block lg:hidden h-8 w-auto rounded-full"
                      src="https://img.freepik.com/free-vector/cute-mummy-gaming-cartoon-illustration-halloween-gaming-icon-concept_138676-1889.jpg?t=st=1652080509~exp=1652081109~hmac=ba3d9b3e3a5187adfb1bb4b9f9d6f5136592d8d2bab28bcad930e6eee144e9f7&w=826"
                      alt="Workflow"
                    />
                  </Link>
                  <Link to="/">
                    <img
                      className="hidden lg:block h-8 w-auto rounded-full"
                      src="https://img.freepik.com/free-vector/cute-mummy-gaming-cartoon-illustration-halloween-gaming-icon-concept_138676-1889.jpg?t=st=1652080509~exp=1652081109~hmac=ba3d9b3e3a5187adfb1bb4b9f9d6f5136592d8d2bab28bcad930e6eee144e9f7&w=826"
                      alt="Workflow"
                    />
                  </Link>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={classNames(
                    "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
