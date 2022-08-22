import React from 'react'
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const TabButtons = ({ id, name, activeTab, setActiveTab }) => {

  const handleClick = () => {
    setActiveTab(id);
  };
 
  return (
    <>
      <div className="">
          <nav className="flex -mb-px space-x-8" aria-label="Tabs">
            <button
              key={id}
              onClick={handleClick}
              className={classNames(
                activeTab === id
                  ? "border-primary text-primary"
                  : "tab-child border-transparent text-gray500 hover:text-gray-700 hover:border-gray-300",
                "whitespace-nowrap py-2 px-1.5 mr-3 border-b-2 font-medium text-sm"
              )}
            >
              {name}
            </button>
          </nav>
        </div>
      
    </>
  );
};

export default TabButtons