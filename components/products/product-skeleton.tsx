export function ProductSkeleton() {
  return (
    <div className="card-frame overflow-hidden p-0">
      <div className="product-shimmer aspect-[16/10] w-full" />
      <div className="space-y-3 p-5">
        <div className="product-shimmer h-4 w-24 rounded-md" />
        <div className="product-shimmer h-5 w-4/5 rounded-md" />
        <div className="product-shimmer h-4 w-full rounded-md" />
        <div className="product-shimmer h-6 w-24 rounded-md" />
      </div>
    </div>
  );
}
