import React from "react";
import Navbar from "./Navbar";
import Main from "../Component/InstructorsTable/InsMain";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Instructors() {
  return (
    <>
    {/* <<<<import Navbar>>>>>> */}
      <Navbar />
      <div>
        <div className="p-1">
          <h3 className="fontcol">Instructors</h3>

          <div className="foot">
            <div className="d-flex">
              <div className="p-2 flex-grow-1">All Instructors</div>
              <div className="p-2">
                Home{`>`}Instructors{`>`}All Instructors
              </div>
            </div>
          </div>

    {/* <<<<import Instructor Table>>>>>> */}
          <Main />

          <div className="container fontz">
            <div className="d-flex">
              <div className="flex-grow-1">Showing 1 to 10 of 30 entries</div>
              <div className="">
                <nav aria-label="Page navigation example ">
                  <ul class="pagination fontz navspc1">
                    <li class="page-item">
                      <p>Previous</p>
                    </li>
                    <li class="page-item disabled">
                      <p>1</p>
                    </li>
                    <li class="page-item ">
                      <p>2</p>
                    </li>
                    <li class="page-item ">
                      <p>3</p>
                    </li>
                    <li class="page-item ">
                      <p>Next</p>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
    
    {/* <<<<Add Footer>>>>>> */}
        <div className="foot text-center">
          <div className="d-flex">
            <div className="p-2 flex-grow-1">
              Copyright &copy; 2023 EVIDIO | Powered by Flexy Code
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
