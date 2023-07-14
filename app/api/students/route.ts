export async function GET() {
  const studentData = await fetch(
    "https://courses.bootcampspot.com/api/v1/courses/3710/users?include_inactive=true&include%5B%5D=avatar_url&include%5B%5D=enrollments&include%5B%5D=email&include%5B%5D=observed_users&include%5B%5D=can_be_removed&include%5B%5D=custom_links&per_page=50",
    {
      "headers": {
        "accept":
          "application/json, text/javascript, application/json+canvas-string-ids, */*; q=0.01",
        "accept-language": "en-US,en;q=0.9",
        "if-none-match": 'W/"ce8a8179895508ea294aa27d7b55b002"',
        "sec-ch-ua":
          '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "sentry-trace": "dcfdb8f8e4544326ab4b7e7102a74355-bb9afe196d4525d7-0",
        "x-csrf-token":
          "88DxYjFLqhZjS3otAVv8xiBCBBsLiQHmCsIvibFsXIrEksQTVHqeJxNgS25wKJntRgdRVTrPSrFJiBzc0Fg0zQ==",
        "x-requested-with": "XMLHttpRequest",
        "cookie":
          "OptanonConsent=isGpcEnabled=0&datestamp=Mon+Mar+06+2023+18%3A48%3A57+GMT-0500+(Eastern+Standard+Time)&version=202211.1.0&isIABGlobal=false&hosts=&landingPath=NotLandingPage&groups=&AwaitingReconsent=false&geolocation=US%3BNC; OptanonAlertBoxClosed=2023-03-06T23:48:57.900Z; _ga=GA1.1.776696039.1689083413; log_session_id=beb029929ec90e4d3ce2a79d146df9be; _legacy_normandy_session=QHUJ0HqHBsW6XrKF6qwJbg+MvbwmL9ISlKymAL8wn_wvw_PfnOBqueFvqBgGcN9HwllQI3Zxx9avw1-8eGFSUFXQp4-b_SEjT8wS5bjW3IjpbHbwHxHNVLEJEkXcYO3CjsOzd-m-iTkxVsrCnj4e9LsbifPWffgjv6wkoMQNnJkhOZ4yPlMjUapv3umnl7ilcBFcZ0f7poQoZJxIJ3caGuHZTU0LVt8tz-BP8k-S1SFnoHnmQAqtgNG3kaAwK0hL3C5W8lBIR1N72JqMHffJaec-yEOR7yKSpjYGPQxuNPIVwxc4d_OCmIbR9ACTJnIXZc5QT5Uhh6Y0YOgW-_U_TEhi7XPAOb954SLkL8pPyVnra9laxA6hsNebT1kZf4WfcMJxrVi96_bUoVdqYwYP3lFdyVr5ieRkufw4y4qBtb543E9xXzMa05uATPC3SaInNFRsDSv33BNOXOQTmrCdYwzSagBrt5s5qFePECxQGIH_Tj52S6oqYoO9fWOa25R9mbzD1GPR_F3mUVeozr6PXxxY7Fd5ZI_buP4hL_ucs-_0A0FAWdU3Cv9lRFPpVmyRiPFTzsoan91fdaRLjSIGJmL6bS3DmcT7C4Ub_Pci73ltE8oWdJw9DP67RJq9SghB2kOCHfkN4Orbl8jntrFVBQxtux1ShzssMfiYcLovTcrCMyC5v1oOL5CjJvRivRB-x8.zBaeBkyhTAUoJ0MqzlbI_0RNV-k.ZLGQIA; canvas_session=QHUJ0HqHBsW6XrKF6qwJbg+MvbwmL9ISlKymAL8wn_wvw_PfnOBqueFvqBgGcN9HwllQI3Zxx9avw1-8eGFSUFXQp4-b_SEjT8wS5bjW3IjpbHbwHxHNVLEJEkXcYO3CjsOzd-m-iTkxVsrCnj4e9LsbifPWffgjv6wkoMQNnJkhOZ4yPlMjUapv3umnl7ilcBFcZ0f7poQoZJxIJ3caGuHZTU0LVt8tz-BP8k-S1SFnoHnmQAqtgNG3kaAwK0hL3C5W8lBIR1N72JqMHffJaec-yEOR7yKSpjYGPQxuNPIVwxc4d_OCmIbR9ACTJnIXZc5QT5Uhh6Y0YOgW-_U_TEhi7XPAOb954SLkL8pPyVnra9laxA6hsNebT1kZf4WfcMJxrVi96_bUoVdqYwYP3lFdyVr5ieRkufw4y4qBtb543E9xXzMa05uATPC3SaInNFRsDSv33BNOXOQTmrCdYwzSagBrt5s5qFePECxQGIH_Tj52S6oqYoO9fWOa25R9mbzD1GPR_F3mUVeozr6PXxxY7Fd5ZI_buP4hL_ucs-_0A0FAWdU3Cv9lRFPpVmyRiPFTzsoan91fdaRLjSIGJmL6bS3DmcT7C4Ub_Pci73ltE8oWdJw9DP67RJq9SghB2kOCHfkN4Orbl8jntrFVBQxtux1ShzssMfiYcLovTcrCMyC5v1oOL5CjJvRivRB-x8.zBaeBkyhTAUoJ0MqzlbI_0RNV-k.ZLGQIA; _hp2_ses_props.3001039959=%7B%22r%22%3A%22https%3A%2F%2Fidp.bootcampspot.com%2F%22%2C%22ts%22%3A1689358368172%2C%22d%22%3A%22courses.bootcampspot.com%22%2C%22h%22%3A%22%2F%22%2C%22q%22%3A%22%3Flogin_success%3D1%22%7D; OptanonAlertBoxClosed=2023-07-14T18:13:15.771Z; OptanonConsent=isGpcEnabled=0&datestamp=Fri+Jul+14+2023+14%3A13%3A15+GMT-0400+(Eastern+Daylight+Time)&version=202306.1.0&isIABGlobal=false&hosts=&landingPath=NotLandingPage&groups=&AwaitingReconsent=false&geolocation=US%3BNC; _csrf_token=88DxYjFLqhZjS3otAVv8xiBCBBsLiQHmCsIvibFsXIrEksQTVHqeJxNgS25wKJntRgdRVTrPSrFJiBzc0Fg0zQ%3D%3D; _hp2_id.3001039959=%7B%22userId%22%3A%227161206098122318%22%2C%22pageviewId%22%3A%226643530532539282%22%2C%22sessionId%22%3A%228094138900231520%22%2C%22identity%22%3Anull%2C%22trackerVersion%22%3A%224.0%22%7D; _ga_XXN50SC2TH=GS1.1.1689358368.12.1.1689358414.0.0.0",
        "Referer": "https://courses.bootcampspot.com/courses/3710/users",
        "Referrer-Policy": "no-referrer-when-downgrade",
      },
      "body": null,
      "method": "GET",
    }
  );

  const data = await studentData.json();

  //   console.log("DATA", data);
  return new Response(JSON.stringify(data), { status: 200 });
}
