import Link from "next/link";
import styled from "styled-components";
import { colors, shadows } from "@/lib/styled-components";

interface SidebarProps {
  className?: string;
}

const SidebarWrapper = styled.aside<{ className?: string }>`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const SidebarSection = styled.div`
  background-color: ${colors.card};
  border-radius: 0.5rem;
  padding: 1.5rem;
  border: 1px solid ${colors.border};
  box-shadow: ${shadows.sm};
`;

const SidebarTitle = styled.h3`
  font-family: serif;
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${colors.foreground};
`;

const CategoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const CategoryItem = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  transition: background-color 0.2s ease;
  color: ${colors.foreground};

  &:hover {
    background-color: ${colors.secondary};
    text-decoration: none;
    color: ${colors.primary};
  }
`;

const CategoryCount = styled.span`
  color: ${colors.mutedForeground};
  font-size: 0.875rem;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled(Link)`
  padding: 0.25rem 0.75rem;
  background-color: ${colors.secondary};
  color: ${colors.secondaryForeground};
  border-radius: 9999px;
  font-size: 0.875rem;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${colors.primary};
    color: ${colors.primaryForeground};
    text-decoration: none;
  }
`;

const PopularPostList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const PopularPostItem = styled(Link)`
  display: block;
  transition: all 0.2s ease;

  &:hover {
    text-decoration: none;
  }
`;

const PopularPostTitle = styled.h4`
  font-weight: 500;
  color: ${colors.foreground};
  font-size: 0.875rem;
  line-height: 1.4;
  margin-bottom: 0.25rem;
  transition: color 0.2s ease;

  ${PopularPostItem}:hover & {
    color: ${colors.primary};
  }
`;

const PopularPostDate = styled.p`
  color: ${colors.mutedForeground};
  font-size: 0.75rem;
`;

export default function Sidebar({ className = "" }: SidebarProps) {
  const categories = [
    { name: "技术分享", count: 12, slug: "tech" },
    { name: "生活感悟", count: 8, slug: "life" },
    { name: "读书笔记", count: 6, slug: "books" },
    { name: "旅行日记", count: 4, slug: "travel" },
  ];

  const tags = [
    "React",
    "JavaScript",
    "TypeScript",
    "Next.js",
    "CSS",
    "前端开发",
    "用户体验",
    "设计",
    "生活",
    "思考",
  ];

  const popularPosts = [
    {
      title: "React 18 新特性深度解析",
      date: "2024-01-15",
      slug: "react-18-features",
    },
    {
      title: "现代 CSS 布局技巧总结",
      date: "2024-01-10",
      slug: "modern-css-layout",
    },
    {
      title: "如何构建高性能的 Next.js 应用",
      date: "2024-01-05",
      slug: "nextjs-performance",
    },
  ];

  return (
    <SidebarWrapper className={className}>
      <SidebarSection>
        <SidebarTitle>文章分类</SidebarTitle>
        <CategoryList>
          {categories.map((category) => {
            return (
              <CategoryItem
                key={category.slug}
                href={`/categories/${category.slug}`}
              >
                <span>{category.name}</span>
                <CategoryCount>{category.count}</CategoryCount>
              </CategoryItem>
            );
          })}
        </CategoryList>
      </SidebarSection>

      <SidebarSection>
        <SidebarTitle>标签云</SidebarTitle>
        {tags.map((tag) => {
          return (
            <Tag key={tag} href={`/tags/${tag}`}>
              {tag}
            </Tag>
          );
        })}
        <TagContainer></TagContainer>
      </SidebarSection>

      <SidebarSection>
        <SidebarTitle>热门文章</SidebarTitle>
        <PopularPostList>
          {popularPosts.map((post) => (
            <PopularPostItem key={post.slug} href={`/articles/${post.slug}`}>
              <PopularPostTitle>{post.title}</PopularPostTitle>
              <PopularPostDate>{post.date}</PopularPostDate>
            </PopularPostItem>
          ))}
        </PopularPostList>
      </SidebarSection>
    </SidebarWrapper>
  );
}
