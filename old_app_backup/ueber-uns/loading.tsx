export default function UeberUnsLoading() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-background animate-pulse">
      <div className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center bg-surface">
        <div className="text-center max-w-4xl mx-auto px-4">
          <div className="h-14 w-96 bg-border rounded-lg mx-auto mb-6" />
          <div className="h-5 w-80 bg-border rounded mx-auto mb-4" />
          <div className="h-5 w-64 bg-border rounded mx-auto" />
        </div>
      </div>
      <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        <div className="text-center mb-16">
          <div className="h-4 w-32 bg-border rounded mx-auto mb-2" />
          <div className="h-8 w-72 bg-border rounded mx-auto" />
        </div>
        <div className="flex flex-col gap-12">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/2 h-48 bg-border rounded-xl" />
              <div className="w-full md:w-1/2 flex flex-col gap-3">
                <div className="h-6 w-20 bg-border rounded" />
                <div className="h-5 w-48 bg-border rounded" />
                <div className="h-4 w-full bg-border rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
