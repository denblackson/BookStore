import { Layout, Menu } from "antd";
import "./globals.css";
import Link from "next/link";
import { Content, Footer, Header } from "antd/es/layout/layout";

const items = [
  { key: "home", label: <Link href={"/"}>Home</Link>},
  { key: "books", label: <Link href={"/books"}>Books</Link>},
];


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Layout style={{ minHeight: "100vh" }}>
          <Header>
            <Menu
              theme="dark"
              mode="horizontal"
              items={items}
              style={{ flex: 1, minWidth: 0 }}
            />
          </Header>
          <Content style={{ padding: "0 48px" }}>{children}</Content>
          <Footer style ={{ textAline: "ctnter" }}>
            Book store 2024 pet project 
          </Footer>
          </Layout>
      </body>
    </html>
  );
}
