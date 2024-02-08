// This is a mock function that simulates the login process
// You will need to replace it with your own logic
function login(event) {
    event.preventDefault();
    // Get the username and password from the form
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    // Check if the username and password are valid
    // For simplicity, we assume that any non-empty values are valid
    if (username && password) {
      // Hide the login form and show the feeds
      document.getElementById("login").style.display = "none";
      document.getElementById("feeds").style.display = "flex";
      // Fetch the feeds from the social media platforms
      fetchFacebookFeed();
      fetchTwitterFeed();
      fetchInstagramFeed();
    } else {
      // Show an alert message
      alert("Please enter a valid username and password.");
    }
  }
  
  // This is a mock function that simulates fetching the Facebook feed
  // You will need to replace it with your own logic
  function fetchFacebookFeed() {
    // Get the element where the posts will be displayed
    var facebookPosts = document.getElementById("facebook-posts");
    // Clear any existing posts
    facebookPosts.innerHTML = "";
    // Create some dummy posts
    var posts = [
      {
        author: "Mark Zuckerberg",
        content: "I'm excited to announce that we have reached 3 billion monthly active users on Facebook. Thank you for being part of our community.",
        likes: 1000000,
        comments: 50000,
        shares: 10000
      },
      {
        author: "Bill Gates",
        content: "I had a great conversation with Mark Zuckerberg about how we can work together to fight climate change and improve global health.",
        likes: 500000,
        comments: 20000,
        shares: 5000
      },
      {
        author: "Elon Musk",
        content: "Just launched another Starlink mission. Internet for everyone!",
        likes: 300000,
        comments: 10000,
        shares: 3000
      }
    ];
    // Loop through the posts and create list items for each one
    for (var i = 0; i < posts.length; i++) {
      var post = posts[i];
      // Create a list item element
      var li = document.createElement("li");
      // Create a paragraph element for the author
      var pAuthor = document.createElement("p");
      pAuthor.textContent = post.author;
      // Create a paragraph element for the content
      var pContent = document.createElement("p");
      pContent.textContent = post.content;
      // Create a paragraph element for the reactions
      var pReactions = document.createElement("p");
      pReactions.textContent = post.likes + " likes, " + post.comments + " comments, " + post.shares + " shares";
      // Append the elements to the list item
      li.appendChild(pAuthor);
      li.appendChild(pContent);
      li.appendChild(pReactions);
      // Append the list item to the posts element
      facebookPosts.appendChild(li);
    }
  }
  
  // This is a mock function that simulates fetching the Twitter feed
  // You will need to replace it with your own logic
  function fetchTwitterFeed() {
    // Get the element where the tweets will be displayed
    var twitterTweets = document.getElementById("twitter-tweets");
    // Clear any existing tweets
    twitterTweets.innerHTML = "";
    // Create some dummy tweets
    var tweets = [
      {
        author: "@narendramodi",
        content: "Had a fruitful discussion with President Joe Biden on the India-US strategic partnership and our shared priorities.",
        likes: 200000,
        retweets: 50000,
        replies: 10000
      },
      {
        author: "@BarackObama",
        content: "Michelle and I are thrilled to be one step closer to bringing the Obama Presidential Center to life in Chicago. We hope it will inspire the next generation of leaders—and we hope to see you there.",
        likes: 1000000,
        retweets: 200000,
        replies: 50000
      },
      {
        author: "@KimKardashian",
        content: "So excited to announce my new SKIMS collection. Shop now at skims.com",
        likes: 500000,
        retweets: 100000,
        replies: 20000
      }
    ];
    // Loop through the tweets and create list items for each one
    for (var i = 0; i < tweets.length; i++) {
      var tweet = tweets[i];
      // Create a list item element
      var li = document.createElement("li");
      // Create a paragraph element for the author
      var pAuthor = document.createElement("p");
      pAuthor.textContent = tweet.author;
      // Create a paragraph element for the content
      var pContent = document.createElement("p");
      pContent.textContent = tweet.content;
      // Create a paragraph element for the reactions
      var pReactions = document.createElement("p");
      pReactions.textContent = tweet.likes + " likes, " + tweet.retweets + " retweets, " + tweet.replies + " replies";
      // Append the elements to the list item
      li.appendChild(pAuthor);
      li.appendChild(pContent);
      li.appendChild(pReactions);
      // Append the list item to the tweets element
      twitterTweets.appendChild(li);
    }
  } // This is the missing closing curly brace
  