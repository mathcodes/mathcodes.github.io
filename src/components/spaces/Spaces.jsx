import React, { useEffect, useState } from "react";

const Spaces = ({ spaces }) => {
  const [tweets, setTweets] = useState([]);

  const getSpacesQueryParams = () => {
    const params = new URLSearchParams();
    if (spaces.includes("tech")) {
      params.append("query", "tech");
    }
    if (spaces.includes("devrel")) {
      params.append("query", "devrel");
    }
    if (spaces.includes("web development")) {
      params.append("query", "web development");
    }
    if (spaces.includes("open source")) {
      params.append("query", "open source");
    }
    if (spaces.includes("edtech")) {
      params.append("query", "edtech");
    }
    if (spaces.includes("interviews")) {
      params.append("query", "interviews");
    }
    if (spaces.includes("reviews")) {
      params.append("query", "reviews");
    }
    if (spaces.includes("jobs")) {
      params.append("query", "jobs");
    }
    if (spaces.includes("tech industry")) {
      params.append("query", "tech industry");
    }
    if (spaces.includes("hunt")) {
      params.append("query", "hunt");
    }
    return params.toString();
  };

  useEffect(() => {
    const getTweets = async () => {
      try {
        const queryParams = getSpacesQueryParams();
        const response = await fetch(
          `https://api.twitter.com/2/tweets/search/recent?${queryParams}`,
          {
            headers: {
              Authorization: "Bearer AAAAAAAAAAAAAAAAAAAAAJbQiAEAAAAAkkBJXqWLiDogghSD0u9rmOEXXNg%3DKLi7RnqOujlBaJb3TEWbEFO9FXc0Gz4BO4OzuSAjMMs4JXxhb8",
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          setTweets(data.data);
        } else {
          console.error("Error getting tweets", response.status);
        }
      } catch (err) {
        console.error("Error getting tweets", err);
      }
    };

    getTweets();
  }, [spaces]);

  return (
    <div>
      {tweets.length > 0 ? (
        <ul>
          {tweets.map((tweet) => (
            <li key={tweet.id}>
              {tweet.text} -{" "}
              <a
                href={`https://twitter.com/jcircle9/`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {tweet.author_name}
              </a>{" "}
              ({new Date(tweet.created_at).toLocaleString()})
            </li>
          ))}
        </ul>
      ) : (
''
      )}
    </div>
  );
};

export default Spaces;
