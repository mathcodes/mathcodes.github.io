// create a component using the data from '../data/MathodsData.js' and display it in the browser using tailwind cards

import React from 'react'
import { arrayMethods } from '../../data/methodsData'

const codeStyle = {
  'font-family': 'Consolas,"courier new"',
  'color': '#ff6600',
  'background-color': '#333333',
  'padding': '2px',
  'font-size': '105%',
  'border-radius': '5px'
}
const Methods = () => {
  console.log(arrayMethods)
  console.log(arrayMethods[0].desc)
  // console.log(arrayMethods.desc[0])
  // const firstDesc = method?.desc?.[0];


    const methods = arrayMethods.map((method) => {


      return (


            // make a grid with 4 columns at lg and 1 at xs with bg colors
                <div className="col-span-1 p-4 m-1 text-gray-500 bg-white rounded-lg shadow-md">
                    <h1 className="text-lg text-orange-500">{method.title}</h1>
                    <p
                        className="text-sm">
                        {method.def}
                    </p>
                    <div style={codeStyle}>
                      {/* {firstDesc} */}

                    <div><code className="text-sm">{method.desc}</code></div>
                    <div><code className="text-sm">{method.descr2}</code></div>
                    <div><code className="text-sm">{method.descr3}</code></div>
                    <div><code className="text-sm">{method.descr4}</code></div>
                    <div><code className="text-sm">{method.descr5}</code></div>
                    <div><code className="text-sm">{method.descr6}</code></div>
                    <div><code className="text-sm">{method.descr7}</code></div>
                    <div><code className="text-sm">{method.descr8}</code></div>

                    </div>
                </div>


        )
    }
    )

    return (
      <div className="grid gap-6 p-6 m-1 text-gray-500 bg-white rounded-lg shadow-md ">

                    {methods}

        </div>)
}

export default Methods