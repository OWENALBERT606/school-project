// "use client";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
// } from "@/components/ui/card";

// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import { useForm } from "react-hook-form";

// import toast from "react-hot-toast";
// import { Category } from "@prisma/client";
// import { DiscussionProps, QuestionProps} from "@/types/types";
// import FormHeader from "./FormHeader";
// import TextInput from "../FormInputs/TextInput";
// import TextArea from "../FormInputs/TextAreaInput";
// import ImageInput from "../FormInputs/ImageInput";
// import FormFooter from "./FormFooter";
// import { createCategory, updateCategoryById } from "@/actions/categories";
// import FormSelectInput from "../FormInputs/FormSelectInput";
// import { createSubCategory, updateSubCategoryById } from "@/actions/subcategories";
// import { createQuestion, updateQuestionById } from "@/actions/questions";
// import { createDiscussion, updateDiscussionById } from "@/actions/discussions";
// import VEditor from "../dashboard/text-editor";

// export type SelectOptionProps = {
//   label: string;
//   value: string;
// };
// type DiscussionFormProps = {
//   editingId?: string | undefined;
//   initialData?: DiscussionProps | undefined | null;
//   topics?: any | undefined | null;
//   session?: any | undefined | null;
// };
// export default function CreateDiscussionForm({
//   editingId,
//   initialData,
//   topics,
//   session
// }: DiscussionFormProps) {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm<DiscussionProps>({
//     defaultValues: {
//     //   topicId: initialData?.topic.id,
//       content: initialData?.content || "",
//     },
//   });
//   const router = useRouter();

//   const [loading, setLoading] = useState(false);
//   const [selectedTopic,setSelectedTopic]=useState<any>(topics[0]);
//   const [content, setContent] = useState("<p>Initial content</p>");


//   async function saveData(data: DiscussionProps) {
//     try {
//       setLoading(true);
//       data.userId=session?.user.id
//       data.topicId=selectedTopic.value
//       data.content=content

//       if (editingId) {
//         await updateDiscussionById(editingId, data);
//         setLoading(false);
//         // Toast
//         toast.success("Updated Successfully!");
//         //reset
//         reset();
//         //route
//         router.push("/dashboard/discussions");
//       } else {
//         await createDiscussion(data);
//         setLoading(false);
//         // Toast
//         toast.success("Successfully Created!");
//         //reset
//         reset();
//         router.push("/dashboard/discussions");
//       }
//     } catch (error) {
//       setLoading(false);
//       console.log(error);
//     }
//   }
//   // async function handleDeleteAll() {
//   // setLoading(true);
//   // try {
//   // await deleteManyCategories();
//   // setLoading(false);
//   // } catch (error) {
//   // console.log(error);
//   // }
//   // }

//   return (
//     <form className="" onSubmit={handleSubmit(saveData)}>
//       <FormHeader
//         href="/discussions"
//         parent=""
//         title="discussion"
//         editingId={editingId}
//         loading={loading}
//       />

//       <div className="grid grid-cols-12 gap-6 py-8">
//         <div className="lg:col-span-8 col-span-full space-y-3">
//           <Card>
//             <CardHeader>
//               {/* <CardTitle>Category Title</CardTitle> */}
//               <CardDescription>
                
//               </CardDescription>
//             </CardHeader>
//             <CardContent>
//               <div className="grid gap-6">
//                 <div className="grid gap-3">
//                   {/* <TextInput
//                     register={register}
//                     errors={errors}
//                     label="Question Title"
//                     name="title"
//                   /> */}
//                   <FormSelectInput
//                 label="Topic"
//                 options={topics}
//                 option={selectedTopic}
//                 setOption={setSelectedTopic}
//                 toolTipText="Add New Topic"
//                 href="/dashboard/topics/new"
//               />
//                 </div>
//                 <div className="grid gap-3">
//                   <TextArea
//                     register={register}
//                     errors={errors}
//                     label="Question Description"
//                     name="content"
//                   />
//                 </div>
//                 <VEditor
//       variant="default"
//       content={content}
//       setContent={setContent}
//       isEditable={true}
//     />
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
     
//       <FormFooter
//         href="/questions"
//         editingId={editingId}
//         loading={loading}
//         title="question"
//         parent=""
//       />
//     </form>
//   );
// }


// ................................................................................
// "use client";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
// } from "@/components/ui/card";

// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import { useForm } from "react-hook-form";

// import toast from "react-hot-toast";
// import { Category } from "@prisma/client";
// import { DiscussionProps, QuestionProps} from "@/types/types";
// import FormHeader from "./FormHeader";
// import TextInput from "../FormInputs/TextInput";
// import TextArea from "../FormInputs/TextAreaInput";
// import ImageInput from "../FormInputs/ImageInput";
// import FormFooter from "./FormFooter";
// import { createCategory, updateCategoryById } from "@/actions/categories";
// import FormSelectInput from "../FormInputs/FormSelectInput";
// import { createSubCategory, updateSubCategoryById } from "@/actions/subcategories";
// import { createQuestion, updateQuestionById } from "@/actions/questions";
// import { createDiscussion, updateDiscussionById } from "@/actions/discussions";
// import VEditor from "../dashboard/text-editor";
// import { Switch } from "@/components/ui/switch"; // Import the Switch component
// import { Label } from "@/components/ui/label"; // Import the Label component

// export type SelectOptionProps = {
//   label: string;
//   value: string;
// };
// type DiscussionFormProps = {
//   editingId?: string | undefined;
//   initialData?: DiscussionProps | undefined | null;
//   topics?: any | undefined | null;
//   session?: any | undefined | null;
// };
// export default function CreateDiscussionForm({
//   editingId,
//   initialData,
//   topics,
//   session
// }: DiscussionFormProps) {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm<DiscussionProps>({
//     defaultValues: {
//     //   topicId: initialData?.topic.id,
//       content: initialData?.content || "",
//       isActive: initialData?.isActive || true, // Set default value for isActive
//     },
//   });
//   const router = useRouter();

//   const [loading, setLoading] = useState(false);
//   const [selectedTopic, setSelectedTopic] = useState<any>(topics[0]);
//   const [content, setContent] = useState("<p>Initial content</p>");
//   const [isActive, setIsActive] = useState<boolean>(initialData?.isActive || true); // Explicitly type as boolean

//   // Handle the isActive toggle change
//   const handleIsActiveChange = (checked: boolean) => {
//     setIsActive(checked);
//   };

//   async function saveData(data: DiscussionProps) {
//     try {
//       setLoading(true);
//       data.userId = session?.user.id;
//       data.topicId = selectedTopic.value;
//       data.content = content;
//       data.isActive = isActive; // Include isActive in the data to be saved

//       if (editingId) {
//         await updateDiscussionById(editingId, data);
//         setLoading(false);
//         // Toast
//         toast.success("Updated Successfully!");
//         //reset
//         reset();
//         //route
//         router.push("/dashboard/discussions");
//       } else {
//         await createDiscussion(data);
//         setLoading(false);
//         // Toast
//         toast.success("Successfully Created!");
//         //reset
//         reset();
//         router.push("/dashboard/discussions");
//       }
//     } catch (error) {
//       setLoading(false);
//       console.log(error);
//     }
//   }

//   return (
//     <form className="" onSubmit={handleSubmit(saveData)}>
//       <FormHeader
//         href="/discussions"
//         parent=""
//         title="discussion"
//         editingId={editingId}
//         loading={loading}
//       />

//       <div className="grid grid-cols-12 gap-6 py-8">
//         <div className="lg:col-span-8 col-span-full space-y-3">
//           <Card>
//             <CardHeader>
//               <CardDescription>
                
//               </CardDescription>
//             </CardHeader>
//             <CardContent>
//               <div className="grid gap-6">
//                 <div className="grid gap-3">
//                   <FormSelectInput
//                     label="Topic"
//                     options={topics}
//                     option={selectedTopic}
//                     setOption={setSelectedTopic}
//                     toolTipText="Add New Topic"
//                     href="/dashboard/topics/new"
//                   />
//                 </div>
//                 <VEditor
//                   variant="default"
//                   content={content}
//                   setContent={setContent}
//                   isEditable={true}
//                 />
//                 {/* Add the isActive toggle switch */}
//                 <div className="flex items-center space-x-2">
//                   <Switch 
//                     id="isActive" 
//                     checked={isActive} 
//                     onCheckedChange={handleIsActiveChange} 
//                   />
//                   <Label htmlFor="isActive" className="cursor-pointer">
//                     {isActive ? "Active" : "Inactive"}
//                   </Label>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
     
