import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function MyModal(props) {
  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <Transition appear show={props.show} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={props.closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className=" transform overflow-hidden rounded-2xl bg-white p-9 w-[700px] text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-3xl mb-9 font-blod leading-6 text-black text-center"
                  >
                    Detail Appoinment
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-xl text-hijaugelap font-bold">Subject</p>
                    <p className="mb-3">Haidar Izzuddin</p>
                    <p className="text-xl text-hijaugelap font-bold">
                      Applicant
                    </p>
                    <p className="mb-3">TEST</p>
                    <p className="text-xl text-hijaugelap font-bold">
                      Explanation
                    </p>
                    <p className="mb-3">TEST</p>
                    <p className="text-xl text-hijaugelap font-bold">TIME</p>
                    <p className="mb-3">TEST</p>
                    <p className="text-xl text-hijaugelap font-bold">Status</p>
                    <p className="mb-3">TEST</p>
                    <p className="text-xl text-hijaugelap font-bold">
                      Appoinment Fee
                    </p>
                    <p className="mb-3">TEST</p>
                    <p className="text-xl text-hijaugelap font-bold">
                      Fee Status
                    </p>
                    <p className="mb-3">TEST</p>
                  </div>

                  <div className="flex justify-between mt-10">
                    <button
                      type="button"
                      className="w-[300px] bg-red-800 rounded-none hover:bg-red-500"
                      onClick={props.closeModal}
                    >
                      Reject
                    </button>
                    <button
                      type="button"
                      className="w-[300px] bg-hijau rounded-none hover:bg-none"
                      onClick={props.closeModal}
                    >
                      Accept
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
