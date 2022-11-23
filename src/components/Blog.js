import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog-body'>
         <div className="blog-body'">  <div className="hero  bg-base-200 ">
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl " />
    <div>
      <h1 className="text-3xl font-bold ">What is cors?</h1>
      <h3 className="py-6 text-2xl ">CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.</h3>
     
    </div>
  </div>
</div></div>
<br />
           <div className="hero  bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-3xl font-bold">Why are you using firebase? What other options do you have to implement authentication?</h1>
      <h3 className="py-6 text-2xl ">Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together.
      Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</h3>
     
    </div>
  </div>
</div>
<br />
           <div className="hero  bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-3xl font-bold"> How does the private route work?</h1>
      <h3 className="py-6 text-2xl ">The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property..</h3>
     
    </div>
  </div>
</div>
<br />

           <div className="hero  bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-3xl font-bold"> What is Node? How does Node work?</h1>
      <h3 className="py-6 text-2xl ">Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications.
      It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</h3>
     
    </div>
  </div>
</div>
<br />
        </div>
    );
};

export default Blog;