import { useState, useEffect } from 'react';
import PocketBase from 'pocketbase';
import jsPDF from 'jspdf';

const Records = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const pb = new PocketBase('https://avalon.glitchctf.games');

        
        await pb.admins.authWithPassword('shakir@aliviation.me', 'caterpillar');

        const resultList = await pb.collection('inspection').getList(1, 50, {
          sort: '-created',
        });

        const formattedRecords = resultList.items.map(record => {
          const date = new Date(record.time);

          // Format date as DD-MM-YYYY
          const formattedDate = date.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
          });

          // Format time as HH:MM in 24-hour format
          const formattedTime = date.toLocaleTimeString('en-GB', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
          });

          return {
            id: record.InsID,
            name: record.InsName,
            time: `${formattedDate} - ${formattedTime}`,
            location: record.location,
          };
        });

        setRecords(formattedRecords);
      } catch (error) {
        console.error('Error fetching records:', error);
      }
    };

    fetchRecords();
  }, []);

  const handleDownload = (record) => {
    const doc = new jsPDF();

    doc.text('Inspection Record', 20, 20);
    doc.text(`Inspection ID: ${record.id}`, 20, 30);
    doc.text(`Vehicle Name: ${record.name}`, 20, 40);
    doc.text(`Time: ${record.time}`, 20, 50);
    doc.text(`Location: ${record.location}`, 20, 60);

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
                Inspection Name
              </th>
              <th scope="col" className="px-6 py-3">
                Date & Time
              </th>
              <th scope="col" className="px-6 py-3">
                Location
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Download</span>
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
                <td className="px-6 py-4">{record.name}</td>
                <td className="px-6 py-4">{record.time}</td>
                <td className="px-6 py-4">{record.location}</td>
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