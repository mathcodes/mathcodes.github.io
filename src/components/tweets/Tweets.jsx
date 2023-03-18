import React, { useState } from 'react';
import { FiTwitter } from 'react-icons/fi';

function Tweets() {
  const [showTweets, setShowTweets] = useState(false);

  const toggleTweets = () => {
    setShowTweets(!showTweets);
  };

  return (
    <div>
      <button
        className="relative top-0 right-0 flex items-center justify-center p-4 text-white bg-gray-800 rounded-full focus:outline-none"
        onClick={toggleTweets}
      >
        <FiTwitter size={20} color="#ff6600" />
        <span className="ml-2 text-primary-dark dark:text-ternary-light hover:text-orange-500 ">{showTweets ? 'Hide Tweets' : 'Show Tweets'}</span>
        <span className="ml-2 text-primary-dark dark:text-ternary-light hover:text-orange-500">&rarr;</span>
      </button>
      {showTweets && (
        <div className="flex flex-wrap justify-center p-12">
          <div className="flex flex-wrap justify-center">
      <div className="p-20 md:w-1/2 lg:w-1/3">
        <div className="bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <blockquote className="flex twitter-tweet" data-theme="dark">
            <div className="flex flex-col justify-between p-4">
              <p className="mb-4">
                <a href="https://t.co/YQFZyo0HIo"></a>{" "}
                <a href="https://twitter.com/hashtag/javascript?src=hash&ref_src=twsrc%5Etfw">
                  #javascript
                </a>{" "}

                <span className="inline-block px-2 py-1 mr-2 font-medium text-black bg-gray-800 rounded-full">
  #php
</span>

                <a href="https://t.co/gnmofTz1pv">pic.twitter.com/gnmofTz1pv</a>
              </p>
              <p className="text-sm text-gray-500">
                — Jon (@jCircle9){" "}
                <a
                  href="https://twitter.com/jCircle9/status/1634373837289660418?ref_src=twsrc%5Etfw"
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  March 11, 2023
                </a>
              </p>
            </div>
          </blockquote>
        </div>
      </div>
      <div className="p-4 md:w-1/2 lg:w-1/3">
        <div className="bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <blockquote className="twitter-tweet" data-theme="dark">
            <div className="flex flex-col justify-between p-4">
              <p className="mb-4">
                What does Google have that ChatGPT doesn't? In my experience as long as you know how to
                ask the questions you can get everything Google offers and more from Chat GBT.
              </p>
              <p className="text-sm text-gray-500">
                — Jon (@jCircle9){" "}
                <a
                  href="https://twitter.com/jCircle9/status/1613312266933526528?ref_src=twsrc%5Etfw"
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  January 11, 2023
                </a>
              </p>
            </div>
          </blockquote>
        </div>
      </div>
      <div className="p-4 md:w-1/2 lg:w-1/3">
        <div className="bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <blockquote className="twitter-tweet" data-theme="dark">
            <div className="flex flex-col justify-between p-4">
              <p className="mb-4">
                React LifeCycle Methods explained in two pages👍{" "}
                <a href="https://twitter.com/hashtag/reactnative?src=hash&ref_src=twsrc%5Etfw">
                  #reactnative
                </a>{" "}
                <a href="https://t.co/Tgo3DZRZ65">pic.twitter.com/Tgo3DZRZ65</a>
              </p>
              <p className="text-sm text-gray-500">
                — Jon (@jCircle9){" "}
                <a
                  href="https://twitter.com/jCircle9/status/1630337992660320256?ref_src=twsrc%5Etfw"
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  February 27, 2023
                </a>
              </p>
            </div>
          </blockquote>
        </div>

      </div>
      <div className="p-4 md:w-1/2 lg:w-1/3">
        <div className="bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <blockquote className="twitter-tweet" data-theme="dark">
            <div className="flex flex-col justify-between p-4 md:flex-row">
              <p className="mb-4">
                How do YOU distinguish between junior, mid, and senior developers? There are no
                black-and-white answers here, so what do YOU have to say!!! Please take a minute and
                chime in as this could be extremely valuable for all levels and individuals in the tech
                industry!{" "}
                <a href="https://twitter.com/hashtag/reactnative?src=hash&ref_src=twsrc%5Etfw">
                  #reactnative
                </a>
                … <a href="https://t.co/ftmzO9S583">https://t.co/ftmzO9S583</a>
              </p>
              <p className="text-sm text-gray-500">
                — Jon (@jCircle9){" "}
                <a
                  href="https://twitter.com/jCircle9/status/1627378514604195842?ref_src=twsrc%5Etfw"
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  February 19, 2023
                </a>
              </p>
            </div>
          </blockquote>
        </div>
      </div>
    </div>
        </div>
      )}
    </div>
  );
}

export default Tweets;



