"use server";

import { authOptions } from "@/config/auth";
import { db } from "@/prisma/db";
import { QuestionProps, SubCategoryProps } from "@/types/types";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";

export async function createQuestion(data: QuestionProps) {
  try {
    const newQuestion = await db.question.create({
      data,
    });
    // console.log(newCategory);
    revalidatePath("/dashboard/questions");
    return newQuestion;
  } catch (error) {
    console.log(error);
    return null;
  }
}
export async function getAllQuestions() {
  try {
    const questions = await db.question.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include:{
        answers:true,
        views:true,
        subcategory:true,
        category:true,
        user:true
      }
    });

    return questions;
  } catch (error) {
    console.log(error);
    return null;
  }
}
export async function updateQuestionById(id: string, data: QuestionProps) {
  try {
    const updatedQuestion = await db.question.update({
      where: {
        id,
      },
      data,
    });
    revalidatePath("/dashboard/questions");
    return updatedQuestion;
  } catch (error) {
    console.log(error);
  }
}
export async function getQuestionById(id: string) {
  try {
    const question = await db.question.findUnique({
      where: {
        id,
      },
    include:{
      user:true,
      category:true,
      subcategory:true,
      answers:true
    }
    });
    return question;
  } catch (error) {
    console.log(error);
  }
}
export async function deleteQuestion(id: string) {
  try {
    const deletedQuestion = await db.question.delete({
      where: {
        id,
      },
    });

    return {
      ok: true,
      data: deletedQuestion,
    };
  } catch (error) {
    console.log(error);
  }
}
export async function createBulkQuestions(questions:QuestionProps[]) {
  try {
    for (const question of questions) {
      await createQuestion(question);
    }
  } catch (error) {
    console.log(error);
  }
}
export async function getTrendingQuestions() {
  try {
    const questions = await db.question.findMany({
      include: {
        answers: true,
        subcategory: true,
        category: true,
        user: true,
        _count: {
          select: { answers: true },
        },
      },
    });

    // Calculate score based on answer count (and optionally stars)
    const sortedQuestions = questions
      .map((question) => ({
        ...question,
        score: question._count.answers, // or add stars: (question.stars * 2) + question._count.answers
      }))
      .sort((a, b) => b.score - a.score);

    return sortedQuestions;
  } catch (error) {
    console.log(error);
    return null;
  }
}


// update star count
// export async function incrementQuestionViews(id: string) {
//   try {
//     const session = await authOptions();

//     if (!session?.user?.id) {
//       return { success: false, message: "Not authenticated" };
//     }

//     const userId = session.user.id;
    
//     // Check if the user has already starred this question
//     const existingStar = await db.questionView.findUnique({
//       where: {
//         questionId_userId: {
//           questionId: id,
//           userId: userId,
//         },
//       },
//     });

//     // If user has already starred, return early without incrementing
//     if (existingStar) {
//       return { success: false, alreadyStarred: true, message: "You have already starred this question" };
//     }

//     // Create a transaction to ensure both operations succeed or fail together
//     const result = await db.$transaction(async (tx) => {
//       // Create the star record for this user
//       await tx.questionView.create({
//         data: {
//           questionId: id,
//           userId: userId,
//         },
//       });

//       // Increment the stars count on the question
//       const updatedQuestion = await tx.question.update({
//         where: { id },
//         data: { 
//           views: { increment: 1 } 
//         },
//       });

//       return updatedQuestion;
//     });

//     // Revalidate the paths
//     revalidatePath("/");
//     revalidatePath(`/qa/${id}`);
    
//     return { success: true, data: result };
//   } catch (error) {
//     console.error("Error updating stars:", error);
//     return { success: false, message: "Failed to update stars" };
//   }
// }

// // Helper function to check if a user has already starred a question
// export async function hasUserStarredQuestion(questionId: string) {
//   try {
//     const session = await auth();
    
//     if (!session?.user?.id) {
//       return false;
//     }

//     const userId = session.user.id;
    
//     const existingStar = await db.questionStar.findUnique({
//       where: {
//         questionId_userId: {
//           questionId,
//           userId,
//         },
//       },
//     });

//     return !!existingStar;
//   } catch (error) {
//     console.error("Error checking star status:", error);
//     return false;
//   }
// }

// // Function to get starred status for multiple questions
// export async function getStarredStatusForQuestions(questionIds: string[]) {
//   try {
//     const session = await auth();
    
//     if (!session?.user?.id) {
//       return {};
//     }

//     const userId = session.user.id;
    
//     const stars = await db.questionStar.findMany({
//       where: {
//         userId: userId,
//         questionId: {
//           in: questionIds
//         }
//       },
//       select: {
//         questionId: true
//       }
//     });

//     // Create a map of questionId -> starred status
//     const starredMap: Record<string, boolean> = {};
//     questionIds.forEach(id => {
//       starredMap[id] = false;
//     });
    
//     stars.forEach(star => {
//       starredMap[star.questionId] = true;
//     });

//     return starredMap;
//   } catch (error) {
//     console.error("Error getting starred statuses:", error);
//     return {};
//   }
// }


