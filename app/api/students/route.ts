export async function GET() {
  const studentData = await fetch(
    "https://courses.bootcampspot.com/api/v1/courses/3710/users?include_inactive=true&include%5B%5D=avatar_url&include%5B%5D=enrollments&include%5B%5D=email&include%5B%5D=observed_users&include%5B%5D=can_be_removed&include%5B%5D=custom_links&per_page=50",
    {
      "headers": {
        "accept":
          "application/json, text/javascript, application/json+canvas-string-ids, */*; q=0.01",
        "accept-language": "en-US,en;q=0.9",
        "if-none-match": 'W/"802135aedb8e16551d74bdbfab62aa26"',
        "sec-ch-ua":
          '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "sentry-trace": "fa2e293ba4d64afa90b6972fac9b9833-89dc23ec8d58818d-0",
        "x-csrf-token":
          "RjXhM8PXWRRQEBWLiyBwG1sZoFX+bITVneWRGYWxxHQyQLgEorMOeGh8U+bkRBZ8bUyVIIYc/LaqpL4sqsaGBQ==",
        "x-requested-with": "XMLHttpRequest",
        "cookie":
          "OptanonConsent=isGpcEnabled=0&datestamp=Mon+Mar+06+2023+18%3A48%3A57+GMT-0500+(Eastern+Standard+Time)&version=202211.1.0&isIABGlobal=false&hosts=&landingPath=NotLandingPage&groups=&AwaitingReconsent=false&geolocation=US%3BNC; OptanonAlertBoxClosed=2023-03-06T23:48:57.900Z; _ga=GA1.1.776696039.1689083413; log_session_id=3969770e202e007f7e6d2378a15ae66f; _legacy_normandy_session=y8pTA5NZvREP2rHbKsu6iQ+NMiz1pk6N0U_tV0ZO2EYjmXIBBSrN9t-t7EAKdDaFwbr79A102VycpPmSrq0fXCEVvp3Wm1eo2ZP3-4U8tFSsXVbLWve6q0Zt4itFfvGxcH4CqP8axua4o-j7KeRlJfYM75kKUyGxyVVOnkaMgqQCgMxJM3MzFD9_tlChWkcf3jKfk2nUt8K0mpoTdIQfqjnf3Ye9e0yOcGHWURFyeVV9nZsUipn_8f8WmNAC-Lfk_v2LYGRXYYzbF_hEEgJJtPwVZauwnKtSUiX8W3o80Hz6ocAFOQrY1Y3BECwYRwco8TQ1ploMwCq5JloHdJQ_GCxGJQXAiLnNm7xVJB138RZYKG0fbvPo8F3hqsbn4ZoDY4UhWLztOXxI_zeIWfijXqGbTDWZas9nw7OMkXj0M00vKjiCrfxkC-LkuLfj3OXijVm2rV-2lQ-gOC50QqMb7hRmVuqN3q-2i0yUI4UD8Ja7oPWg6f6VQ1byB_Et6NB2_rGOgjawoKOCNNojum4pKS8xnm99M4GxO7gzEmmEzxzVF23MRZl3dPboUdlyhZf7Fm7nvozCyM-aIcpmxli_HZL_nrdzLCAbxopJVMbi59r8QR8BCd6OhgXiLqiSdF2ysUBWIM66qZzqEFr8GDH1S3B3f0bH89YRn2z1eroeuptCgj2lamMIZ6gjk_ZseaLl4U.QIXD8JdCF2sjFilryQrd2SjwcsE.ZLQmTg; canvas_session=y8pTA5NZvREP2rHbKsu6iQ+NMiz1pk6N0U_tV0ZO2EYjmXIBBSrN9t-t7EAKdDaFwbr79A102VycpPmSrq0fXCEVvp3Wm1eo2ZP3-4U8tFSsXVbLWve6q0Zt4itFfvGxcH4CqP8axua4o-j7KeRlJfYM75kKUyGxyVVOnkaMgqQCgMxJM3MzFD9_tlChWkcf3jKfk2nUt8K0mpoTdIQfqjnf3Ye9e0yOcGHWURFyeVV9nZsUipn_8f8WmNAC-Lfk_v2LYGRXYYzbF_hEEgJJtPwVZauwnKtSUiX8W3o80Hz6ocAFOQrY1Y3BECwYRwco8TQ1ploMwCq5JloHdJQ_GCxGJQXAiLnNm7xVJB138RZYKG0fbvPo8F3hqsbn4ZoDY4UhWLztOXxI_zeIWfijXqGbTDWZas9nw7OMkXj0M00vKjiCrfxkC-LkuLfj3OXijVm2rV-2lQ-gOC50QqMb7hRmVuqN3q-2i0yUI4UD8Ja7oPWg6f6VQ1byB_Et6NB2_rGOgjawoKOCNNojum4pKS8xnm99M4GxO7gzEmmEzxzVF23MRZl3dPboUdlyhZf7Fm7nvozCyM-aIcpmxli_HZL_nrdzLCAbxopJVMbi59r8QR8BCd6OhgXiLqiSdF2ysUBWIM66qZzqEFr8GDH1S3B3f0bH89YRn2z1eroeuptCgj2lamMIZ6gjk_ZseaLl4U.QIXD8JdCF2sjFilryQrd2SjwcsE.ZLQmTg; _hp2_ses_props.3001039959=%7B%22r%22%3A%22https%3A%2F%2Fidp.bootcampspot.com%2F%22%2C%22ts%22%3A1689527887356%2C%22d%22%3A%22courses.bootcampspot.com%22%2C%22h%22%3A%22%2F%22%2C%22q%22%3A%22%3Flogin_success%3D1%22%7D; OptanonAlertBoxClosed=2023-07-16T17:18:16.267Z; OptanonConsent=isGpcEnabled=0&datestamp=Sun+Jul+16+2023+13%3A18%3A16+GMT-0400+(Eastern+Daylight+Time)&version=202306.1.0&isIABGlobal=false&hosts=&landingPath=NotLandingPage&groups=&AwaitingReconsent=false&geolocation=US%3BNC; _csrf_token=RjXhM8PXWRRQEBWLiyBwG1sZoFX%2BbITVneWRGYWxxHQyQLgEorMOeGh8U%2BbkRBZ8bUyVIIYc%2FLaqpL4sqsaGBQ%3D%3D; _hp2_id.3001039959=%7B%22userId%22%3A%227161206098122318%22%2C%22pageviewId%22%3A%226022487738576479%22%2C%22sessionId%22%3A%225929636441610962%22%2C%22identity%22%3Anull%2C%22trackerVersion%22%3A%224.0%22%7D; _ga_XXN50SC2TH=GS1.1.1689527887.16.1.1689527909.0.0.0",
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
