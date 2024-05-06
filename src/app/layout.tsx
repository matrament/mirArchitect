import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ConfigProvider } from "antd";
import { Lato } from "next/font/google";
import { Open_Sans } from "next/font/google";

export const metadata: Metadata = {
  title: "miRarchitect",
  description:
    "Machine learning-based tool for rational design of artificial miRNAs.",
};
const openSans = Lato({
  style: "normal",
  weight: "400",
  subsets: ["latin"],
});

const openSansThin = Open_Sans({
  style: "normal",
  weight: "300",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={openSans.className}>
      <body>
        {/* <script>0</script> */}
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#00FAAB",
              borderRadius: 16,
              fontFamily: openSans.style.fontFamily,
              borderRadiusSM: 12,
              borderRadiusLG: 20,
            },
            components: {
              Button: {
                textHoverBg: "#f9f9f9",
                primaryColor: "#000000",
                fontFamily: openSans.style.fontFamily,
                defaultBorderColor: "#000000",

                // contentFontSize: 16,
              },
              Upload: {
                lineWidth: 0,
              },
              Table: {
                headerBorderRadius: 0,
                fontFamily: openSans.style.fontFamily,
                rowSelectedBg: "white",
                rowSelectedHoverBg: "#f9f9f9",
                rowHoverBg: "#F0FFFA",
              },
              Collapse: {
                contentPadding: "0px 0px",
                fontFamily: openSans.style.fontFamily,
                // colorBorder: "#dcdcdc",
              },
              Input: {
                fontFamily: openSans.style.fontFamily,
                // colorBorder: "#000000",
              },
              InputNumber: {
                fontFamily: openSans.style.fontFamily,
              },
              Select: {
                fontFamily: openSans.style.fontFamily,
                // optionFontSize: 16,
              },
              Modal: {
                borderRadiusSM: 16,
              },
            },
          }}
        >
          <Header />
          <main>{children}</main>
          <Footer />
        </ConfigProvider>
      </body>
    </html>
  );
}
