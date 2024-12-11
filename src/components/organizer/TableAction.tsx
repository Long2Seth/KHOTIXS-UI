// 'use client';
//
//
// import {DataTableSearch} from "@/components/organizer/table/tata-table-search";
//
// export default function ProductTableAction() {
//     const {
//         categoriesFilter,
//         setCategoriesFilter,
//         isAnyFilterActive,
//         resetFilters,
//         searchQuery,
//         // setPage,
//         // setSearchQuery
//     } = useProductTableFilters();
//     return (
//         <div className="flex flex-wrap items-center gap-4">
//             <DataTableSearch
//                 searchKey="name"
//                 searchQuery={searchQuery}
//                 // setSearchQuery={setSearchQuery}
//                 // setPage={setPage}
//             />
//             <DataTableFilterBox
//                 filterKey="categories"
//                 title="Categories"
//                 options={CATEGORY_OPTIONS}
//                 setFilterValue={setCategoriesFilter}
//                 filterValue={categoriesFilter}
//             />
//             <DataTableResetFilter
//                 isFilterActive={isAnyFilterActive}
//                 onReset={resetFilters}
//             />
//         </div>
//     );
// }