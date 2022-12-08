import React from "react";
import { blog1, blog2, blog3, blog4, blog5 } from "./imports";
import "./blog.css";

const BlogPost = (props) => (
  <div className="blog-post">
    <div className="blog-post-container">
      <img src={props.image} alt="" />
      <div className="blog-text-container">
        <p className="blog-text-date">Sep 26, 2022</p>
        <h4 className="blog-text-title">
          GPT-3 and Open AI is the future. Let us exlore how it is?
        </h4>
        <p>Read Full Article</p>
      </div>
    </div>
  </div>
);

const Blog = () => {
  return (
    <div className="gpt3__blog">
      <div className="gpt3__blog_container">
        <div className="gpt3_blog-heading">
          <h1>
            A lot is happening,
            We are blogging about it.
          </h1>
        </div>
        <div className="gpt3__blog_posts">
          <div className="gpt3__blog_posts_blog1">
            <img src={blog1} alt="blog1" />
            <div className="gpt3__blog_posts-blog-text-container">
              <p className="gpt3__blog_posts-blog-text-date">Sep 26, 2022</p>
              <h4 className="gpt3__blog_posts-blog-text-title">
                GPT-3 and Open AI is the future. Let us exlore how it is?
              </h4>
              <p>Read Full Article</p>
            </div>
          </div>
          <div className="gpt3__blog_posts_others">
            <BlogPost image={blog2} />
            <BlogPost image={blog3} />
            <BlogPost image={blog4} />
            <BlogPost image={blog5} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
