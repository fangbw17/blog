// title: "CSS Grid 布局完全指南",
// excerpt: "掌握 CSS Grid 的核心概念和实用技巧，创建复杂而灵活的网页布局。",
// date: "2024-01-18",
// slug: "css-grid-complete-guide",
// category: "前端开发",
// readTime: "8 分钟阅读",
// image: "/blog/css-grid.png",

"use client";

import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { colors, shadows } from "@/lib/styled-components";
import { useState } from "react";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  category: string;
  readTime: string;
  image?: string;
  featured?: boolean;
}

const CardWrapper = styled.article<{ $featured?: boolean }>`
  background-color: ${colors.card};
  border: 1px solid ${colors.border};
  border-radius: 0.5rem;
  overflow: hidden;
  transition: all 0.3 cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;

  &:hover {
    box-shadow: ${shadows.lg};
    border-color: ${colors.accent};
  }

  @media (min-width: 768px) {
    ${(props) => (props.$featured ? "grid-column: span 2;" : "")}
  }
`;

const TooltipBox = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 10;
  background-color: ${colors.background};
  border: 1px solid ${colors.border};
  border-radius: 0.5rem;
  box-shadow: ${shadows.lg};
  padding: 0.75rem;
  animation: fadeInZoom 0.2s ease;

  @keyframes fadeInZoom {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const TooltipContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  font-weidth: 500;
  color: ${colors.foreground};

  &::before {
    content: "";
    width: 0.5rem;
    height: 0.5rem;
    background-color: ${colors.primary};
    border-radius: 50%;
  }
`;

const TooltipSubtext = styled.div`
  font-size: 0.75rem;
  color: ${colors.mutedForeground};
  margin-top: 0.25rem;
`;

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 12rem;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  ${CardWrapper}:hover img {
    transform: scale(1.05);
  }
`

const CategoryBadge = styled(Link)`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background-color: ${colors.primary};
  color: ${colors.primaryForeground};
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${colors.primaryHover};
    text-decoration: none;
  }
`

const CardContent = styled.div`
  padding: 1.5rem;
`

const MetaInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${colors.mutedForeground};
  font-size: 0.875rem;
  margin-bottom: 0.75rem;
`

const CardTitle = styled(Link)<{ $featured?: boolean }>`
  display: block;
  font-family: serif;
  font-weight: 700;
  margin-bottom: 0.75rem;
  line-height: 1.4;
  transition: color 0.2s ease;
  font-size: ${(props) => (props.$featured ? "1.5rem" : "1.25rem")};
  color: ${colors.foreground};

  &:hover {
    color: ${colors.primary};
    text-decoration: none;
  }
`

const CardExcerpt = styled.p`
  color: ${colors.mutedForeground};
  line-height: 1.6;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const ReadMoreLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: ${colors.accent};
  transition: color 0.2s ease;
  font-weight: 500;

  &:hover {
    color: ${colors.accentForeground};
    text-decoration: none;
  }

  svg {
    width: 1rem;
    height: 1rem;
    margin-left: 0.25rem;
    transition: transform 0.2s ease;
  }

  ${CardWrapper}:hover & svg {
    transform: translateX(4px);
  }
`

export default function ArticleCard({
  title,
  excerpt,
  date,
  slug,
  category,
  readTime,
  image,
  featured,
}: ArticleCardProps) {
  const [showCategoryTooltip, setShowCategoryTooltip] = useState(true);

  return (
    <CardWrapper
      className="article-card"
      $featured={featured}
      onMouseEnter={() => setShowCategoryTooltip(true)}
      onMouseLeave={() => setShowCategoryTooltip(false)}
    >
      {showCategoryTooltip && (
        <TooltipBox className="tooltip-box">
          <TooltipContent>{category}</TooltipContent>
          <TooltipSubtext>点击查看该分类下的所有文章</TooltipSubtext>
        </TooltipBox>
      )}

      {image && (
        <ImageWrapper>
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={featured ? 800 : 400}
            height={featured ? 400 : 200}
          />
          <CategoryBadge href={`/categories/${category.toLowerCase().replace(/\s+/g, "-")}`}>{category}</CategoryBadge>
        </ImageWrapper>
      )}

      <CardContent>
        <MetaInfo>
          <time dateTime={date}>{date}</time>
          <span>·</span>
          <span>{readTime}</span>
        </MetaInfo>

        <CardTitle href={`/articles/${slug}`} $featured={featured}>{title}</CardTitle>

        <CardExcerpt>{excerpt}</CardExcerpt>

        <ReadMoreLink href={`/articles/${slug}`}>
          阅读全文
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </ReadMoreLink>
      </CardContent>
    </CardWrapper>
  );
}
