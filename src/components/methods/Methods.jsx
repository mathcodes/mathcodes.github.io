import React from 'react';
import { arrayMethods } from '../../data/methodsData';

const codeStyle = {
  fontFamily: 'Consolas, "courier new"',
  color: '#ff6600',
  backgroundColor: '#333333',
  padding: '2px',
  fontSize: '105%',
  borderRadius: '5px',
};



const Methods = () => {
  // <div className="grid grid-cols-1 mt-6 sm:grid-cols-1 mg:grid-cols-2 sm:gap-10">
  let methods = arrayMethods.map((method) => (
<div className="p-4 m-1 bg-white border border-gray-200 rounded-lg shadow-md">
  <h1 className="mb-2 text-lg font-medium text-orange-500">{method.title}</h1>
  <p className="mb-4 text-sm text-gray-500">{method.def}</p>
  <div className="p-4 bg-gray-100 rounded-lg">
    <code className="block mb-2 text-sm text-gray-800 dark:text-gray-200">{method.desc}</code>
    <code className="block mb-2 text-sm text-gray-800 dark:text-gray-200">{method.descr2}</code>
    <code className="block mb-2 text-sm text-gray-800 dark:text-gray-200">{method.descr3}</code>
    <code className="block mb-2 text-sm text-gray-800 dark:text-gray-200">{method.descr4}</code>
    <code className="block mb-2 text-sm text-gray-800 dark:text-gray-200">{method.descr5}</code>
    <code className="block mb-2 text-sm text-gray-800 dark:text-gray-200">{method.descr6}</code>
    <code className="block mb-2 text-sm text-gray-800 dark:text-gray-200">{method.descr7}</code>
    <code className="block text-sm">{method.descr8}</code>
  </div>
</div>

  ));

  return (

      <div className="grid justify-between grid-cols-1 mt-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 sm:gap-10">

      {methods}
      </div>
  );
};

export default Methods;
