export default function StatsCard() {
  return (
    <>
      <div className="text-orange-400 border border-gray-800 row-span-2 col-span-2 py-8 px-12 flex flex-col justify-between">
        <div className="flex flex-row justify-between">
          <div className="text-center flex flex-col gap-2">
            <div>Number of items</div>
            <div className="text-2xl font-bold">420</div>
          </div>
          <div className="text-center flex flex-col gap-2">
            <div>Quantity in the pantry</div>
            <div className="text-2xl font-bold">420</div>
          </div>
        </div>
        <div className="text-orange-400 flex flex-row justify-end">
          <div>View pantry</div>
        </div>
      </div>
    </>
  );
}
