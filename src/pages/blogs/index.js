import MainLayout from '@/layout/MainLayout';
import React from 'react';

const BlogPage = ({blogs}) => {

    console.log(blogs)
    return (
        <div>
            This is the blog page 
        </div>
    );
};

export default BlogPage

BlogPage.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>;
  };


  export const getStaticProps = async() => {

    const res = await fetch("http://localhost:5000/blogs")
    const data =await res.json()

    return {
        props:{
            blogs:data
        }
    }

  }