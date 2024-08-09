const Records = () => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">
          Inspection ID
        </th>
        <th scope="col" className="px-6 py-3">
          Vehicle ID
        </th>
        <th scope="col" className="px-6 py-3">
          Vehicle Name
        </th>
        <th scope="col" className="px-6 py-3">
          Date
        </th>
        <th scope="col" className="px-6 py-3">
          <span className="sr-only">Edit</span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
        9238
        </th>
        <td className="px-6 py-4">1111</td>
        <td className="px-6 py-4">Asphalt Pavers</td>
        <td className="px-6 py-4">17-07-24</td>
        <td className="px-6 py-4 text-right">
          <a
            href="#"
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            Download
          </a>
        </td>
      </tr>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          8364
        </th>
        <td className="px-6 py-4">2222</td>
        <td className="px-6 py-4">Backhoe Loaders</td>
        <td className="px-6 py-4">28-08-24</td>
        <td className="px-6 py-4 text-right">
          <a
            href="#"
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            Download
          </a>
        </td>
      </tr>
      <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          8763
        </th>
        <td className="px-6 py-4">3333</td>
        <td className="px-6 py-4">Compactors</td>
        <td className="px-6 py-4">05-06-24</td>
        <td className="px-6 py-4 text-right">
          <a
            href="#"
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            Download
          </a>
        </td>
      </tr>
    </tbody>
  </table>
</div>

  )
}

export default Records