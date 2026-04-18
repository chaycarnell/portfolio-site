import { TypeProject } from '@sharedTypes/contenful';
import { useEffect, useState } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import { Chip, RichText, Text } from '../index';
import * as S from './Project.styles';

// Default rich text options
const textOptions = {
  pSize: '14px',
  bSize: '14px',
};

const Render = ({ project }: { project: TypeProject['fields'] }) => {
  const {
    title,
    summary,
    projectImage = [],
    references = [],
    technologies = [],
  } = project;
  // Set reference state array of loaded images
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Get image source files loaded to browser and set loaded state once load is complete
  useEffect(() => {
    let cancelled = false;
    Promise.all(
      projectImage.map(
        image =>
          new Promise(resolve => {
            const imageElement = new Image();
            imageElement.onload = () => resolve(image.fields.file?.url);
            imageElement.src = image.fields.file?.url as string;
          }),
      ),
    ).then(() => {
      if (!cancelled) setImagesLoaded(true);
    });
    return () => {
      cancelled = true;
    };
  }, [projectImage]);

  return (
    <S.ProjectWrapper>
      <Text type="header" size="24px" center>
        {title}
      </Text>
      {imagesLoaded ? (
        <S.DesktopCarousel swipeable={false}>
          {projectImage.map(image => (
            <img
              key={image.sys.id}
              src={image.fields.file?.url as string}
              alt={(image.fields.description as string) || 'project image'}
            />
          ))}
        </S.DesktopCarousel>
      ) : (
        <SkeletonTheme highlightColor="#FFF">
          <Skeleton style={{ paddingTop: '100%' }} />
        </SkeletonTheme>
      )}
      <RichText document={summary} textOptions={textOptions}></RichText>
      <Text type="bold" size={textOptions.bSize}>
        Technologies
      </Text>
      <S.ChipWrapper>
        {technologies.map(technology => (
          <Chip key={technology}>{technology}</Chip>
        ))}
      </S.ChipWrapper>
      {Array.isArray(references) && references.length > 0 && (
        <>
          <br />
          <Text type="bold" size={textOptions.bSize}>
            References
          </Text>
          <S.ReferenceWrapper>
            {references.map(reference => (
              <Text
                key={reference.title}
                type="link"
                onClick={() => window.open(reference.link, '_blank')}>
                {reference.title}
              </Text>
            ))}
          </S.ReferenceWrapper>
        </>
      )}
    </S.ProjectWrapper>
  );
};

export default Render;
