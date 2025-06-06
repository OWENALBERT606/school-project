

import { Category, SubCategory } from '@prisma/client';

export type CategoryFiltersProps = {
  categories: Category[];
  subcategories: SubCategory[];
  selectedCategory: string | null;
  selectedSubcategory: string | null;
  onCategoryChange: (value: string | null) => void;
  onSubcategoryChange: (value: string | null) => void;
};

export function CategoryFilters({
  categories,
  subcategories,
  selectedCategory,
  selectedSubcategory,
  onCategoryChange,
  onSubcategoryChange,
}: CategoryFiltersProps) {
  return (
    <div className="flex flex-col gap-4 mb-4 md:flex-row md:items-center">
      <select
        className="border p-2 rounded-md"
        value={selectedCategory ?? ""}
        onChange={(e) => onCategoryChange(e.target.value || null)}
      >
        <option value="">All Categories</option>
        {categories.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.title}
          </option>
        ))}
      </select>

      <select
        className="border p-2 rounded-md"
        value={selectedSubcategory ?? ""}
        onChange={(e) => onSubcategoryChange(e.target.value || null)}
      >
        <option value="">All Subcategories</option>
        {subcategories.map((sub) => (
          <option key={sub.id} value={sub.id}>
            {sub.title}
          </option>
        ))}
      </select>
    </div>
  );
}

