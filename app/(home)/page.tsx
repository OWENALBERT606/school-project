
import { getAllAnswers } from "@/actions/answers";
import { getAllArticles, getTrendingArticles } from "@/actions/article";
import { getAllDiscussions, getTrendingDiscussions } from "@/actions/discussions";
import { getAllQuestions, getTrendingQuestions } from "@/actions/questions";
import { getAllUsers } from "@/actions/users";
import FAQSection from "@/components/frontend/faq copy";
import AgricultureFeatures from "@/components/frontend/features copy";
import Hero from "@/components/frontend/hero";
import QuickLinks from "@/components/frontend/links";
import NewsletterSubscription from "@/components/frontend/newsletter";
import PreHero from "@/components/frontend/pre-hero";
import QuickAccess from "@/components/frontend/quick-access";
import AnimatedStatistics from "@/components/frontend/statistics";
import { Answer, Article, Discussion, Question, User } from "@prisma/client";


export default async function Home() {
  const discussions: Discussion[] = (await getAllDiscussions()) || [];
  const users: User[] = (await getAllUsers()) || [];
  const questions: Question[] = (await getAllQuestions()) || [];
  const answers: Answer[] = (await getAllAnswers()) || [];
  const articles: Article[] = (await getAllArticles()) || [];
  const trendingQuestions: any[] = (await getTrendingQuestions()) || [];
  const trendingDiscussions: any[] = (await getTrendingDiscussions()) || [];
  const trendingArticles: any[] = (await getTrendingArticles()) || [];

  return (
    <div className="">
      <Hero/>
      <PreHero trendingDiscussions={trendingDiscussions} trendingQuestions={trendingQuestions} users={users} trendingArticles={trendingArticles}/>
      <AnimatedStatistics articles={articles} discussions={discussions} users={users} answers={answers} questions={questions}/>
      <QuickAccess/>
      <QuickLinks/>
      <AgricultureFeatures/>
      <FAQSection/>
      <NewsletterSubscription/>
    </div>
    
  );
}
