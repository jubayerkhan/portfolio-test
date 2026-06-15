import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cursor from "../components/Cursor";
import Header from "../components/Header";
import ProjectResume from "../components/ProjectResume";
import Socials from "../components/Socials";
import Button from "../components/Button";
import { useTheme } from "next-themes";
// Data
import { name, showResume } from "../data/portfolio.json";
import { resume } from "../data/portfolio.json";
import data from "../data/portfolio.json";

const Resume = () => {
  const router = useRouter();
  const theme = useTheme();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
    if (!showResume) {
      router.push("/");
    }
  }, []);
  return (
    <>
      {/* {process.env.NODE_ENV === "development" && (
        <div className="fixed bottom-6 right-6">
          <Button onClick={() => router.push("/edit")} type={"primary"}>
            Edit Resume
          </Button>
        </div>
      )} */}
      {data.showCursor && <Cursor />}
      <div
        className={`container mx-auto mb-10 ${
          data.showCursor && "cursor-none"
        }`}
      >
        <Header isBlog />
        {mount && (
          <div className="mt-10 w-full flex flex-col items-center">
            <div
              className={`w-full ${
                mount && theme.theme === "dark" ? "bg-slate-800" : "bg-gray-50"
              } max-w-4xl p-20 mob:p-5 desktop:p-20 rounded-lg shadow-sm`}
            >
              <h1 className="text-3xl font-bold">{name}</h1>
              <h2 className="text-xl mt-5">{resume.tagline}</h2>
              <h2 className="w-4/5 text-xl mt-5 opacity-50">
                {resume.description}
              </h2>
              <div className="mt-2">
                <Socials />
              </div>
              <div className="mt-5">
                <h1 className="text-2xl font-bold">Experience</h1>

                {resume.experience.map(
                  ({
                    id,
                    company,
                    position,
                    location,
                    startDate,
                    endDate,
                    employmentType,
                    responsibilities,
                  }) => (
                    <ProjectResume
                      key={id}
                      dates={`${startDate} - ${endDate}`}
                      type={employmentType}
                      position={position}
                      bullets={responsibilities}
                    ></ProjectResume>
                  ),
                )}
              </div>
              <div className="mt-5">
                <h1 className="text-2xl font-bold">Education</h1>
                <div className="mt-2">
                  <h2 className="text-lg font-semibold">
                    {resume.education.degree}
                  </h2>
                  <h3 className="text-sm opacity-75 mt-1">
                    {resume.education.institution}
                  </h3>
                  <p className="text-sm opacity-60 mt-1">
                    {resume.education.graduationDate}
                    {resume.education.cgpa &&
                      ` | CGPA: ${resume.education.cgpa}`}
                  </p>
                  {resume.education.coursework &&
                    resume.education.coursework.length > 0 && (
                      <div className="mt-3">
                        <p className="text-sm font-semibold opacity-75">
                          Coursework:
                        </p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {resume.education.coursework.map((course, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-opacity-20 bg-gray-400 px-2 py-1 rounded"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                </div>
              </div>
              <div className="mt-5">
                <h1 className="text-2xl font-bold">Skills</h1>
                <div className="flex mob:flex-col desktop:flex-row justify-between">
                  {resume.languages && (
                    <div className="mt-2 mob:mt-5">
                      <h2 className="text-lg">Languages</h2>
                      <ul className="list-disc">
                        {resume.languages.map((language, index) => (
                          <li key={index} className="ml-5 py-2">
                            {language}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {resume.frameworks && (
                    <div className="mt-2 mob:mt-5">
                      <h2 className="text-lg">Frameworks</h2>
                      <ul className="list-disc">
                        {resume.frameworks.map((framework, index) => (
                          <li key={index} className="ml-5 py-2">
                            {framework}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {resume.others && (
                    <div className="mt-2 mob:mt-5">
                      <h2 className="text-lg">Others</h2>
                      <ul className="list-disc">
                        {resume.others.map((other, index) => (
                          <li key={index} className="ml-5 py-2">
                            {other}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              {/* test scores */}
              {resume.testScores && resume.testScores.length > 0 && (
                <div className="mt-5">
                  <h1 className="text-2xl font-bold">Test Scores</h1>
                  {resume.testScores.map((test, index) => (
                    <div
                      key={index}
                      className="mt-4 p-4 rounded-lg border border-opacity-20 border-gray-400"
                    >
                      <h2 className="text-lg font-semibold">{test.exam}</h2>
                      <div className="mt-3 grid grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="flex flex-col">
                          <span className="text-xs opacity-60 font-semibold uppercase">
                            Overall
                          </span>
                          <span className="text-lg font-bold mt-1">
                            {test.overall}
                          </span>
                        </div>
                        {test.listening && (
                          <div className="flex flex-col">
                            <span className="text-xs opacity-60 font-semibold uppercase">
                              Listening
                            </span>
                            <span className="text-lg font-bold mt-1">
                              {test.listening}
                            </span>
                          </div>
                        )}
                        {test.reading && (
                          <div className="flex flex-col">
                            <span className="text-xs opacity-60 font-semibold uppercase">
                              Reading
                            </span>
                            <span className="text-lg font-bold mt-1">
                              {test.reading}
                            </span>
                          </div>
                        )}
                        {test.writing && (
                          <div className="flex flex-col">
                            <span className="text-xs opacity-60 font-semibold uppercase">
                              Writing
                            </span>
                            <span className="text-lg font-bold mt-1">
                              {test.writing}
                            </span>
                          </div>
                        )}
                        {test.speaking && (
                          <div className="flex flex-col">
                            <span className="text-xs opacity-60 font-semibold uppercase">
                              Speaking
                            </span>
                            <span className="text-lg font-bold mt-1">
                              {test.speaking}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Resume;
