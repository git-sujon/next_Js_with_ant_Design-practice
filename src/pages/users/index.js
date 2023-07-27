import MainLayout from "@/layout/MainLayout";
import { Table } from "antd";
import React from "react";
import { CheckCircleTwoTone, HeartTwoTone, SmileTwoTone } from '@ant-design/icons';
const UsersPage = ({ users }) => {


    const columns = Object.keys(users[0]).map((key) => ({
        dataIndex: key,
        title: key,
        key: key,
        render: (text, record) => {
          if (key === "isActive") {
            return record[key] ? <CheckCircleTwoTone twoToneColor="#52c41a" /> : <CheckCircleTwoTone twoToneColor='#f70202'/>
          }
          return text;
        },
      }));



  return (
    <div>
      <Table bordered={true} size="small" dataSource={users} columns={columns} type="radio" />
    </div>
  );
};

export default UsersPage;
UsersPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:5000/users");
  const data = await res.json();

  return {
    props: {
      users: data,
    },
  };
};
