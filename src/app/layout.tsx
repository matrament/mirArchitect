import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ConfigProvider } from "antd";
import { Montserrat } from "next/font/google";

export const metadata: Metadata = {
  title: "mirArchitect",
  description:
    "Machine learning-based tool for rational design of artificial miRNAs.",
};
const openSans = Montserrat({
  style: "normal",
  weight: "300",
  subsets: ["latin"],
});

const openSansBold = Montserrat({
  style: "normal",
  weight: "500",
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
              colorPrimary: "#59c9a5",
              borderRadius: 16,
              fontFamily: openSans.style.fontFamily,
            },
            components: {
              Button: {
                textHoverBg: "#f9f9f9",
                fontFamily: openSansBold.style.fontFamily,
                contentFontSize: 16,
              },
              Upload: {
                lineWidth: 0,
              },
              Table: {
                headerBorderRadius: 0,
                fontFamily: openSansBold.style.fontFamily,
                rowSelectedBg: "white",
                rowSelectedHoverBg: "#f9f9f9",
                rowHoverBg: "#EBF9F4",
              },
              Collapse: {
                contentPadding: "0px 0px",
                fontFamily: openSansBold.style.fontFamily,
                colorBorder: "#dcdcdc",
              },
              Input: {
                fontFamily: openSansBold.style.fontFamily,
              },
              InputNumber: {
                fontFamily: openSansBold.style.fontFamily,
              },
              Select: {
                fontFamily: openSansBold.style.fontFamily,
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
