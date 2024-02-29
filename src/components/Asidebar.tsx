import { Disclosure } from "@headlessui/react";

const Asidebar = () => {
  return (
    <aside>
      <Disclosure as="div">
        <Disclosure.Button className="flex flex-row justify-between gap-6">
          <span>Product Categories </span>
          <span>+</span>
        </Disclosure.Button>
        <Disclosure.Panel as="ul">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </Disclosure.Panel>
      </Disclosure>
    </aside>
  );
};

export default Asidebar;
