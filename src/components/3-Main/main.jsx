import React from "react";
import "./main.css";
import { useState } from "react";

const myProjects = [
  {
    projectTitle: "react project",
    category: ["all",],
    imgpath: "../../../public/proj_1.JPG",
  },
  {
    projectTitle: "react project",
    category:["all", "css"],
    imgpath: "../../../public/proj_2.JPG",
  },
  {
    projectTitle: "react project",
    category: ["all","JavaScript"],
    imgpath: "../../../public/proj_3.JPG",
  },
  {
    projectTitle: "react project",
    category: "css",
    imgpath: "../../../public/proj_4.JPG",
  },
  {
    projectTitle: "react project",
    category: " React",
    imgpath: "../../../public/proj_5.JPG",
  },
  {
    projectTitle: "react project",
    category: " React",
    imgpath: "../../../public/proj_5.JPG",
  },
];

const Main = () => {
  const [arr, setarr] = useState(myProjects);
  const [CurrentActive, setCurrentActive] = useState("all");

  return (
    <main className="flex">
      <section className=" flex  project-menu active ">
        <button
          onClick={() => {
            setCurrentActive("all");
            const nArr = myProjects.filter((iteam) => {
              return iteam.category === "all";
            });
            setarr(nArr);
          }}
          className={CurrentActive === "all" ? "active" : null}
        >
          All Projects
        </button>


        <button
          onClick={() => {

            setCurrentActive("css");
            const nArr = myProjects.filter((iteam) => {
              return iteam.category === "css";})
              setarr(nArr);

              const nArr1 = myProjects.filter(
           (myiteam) => {
              return myiteam.category ==="css";
            }
            )
            setarr(nArr1);
            }
          }
          className= {CurrentActive === "css" ? "active" : null }
        >
          Html-Css
        </button>



        <button
          onClick={() => {
            setCurrentActive("JavaScript");
            const nArr = myProjects.filter((iteam) => {
              return iteam.category === "JavaScript";
            });
            setarr(myProjects);
          }}
          className={CurrentActive === "JavaScript" ? "active" : null}
        >
          JavaScript
        </button>
        <button
          onClick={() => {
            setCurrentActive("React");
            const nArr = myProjects.filter((iteam) => {
              return iteam.category === "React";
            });
            setarr(myProjects);
          }}
          className={CurrentActive === "React" ? "active" : null}
        >
          React & MUI
        </button>

        <button
          onClick={() => {
            setCurrentActive("all");
            const nArr = myProjects.filter((iteam) => {
              return iteam.category === "all";
            });
            setarr(myProjects);
          }}
          className={CurrentActive === "all" ? "active" : null} >
          Node Express
        </button>
      </section>
      {/* ====================================================== */}

      <section className=" project-cards flex">
        {arr.map((iteam) => {
          return (
            <article key={iteam.projectTitle} className="border card">
              <img width={266} src={iteam.imgpath} alt="" />
              <div className="box" style={{ width: "266px" }}>
                <h1 className="title">{iteam.projectTitle}</h1>
                <p className="sub-title">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Accusamus
                </p>
                <div className="flex icons">
                  <div style={{ gap: "11px" }} className="flex">
                    <div className="icon-link"></div>
                    <div className="icon-github"></div>
                  </div>
                  <a className="flex link  ">
                    More <span className="icon-arrow-right"></span>
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
};
export default Main;
