import { Disclosure } from "@headlessui/react";

const Asidebar = () => {
  return (
    <aside className="p-4 flex flex-col gap-4">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="w-full flex flex-row justify-between">
              <span className="text-lg font-bold">Product Categories</span>
              <span>{open ? "-" : "+"}</span>
            </Disclosure.Button>
            <Disclosure.Panel className="transition-all ease-in-out duration-300">
              {open && (
                <ul>
                  <li>Category one</li>
                  <li>Category two</li>
                  <li>Category three</li>
                </ul>
              )}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="w-full flex flex-row justify-between">
              <span className="text-lg font-bold">Filter by price</span>
              <span>{open ? "-" : "+"}</span>
            </Disclosure.Button>
            <Disclosure.Panel className="transition-all ease-in-out duration-300">
              {open && (
                <ul>
                  <li>from high to low</li>
                  <li>from low to high</li>
                </ul>
              )}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </aside>
  );
};

export default Asidebar;
