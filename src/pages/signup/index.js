import MainLayout from "@/layout/MainLayout";
import { Card, Button, Checkbox, Form, Input } from "antd";
const SignUpPage = () => {
  const handleSubmit = (value) => {
    console.log(value)
  };

  return (
    <div style={{
        display:"flex",
        justifyContent:"center",
        justifyItems:"center",
        marginTop:"20px"
    }}>
      <Card>
        <Form layout="vertical" onFinish={handleSubmit}>
          <Form.Item name="name"status="error" label="Name">
            <input size="large" type="name" placeholder="Enter Your Name..." />
          </Form.Item>
          <Form.Item name="email" label="Email">
            <input size="large" type="email" placeholder="Enter Your Email..." />
          </Form.Item>
          <Form.Item name="password" label="Password">
            <input size="large" type="password" placeholder="Enter Your password..." />
          </Form.Item>
          <Form.Item>
           <Button type="primary" htmlType="submit">Submit</Button>
          </Form.Item>

        </Form>
      </Card>
    </div>
  );
};

export default SignUpPage;

SignUpPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
