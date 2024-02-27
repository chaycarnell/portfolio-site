import React, { useState } from "react";
import ReactGA from "react-ga4";

import {
  Avatar,
  Burger,
  ContentCard,
  DropdownMenu,
  NavLink,
  Text,
} from "../index";
import * as S from "./NavBar.styles";

const Render = ({
  profile = {},
  profileLoading = true,
  isMobile = false,
  showHeader = true,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  if (profileLoading) return <></>;
  return (
    <S.Wrapper $mobile={isMobile} $showHeader={showHeader}>
      <S.InnerWrapper>
        <S.TopContent $mobile={isMobile} $showHeader={showHeader}>
          <ContentCard center>
            <Avatar src={profile.portrait.fields.file.url} />
          </ContentCard>
          <S.TitlesWrapper>
            <Text type="header" color="#FFF" center>
              {profile.name}
            </Text>
            <Text type="bold" color="#FFF" size={"24px"} center>
              {profile.role}
            </Text>
          </S.TitlesWrapper>
        </S.TopContent>
        <S.BottomContent $mobile={isMobile} $showHeader={showHeader}>
          <S.Links>
            {profile.contacts.map((contact) => (
              <Text
                key={contact.name}
                type="link"
                color="#FFF"
                onClick={() => {
                  ReactGA.event({
                    category: "Interaction",
                    action: `View ${contact.name}`,
                  });
                  window.open(contact.value, "_blank");
                }}
              >
                {contact.name}
              </Text>
            ))}
            <Text
              type="link"
              color="#FFF"
              onClick={() => {
                ReactGA.event({
                  category: "Interaction",
                  action: "Download Resume",
                });
                window.open(
                  `https://${profile.resume.fields.file.url}`,
                  "_blank"
                );
              }}
            >
              Resume
            </Text>
          </S.Links>
          {isMobile && <Burger open={menuOpen} setOpen={setMenuOpen} />}
        </S.BottomContent>
        {!isMobile && (
          <S.NavWrapper>
            <NavLink to="/">About</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/feedback">Feedback</NavLink>
          </S.NavWrapper>
        )}
      </S.InnerWrapper>
      {isMobile && <DropdownMenu open={menuOpen} setOpen={setMenuOpen} />}
    </S.Wrapper>
  );
};

export default Render;
