import React from "react";

const RecentUsersList = () => {
  return (
    <div className="w-full bg-white rounded-xl p-6">
      <h1 className="text-lg font-semibold">Recent Users</h1>
      <div className="w-full overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm text-gray-500">
          <thead className="">
            <tr className="">
              <th
                scope="col"
                className="px-6 lg:px-4 xl:px-0 py-4 font-medium text-base"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 lg:px-4 xl:px-0 py-4 font-medium text-base"
              >
                Gender
              </th>
              <th
                scope="col"
                className="px-6 lg:px-4 xl:px-0 py-4 font-medium text-base"
              >
                Plan
              </th>

              <th
                scope="col"
                className="px-6 lg:px-4 xl:px-0 py-4 font-medium text-base"
              >
                Amount
              </th>
              <th
                scope="col"
                className="px-6 lg:px-4 xl:px-0 py-4 font-medium text-base"
              >
                Date
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            <tr className="">
              <th className="px-6 lg:px-4 xl:px-0 flex gap-3  py-4 font-normal text-gray-900">
                <div className="relative h-10 w-10">
                  <img
                    className="h-full w-full rounded-full object-cover object-center"
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="text-sm">
                  <div className="font-medium text-gray-700">Steven Jobs</div>
                  <p classname="text-gray-400">
                    jobs@sailbotui.com
                  </p>
                </div>
              </th>
              <td className="px-6 lg:px-4 xl:px-0 py-4">
                <span className="text-sm">Male</span>
              </td>
              <td className="px-6 lg:px-4 xl:px-0 py-4">Workout Plan</td>
              <td className="px-6 lg:px-4 xl:px-0 py-4">$80.00</td>
              <td className="px-6 lg:px-4 xl:px-0 py-4">07.05.2024</td>
            </tr>
            <tr className="">
              <th className="px-6 lg:px-4 xl:px-0 flex gap-3  py-4 font-normal text-gray-900">
                <div className="relative h-10 w-10">
                  <img
                    className="h-full w-full rounded-full object-cover object-center"
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="text-sm">
                  <div className="font-medium text-gray-700">Steven Jobs</div>
                  <div mailto:classname="text-gray-400">
                    jobs@sailboatui.com
                  </div>
                </div>
              </th>
              <td className="px-6 lg:px-4 xl:px-0 py-4">
                <span className="text-sm">Male</span>
              </td>
              <td className="px-6 lg:px-4 xl:px-0 py-4">Workout Plan</td>
              <td className="px-6 lg:px-4 xl:px-0 py-4">$80.00</td>
              <td className="px-6 lg:px-4 xl:px-0 py-4">07.05.2024</td>
            </tr>
            <tr className="">
              <th className="px-6 lg:px-4 xl:px-0 flex gap-3  py-4 font-normal text-gray-900">
                <div className="relative h-10 w-10">
                  <img
                    className="h-full w-full rounded-full object-cover object-center"
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="text-sm">
                  <div className="font-medium text-gray-700">Steven Jobs</div>
                  <div mailto:classname="text-gray-400">
                    jobs@sailboatui.com
                  </div>
                </div>
              </th>
              <td className="px-6 lg:px-4 xl:px-0 py-4">
                <span className="text-sm">Male</span>
              </td>
              <td className="px-6 lg:px-4 xl:px-0 py-4">Workout Plan</td>
              <td className="px-6 lg:px-4 xl:px-0 py-4">$80.00</td>
              <td className="px-6 lg:px-4 xl:px-0 py-4">07.05.2024</td>
            </tr>
            <tr className="">
              <th className="px-6 lg:px-4 xl:px-0 flex gap-3  py-4 font-normal text-gray-900">
                <div className="relative h-10 w-10">
                  <img
                    className="h-full w-full rounded-full object-cover object-center"
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="text-sm">
                  <div className="font-medium text-gray-700">Steven Jobs</div>
                  <div classname="text-gray-400">jobs@sailboatui.com</div>
                </div>
              </th>
              <td className="px-6 lg:px-4 xl:px-0 py-4">
                <span className="text-sm">Male</span>
              </td>
              <td className="px-6 lg:px-4 xl:px-0 py-4">Workout Plan</td>
              <td className="px-6 lg:px-4 xl:px-0 py-4">$80.00</td>
              <td className="px-6 lg:px-4 xl:px-0 py-4">07.05.2024</td>
            </tr>
            <tr className="">
              <th className="px-6 lg:px-4 xl:px-0 flex gap-3  py-4 font-normal text-gray-900">
                <div className="relative h-10 w-10">
                  <img
                    className="h-full w-full rounded-full object-cover object-center"
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="text-sm">
                  <div className="font-medium text-gray-700">Steven Jobs</div>
                  <div classname="text-gray-400">jobs@sailboatui.com</div>
                </div>
              </th>
              <td className="px-6 lg:px-4 xl:px-0 py-4">Male</td>
              <td className="px-6 lg:px-4 xl:px-0 py-4">
                <span className="text-sm">Workout Plan</span>
              </td>
              <td className="px-6 lg:px-4 xl:px-0 py-4">$80.00</td>
              <td className="px-6 lg:px-4 xl:px-0 py-4">07.05.2024</td>
            </tr>
            <tr className="">
              <th className="px-6 lg:px-4 xl:px-0 flex gap-3  py-4 font-normal text-gray-900">
                <div className="relative h-10 w-10">
                  <img
                    className="h-full w-full rounded-full object-cover object-center"
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="text-sm">
                  <div className="font-medium text-gray-700">Steven Jobs</div>
                  <div mailto:classname="text-gray-400">
                    jobs@sailboatui.com
                  </div>
                </div>
              </th>
              <td className="px-6 lg:px-4 xl:px-0 py-4">
                <span className="text-sm">Male</span>
              </td>
              <td className="px-6 lg:px-4 xl:px-0 py-4">Workout Plan</td>
              <td className="px-6 lg:px-4 xl:px-0 py-4">$80.00</td>
              <td className="px-6 lg:px-4 xl:px-0 py-4">07.05.2024</td>
            </tr>
            <tr className="">
              <th className="px-6 lg:px-4 xl:px-0 flex gap-3  py-4 font-normal text-gray-900">
                <div className="relative h-10 w-10">
                  <img
                    className="h-full w-full rounded-full object-cover object-center"
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="text-sm">
                  <div className="font-medium text-gray-700">Steven Jobs</div>
                  <div mailto:classname="text-gray-400">
                    jobs@sailboatui.com
                  </div>
                </div>
              </th>
              <td className="px-6 lg:px-4 xl:px-0 py-4">
                <span className="text-sm">Male</span>
              </td>
              <td className="px-6 lg:px-4 xl:px-0 py-4">Workout Plan</td>
              <td className="px-6 lg:px-4 xl:px-0 py-4">$80.00</td>
              <td className="px-6 lg:px-4 xl:px-0 py-4">07.05.2024</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentUsersList;
