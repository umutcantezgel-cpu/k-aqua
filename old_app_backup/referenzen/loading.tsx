export default function ReferenzenLoading() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-background animate-pulse">
      <div className="w-full bg-surface border-b border-border py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="h-12 w-60 bg-border rounded-lg mx-auto mb-4" />
          <div className="h-5 w-96 bg-border rounded mx-auto" />
        </div>
      </div>
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="bg-surface rounded-2xl border border-border p-6">
              <div className="h-5 w-40 bg-border rounded mb-3" />
              <div className="h-7 w-64 bg-border rounded mb-2" />
              <div className="h-4 w-full bg-border rounded mb-1" />
              <div className="h-4 w-3/4 bg-border rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
