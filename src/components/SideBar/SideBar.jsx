import React, { useState } from "react";
import { Text, ContentCard, DropdownMenu } from "../index";
import { Avatar, Burger } from "../index";
import * as S from "./SideBar.styles";

const Render = ({ profile = {}, profileLoading }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  if (profileLoading) return <></>;
  return (
    <S.Wrapper>
      <S.MobileView>
        <S.TopContent>
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
        <S.BottomContent>
          <S.Links>
            {profile.contacts.map((contact) => (
              <Text
                key={contact.name}
                type="link"
                color="#FFF"
                onClick={() => window.open(contact.value, "_blank")}
              >
                {contact.name}
              </Text>
            ))}
            <Text
              type="link"
              color="#FFF"
              onClick={() =>
                window.open(
                  `https://${profile.resume.fields.file.url}`,
                  "_blank"
                )
              }
            >
              Resume
            </Text>
          </S.Links>
          <Burger open={menuOpen} setOpen={setMenuOpen} />
        </S.BottomContent>
      </S.MobileView>
      <DropdownMenu open={menuOpen} setOpen={setMenuOpen} />
    </S.Wrapper>
  );
};

export default Render;
