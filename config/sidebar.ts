// config/sidebar.ts
import {
  BaggageClaim,
  BarChart2,
  BarChart4,
  Book,
  Brain,
  Cable,
  CircleDollarSign,
  FileQuestionIcon,
  FolderTree,
  Globe,
  Home,
  LucideIcon,
  Presentation,
  Settings,
  Users,
  Users2,
} from "lucide-react";

export interface ISidebarLink {
  title: string;
  href?: string;
  icon: LucideIcon;
  dropdown: boolean;
  permission: string; // Required permission to view this item
  dropdownMenu?: MenuItem[];
}

type MenuItem = {
  title: string;
  href: string;
  permission: string; // Required permission to view this menu item
};

export const sidebarLinks: ISidebarLink[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: Home,
    dropdown: false,
    permission: "dashboard.read",
  },
  {
    title: "Users",
    icon: Users,
    href: "/dashboard/users",
    dropdown: true,
    permission: "users.read",
    dropdownMenu: [
      {
        title: "Users",
        href: "/dashboard/users",
        permission: "users.read",
      },
      {
        title: "Roles",
        href: "/dashboard/users/roles",
        permission: "roles.read",
      },
      {
        title: "Change Password",
        href: "/dashboard/change-password",
        permission: "roles.read",
      },
      {
        title: "Profile",
        href: "/dashboard/profile",
        permission: "roles.read",
      },
    ],
  },
  {
    title: "Global",
    icon: Globe,
    dropdown: true,
    href: "/dashboard/global",
    permission: "categories.read",
    dropdownMenu: [
      {
        title: "Categories",
        href: "/dashboard/categories",
        permission: "categories.read",
      },
      {
        title: "Sub Categories",
        href: "/dashboard/subcategories",
        permission: "subcategories.read",
      },
    ],
  },
  {
    title: "Question answer",
    icon: FileQuestionIcon,
    dropdown: true,
    href: "/dashboard/questions",
    permission: "questions.read",
    dropdownMenu: [
      {
        title: "Questions",
        href: "/dashboard/questions",
        permission: "questions.read",
      },
      {
        title: "Answers",
        href: "/dashboard/answers",
        permission: "answers.read",
      },
    ],
  },
  {
    title: "Knowledge Base",
    icon: Brain,
    dropdown: true,
    href: "/dashboard/articles",
    permission: "articles.read",
    dropdownMenu: [
      {
        title: "Articles",
        href: "/dashboard/articles",
        permission: "articles.read",
      },
      {
        title: "Comments",
        href: "/dashboard/comments",
        permission: "comments.read",
      },
    ],
  },
  {
    title: "Community",
    icon: Users2,
    dropdown: true,
    href: "/dashboard/community",
    permission: "discussions.read",
    dropdownMenu: [
      {
        title: "Topics",
        href: "/dashboard/topics",
        permission: "topics.read",
      },
      {
        title: "Discussions",
        href: "/dashboard/discussions",
        permission: "discussions.read",
      },
      {
        title: "Responses",
        href: "/dashboard/responses",
        permission: "responses.read",
      },
    ],
  },
  // {
  //   title: "Sales",
  //   icon: CircleDollarSign,
  //   dropdown: true,
  //   href: "/dashboard/sales",
  //   permission: "sales.read",
  //   dropdownMenu: [
  //     {
  //       title: "Sales",
  //       href: "/dashboard/sales",
  //       permission: "sales.read",
  //     },
  //     {
  //       title: "Customers",
  //       href: "/dashboard/sales/customers",
  //       permission: "customers.read",
  //     },
  //   ],
  // },
  // {
  //   title: "Blogs",
  //   icon: Book,
  //   dropdown: false,
  //   href: "/dashboard/blogs",
  //   permission: "blogs.read",
  // },
  // {
  //   title: "Orders",
  //   href: "/dashboard/orders",
  //   icon: BarChart2,
  //   dropdown: false,
  //   permission: "orders.read",
  // },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
    dropdown: false,
    permission: "settings.read",
  },
  // {
  //   title: "Reports",
  //   icon: BarChart4,
  //   dropdown: true,
  //   href: "/dashboard/reports/products",
  //   permission: "reports.read",
  //   dropdownMenu: [
  //     {
  //       title: "Product Report",
  //       href: "/dashboard/reports/products",
  //       permission: "reports.read",
  //     },
  //     {
  //       title: "Inventory Report",
  //       href: "/dashboard/reports/inventory",
  //       permission: "reports.read",
  //     },
  //     {
  //       title: "Customers Report",
  //       href: "/dashboard/reports/customers",
  //       permission: "reports.read",
  //     },
  //   ],
  // },
];
