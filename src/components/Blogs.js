import MainLayout from "@/layout/MainLayout";
import React from "react";
import { Card, Col, Image, Row } from "antd";
import Link from "next/link";
const { Meta } = Card;

const Blogs = ({ blogs }) => {
  return (
    <Row gutter={16}>
      {blogs?.map((blog) => (
        <Col key={blog?.id} className="gutter-row" span={6}>
          <Card>
            <Image src={blog.image_url} alt={blog.title} />

            <Link href={`blogs/${blog.id}`}>
              <Meta
                title={blog?.title}
                description={`${
                  blog.content.length < 50
                    ? blog.content
                    : blog.content.slice(0, 100)
                }...`}
                style={{
                  marginTop: "10px",
                  height: "130px",
                }}
              />

              <div
                style={{
                  marginTop: "10px",
                  display: "flex",
                  justifyContent: "space-between",
                  justifyItems: "center",
                }}
              >
                <small>{blog.author}</small>
                <small>{blog.date}</small>
              </div>
            </Link>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Blogs;
