"use client";
import React from "react";
import styles from "../css/resume.module.css";
import "../css/Home.module.css";
import Link from "next/link";
export default function Resume() {
  return (
    <div className={styles.resumeTable}>
      {/* Header */}
      <section>
        <h1 className={styles.name}>Mychal Wood</h1>
        <table className={styles.contactTable}>
          <tbody>
            <tr>
              <td>
                <a href="mailto:mychwood@iu.edu" className={styles.contactText}>
                  mychwood@iu.edu
                </a>
              </td>
              <td className={styles.rightAlign}>
                <span className={styles.contactText}>
                  Indianapolis, Indiana
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <Link
                  href="http://www.linkedin.com/in/mychalwood"
                  className={styles.contactText}
                >
                  www.linkedin.com/in/mychalwood
                </Link>
              </td>
              <td className={styles.rightAlign}>
                <Link href="tel:+3179897221" className={styles.contactText}>
                  (317) 989-7221
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Education */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Education</h2>
        <table>
          <tbody>
            <tr>
              <td>
                <p>
                  IUI Luddy School of Informatics, Computing, and Engineering
                </p>
                <p>Bachelor's Degree in Media Arts and Science</p>
                <br />
              </td>
              <td className={styles.rightAlign}>
                <p>Indianapolis, IN</p>
                <p>Graduated December 2024</p>
                <br />
              </td>
            </tr>
            <tr>
              <td>
                <p>Ivy Tech Community College</p>
                <p>Associate's Degree in Informatics</p>
              </td>
              <td className={styles.rightAlign}>
                <p>Indianapolis, IN</p>
                <p>Graduated May 2022</p>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Internship Experience */}
      <section>
        <h2 className={styles.sectionTitle}>Internship Experience</h2>
        <table className={styles.experienceTable}>
          <tbody>
            <tr>
              <td>
                <p>Easterseals Crossroads</p>
              </td>
              <td className={styles.rightAlign}>
                <p>Indianapolis, IN</p>
              </td>
            </tr>
            <tr>
              <td>
                <p className={styles.positionTitle}>INDATA Depot Intern</p>
              </td>
              <td className={styles.rightAlign}>
                <p>March 2024 – August 2024</p>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <ul>
                  <li>
                    Working to create a web application, for the computer depot
                    to keep track of their incoming donations, and any computers
                    that they give out. This will include a QR and Barcode
                    scanner, along with a database that stores the information
                    about the computers/devices entered in.
                  </li>
                  <li>
                    Using React, NextJS/JavaScript, and CSS/SCSS to create this.
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <section>
        <table>
          <tbody>
            <tr>
              <td>
                <p className={styles.positionTitle}>
                  Information Technology Support Intern
                </p>
              </td>
              <td className={styles.rightAlign}>
                <p>March 2022 – August 2022</p>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <ul>
                  <li>
                    Assisted users to help set up their brand-new laptops and
                    computers for business use.
                  </li>
                  <li>
                    Took any old laptops and desktops from previous employees,
                    and cleaned/repurposed them by adding more RAM, a new SSD,
                    and setting up Windows and the software that were needed for
                    installation.
                  </li>
                  <li>
                    Organized and sorted many of the filing cabinets with
                    cables, monitors, and more in the IT storage room.
                  </li>
                  <li>
                    Maintained and kept track of which computers had
                    Malwarebytes, the antimalware software on them, and deleted
                    the users off whose devices were not authenticated or were
                    no longer with the company.
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Skills */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Skills</h2>
        <p>
          <strong>Platforms:</strong> Windows, Mac-OS (beginner), Linux
          (intermediate), Android
        </p>
        <p>
          <strong>Programming Languages:</strong> Python (intermediate)
        </p>
        <p>
          <strong>Web Development:</strong> HTML, CSS, SCSS, JavaScript
          (novice), React/Next.js (novice/intermediate)
        </p>
        <p>
          <strong>Databases:</strong> MariaDB, MySQL
        </p>
        <p>
          <strong>Computer Building Skills:</strong> PC Building, Laptop
          Disassembly
        </p>
        <p>
          <strong>World Languages:</strong> English (native), Spanish
          (intermediate)
        </p>
      </section>

      {/* Activities */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Activities</h2>
        <table className={styles.activitiesTable}>
          <tbody>
            <tr>
              <td>
                <p>
                  <strong>Participate</strong>, Christian Student Fellowship at
                  IUPUI
                </p>
              </td>
              <td className={styles.rightAlign}>
                <p>August 2022 – Present</p>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <ul>
                  <li>
                    Participate every week in a life group, where groups go
                    through material together, and discuss several topics to
                    help us grow in our faith.
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <strong>Volunteer</strong>, Youth Group Leader at Brookville
                  Road Community Church
                </p>
              </td>
              <td className={styles.rightAlign}>
                <p>August 2020 – Present</p>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <ul>
                  <li>
                    Help every Sunday evening lead the church’s youth group, and
                    specifically co-lead the junior high boys’ group with 7th
                    and 8th grade boys.
                  </li>
                  <li>
                    Assist in any way at all setting up and tearing down games
                    and activities every week
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
