import jsPDF from 'jspdf';

const Records = () => {
  const records = [
    { id: '9238', vehicleId: '1111', vehicleName: 'Asphalt Pavers', date: '17-07-24' },
    { id: '8364', vehicleId: '2222', vehicleName: 'Backhoe Loaders', date: '28-08-24' },
    { id: '8763', vehicleId: '3333', vehicleName: 'Compactors', date: '05-06-24' },
  ];

  const handleDownload = (record) => {
    const doc = new jsPDF();

    doc.text('Inspection Record', 20, 20);
    doc.text(`Inspection ID: ${record.id}`, 20, 30);
    doc.text(`Vehicle ID: ${record.vehicleId}`, 20, 40);
    doc.text(`Vehicle Name: ${record.vehicleName}`, 20, 50);
    doc.text(`Date: ${record.date}`, 20, 60);

    doc.save(`Record_${record.id}.pdf`);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg max-w-7xl w-full">
        <table className="min-w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
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
            {records.map((record) => (
              <tr
                key={record.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {record.id}
                </th>
                <td className="px-6 py-4">{record.vehicleId}</td>
                <td className="px-6 py-4">{record.vehicleName}</td>
                <td className="px-6 py-4">{record.date}</td>
                <td className="px-6 py-4 text-right">
                  <button
                    onClick={() => handleDownload(record)}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Download Records
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Records;