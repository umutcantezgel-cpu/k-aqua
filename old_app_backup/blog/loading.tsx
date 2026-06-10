export default function BlogLoading() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-background animate-pulse">
      <div className="w-full bg-surface border-b border-border py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="h-12 w-40 bg-border rounded-lg mx-auto mb-4" />
          <div className="h-5 w-80 bg-border rounded mx-auto" />
        </div>
      </div>
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-surface rounded-2xl border border-border overflow-hidden">
              <div className="aspect-[16/9] w-full bg-border" />
              <div className="p-6">
                <div className="h-5 w-full bg-border rounded mb-2" />
                <div className="h-4 w-3/4 bg-border rounded mb-4" />
                <div className="flex justify-between">
                  <div className="h-3 w-24 bg-border rounded" />
                  <div className="h-3 w-16 bg-border rounded" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
