"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Menu,
  Users,
  BarChart2,
  FileText,
  Layout,
  CloudUpload,
  Edit3,
  Database,
  BarChart,
  Lock,
  User,
  Users2,
  Shield,
  CloudRain,
  ShoppingCart,
  BookOpen,
  MessageSquare,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

import Logo from "../global/Logo";
import { Session } from "next-auth";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { getInitials } from "@/lib/generateInitials";

// const features = [
//   {
//     icon: Users,
//     title: "Advanced Authentication",
//     description:
//       "Secure and flexible authentication system with role-based access control and multi-provider support.",
//     href: "/features/authentication",
//   },
//   {
//     icon: Layout,
//     title: "Dynamic Dashboard",
//     description:
//       "Beautifully designed, responsive dashboard with data visualization and management tools.",
//     href: "/features/dashboard",
//   },
//   {
//     icon: FileText,
//     title: "Reusable Form Components",
//     description:
//       "Streamline your workflows with reusable and customizable form components.",
//     href: "/features/forms",
//   },
//   {
//     icon: BarChart2,
//     title: "Advanced Data Tables",
//     description:
//       "Manage and display data effortlessly with customizable and powerful data tables.",
//     href: "/features/data-tables",
//   },
//   {
//     icon: CloudUpload,
//     title: "Image Upload",
//     description:
//       "Effortless image uploads powered by UploadThing, supporting both single and multiple file uploads.",
//     href: "/features/image-upload",
//   },
//   {
//     icon: Edit3,
//     title: "Rich Text Editor",
//     description:
//       "Seamlessly create and edit rich content using an integrated Quill editor.",
//     href: "/features/rich-text-editor",
//   },
//   {
//     icon: Lock,
//     title: "Secure Authentication",
//     description:
//       "Role-based authentication system with customizable access control.",
//     href: "/features/secure-authentication",
//   },
//   {
//     icon: Database,
//     title: "Prisma ORM",
//     description:
//       "Leverage Prisma ORM for robust and scalable database management in TypeScript.",
//     href: "/features/prisma-orm",
//   },
//   {
//     icon: BarChart,
//     title: "Analytics Integration",
//     description:
//       "Track performance with integrated analytics from PostHog and Vercel for actionable insights.",
//     href: "/features/analytics",
//   },
// ];

const features = [
  {
    icon: MessageSquare,
    title: "Forum/Q&A",
    description: "Ask and answer questions, share tips, and solve agricultural issues.",
    keyFeatures: [
      "Post questions with relevant tags",
      "Answering mechanism with comments",
      "Voting system for quality responses",
      "Accepted answer marking",
      "Badges and rewards for engagement",
    ],
  },
  {
    icon: Users,
    title: "Community Discussions",
    description: "Engage in topic-based discussions on broader agricultural issues.",
    keyFeatures: [
      "Discussion threads with titles and content",
      "Organized categories (e.g., organic farming, pest control)",
      "Comments and nested replies",
      "Sorting options (newest, most popular, most commented)",
    ],
  },
  {
    icon: BookOpen,
    title: "Knowledge Base",
    description: "Access a searchable archive of articles, guides, and resources.",
    keyFeatures: [
      "Categorized content on various agricultural topics",
      "Tags and filtering options",
      "Rich media support (images, videos, infographics)",
      "Easy-to-navigate structure",
    ],
  },
  {
    icon: ShoppingCart,
    title: "Agri-Marketplace",
    description: "Buy and sell agricultural products, tools, and supplies.",
    keyFeatures: [
      "Verified listings for farm produce and equipment",
      "Secure transactions and buyer-seller communication",
      "Pricing insights and market trends",
      "Order tracking and delivery options",
    ],
  },
  {
    icon: BarChart,
    title: "Market Insights",
    description: "Stay updated with real-time data on crop prices and trends.",
    keyFeatures: [
      "Live market price updates",
      "Demand and supply analytics",
      "Regional and seasonal pricing trends",
      "Weather impact analysis",
    ],
  },
  {
    icon: CloudRain,
    title: "Weather Updates",
    description: "Get localized weather forecasts to aid farm planning.",
    keyFeatures: [
      "Daily and weekly weather predictions",
      "Climate patterns and risk alerts",
      "Smart recommendations for planting and harvesting",
      "Region-specific weather analysis",
    ],
  },
  {
    icon: Shield,
    title: "Authentication & Security",
    description: "Ensure secure access and protect user data.",
    keyFeatures: [
      "User authentication and authorization",
      "Secure password recovery options",
      "Two-factor authentication (2FA)",
      "Role-based access control",
    ],
  },
  {
    icon: Users2,
    title: "User Profiles & Social Features",
    description: "Track contributions, connect with peers, and build credibility.",
    keyFeatures: [
      "User activity tracking and reputation points",
      "Follow system for social connections",
      "Profile customization and achievements",
      "Direct messaging and notifications",
    ],
  },
];

