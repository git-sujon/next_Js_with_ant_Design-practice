import MainLayout from "@/layout/MainLayout";
import { Card } from "antd";
import { Image } from "antd";
import { Typography } from "antd";
import {
  HeartOutlined,
  DislikeOutlined,
  ShareAltOutlined, 
  HeartTwoTone
} from "@ant-design/icons";
import { useState } from "react";


const { Title, Text } = Typography;

const BlogDetails = ({ blog }) => {
  const { id, title, author, date, content, image_url } = blog;
  const [selectTwoToneColor, setSelectTwoToneColor] = useState("")
  return (
    <div>
      <Card style={{maxWidth:"900px"}}>
        <Image width={900} height={500} src={image_url} alt={title} />
        <Title>{title}</Title>
        <Card>
          <div
            style={{
              display: "flex",
              gap:"20px",
              justifyItems: "center",
            }}
          >
            <Text type="success">{author}</Text>
            <Text type="success">{date}</Text>
            <HeartTwoTone twoToneColor={selectTwoToneColor} onClick={()=> setSelectTwoToneColor("#eb2f96")} />

  
            <DislikeOutlined />
            <ShareAltOutlined />
          </div>
        </Card>
        <Text>by {content}</Text>
      </Card>
    </div>
  );
};

export default BlogDetails;

BlogDetails.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(`http://localhost:5000/blogs/`);
  const blogs = await res.json();

  const paths = blogs.map((blog) => ({
    params: { id: blog.id },
  }));

  // { fallback: false } means other routes should 404
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(`http://localhost:5000/blogs/${params.id}`);
  const data = await res.json();

  return {
    props: {
      blog: data,
    },
  };
};
