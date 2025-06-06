// // components/frontend/discussions/DiscussionFeed.tsx
// 'use client';

// import { useState, useMemo } from 'react';
// import { Category, Discussion, SubCategory } from '@prisma/client';
// import { CategoryFilters } from './discussions/category-filters';
// import { DiscussionList } from './discussions/discussion-list';
// type Props = {
//   discussions: Discussion[];
//   categories: Category[];
//   subcategories: SubCategory[];
// };

// export default function DiscussionFeed({
//   discussions,
//   categories,
//   subcategories,
// }: Props) {
//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
//   const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);

//   const filteredDiscussions = useMemo(() => {
//     return discussions.filter((discussion) => {
//       const matchCategory = selectedCategory ? discussion.categoryId === selectedCategory : true;
//       const matchSubcategory = selectedSubcategory ? discussion.subcategoryId === selectedSubcategory : true;
//       return matchCategory && matchSubcategory;
//     });
//   }, [discussions, selectedCategory, selectedSubcategory]);

//   return (
//     <div>
//       <CategoryFilters
//         categories={categories}
//         subcategories={subcategories}
//         selectedCategory={selectedCategory}
//         selectedSubcategory={selectedSubcategory}
//         onCategoryChange={setSelectedCategory}
//         onSubcategoryChange={setSelectedSubcategory}
//       />
//       <DiscussionList discussions={filteredDiscussions} />
//     </div>
//   );
// }


'use client';

import { useState, useMemo } from 'react';
import { Category, Discussion, SubCategory } from '@prisma/client';
import { CategoryFilters } from './discussions/category-filters';
import { DiscussionList } from './discussions/discussion-list';

type Props = {
  discussions: Discussion[];
  categories: Category[];
  subcategories: SubCategory[];
};

export default function DiscussionFeed({
  discussions,
  categories,
  subcategories,
}: Props) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);

  const filteredDiscussions = useMemo(() => {
    return discussions.filter((discussion) => {
      const matchCategory = selectedCategory ? discussion.categoryId === selectedCategory : true;
      const matchSubcategory = selectedSubcategory ? discussion.subcategoryId === selectedSubcategory : true;
      return matchCategory && matchSubcategory;
    });
  }, [discussions, selectedCategory, selectedSubcategory]);

  return (
    <div>
      <CategoryFilters
        categories={categories}
        subcategories={subcategories}
        selectedCategory={selectedCategory}
        selectedSubcategory={selectedSubcategory}
        onCategoryChange={setSelectedCategory}
        onSubcategoryChange={setSelectedSubcategory}
      />
      <DiscussionList discussions={filteredDiscussions} />
    </div>
  );
}
