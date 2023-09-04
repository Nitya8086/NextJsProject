import React from "react";
import { useRouter } from "next/router";
//our-domain.com/news/[news]
const DetailsPage = () => {
  const router = useRouter();

  const newsId = router.query.newsId;
  // console.log(router.query.newsId);

  //send the request to the backend  Api
  // to fetch the  news item  with newsId
  return <div>The DetailsPage</div>;
};

export default DetailsPage;
