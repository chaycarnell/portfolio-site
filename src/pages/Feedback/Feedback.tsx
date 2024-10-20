import { FeedbackBox, Page, Text } from '@components';
import { ExternalLinks } from '@config/links';
import { client } from '@services/contentful/contentful';
import { TypeFeedback } from '@sharedTypes/contenful';
import { PageRoutes } from '@sharedTypes/enums';
import { EntryCollection } from 'contentful';
import { useEffect, useState } from 'react';
import ReactGA from 'react-ga4';
import Helmet from 'react-helmet';

const Render = () => {
  const [feedback, setFeedback] =
    useState<EntryCollection<TypeFeedback, undefined, string>>();

  const getFeedback = () => {
    client
      .getEntries<TypeFeedback>({
        content_type: 'feedback',
        order: ['sys.updatedAt'],
      })
      .then(res => {
        setFeedback(res);
      })
      .catch(() => window.location.replace(ExternalLinks.LINKEDIN));
  };

  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: PageRoutes.FEEDBACK,
      title: 'feedback',
    });
    getFeedback();
  }, []);

  return (
    <>
      <Helmet>
        <title>Feedback | Chay Carnell</title>
        <meta
          name="description"
          content="Professional feedback Chay Carnell has received"
        />
      </Helmet>
      <Page scrollable fullWidth>
        <Text type="padded" size={'16px'}>
          Samples below are from formal performance reviews and colleague
          recognition. All feedback sources can be verified at request.
        </Text>
        <FeedbackBox feedback={feedback} />
      </Page>
    </>
  );
};

export default Render;
