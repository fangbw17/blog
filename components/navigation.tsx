'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link'
import styled from 'styled-components';
import { colors, fonts, shadows } from '@/lib/styled-components';

interface Category {
  name: string;
  slug: string
  count: number
}

const categories: Category[] = [
  { name: '技术分享', slug: 'tech-sharing', count: 8 },
  { name: '前端开发', slug: 'frontend', count: 12 },
  { name: '用户体验', slug: 'ux', count: 5 },
  { name: '生活感悟', slug: 'life', count: 3 },
  { name: '工具推荐', slug: 'tools', count: 6 },
]

const NavWrapper = styled.div<{ isScrolled: boolean }>`
  position: sticky;
  top: 0;
  z-index: 50;
  transition: all 0.3s ease;
  background-color: ${(props) => props.isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.8)'};
  backdrop-filter: ${(props) => props.isScrolled ? 'blur(12px)' : 'blur(4px)'};
  box-shadow: ${(props) => props.isScrolled ? shadows.lg : 'none'};
  border-bottom: 1px solid ${colors.border}
`

const NavContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
  @media (min-width: 640px) {
    padding: 0 1.5rem
  }
  @media (min-width: 1280px) {
    padding: 0 2rem
  }
`

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
`

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2 ease;

  &:hover {
    text-decoration: none;
  }
`

const LogoBox = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: ${colors.primary};
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease;

  ${Logo}:hover & {
    transform: rotate(360deg);
  }
`

const LogoText = styled.span`
  color: ${colors.primaryForeground};
  font-weight: 700;
  font-size: 1.125rem;
`

const LogoName = styled.span`
  font-family: ${fonts.serif};
  font-size: 1.25rem;
  font-weight: 700;
  transition: color 0.2s ease;

  ${Logo}:hover & {
    color: ${colors.primary};
  }
`

export default function Navigation() {
  const navItems = [
    { href: '/', label: '主页' },
    { href: '/articles', label: '文章', hasDropdown: true },
    { href: '/about', label: '关于我' },
    { href: '/contact', label: '联系' },
  ]
  
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <NavWrapper isScrolled={isScrolled}>
      <NavContainer>
        <NavContent>
          <Logo href="/">
            <LogoBox>
              <LogoText>B</LogoText>
            </LogoBox>
            <LogoName>我的博客</LogoName>
          </Logo>
          <span>菜单</span>
          <span>右侧</span>
        </NavContent>
      </NavContainer>
    </NavWrapper>
  )
}
