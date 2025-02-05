import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';



const Projects = () => (
  <Section $nopadding="true" id="projects">
    <SectionDivider />
    <SectionTitle $main="true">Projects</SectionTitle>
    <GridContainer>
      {/* Destructures the project's props */}
      {projects.map(({ title, description, id, image, tags, source, visit }) => (
        <BlogCard key={id}>
          <Img src={image} />
          <TitleContent>
            <HeaderThree title="true">{title}</HeaderThree>
            <Hr/>
          </TitleContent>
          <CardInfo>
            {description}
          </CardInfo>
          <Hr/>
          <div>
            <TitleContent>Tech Stack</TitleContent>
            <TagList>
              {tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={visit}>Live Site</ExternalLinks>
            <ExternalLinks href={source}>Source</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;