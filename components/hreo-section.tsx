"use client";

import Image from "next/image";
import { styled } from "styled-components";
import { colors, fonts } from "@/lib/styled-components";

const SectionWrapper = styled.section`
  position: relative;
  padding: 5rem 0;
  overflow: hidden;

  @media (min-width: 1024px) {
    padding: 8rem 0;
  }
`;

const BackgroundGradient = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom right,
    rgba(29, 29, 31, 0.05),
    transparent,
    rgba(0, 122, 255, 0.05)
  );
  pointer-events: none;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
  @media (min-width: 640px) {
    padding: 0 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
  position: relative;
`;
const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const MainTitle = styled.h1`
  font-family: ${fonts.serif};
  font-size: clamp(2rem, 8vw, 3rem);
  line-height: 1.2;
  font-weight: 700;
  color: ${colors.foreground};
`;

const Description = styled.p`
  font-size: 1.25rem;
  color: ${colors.mutedForeground};
  line-height: 1.6;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  background-color: ${colors.primary};
  color: ${colors.primaryForeground};
  border-radius: 0.5rem;
  font-weight: 500;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #424245;
    text-decoration: none;
  }
`;

const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  jsutify-content: center;
  padding: 0.75rem 1.5rem;
  border: 1px solid ${colors.border};
  border-radius: 0.5rem;
  fong-weight: 500;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${colors.secondary};
    text-decoration: none;
  }
`;

const StatsSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding-top: 2rem;
  border-top: 1px solid ${colors.border};
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const StatValue = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${colors.primary};
`;

const StatLabel = styled.span`
  font-size: 1rem;
  color: ${colors.mutedForeground};
`;

const ImageSection = styled.div`
  position: relative;
`;

const ImageWrapper = styled.div`
  position: relative;
  z-index: 10;
`;

const StyledImage = styled(Image)`
  border-radius: 1rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
`;

const DecorativeBlob = styled.div<{ position: "top-right" | "bottom-left" }>`
  position: absolute;
  borde-radius: 9999px;
  filter: blur(3rem);

  ${(props) =>
    props.position === "top-right" &&
    `
    top: -1rem;
    right: -1rem;
    width: 18rem;
    height: 18rem;  
    background-color: rgba(29, 29, 31, 0.1);
  `}

  ${(props) =>
    props.position === "bottom-left" &&
    `
    bottom: -2rem;
    left: -2rem;
    width: 16rem;
    height: 16rem;
    background-color: rgba(0, 122, 255, 0.1);
  `}
`;

export default function HeroSection() {
  return (
    <SectionWrapper>
      <BackgroundGradient />
      <Container>
        <ContentGrid>
          <ContentSection>
            <TitleGroup>
              <MainTitle>
                分享技术内容
                <br />
                记录生活感悟
              </MainTitle>
              <Description>
                我是一名前端工程师，热衷于探索现代 Web
                技术，分享开发经验和生活思考。在这里，你会发现关于
                React、TypeScript、设计系统以及个人成长的深度内容。
              </Description>
            </TitleGroup>

            <ButtonGroup>
              <PrimaryButton href="#latest-articles">
                浏览最新文章
              </PrimaryButton>
              <SecondaryButton href="/about">了解更多</SecondaryButton>
            </ButtonGroup>

            <StatsSection>
              <StatItem>
                <StatValue>50+</StatValue>
                <StatLabel>技术文章</StatLabel>
              </StatItem>
              <StatItem>
                <StatValue>10K+</StatValue>
                <StatLabel>阅读量</StatLabel>
              </StatItem>
              <StatItem>
                <StatValue>3年+</StatValue>
                <StatLabel>写作经验</StatLabel>
              </StatItem>
            </StatsSection>
          </ContentSection>
          <ImageSection>
            <ImageWrapper>
              <StyledImage
                src="/modern-developer-workspace-with-laptop-and-coffee.jpg"
                alt="开发者工作空间"
                width={500}
                height={600}
              />
              <DecorativeBlob position="top-right" />
              <DecorativeBlob position="bottom-left" />
            </ImageWrapper>
          </ImageSection>
        </ContentGrid>
      </Container>
    </SectionWrapper>
  );
}
