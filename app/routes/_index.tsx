const HomePage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Sample Page</h1>

      {/* テーブルのセクション */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Table Example</h2>
        <table className="border-collapse border border-gray-300 w-full">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">Age</th>
              <th className="border border-gray-300 p-2">City</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">Alice</td>
              <td className="border border-gray-300 p-2">25</td>
              <td className="border border-gray-300 p-2">New York</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Bob</td>
              <td className="border border-gray-300 p-2">30</td>
              <td className="border border-gray-300 p-2">Los Angeles</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Charlie</td>
              <td className="border border-gray-300 p-2">35</td>
              <td className="border border-gray-300 p-2">Chicago</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* リストのセクション */}
      <section>
        <h2 className="text-xl font-semibold mb-2">List Example</h2>
        <ul className="list-disc pl-6">
          <li className="mb-1">Item 1</li>
          <li className="mb-1">Item 2</li>
          <li className="mb-1">Item 3</li>
          <li className="mb-1">Item 4</li>
        </ul>
      </section>
    </div>
  );
};

export default HomePage;
