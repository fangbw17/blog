'use client'

import Link from 'next/link'
import styled from 'styled-components'
import { colors, fonts } from '@/lib/styled-components'

const FooterWrapper = styled.footer`
  background-color: ${colors.background};
  border-top: 1px solid ${colors.border};
  padding: 2rem 0;
`
const FooterContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
  @media (min-width: 640px) {
    padding: 0 1.5rem;
  }
  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`

const FooterContent = styled.div`
  padding: 3rem 0;
`

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const FooterBrand = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const FooterLogo = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: ${colors.primary};
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

const FooterLogoText = styled.span`
  color: ${colors.primaryForeground};
  font-weight: 700;
  font-size: 1.125rem;
`

const FooterLogoName = styled.span`
  font-family: ${fonts.serif};
  font-size: 1.25rem;
  font-weight: 700;
`

const FooterDescription = styled.p`
  color: ${colors.mutedForeground};
  font-size: 0.875rem;
  line-height: 1.6;
`

const FooterSectionTitle = styled.h3`
  font-family: ${fonts.serif};
  font-size: 1.125rem;
  font-weight: 600;
`

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const FooterLink = styled(Link)`
  color: ${colors.mutedForeground};
  font-size: 0.875rem;
  transition: color 0.2s ease;

  &:hover {
    color: ${colors.primary}
    text-decoration: none;
  }
`

const FooterSocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`

const SocialIcon = styled.a`
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${colors.muted};
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${colors.primary};
    color: ${colors.primaryForeground};
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`

const FooterDivider = styled.div`
  border-top: 1px solid ${colors.border};
  margin-top: 2rem;
  padding-top: 2rem;
  text-align: center;
`

const FooterCopyright = styled.p`
  color: ${colors.mutedForeground};
  font-size: 0.875rem;
`

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterContent>
          <FooterGrid>
            <FooterSection>
              <FooterBrand>
                <FooterLogo>
                  <FooterLogoText>B</FooterLogoText>
                </FooterLogo>
                <FooterLogoName>我的博客</FooterLogoName>
              </FooterBrand>
              <FooterDescription>分享技术与生活</FooterDescription>
            </FooterSection>

            <FooterSection>
              <FooterSectionTitle>快速连接</FooterSectionTitle>
              <FooterLinks>
                <FooterLink href="/articles">最新文章</FooterLink>
                <FooterLink href="/categories">文章分类</FooterLink>
                <FooterLink href="/about">关于我</FooterLink>
                <FooterLink href="/contact">联系方式</FooterLink>
              </FooterLinks>
            </FooterSection>

            <FooterSection>
              <FooterSectionTitle>社交媒体</FooterSectionTitle>
              <FooterSocialLinks>
              <SocialIcon href="#" aria-label="GitHub">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </SocialIcon>
                <SocialIcon href="#" aria-label="Twitter">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417a9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </SocialIcon>
                <SocialIcon href="#" aria-label="LinkedIn">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </SocialIcon>
              </FooterSocialLinks>
            </FooterSection>
          </FooterGrid>

          <FooterDivider>
            <FooterCopyright>© 2025 我的博客. 保留所有权利.</FooterCopyright>
          </FooterDivider>

        </FooterContent>
      </FooterContainer>
    </FooterWrapper>
  )
}