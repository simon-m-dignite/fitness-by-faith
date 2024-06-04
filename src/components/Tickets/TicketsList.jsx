import React from "react";
import { Link } from "react-router-dom";

const TicketsList = () => {
  return (
    <div className="w-full">
      {/* <table className="w-full border-collapse text-left text-sm text-gray-500">
        <thead className="">
          <tr className="">
            <th
              scope="col"
              className="px-6 lg:px-4 xl:px-0 py-4 font-medium text-base"
            >
              ID
            </th>
            <th
              scope="col"
              className="px-6 lg:px-4 xl:px-0 py-4 font-medium text-base"
            >
              Subject
            </th>
            <th
              scope="col"
              className="px-6 lg:px-4 xl:px-0 py-4 font-medium text-base"
            >
              Created
            </th>

            <th
              scope="col"
              className="px-6 lg:px-4 xl:px-0 py-4 font-medium text-base"
            >
              Status
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
          <tr className="">
            <td className="px-6 lg:px-4 xl:px-0 flex gap-3  py-4 font-normal text-gray-900">
              1234356
            </td>
            <td className="px-6 lg:px-4 xl:px-0 py-4">
              <Link
                to="/support-requests/12345"
                className="text-sm font-medium text-green-600 underline"
              >
                Conversation with Admin
              </Link>
            </td>
            <td className="px-6 lg:px-4 xl:px-0 py-4">06.06.2024</td>
            <td className="px-6 lg:px-4 xl:px-0 py-4">
              <span className="bg-gray-400 text-white px-4 py-1 rounded-full text-sm font-medium">
                Solved
              </span>
            </td>
          </tr>
        </tbody>
      </table> */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg p-4">
          <div className="w-full flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="block w-14 h-14 rounded-full"
            />
            <div className="flex flex-col">
              <h1 className="font-semibold">John Doe</h1>
              <p className="text-sm font-normal text-gray-400">
                johndoe@gmail.com
              </p>
            </div>
          </div>
          <div className="w-full pt-4">
            <p className="text-sm font-semibold mb-1.5">Request title</p>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Obcaecati delectus dicta ut excepturi at vero placeat laborum
              ipsum tenetur necessitatibus quasi optio minus nobis qui, harum
              ducimus nesciunt modi omnis?
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg p-4">
          <div className="w-full flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="block w-14 h-14 rounded-full"
            />
            <div className="flex flex-col">
              <h1 className="font-semibold">John Doe</h1>
              <p className="text-sm font-normal text-gray-400">
                johndoe@gmail.com
              </p>
            </div>
          </div>
          <div className="w-full pt-4">
            <p className="text-sm font-semibold mb-1.5">Request title</p>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Obcaecati delectus dicta ut excepturi at vero placeat laborum
              ipsum tenetur necessitatibus quasi optio minus nobis qui, harum
              ducimus nesciunt modi omnis?
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg p-4">
          <div className="w-full flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="block w-14 h-14 rounded-full"
            />
            <div className="flex flex-col">
              <h1 className="font-semibold">John Doe</h1>
              <p className="text-sm font-normal text-gray-400">
                johndoe@gmail.com
              </p>
            </div>
          </div>
          <div className="w-full pt-4">
            <p className="text-sm font-semibold mb-1.5">Request title</p>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Obcaecati delectus dicta ut excepturi at vero placeat laborum
              ipsum tenetur necessitatibus quasi optio minus nobis qui, harum
              ducimus nesciunt modi omnis?
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg p-4">
          <div className="w-full flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="block w-14 h-14 rounded-full"
            />
            <div className="flex flex-col">
              <h1 className="font-semibold">John Doe</h1>
              <p className="text-sm font-normal text-gray-400">
                johndoe@gmail.com
              </p>
            </div>
          </div>
          <div className="w-full pt-4">
            <p className="text-sm font-semibold mb-1.5">Request title</p>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Obcaecati delectus dicta ut excepturi at vero placeat laborum
              ipsum tenetur necessitatibus quasi optio minus nobis qui, harum
              ducimus nesciunt modi omnis?
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg p-4">
          <div className="w-full flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="block w-14 h-14 rounded-full"
            />
            <div className="flex flex-col">
              <h1 className="font-semibold">John Doe</h1>
              <p className="text-sm font-normal text-gray-400">
                johndoe@gmail.com
              </p>
            </div>
          </div>
          <div className="w-full pt-4">
            <p className="text-sm font-semibold mb-1.5">Request title</p>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Obcaecati delectus dicta ut excepturi at vero placeat laborum
              ipsum tenetur necessitatibus quasi optio minus nobis qui, harum
              ducimus nesciunt modi omnis?
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg p-4">
          <div className="w-full flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="block w-14 h-14 rounded-full"
            />
            <div className="flex flex-col">
              <h1 className="font-semibold">John Doe</h1>
              <p className="text-sm font-normal text-gray-400">
                johndoe@gmail.com
              </p>
            </div>
          </div>
          <div className="w-full pt-4">
            <p className="text-sm font-semibold mb-1.5">Request title</p>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Obcaecati delectus dicta ut excepturi at vero placeat laborum
              ipsum tenetur necessitatibus quasi optio minus nobis qui, harum
              ducimus nesciunt modi omnis?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketsList;
