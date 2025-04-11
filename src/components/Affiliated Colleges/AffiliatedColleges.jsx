import React from "react";
import styles from "./AffiliatedColleges.module.css";

function AffiliatedColleges() {
  const colleges = [
    { id: 1, code: "2001", name: "AVANTIKA INSTITUTE OF TECHNOLOGY, BHOPAL" },
    { id: 2, code: "2002", name: "MOUNT RIDGE DEGREE COLLEGE, DEHRADUN" },
    { id: 3, code: "2003", name: "RIVERDALE COLLEGE OF SCIENCE, KOZHIKODE" },
    { id: 4, code: "2004", name: "SHREE LAKSHMI ARTS & COMMERCE COLLEGE, HUBLI" },
    { id: 5, code: "2005", name: "TRINITY SCHOOL OF BUSINESS, HYDERABAD" },
    { id: 6, code: "2006", name: "ZENITH ENGINEERING COLLEGE, NAGPUR" },
    { id: 7, code: "2007", name: "SUNRISE WOMEN’S DEGREE COLLEGE, INDORE" },
    { id: 8, code: "2008", name: "INNOVATE MANAGEMENT COLLEGE, MUMBAI" },
    { id: 9, code: "2009", name: "GREEN VALLEY INSTITUTE OF SCIENCE, PUNE" },
    { id: 10, code: "2010", name: "ORION TECHNICAL UNIVERSITY, NOIDA" },
    { id: 11, code: "2011", name: "KALINGA COLLEGE OF EDUCATION, BHUBANESWAR" },
    { id: 12, code: "2012", name: "AMBER COLLEGE OF ARTS, SILIGURI" },
    { id: 13, code: "2013", name: "SOUTH COAST POLYTECHNIC COLLEGE, CHENNAI" },
    { id: 14, code: "2014", name: "EVEREST NATIONAL COLLEGE, GANGTOK" },
    { id: 15, code: "2015", name: "CRYSTAL DEGREE COLLEGE, AHMEDABAD" },
    { id: 16, code: "2016", name: "NOBLE WOMEN'S COLLEGE, TRIVANDRUM" },
    { id: 17, code: "2017", name: "AURORA COLLEGE OF LAW, VARANASI" },
    { id: 18, code: "2018", name: "BLUE SKY INSTITUTE OF PHARMACY, LUCKNOW" },
    { id: 19, code: "2019", name: "RADIANT INSTITUTE OF MEDIA STUDIES, KOLKATA" },
    { id: 20, code: "2020", name: "LOTUS SCHOOL OF SOCIAL SCIENCES, RANCHI" },
  ];

  return (
    <div className={styles.collegesContainer}>
      <h2>Affiliated Colleges</h2>
      <table className={styles.collegeTable}>
        <thead>
          <tr>
            <th>Serial No.</th>
            <th>College Code</th>
            <th>College Name</th>
          </tr>
        </thead>
        <tbody>
          {colleges.map((college, index) => (
            <tr key={college.id}>
              <td>{index + 1}</td>
              <td>{college.code}</td>
              <td>{college.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AffiliatedColleges;
