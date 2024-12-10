import { ContentCard, NavLink, Page, RichText, Text } from '@components';
import { TypeProfile } from '@sharedTypes/contenful';
import { PageRoutes } from '@sharedTypes/enums';
import { Entry } from 'contentful';
import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import Skeleton from 'react-loading-skeleton';

// Default rich text options
const textOptions = {
  pSize: '16px',
  bSize: '18px',
};

const Render = ({
  profile,
  profileLoading = true,
}: {
  profile: Entry<TypeProfile, undefined, string> | undefined;
  profileLoading: boolean;
}) => {
  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: PageRoutes.PROFILE,
      title: 'profile',
    });
  }, []);

  const profileFields = profile?.['fields'];

  return (
    <>
      <title>Profile | Chay Carnell</title>
      <meta name="description" content="Profile of Chay Carnell" />
      <Page scrollable fullWidth>
        <ContentCard margin="12px" padding="12px" center>
          {(profileLoading && (
            <>
              <Skeleton count={6} />
              <br />
              <Skeleton count={6} />
            </>
          )) || (
            <>
              <RichText
                document={profileFields?.about}
                textOptions={textOptions}
              />
              <ContentCard>
                <Text type="regular" size={textOptions.pSize}>
                  Not convinced? Check out{' '}
                  <NavLink
                    to={PageRoutes.PORTFOLIO}
                    color="#444"
                    weight={'bold'}
                    size={textOptions.bSize}>
                    my portfolio
                  </NavLink>{' '}
                  or{' '}
                  <NavLink
                    to={PageRoutes.FEEDBACK}
                    color="#444"
                    weight={'bold'}
                    size={textOptions.bSize}>
                    see what people say about me!
                  </NavLink>
                </Text>
              </ContentCard>
            </>
          )}
        </ContentCard>
      </Page>
    </>
  );
};

export default Render;
