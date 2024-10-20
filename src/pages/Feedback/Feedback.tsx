import { EntryCollection } from 'contentful';
import { useEffect, useState } from 'react';
import ReactGA from 'react-ga4';

import { FeedbackBox, Page, Text } from '../../components';
import { client } from '../../services/contentful';
import { TypeFeedback } from '../../types/contenful';

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
      .catch(() =>
        // I mean... if this errors may as well just send people to Linkedin ... yikes
        window.location.replace('https://www.linkedin.com/in/chaycarnell/'),
      );
  };

  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: '/feedback', title: 'feedback' });
    getFeedback();
  }, []);

  return (
    <Page scrollable fullWidth>
      <Text type="padded" size={'16px'}>
        Samples below are from formal performance reviews and colleague
        recognition. All feedback sources can be verified at request.
      </Text>
      <FeedbackBox feedback={feedback} />
    </Page>
  );
};

export default Render;
