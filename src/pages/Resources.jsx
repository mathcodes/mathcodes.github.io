import React from 'react';
import Methods from '../components/methods/Methods';

const Resources = () => {
  const [showMethods, setShowMethods] = React.useState(false);

  const onShowMethods = () => {
    setShowMethods(!showMethods);

    console.log(showMethods);
  };

  return (

    <div className="grid gap-6 p-6 m-1 text-gray-500 bg-white rounded-lg shadow-md sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
      <div className="col-span-1 p-4 m-1 text-gray-500 bg-white rounded-lg shadow-md">
        <h1 className="text-lg text-orange-500">Array Methods</h1>
        <p className="text-sm">Click the button below to see the methods</p>
        <button
          className="px-4 py-2 mt-4 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-orange-500 rounded-md hover:bg-orange-600 focus:outline-none focus:bg-orange-600"
          onClick={onShowMethods}
        >
          Show Methods
        </button>
        {showMethods && <Methods />}
      </div>
    </div>
  );
};

export default Resources;