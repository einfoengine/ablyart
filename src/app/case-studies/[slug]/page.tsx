import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudyTemplate from "@/components/CaseStudyTemplate";
import { buildCaseStudyTemplateData, caseStudies, getCaseStudyById } from "@/data/caseStudies";

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyById(slug);

  if (!study) {
    return {
      title: "Case Study — ablyart",
    };
  }

  return {
    title: `${study.client} Case Study — ablyart`,
    description: study.description,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudyById(slug);

  if (!study) {
    notFound();
  }

  return <CaseStudyTemplate data={buildCaseStudyTemplateData(study)} />;
}
