import React, { useEffect, useState } from "react";
import ReactGA from "react-ga4";
import { FeedbackBox, Page } from "../../components";
import { getEntries } from "../../services/contentful";

const Render = () => {
  const [feedback, setFeedback] = useState([]);
  const [feedbackLoading, setFeedbackLoading] = useState(true);

  const getFeedback = () =>
    getEntries({
      content_type: "feedback",
      order: "sys.updatedAt",
    })
      .then((res) => {
        setFeedback(res.items);
        setFeedbackLoading(false);
      })
      .catch(() =>
        // I mean... if this errors may as well just send people to Linkedin ... yikes
        window.location.replace("https://www.linkedin.com/in/chaycarnell/")
      );

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: "/feedback", title: "feedback" });
    getFeedback();
  }, []);

  return (
    <Page scrollable fullWidth>
      <FeedbackBox feedback={feedback} loading={feedbackLoading} />
    </Page>
  );
};

export default Render;
