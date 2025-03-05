// "use client";

// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import TextArea from "../FormInputs/TextAreaInput";
// import toast from "react-hot-toast";
// import { revalidatePath } from "next/cache";
// import SubmitButton from "../FormInputs/SubmitButton";
// import { createQuestion } from "@/actions/questions";
// import { AnswerProps } from "@/types/types";
// import { createAnswer, updateAnswerById } from "@/actions/answers";



// export default function CreateAnswerForm({userId,questionId}:{userId:any,questionId:any}) {

//     const router = useRouter();
//     const [loading, setLoading] = useState(false);
//     const { register,watch, handleSubmit, reset, formState: { errors } } = useForm({
     
//     });
  


//     async function saveAnswer(data: AnswerProps) {
//       try {
//         setLoading(true);
//         data.questionId=questionId
//         data.userId=userId
        
//         await createAnswer(data);
//       } catch (error) {
//         setLoading(false);
//         console.log(error);
//       }
//     }


//   return (
//     <form className="max-w-4xl mx-auto" onSubmit={handleSubmit(saveAnswer)}>
//          <Card>
//           <CardContent className="p-4 space-y-4">
//                <TextArea
//                      register={register}
//                      errors={errors}
//                       label="Describe your answer"
//                     name="content"
//                       />
//             <div className="flex justify-end">
//               <SubmitButton
//                       title="Post answer"
//                       loading={loading}
//                     />
//             </div>
//           </CardContent>
//         </Card>
//     </form>
   
//   );
// }


"use client";
import { Button } from "@/components/ui/button";
import {   
  Card,   
  CardContent,   
  CardHeader,   
  CardTitle, 
} from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import TextArea from "../FormInputs/TextAreaInput";
import toast from "react-hot-toast";
import SubmitButton from "../FormInputs/SubmitButton";
import { AnswerProps } from "@/types/types";
import { createAnswer, updateAnswerById } from "@/actions/answers";

export default function CreateAnswerForm({userId, questionId}: {userId: string, questionId: string}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  
  const { 
    register, 
    handleSubmit, 
    reset, 
    formState: { errors } 
  } = useForm<AnswerProps>();

  const saveAnswer: SubmitHandler<AnswerProps> = async (data) => {
    try {
      setLoading(true);
      data.questionId = questionId;
      data.userId = userId;


      await createAnswer(data);
      
      // Optional: Reset form or show success toast
      reset();
      toast.success('Answer submitted successfully');
      // revalidatePath(`/qa/${questionId}`);

      
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
      toast.error('Failed to submit answer');
    }
  };

  return (
    <form className="max-w-4xl mx-auto" onSubmit={handleSubmit(saveAnswer)}>
      <Card>
        <CardContent className="p-4 space-y-4">
          <TextArea
            register={register}
            errors={errors}
            label="Describe your answer"
            name="content"
          />
          <div className="flex justify-end">
            <SubmitButton
              title="Post answer"
              loading={loading}
            />
          </div>
        </CardContent>
      </Card>
    </form>
  );
}