import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudyTemplate from "@/components/CaseStudyTemplate";
import { buildCaseStudyTemplateData, caseStudies, getCaseStudyById } from "@/data/caseStudies";

type CaseStudyPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.id,
  }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyById(slug);

  if (!study) {
    return {
      title: "Case Study | AblyArt",
    };
  }

  return {
    title: study.metaTitle,
    description: study.metaDescription,
    openGraph: {
      title: study.metaTitle,
      description: study.metaDescription,
      type: "article",
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = getCaseStudyById(slug);

  if (!study) {
    notFound();
  }

  return <CaseStudyTemplate data={buildCaseStudyTemplateData(study)} />;
}
