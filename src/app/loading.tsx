import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="px-4 md:px-[60px] py-[60px]">
      <div className="max-w-[1320px] mx-auto space-y-[60px]">
        {/* Hero Skeleton */}
        <Skeleton className="w-full h-[300px] md:h-[564px] rounded-3xl" />

        {/* Why Us Section Skeleton */}
        <div className="space-y-8">
          <div className="flex flex-col items-center gap-2">
            <Skeleton className="h-6 w-48" />
            <Skeleton className="h-10 w-64" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-[347px] rounded-3xl" />
            ))}
          </div>
        </div>

        {/* Popular Restaurants Skeleton */}
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="space-y-4 w-full lg:w-[367px]">
            <Skeleton className="h-6 w-48" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-14 w-[238px]" />
          </div>
          <div className="flex gap-5">
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} className="h-[475px] w-[214px] rounded-3xl shrink-0" />
            ))}
          </div>
        </div>

        {/* Near You Skeleton */}
        <div className="space-y-8">
          <div className="flex justify-between items-center">
            <div className="space-y-2">
              <Skeleton className="h-6 w-48" />
              <Skeleton className="h-10 w-64" />
            </div>
            <Skeleton className="h-16 w-[252px] rounded-xl" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} className="h-[415px] rounded-3xl" />
            ))}
          </div>
        </div>

        {/* Expert Chefs Skeleton */}
        <div className="flex flex-col lg:flex-row gap-8">
          <Skeleton className="h-[600px] lg:h-[848px] w-full lg:w-[660px] rounded-3xl" />
          <div className="space-y-5 w-full lg:w-[596px]">
            <div className="space-y-2">
              <Skeleton className="h-6 w-48" />
              <Skeleton className="h-10 w-64" />
            </div>
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-[141px] rounded-3xl" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