//       <FormFooter
//         href="/questions"
//         editingId={editingId}
//         loading={loading}
//         title="question"
//         parent=""
//       />
//     </form>
//   );
// }



"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

import toast from "react-hot-toast";
import { Category } from "@prisma/client";
import { DiscussionProps, QuestionProps} from "@/types/types";
import FormHeader from "./FormHeader";
import TextInput from "../FormInputs/TextInput";
import TextArea from "../FormInputs/TextAreaInput";
import ImageInput from "../FormInputs/ImageInput";
import FormFooter from "./FormFooter";
import { createCategory, updateCategoryById } from "@/actions/categories";
import FormSelectInput from "../FormInputs/FormSelectInput";
import { createSubCategory, updateSubCategoryById } from "@/actions/subcategories";
import { createQuestion, updateQuestionById } from "@/actions/questions";
import { createDiscussion, updateDiscussionById } from "@/actions/discussions";
import VEditor from "../dashboard/text-editor";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import Pdfinput from "../FormInputs/PdfInput";
// import Pdfinput from "../FormInputs/Pdfinput"; // Import the PDF input component

export type SelectOptionProps = {
  label: string;
  value: string;
};
type DiscussionFormProps = {
  editingId?: string | undefined;
  initialData?: DiscussionProps | undefined | null;
  topics?: any | undefined | null;
  session?: any | undefined | null;
};
export default function CreateDiscussionForm({
  editingId,
  initialData,
  topics,
  session
}: DiscussionFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DiscussionProps>({
    defaultValues: {
    //   topicId: initialData?.topic.id,
      content: initialData?.content || "",
      isActive: initialData?.isActive || true,
    },
  });
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<any>(topics[0]);
  const [content, setContent] = useState("<p>Initial content</p>");
  const [isActive, setIsActive] = useState<boolean>(initialData?.isActive || true);
  const [documentUrl, setDocumentUrl] = useState<string>(initialData?.attachment || ""); // Add state for document URL

  const handleIsActiveChange = (checked: boolean) => {
    setIsActive(checked);
  };

  async function saveData(data: DiscussionProps) {
    try {
      setLoading(true);
      data.userId = session?.user.id;
      data.topicId = selectedTopic.value;
      data.content = content;
      data.isActive = isActive;
      data.attachment = documentUrl; // Include document URL in the data to be saved

      if (editingId) {
        await updateDiscussionById(editingId, data);
        setLoading(false);
        toast.success("Updated Successfully!");
        reset();
        router.push("/dashboard/discussions");
      } else {
        await createDiscussion(data);
        setLoading(false);
        toast.success("Successfully Created!");
        reset();
        router.push("/dashboard/discussions");
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  return (
    <form className="" onSubmit={handleSubmit(saveData)}>
      <FormHeader
        href="/discussions"
        parent=""
        title="discussion"
        editingId={editingId}
        loading={loading}
      />

      <div className="grid grid-cols-12 gap-6 py-8">
        <div className="lg:col-span-8 col-span-full space-y-3">
          <Card>
            <CardHeader>
              <CardDescription>
                
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <FormSelectInput
                    label="Topic"
                    options={topics}
                    option={selectedTopic}
                    setOption={setSelectedTopic}
                    toolTipText="Add New Topic"
                    href="/dashboard/topics/new"
                  />
                </div>
                {/* <div className="grid gap-3">
                  <TextArea
                    register={register}
                    errors={errors}
                    label="Question Description"
                    name="content"
                  />
                </div> */}
                <VEditor
                  variant="default"
                  content={content}
                  setContent={setContent}
                  isEditable={true}
                />
                {/* Add PDF Upload Component */}
                <Pdfinput
                  label="Upload Document"
                  pdfUrl={documentUrl}
                  setPdfUrl={setDocumentUrl}
                  endpoint="discussionDocument"
                />
                {/* Add the isActive toggle switch */}
                <div className="flex items-center space-x-2">
                  <Switch 
                    id="isActive" 
                    checked={isActive} 
                    onCheckedChange={handleIsActiveChange} 
                  />
                  <Label htmlFor="isActive" className="cursor-pointer">
                    {isActive ? "Active" : "Inactive"}
                  </Label>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
     
      <FormFooter
        href="/questions"
        editingId={editingId}
        loading={loading}
        title="question"
        parent=""
      />
    </form>
  );
}