export default function SiteHeader({ session }: { session: Session | null }) {
  const [open, setOpen] = React.useState(false);
  const [showFeatures, setShowFeatures] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ">
      <div className="container max-w-7xl mx-auto flex h-14 items-center justify-between">
        <div className="flex items-center space-x-4">
          <Logo />
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none hover:bg-transparent disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent">Features</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[1000px] p-4">
                    <div className="flex items-center justify-between mb-4 pb-2 border-b">
                      <h4 className="text-lg font-medium bg-transparent">Features</h4>
                      <Link
                        href="/features"
                        className="text-sm text-green-500 hover:underline"
                      >
                        View all
                      </Link>
                    </div>
                    <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4 ">
                      {features.map((feature, index) => (
                        <Link
                          key={index}
                          href={`/feature/${feature.title
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                          className="block group"
                        >
                          <div className="flex items-start gap-4">
                            <div className="p-2 bg-muted rounded-md group-hover:bg-muted/80">
                              <feature.icon className="h-6 w-6 text-green-500" />
                            </div>
                            <div>
                              <h5 className="font-medium mb-1 group-hover:text-green-500">
                                {feature.title}
                              </h5>
                              <p className="text-sm text-muted-foreground line-clamp-2">
                                {feature.description}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-6 pt-4 border-t">
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/community" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-transparent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Community
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/community" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-transparent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Knowledge Base
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link href="/how-it-works" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-transparent  hover:text-green-900 focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Q&A
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/community" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-transparent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Support
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>
        </div>
        {session ? (
          <Button asChild variant={"ghost"}>
            <Link href="/dashboard">
              <Avatar>
                <AvatarImage
                  src={session?.user?.image ?? ""}
                  alt={session?.user?.name ?? ""}
                />
                <AvatarFallback>
                  {getInitials(session?.user?.name)}
                </AvatarFallback>
              </Avatar>
              <span className="ml-3">Dashboard</span>
            </Link>
          </Button>
        ) : (
          <div className="hidden md:flex items-center space-x-4">
            <Button asChild variant="ghost">
              <Link href={"/login"}>Log in</Link>
            </Button>
            <Button className="bg-green-900 hover:bg-green-700">
              <Link href="/register">Signup</Link>
            </Button>
          </div>
        )}

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-full p-0">
            <SheetHeader className="border-b p-4">
              <SheetTitle className="text-left">Navigation</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col py-4">
              <Link
                href="/"
                className="px-4 py-2 text-lg font-medium hover:bg-accent"
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
              <button
                className="flex items-center justify-between px-4 py-2 text-lg font-medium hover:bg-accent text-left"
                onClick={() => setShowFeatures(!showFeatures)}
              >
                Features
                <ChevronDown
                  className={cn(
                    "h-5 w-5 transition-transform",
                    showFeatures && "rotate-180"
                  )}
                />
              </button>
              {showFeatures && (
                <div className="px-4 py-2 space-y-4">
                  {features.map((feature, index) => (
                    <Link
                      key={index}
                      href={`/feature/${feature.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="flex items-start gap-4 py-2"
                      onClick={() => setOpen(false)}
                    >
                      <div className="p-2 bg-muted rounded-md">
                        <feature.icon className="h-6 w-6 text-green-500" />
                      </div>
                      <div>
                        <h5 className="font-medium mb-1">{feature.title}</h5>
                        <p className="text-sm text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
              <Link
                href="/#pricing"
                className="px-4 py-2 text-lg font-medium hover:bg-accent"
                onClick={() => setOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/how-it-works"
                className="px-4 py-2 text-lg font-medium hover:bg-accent"
                onClick={() => setOpen(false)}
              >
                How it works
              </Link>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-background">
              <div className="grid gap-2">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setOpen(false)}
                >
                  Log in
                </Button>
                <Button className="w-full" onClick={() => setOpen(false)}>
                  Sign up
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
