'use client'

import { styled } from "styled-components"
import HeroSection from "@/components/hreo-section";
import { colors } from "@/lib/styled-components";
import ArticleCard from "@/components/article-card";
import Sidebar from "@/components/sidebar";

const MainContent = styled.div`
  padding: 4rem 0;
`;

const PageContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
  @media (min-width: 640px) {
    padding: 0 1.5rem;
  }
  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const ArticlesSection = styled.div`
  grid-column: span 1;

  @media (min-width: 1024px) {
    grid-column: span 3;
  }
`;

const ArticlesHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const ArticlesTitle = styled.h2`
  font-family: serif;
  font-size: 1.875rem;
  font-weight: 700;
`;

const ViewAllLink = styled.a`
  color: ${colors.primary};
  transition: color 0.2s ease;
  font-weight: 500;

  &:hover {
    color: ${colors.primaryHover};
    text-decoration: none;
  }
`;

const FeaturedArticleWrapper = styled.div`
  margin-bottom: 2rem;
`;

const ArticleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const SidebarWrapper = styled.div`
  grid-column: span 1;

  @media (min-width: 1024px) {
    grid-column: span 1;
  }
`;

const featuredArticle = {
  title: "构建现代化的 React 应用：从零到部署",
  excerpt:
    "深入探讨如何使用最新的 React 18 特性、TypeScript 和现代工具链构建高性能的 Web 应用。本文将带你了解从项目初始化到生产部署的完整流程。",
  date: "2024-01-20",
  slug: "modern-react-app-guide",
  category: "技术分享",
  readTime: "12 分钟阅读",
  image: "/modern-react-development-setup-with-code-editor.jpg",
  featured: true,
};

const articles = [
  {
    title: "CSS Grid 布局完全指南",
    excerpt: "掌握 CSS Grid 的核心概念和实用技巧，创建复杂而灵活的网页布局。",
    date: "2024-01-18",
    slug: "css-grid-complete-guide",
    category: "前端开发",
    readTime: "8 分钟阅读",
    image: "/blog/css-grid.png",
  },
  {
    title: "TypeScript 高级类型系统深度解析",
    excerpt: "探索 TypeScript 的高级类型特性，提升代码的类型安全性和开发效率。",
    date: "2024-01-15",
    slug: "typescript-advanced-types",
    category: "技术分享",
    readTime: "15 分钟阅读",
    image: "/typescript-code-with-type-annotations.jpg",
  },
  {
    title: "设计系统的构建与维护",
    excerpt:
      "如何从零开始构建一个可扩展的设计系统，并在团队中有效地维护和使用。",
    date: "2024-01-12",
    slug: "design-system-guide",
    category: "用户体验",
    readTime: "10 分钟阅读",
    image: "/design-system-components-tokens.png",
  },
  {
    title: "前端性能优化实战指南",
    excerpt: "从加载速度到运行时性能，全面优化你的 Web 应用性能表现。",
    date: "2024-01-10",
    slug: "frontend-performance-optimization",
    category: "技术分享",
    readTime: "12 分钟阅读",
    image: "/web-performance-dashboard.png",
  },
  {
    title: "远程工作的思考与实践",
    excerpt: "分享三年远程工作的经验，如何保持高效率和工作生活平衡。",
    date: "2024-01-08",
    slug: "remote-work-thoughts",
    category: "生活感悟",
    readTime: "6 分钟阅读",
    image: "/remote-work-home-office-setup.jpg",
  },
  {
    title: "JavaScript 异步编程最佳实践",
    excerpt: "深入理解 Promise、async/await 和现代异步编程模式。",
    date: "2024-01-05",
    slug: "javascript-async-best-practices",
    category: "技术分享",
    readTime: "9 分钟阅读",
    image: "/javascript-async-code-examples.jpg",
  },
];

export default function Page() {
  return (
    <main>
      <HeroSection />
      <MainContent>
        <PageContainer>
          <ContentGrid>
            <ArticlesSection>
              <ArticlesHeader id="latest-articles">
                <ArticlesTitle>最新文章</ArticlesTitle>
                <ViewAllLink href="/articles">查看全部 →</ViewAllLink>
              </ArticlesHeader>

              <FeaturedArticleWrapper>
                <ArticleCard {...featuredArticle} />
              </FeaturedArticleWrapper>

              <ArticleGrid>
                {articles.map((article) => {
                  return <ArticleCard key={article.slug} {...article} />;
                })}
              </ArticleGrid>
            </ArticlesSection>

            <SidebarWrapper>
              <Sidebar />
            </SidebarWrapper>
          </ContentGrid>
        </PageContainer>
      </MainContent>
    </main>
  );
}
