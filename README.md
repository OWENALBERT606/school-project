RBAC => https://claude.ai/chat/5f6fe7be-2487-4a32-a466-7d4ba286e735

# Role-Based Access Control (RBAC) NextJS Application

A comprehensive Next.js application with Role-Based Access Control, authentication, and authorization features.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Database Setup](#database-setup)
- [Authentication Setup](#authentication-setup)
- [Usage](#usage)
- [Authorization](#authorization)

## Prerequisites

- Node.js 18 or later
- PNPM package manager
- PostgreSQL database (we're using Neon DB)
- Git

## Getting Started

1. Clone the repository:

```bash
git clone [your-repo-url]
cd [your-repo-name]
```

2. Install dependencies:

```bash
pnpm install
```

3. Set up environment variables (see next section)
4. Initialize the database
5. Start the development server:

```bash
pnpm dev
```

## Environment Variables

Create a `.env` file in the root directory and add the following variables:

### Database Configuration

```env
DATABASE_URL="postgresql://[username]:[password]@[host]/[database]?sslmode=require"
```

To get this:

1. Create an account at [Neon DB](https://neon.tech)
2. Create a new project
3. Copy the connection string from the dashboard
4. Replace placeholders with your credentials

### Authentication Providers


### NextAuth Configuration

Generate a secret using:

```bash
openssl rand -base64 32
```

Add to `.env`:

```env
NEXTAUTH_SECRET="your_generated_secret"
NEXTAUTH_URL="http://localhost:3000"
NEXT_PUBLIC_BASE_URL="http://localhost:3000"
```

### Email Service (Resend)

1. Create account at [Resend](https://resend.com)
2. Get API key and add to `.env`:

```env
RESEND_API_KEY="your_api_key"
```

### File Upload (UploadThing)

1. Create account at [UploadThing](https://uploadthing.com)
2. Get API key and add to `.env`:

```env
UPLOADTHING_TOKEN='your_token'
```

## Database Setup

1. Push the schema to your database:

```bash
pnpm prisma db push
```

2. Seed the database with initial data:

```bash
pnpm prisma db seed
```

This will create:

- Default roles (Admin and User)
- Admin user (email: admin@admin.com, password: Admin@2025)
- Regular user (email: user@user.com, password: User@2025)

## Authorization

### Server-Side Protection

```typescript
// In server components
import { getServerPermissions, PermissionGate } from "@/utils/server-permissions";

export default async function ProtectedPage() {
  const { hasPermission } = await getServerPermissions();

  // Direct permission check
  if (!hasPermission("users.read")) {
    return <NotAuthorized />;
  }

  // Using PermissionGate component
  return (
    <div>
      <h1>Users Page</h1>
      <PermissionGate permission="users.create">
        <button>Create User</button>
      </PermissionGate>
    </div>
  );
}
```

### Client-Side Protection

```typescript
// In client components
'use client';
import { usePermission } from "@/hooks/usePermission";

export default function UserTable() {
  const { hasPermission } = usePermission();

  return (
    <div>
      {hasPermission("users.create") && (
        <button>Create User</button>
      )}
    </div>
  );
}
```

## Available Permissions

The system includes permissions for:

- Dashboard management
- User management
- Role management


Each module has these permission types:

- `create`: Create new items
- `read`: View items
- `update`: Modify existing items
- `delete`: Remove items

Example: `users.create`, `users.read`, etc.

## Development Guidelines

1. Always use permission checks for protected routes
2. Use server-side checks when possible
3. Client-side checks are for UI elements only
4. Keep permissions consistent with the schema
5. Test both authenticated and unauthenticated states


2. Authentication issues:

   - Verify callback URLs in OAuth providers
   - Check NEXTAUTH_URL setting

3. Permission issues:
   - Run database seed
   - Check user role assignments
   - Verify permission strings match exactly
     
  USER GUIDE
  
🧑 User Accounts
✅ Registration
Sign up using your email and phone number.

Verify your email address after registration.

Set your name, job title, and profile image in the Profile Settings.

🔐 Login
Login using your email and password or through linked social accounts.

You’ll remain signed in using secure session tokens.

👤 User Roles
Users can have one or more roles:

USER – Ask questions, post answers, comment, and like content.

ADMIN – Manage users, content, and categories.

SERVICE_PROVIDER – Experts who provide verified answers and content.

Roles can have different permissions like profile.update, orders.read, or dashboard.read.

📚 Categories & Subcategories
The platform is organized around Categories like:

Crop Farming

Animal Husbandry

Market Insights

Each category can have several Subcategories (e.g., Maize Farming under Crop Farming).

Your preferences help personalize content shown on the homepage.

❓ Asking Questions
Navigate to the Ask a Question page.

Choose a Category and Subcategory.

Add a title and a detailed description.

Questions are visible to all users and searchable.

You can star questions to bookmark them.

💬 Answers & Voting
Answer questions by clicking "Answer".

Answers can be upvoted or downvoted by others.

The best answers rise to the top based on votes.

Each user can only vote once per answer.

📄 Articles
Experts or advanced users can post Articles with attachments.

Articles belong to categories/subcategories.

They can be liked/disliked and commented on.

Articles include reading time and author details.

💭 Discussions
Create or join discussions on specific Topics.

Discussions are grouped by category/subcategory.

You can attach files (e.g., PDFs, images) and post responses.

Use this section for open conversations or deep dives into agricultural trends.

📝 Comments & Responses
Articles support Comments.

Discussions support Responses.

You can like/dislike responses and comments.

🏷️ Topics
Topics group discussions under themes like:

"Organic Pest Control"

"Climate-smart Agriculture"

Only registered users can create or follow topics.

📊 Blogs
Admins and verified authors can publish Blogs:

Includes title, slug, description, image, and full content.

Blogs belong to BlogCategories.

Featured or published blogs appear on the home page.

❤️ Preferences
Users can set preferred:

Categories

Subcategories

This helps customize the dashboard experience with relevant articles, discussions, and questions.

🛡️ Admin Features
Admins can:

Manage users, roles, and permissions.

Approve or deactivate content.

Create/edit categories and subcategories.

View statistics on views, likes, votes, etc.

📈 Engagement & Metrics
The system tracks:

Views for questions (QuestionView)

Likes/dislikes for answers, articles, and discussions

Votes (UP/DOWN) for answers

Responses in discussions

🧩 Data Integrity
All user-generated content is:

Linked to verified users.

Soft-deletable via status flags (isActive, isVerified, etc.).

Indexed for performance.

📅 Timestamps
All records include:

createdAt (record creation time)

updatedAt (last modified time)

This helps maintain data freshness and ordering.

