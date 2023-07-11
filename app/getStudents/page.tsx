import data from "../../data/people.json";
import styles from "../styles/studentlist.module.css";
import Image from "next/image";
import GroupsComponent from "../components/Groups";
import StudentModal from "../components/StudentModal";
import GroupsPanel from "../components/GroupsPanel.tsx";
import StudentCard from "../components/StudentCard.tsx";
import type { Student, Group } from "../../types.ts";

interface pageProps {}

const page: any = async ({}) => {
  const studentData = await fetch(
    "https://courses.bootcampspot.com/api/v1/courses/3710/users?include_inactive=true&include%5B%5D=avatar_url&include%5B%5D=enrollments&include%5B%5D=email&include%5B%5D=observed_users&include%5B%5D=can_be_removed&include%5B%5D=custom_links&per_page=50",
    {
      "headers": {
        "accept":
          "application/json, text/javascript, application/json+canvas-string-ids, */*; q=0.01",
        "accept-language": "en-US,en;q=0.9",
        "if-none-match": 'W/"988ddc495d683f8aa54ca5a6b800c22a"',
        "sec-ch-ua":
          '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"macOS"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "sentry-trace": "0e6ee5c4143d44f4878d3a3c7c8fcc02-82ac4146547c99cf-0",
        "x-csrf-token":
          "0IatBEokYV/XbBsT4q9jNpJzQJSh9fM3kmcGLn216J2l8uN1KV5ZcL4bWmOn5hMdxTgFzPKkgkTLLGRZTcec3A==",
        "x-requested-with": "XMLHttpRequest",
        "cookie":
          "_ga=GA1.1.1244240053.1687195314; OptanonConsent=isGpcEnabled=0&datestamp=Fri+Jul+07+2023+18%3A14%3A53+GMT-0700+(Pacific+Daylight+Time)&version=202306.1.0&browserGpcFlag=0&isIABGlobal=false&hosts=&landingPath=NotLandingPage&groups=C0001%3A1%2CC0003%3A1%2CC0002%3A1&AwaitingReconsent=false&geolocation=US%3BNC; OptanonAlertBoxClosed=2023-07-08T01:14:53.368Z; _hp2_ses_props.3001039959=%7B%22r%22%3A%22https%3A%2F%2Fcourses.bootcampspot.com%2Fcourses%2F3710%2Fusers%22%2C%22ts%22%3A1688830281111%2C%22d%22%3A%22courses.bootcampspot.com%22%2C%22h%22%3A%22%2Fcourses%2F3710%2Fexternal_tools%2F238%22%7D; _ga_XXN50SC2TH=GS1.1.1688830282.18.0.1688830282.0.0.0; log_session_id=3e7026c80530b4c4d364f301a434e76e; _legacy_normandy_session=eQzfsI5DOaGhRSgWFTJ6Iw+4YahS_uy_lBlGYuucHeg_2-e_LfA26Qq_X5bcxP5gcfRaj3i6Iq_R_lfwKMstQ7tWypOJpfSpbOToGwikau-BnIC39L5gdjNdi1M7h2ryq8tyd_mPCAwHjntYZiSeICj3xM54RVQhjRwfQJiYfWb0EfzFlin7wC5KXPD7BM5tgrvNU5RBl4NzNn_8Pd3Kklw4cFuc1PbtLjaHLujDXIlSRmyxmYlR4ufcSnsb_jmMTKWOaIgknt_Vbx4z2J3EmbIFs61p5j5dolnXh1dvIfxZmfL8PZPprVGdBgh-vlddv-GM3gYDisN27AjKJSN_Rok5VmX5be6g6mfptz0ew2UzX5rzibFjiFNDn92obORfzvwiKGuEXI9QEQKiLwp518HABgXmRrg64k-1U9Sv12UrkND5o0SH2SBrLRV2TIKQrcaGCm-R1-sDlXqxgBhSnMAEc7nCciHhxL6oKllxWlfInVV8yV7QgRKxLzJkApO2x-u7qMr04bI3oPRghIqgmTXM7WimgDmnm07KxO0oy5yNjcVy4uiVfVFDU10WYsWlmYrRqkpSnvY6a6QKf0RuZPlwfjTvOSPiiMoDM352RhV8L8EXnmBzWEd7NnHcnuLnLAekoor2Ww6yHDyIN5Gg475HlwRUGIRe0WNT4-3MJBtJhQBkN-a_T-em2Vb03IwkSU.TEFXjadXpOVDnE86anE3XPKBFBY.ZKmBTw; canvas_session=eQzfsI5DOaGhRSgWFTJ6Iw+4YahS_uy_lBlGYuucHeg_2-e_LfA26Qq_X5bcxP5gcfRaj3i6Iq_R_lfwKMstQ7tWypOJpfSpbOToGwikau-BnIC39L5gdjNdi1M7h2ryq8tyd_mPCAwHjntYZiSeICj3xM54RVQhjRwfQJiYfWb0EfzFlin7wC5KXPD7BM5tgrvNU5RBl4NzNn_8Pd3Kklw4cFuc1PbtLjaHLujDXIlSRmyxmYlR4ufcSnsb_jmMTKWOaIgknt_Vbx4z2J3EmbIFs61p5j5dolnXh1dvIfxZmfL8PZPprVGdBgh-vlddv-GM3gYDisN27AjKJSN_Rok5VmX5be6g6mfptz0ew2UzX5rzibFjiFNDn92obORfzvwiKGuEXI9QEQKiLwp518HABgXmRrg64k-1U9Sv12UrkND5o0SH2SBrLRV2TIKQrcaGCm-R1-sDlXqxgBhSnMAEc7nCciHhxL6oKllxWlfInVV8yV7QgRKxLzJkApO2x-u7qMr04bI3oPRghIqgmTXM7WimgDmnm07KxO0oy5yNjcVy4uiVfVFDU10WYsWlmYrRqkpSnvY6a6QKf0RuZPlwfjTvOSPiiMoDM352RhV8L8EXnmBzWEd7NnHcnuLnLAekoor2Ww6yHDyIN5Gg475HlwRUGIRe0WNT4-3MJBtJhQBkN-a_T-em2Vb03IwkSU.TEFXjadXpOVDnE86anE3XPKBFBY.ZKmBTw; _hp2_id.3001039959=%7B%22userId%22%3A%221156963813512251%22%2C%22pageviewId%22%3A%227086452639247521%22%2C%22sessionId%22%3A%221939990503595348%22%2C%22identity%22%3Anull%2C%22trackerVersion%22%3A%224.0%22%7D; _csrf_token=0IatBEokYV%2FXbBsT4q9jNpJzQJSh9fM3kmcGLn216J2l8uN1KV5ZcL4bWmOn5hMdxTgFzPKkgkTLLGRZTcec3A%3D%3D",
        "Referer": "https://courses.bootcampspot.com/courses/3710/users",
        "Referrer-Policy": "no-referrer-when-downgrade",
      },
      "body": null,
      "method": "GET",
    }
  );

  const data = await studentData.json();

  // console.log("DATA", data);
  //   console.log("STUDENT DATA", studentData.json());
  return data;
};
export default page;
