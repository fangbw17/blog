"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import styled from "styled-components"
import { colors, fonts, shadows } from "@/lib/styled-components"
import { usePathname } from 'next/navigation'
import SearchBox from "@/components/search-box"

interface Category {
  name: string
  slug: string
  count: number
}

const categories: Category[] = [
  { name: "技术分享", slug: "tech-sharing", count: 8 },
  { name: "前端开发", slug: "frontend", count: 12 },
  { name: "用户体验", slug: "ux", count: 5 },
  { name: "生活感悟", slug: "life", count: 3 },
  { name: "工具推荐", slug: "tools", count: 6 },
]

const NavWrapper = styled.div<{ $isScrolled: boolean }>`
  position: sticky;
  top: 0;
  z-index: 50;
  transition: all 0.3s ease;
  background-color: ${(props) =>
    props.$isScrolled
      ? "rgba(255, 255, 255, 0.95)"
      : "rgba(255, 255, 255, 0.8)"};
  backdrop-filter: ${(props) =>
    props.$isScrolled ? "blur(12px)" : "blur(4px)"};
  box-shadow: ${(props) => (props.$isScrolled ? shadows.lg : "none")};
  border-bottom: 1px solid ${colors.border};
`

const NavContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
  @media (min-width: 640px) {
    padding: 0 1.5rem;
  }
  @media (min-width: 1280px) {
    padding: 0 2rem;
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

const DesktopNav = styled.div`
  display: none;
  gap: 2rem;
  align-items: center;

  @media (min-width: 768px) {
    display: flex;
  }
`

const NavItem = styled.div<{ key: string }>`
  position: relative;
`

const NavLink = styled(Link) <{ $isActive: boolean }>`
  font-weight: 500;
  transition: color 0.2s ease;
  color: ${(props) => (props.$isActive ? colors.primary : colors.foreground)};
  display: flex;
  align-items: center;
  position: relative;

  &:hover {
    color: ${colors.primary};
    text-decoration: none;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${colors.primary};
    border-radius: 1px;
    opacity: ${(props) => (props.$isActive ? 1 : 0)};
    transition: opacity 0.2s ease;
  }
`

const DropdownIcon = styled.svg<{ $isOpen: boolean }>`
    width: 1rem;
    height: 1rem;
    margin-left: 0.25rem;
    transition: transform 0.3s ease;
    transform: ${props => props.$isOpen ? "rotate(180deg)" : "rotate(0deg)"};
`

const SearchWrapper = styled.div`
    display: none;

    @media (min-width: 1024px) {
      display: block;
    }
`
const DropdownMenu = styled.div`
    position: absolute;
    top: calc(100% - 0.25rem);
    left: 0;
    margin-top: 0.5rem;
    z-index: 50;
    width: 16rem;
    background-color: ${colors.background};
    border: 1px solid ${colors.border};
    border-radius: 0.5rem;
    box-shadow: ${shadows.lg};
`


const DropdownItem = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    transition: background-color: 0.2s ease;
    color: ${colors.foreground};

    &:hover {
      background-color: ${colors.secondary};
      text-decoration: none;
  }
`

const DropdownBadge = styled.span`
    font-size: 0.75rem;
    color: ${colors.mutedForeground};
    background-color: ${colors.secondary};
    padding: 0.25rem 0.5rem;
    border-radius: 9999px;
`

const DropdownFooter = styled.div`
    border-top: 1px solid ${colors.border};
    margin-top: 0.5rem;
    padding-top: 0.5rem;
`

const DropdownFooterLink = styled(Link)`
    display: block;
    padding: 0.5rem 1rem;
    color: ${colors.primary};
    font-size: 0.875rem;
    transition: background-color: 0.2s ease;

    &:hover {
      background-color: ${colors.secondary};
      text-decoration: none;
    }

`

export default function Navigation() {
  const navItems = [
    { href: "/", label: "主页" },
    { href: "/articles", label: "文章", hasDropdown: true },
    { href: "/about", label: "关于我" },
    { href: "/contact", label: "联系" },
  ]

  const [isScrolled, setIsScrolled] = useState(false)
  const [isArticlesDropdownOpen, setIsArticlesDropdownOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActiveRoute = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <NavWrapper $isScrolled={isScrolled}>
      <NavContainer>
        <NavContent>
          <Logo href="/">
            <LogoBox>
              <LogoText>B</LogoText>
            </LogoBox>
            <LogoName>我的博客</LogoName>
          </Logo>
          <DesktopNav>
            {navItems.map((item) => (
              <NavItem key={item.href}>
                {item.hasDropdown ? (
                  <div onMouseEnter={() => setIsArticlesDropdownOpen(true)} onMouseLeave={() => setIsArticlesDropdownOpen(false)}>
                    <NavLink as="div" $isActive={isActiveRoute(item.href)} style={{ display: "flex", alignItems: "center" }}>
                      {item.label}
                      <DropdownIcon $isOpen={isArticlesDropdownOpen} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7'></path>
                      </DropdownIcon>
                    </NavLink>
                    {isArticlesDropdownOpen && (
                      <DropdownMenu>
                        {categories.map((category) => {
                          return <DropdownItem key={category.slug} href={`/categories/${category.slug}`}>
                            <span>
                              {category.name}
                            </span>
                            <DropdownBadge>
                              {category.count}
                            </DropdownBadge>
                          </DropdownItem>
                        })}
                        <DropdownFooter>
                          <DropdownFooterLink href="/articles">查看所有文章 →</DropdownFooterLink>
                        </DropdownFooter>
                      </DropdownMenu>
                    )}
                  </div>
                ) : (
                  <NavLink href={item.href} $isActive={isActiveRoute(item.href)}>
                    {item.label}
                  </NavLink>
                )}
              </NavItem>
            ))}
          </DesktopNav>
          <SearchWrapper>
            <SearchBox placeholder="搜索..." />
          </SearchWrapper>
        </NavContent>
      </NavContainer>
    </NavWrapper>
  )
}
