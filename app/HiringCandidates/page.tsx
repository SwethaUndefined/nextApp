import Link from "next/link";
import HeadersTop from "../dashboard/common/HeadersTop";
import SideMenu from "../dashboard/component/SideMenu";

function UserActivity(props) {
  return (
    <div className="row mx-0 py-3 mt-3 border align-items-center">
      <div className="col-lg-2 col-3 col-md-2 text-center border-end px-2 py-1">
        <img
          className="w-[60px] rounded-full h-[60px]"
          src={props.imageSrc}
          alt=""
        />
      </div>
      <div className="col-lg-4 col-9 col-md-4 md:border-r border-gray-200 px-2 py-1">
        <ul className="text-[14px]">
          <li className="py-1">
            Candidate Name: <span>{props.name}</span>
          </li>
          <li className="py-1">
            Position: <span>{props.position}</span>
          </li>
          <li className="py-1">
            Interviewer: <span>{props.interviewer}</span>
          </li>
        </ul>
      </div>
      <hr className="d-md-none" />
      <div className="col-lg-4 col-9 col-md-4 border-end px-2 py-1">
        <ul className="text-[14px]">
          <li className="py-1">
            Interview Level: <span>{props.interviewLevel}</span>
          </li>
          <li className="py-1">
            Start Time: <span>{props.startTime}</span>
          </li>
          <li className="py-1">
            End Time: <span>{props.endTime}</span>
          </li>
        </ul>
      </div>
      <div className="col-lg-2 col-3 col-md-2 px-2 py-1 flex justify-center align-items-center ">
        <div className="mx-auto w-[60px] h-[60px] rounded-full flex align-items-center justify-center bg-[#c1d1e2] text-blue">
          {props.rating}
        </div>
      </div>
    </div>
  );
}

function HiringCandidates() {
  return (
    <>
      <HeadersTop />
      <section className="container-fluid my-md-5 my-4">
        <div className="row">
          <div className="col-lg-1 leftMenuWidth ps-0 position-relative">
            <SideMenu />
          </div>
          <div className="col-lg-8 mx-auto">
            <div className="shadow p-3">
              <div className="flex justify-between items-center border-bottom mb-4 pb-3">
                <h2 className="text-[22px] Poppins-Medium">
                  Hiring Candidates
                </h2>
                <Link
                  href="/"
                  className="btn btn-blue w-[30px] h-[30px!important] !rounded-[50%] p-0 align-items-center justify-content-center leading-[28px!important]"
                >
                  {" "}
                  <i className="fa fa-close"></i>
                </Link>
              </div>
              <p>coming soon</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HiringCandidates;
