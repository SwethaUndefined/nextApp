"use client";
import Upcomings from "../dashboard/component/ProjectManager/Upcomings";
import HeadersTop from "../dashboard/common/HeadersTop";
import Activity from "../dashboard/component/ProjectManager/Activity";
import CalendarProject from "../dashboard/component/ProjectManager/CalendarProject";
import HiringCandidates from "../dashboard/component/ProjectManager/HiringCandidates";
import SideMenu from "../dashboard/component/SideMenu";
import React, { useState } from "react";
import Link from "next/link";
import StraightIcon from "@mui/icons-material/Straight";
import HistoryTab from "../dashboard/component/ProjectManager/HistoryTab";
import EditIcon from "@mui/icons-material/Edit";
import Bookmark from "@mui/icons-material/Bookmark";
import Modal from "react-modal";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function ProjectManagerJobDescriptionsTwo(params: type) {
  const [edit, setEdit] = useState(true);
  const [talentAcquisitionModal, setTalentAcquisitionModal] = useState(false);
  const [
    shareViaTalentAcquisitionJDBoardModal,
    setShareViaTalentAcquisitionJDBoardModal,
  ] = useState(false);
  const [successfullyModal, setSuccessfullyModal] = useState(false);

  // Function to open the modal
  const openTalentAcquisitionModal = () => {
    setTalentAcquisitionModal(true);
  };

  // Function to close the modal
  const closeTalentAcquisitionModal = () => {
    setTalentAcquisitionModal(false);
  };

  // Function to open the ShareViaTalentAcquisitionJDBoard modal
  const openShareViaTalentAcquisitionJDBoardModal = () => {
    setTalentAcquisitionModal(false);
    setShareViaTalentAcquisitionJDBoardModal(true);
  };

  // Function to close the ShareViaTalentAcquisitionJDBoard  modal
  const closeShareViaTalentAcquisitionJDBoardModal = () => {
    setShareViaTalentAcquisitionJDBoardModal(false);
  };

  // Function to open the Successfully shared your job descriptions modal
  const openSuccessfullyModal = () => {
    setShareViaTalentAcquisitionJDBoardModal(false);
    setSuccessfullyModal(true);
  };

  // Function to close the Successfully shared your job descriptions modal
  const closeSuccessfullyModal = () => {
    setSuccessfullyModal(false);
  };

  return (
    <section className="">
      <HeadersTop />
      {/* ... rest of your component code */}

      <div className="container-fluid my-md-5 my-4">
        <div className="row">
          <div className="col-lg-1 leftMenuWidth ps-0 position-relative">
            <SideMenu />
          </div>

          <div className="col-lg-11 pe-lg-4 ps-lg-0">
            <div className="row justify-content-between  align-items-center">
              <div className="col-lg-8 projectText">
                <h1>Job Descriptions ChatBot</h1>
                <p className="mt-3">
                  Enjoy your selecting potential candidates Tracking and
                  Management System.
                </p>
              </div>

              <div className="col-lg-4 mt-3 mt-lg-0 text-start text-lg-end">
                <Link href="P_M_JobDescriptions4" className="btn btn-blue">
                  Create New JD
                </Link>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-9">
                <div className="shadow bg-white mt-4 rounded-3 pb-3">
                  <div className="row justify-between align-items-center p-3">
                    <div className="col-md-7 col-12 col-lg-7 d-flex align-items-center  mb-3 mb-md-0 ">
                      <h4 className="small_historyText">
                        Job Descriptions ChatBot
                      </h4>
                      <h6 className="ms-4">
                        <Link
                          className="text-blue text-[14px]"
                          href="/P_M_SendHistory1"
                        >
                          History
                        </Link>
                      </h6>
                    </div>

                    <div className="col-md-5 col-12 col-lg-5 ms-auto ps-lg-5">
                      <div className="position-relative PostedInput">
                        <input
                          className="form-control border-0 rouned-2"
                          type="text"
                          placeholder="Search......."
                        />
                        <button className="PostedSearch p-0">
                          {" "}
                          <img src="image/search.png" alt="" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-lg-3">
                      <HistoryTab />
                    </div>

                    <div className="col-lg-9">
                      <div className="bg-[#F9F9F9] p-3 mx-3">
                        <div className="d-flex justify-between mb-3">
                          <p className="text-[16px] Poppins-Bold">
                            Python Developers
                          </p>

                          <div>
                            <button className="px-2">
                              <i className="fa fa-reply" aria-hidden="true"></i>
                            </button>
                            <button
                              className="px-2"
                              onClick={() => setEdit(!edit)}
                            >
                              {edit ? (
                                <EditIcon className="text-[#0B74AD]" />
                              ) : (
                                <Bookmark className="text-[#C0C1C1]" />
                              )}
                            </button>
                            <Link
                              href="#"
                              className="px-2"
                              onClick={openTalentAcquisitionModal}
                            >
                              <i
                                className="fa fa-share text-blue"
                                aria-hidden="true"
                              ></i>
                            </Link>
                          </div>
                        </div>
                        <p className="mb-3 text-[13px] Poppins-Regular">
                          Job descriptions for Python developers can vary
                          depending on the specific role and responsibilities
                          within a company. Here's a general outline of what you
                          might find in a job description for a Python
                          developer:
                        </p>
                        <p className="mb-3 text-[13px] Poppins-Regular">
                          Job descriptions for Python developers can vary
                          depending on the specific role and responsibilities
                          within a company. Here's a general outline of what you
                          might find in a job description for a Python
                          developer:
                        </p>
                        <p className="mb-3 text-[13px] Poppins-Regular">
                          Job descriptions for Python developers can vary
                          depending on the specific role and responsibilities
                          within a company. Here's a general outline of what you
                          might find in a job description for a Python
                          developer:
                        </p>
                        <p className="mb-3 text-[13px] Poppins-Regular">
                          Job descriptions for Python developers can vary
                          depending on the specific role and responsibilities
                          within a company. Here's a general outline of what you
                          might find in a job description for a Python
                          developer:
                        </p>
                        <p className="mb-3 text-[13px] Poppins-Regular">
                          Job descriptions for Python developers can vary
                          depending on the specific role and responsibilities
                          within a company. Here's a general outline of what you
                          might find in a job description for a Python
                          developer:
                        </p>
                        <p className="mb-3 text-[13px] Poppins-Regular">
                          Job descriptions for Python developers can vary
                          depending on the specific role and responsibilities
                          within a company. Here's a general outline of what you
                          might find in a job description for a Python
                          developer:
                        </p>
                        <p className="mb-3 text-[13px] Poppins-Regular">
                          Job descriptions for Python developers can vary
                          depending on the specific role and responsibilities
                          within a company. Here's a general outline of what you
                          might find in a job description for a Python
                          developer:
                        </p>
                        <p className="mb-3 text-[13px] Poppins-Regular">
                          Job descriptions for Python developers can vary
                          depending on the specific role and responsibilities
                          within a company. Here's a general outline of what you
                          might find in a job description for a Python
                          developer:
                        </p>
                        <p className="mb-3 text-[13px] Poppins-Regular">
                          Job descriptions for Python developers can vary
                          depending on the specific role and responsibilities
                          within a company. Here's a general outline of what you
                          might find in a job description for a Python
                          developer:
                        </p>
                      </div>

                      {/* Talent Acquisition Modal component */}
                      <Modal
                        isOpen={talentAcquisitionModal}
                        onRequestClose={closeTalentAcquisitionModal}
                        contentLabel="Example Modal"
                      >
                        <div className=" bg-white col-lg-12 col-xl-11 m-auto p-3">
                          <div className="flex justify-between items-center border-bottom mb-4 pb-3">
                            <h2 className="text-[18px] Poppins-Medium">
                              Talent Acquisition
                            </h2>
                            <Link
                              href="/"
                              className="btn btn-blue w-[30px] h-[30px!important] !rounded-[50%] p-0 align-items-center justify-content-center leading-[28px!important]"
                            >
                              {" "}
                              <i className="fa fa-close"></i>
                            </Link>
                          </div>

                          <div className="blueBorder rounded p-3">
                            <div className="flex">
                              <p className="bg-[#DBEAF3] px-3 py-3 rounded-1 text-[13px]">
                                Python Developer [#PYJD001]
                              </p>
                              <p className="bg-[#DBEAF3] px-3 py-3 rounded-1 text-[13px] ms-2">
                                Python Developer [#PYJD001]
                              </p>
                            </div>

                            <textarea
                              className="form-control mt-[100px] bg-[#F9F9F9!important]"
                              rows={5}
                              placeholder="Enter your comments"
                            ></textarea>

                            <div className="mt-4 flex justify-between">
                              <button className="btn btnOutlineblue w-[100px]">
                                ADD
                              </button>
                              <Link
                                href="#"
                                className="btn btn-blue px-3  w-[100px]"
                                onClick={
                                  openShareViaTalentAcquisitionJDBoardModal
                                }
                              >
                                SEND
                              </Link>
                            </div>
                          </div>
                        </div>
                      </Modal>
                      {/* share Via Talent Acquisition JD Board Modal component */}
                      <Modal
                        isOpen={shareViaTalentAcquisitionJDBoardModal}
                        onRequestClose={
                          closeShareViaTalentAcquisitionJDBoardModal
                        }
                        contentLabel="Example Modal"
                      >
                        <div className="col-lg-9 col-md-8">
                          <div className="bg-[#F9F9F9] h-100 px-3 py-4 mx-3 flex align-center">
                            <div className=" bg-white col-lg-10 col-xl-9 m-auto p-3">
                              <div className="flex justify-between items-center border-bottom mb-4 pb-3">
                                <h2 className="text-[18px] Poppins-Medium">
                                  Share Via Talent Acquisition JD Board
                                </h2>
                                <Link
                                  href="/"
                                  className="btn btn-blue w-[30px] h-[30px!important] !rounded-[50%] p-0 align-items-center justify-content-center leading-[28px!important]"
                                >
                                  {" "}
                                  <i className="fa fa-close"></i>
                                </Link>
                              </div>

                              <div className="blueBorder rounded px-3">
                                <div className="row items-center py-3">
                                  <div className="col-2 items-center">
                                    <img
                                      className="h-[50px] w-[50px] rounded-full object-cover"
                                      src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
                                      alt=""
                                    />
                                  </div>

                                  <div className="col-7">
                                    <p className="text-16px">HR Manager 1</p>
                                  </div>

                                  <div className="col-3 text-end">
                                    <Checkbox {...label} />
                                  </div>
                                </div>

                                <div className="row items-center py-3">
                                  <div className="col-2 items-center">
                                    <img
                                      className="h-[50px] w-[50px] rounded-full object-cover"
                                      src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
                                      alt=""
                                    />
                                  </div>

                                  <div className="col-7">
                                    <p className="text-16px">HR Manager 1</p>
                                  </div>

                                  <div className="col-3 text-end">
                                    <Checkbox {...label} />
                                  </div>
                                </div>

                                <div className="row items-center py-3">
                                  <div className="col-2 items-center">
                                    <img
                                      className="h-[50px] w-[50px] rounded-full object-cover"
                                      src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
                                      alt=""
                                    />
                                  </div>

                                  <div className="col-7">
                                    <p className="text-16px">HR Manager 1</p>
                                  </div>

                                  <div className="col-3 text-end">
                                    <Checkbox {...label} />
                                  </div>
                                </div>
                              </div>

                              <div className="mt-4 flex justify-center">
                                <Link
                                  onClick={openSuccessfullyModal}
                                  href="#"
                                  className="btn btn-blue px-3  w-[100px]"
                                >
                                  SEND
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Modal>

                      <Modal
                        isOpen={successfullyModal}
                        onRequestClose={closeSuccessfullyModal}
                        contentLabel="Example Modal"
                      >
                        <div className="col-lg-9 col-md-8">
                          <div className="bg-[#F9F9F9] h-100 px-3 py-4 mx-3 flex align-center">
                            <div className=" bg-white col-lg-10 col-xl-9 m-auto px-3 py-5">
                              <div className="text-center">
                                <img src="image/Successfully.png" alt="" />
                              </div>
                              <h3 className="text-[20px] my-4 text-center">
                                Successfully shared your job descriptions
                              </h3>
                              <div className="mt-4 flex justify-center">
                                <Link href="/" className="btn btn-blue px-3">
                                  Go to Dashboard
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Modal>
                      <div className="my-3 mx-3 position-relative">
                        <input
                          type="text"
                          className="form-control rounded-0 text-[16px] Poppins-Regular"
                          placeholder="Please enter your notes or questions or chat"
                        />
                        <button className="bg-[#DBEAF3] hover:bg-blue-400 px-3 py-2 position-absolute top-[1px] right-0">
                          <StraightIcon />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mt-4">
                <div className="overflow-hidden d-flex justify-center">
                  <CalendarProject />
                </div>
                <div className="mt-5">
                  <Upcomings />
                </div>

                <div className="mt-5">
                  <Activity />
                </div>

                <div className="mt-5">
                  <HiringCandidates />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectManagerJobDescriptionsTwo;
