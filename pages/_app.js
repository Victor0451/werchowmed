import App from "next/app";
import { WerchowProvider } from "../context/WerchowProvider";
import "../css/styles.css";
import "react-table/react-table.css";
import "react-confirm-alert/src/react-confirm-alert.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "@fullcalendar/common/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";

const MyApp = (props) => {
  const { Component, pageProps } = props;

  return (
    <WerchowProvider>
      <Component {...pageProps} />
    </WerchowProvider>
  );
};

export default MyApp;
