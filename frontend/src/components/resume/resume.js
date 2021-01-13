import React, { Component } from 'react';
export default class Resume extends Component {
  render() {
    return (
      <React.Fragment>
     <section id="resume">
  {/* Education
----------------------------------------------- */}
  <div className="row education">
    <div className="three columns header-col">
      <h1><span>Education</span></h1>
    </div>
    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>Framingham State University</h3>
          <p className="info">Certificate in Web Development <span>•</span> <em className="date">May 2020 - Oct 2020</em></p>
          <p>
            Studied full stack web development, specifically trained in: Javascript, React, Node.js, Express.js,JSON, HTML,CSS ,HTTP,Pug Templating, lots of test driven development practices, Mocha, Chai, Sinon libraries, SQL and MySQL, Git and Github organization, Model-View-Controller (MVC Architecture), functional programming approaches, RESTful APIs, DevOps, Amazon Web Services.

          </p>
        </div>
      </div> {/* item end */}
      <div className="row item">
        <div className="twelve columns">
          <h3>University of Massachusetts Boston</h3>
          <p className="info">B.S. Degree in Management <span>•</span> <em className="date">Jan 2016 - Dec 2019</em></p>
          <p>
            I majored in Business Management with a concentration in Accounting.I studied public, private, and governmental/nonprofit accounting, including budget analysis, financial accounting, managerial accounting, taxation, and auditing.</p>
        </div>
      </div> {/* item end */}
    </div> {/* main-col end */}
  </div> {/* End Education */}
  {/* Work
----------------------------------------------- */}
  <div className="row work">
    <div className="three columns header-col">
      <h1><span>Work</span></h1>
    </div>
    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>Shawmut Design And Construction</h3>
          <p className="info">Accounting Department-A/P <span>•</span> <em className="date">Jan 2020 - Nov 2020</em></p>
          
            <ul>
          <li>Processed invoices and journal entries with efficiency and accuracy with Kofax system, resulting in decreased discrepancies.</li>
          <li>Prepared month-end closing entries for detailed reporting and recordkeeping. Applied mathematical abilities on daily basis to calculate and check figures in all areas of accounting systems.</li>
          <li>Reached out to vendors and customers to verify information and follow up on client issues.</li>
          <li>Applied proper codes to invoices, files and receipts to keep records organized and easily searchable.</li>
          <li>Managed W-9 folder and new vendor set up to stay on top of applicable federal and state requirements.</li>
</ul>
          
        </div>
      </div> {/* item end */}
      <div className="row item">
        <div className="twelve columns">
          <h3>The Nature Conservancy</h3>
          <p className="info">Finance Assistant <span>•</span> <em className="date">June 2019 - Jan 2020 </em></p>
          <ul>
          <li>Managed the accounts payable system which included preparing hundreds of invoices on a monthly basis, resolving problems related to accounts payable, and maintaining great relationships with external vendors.</li>
          <li>Assisted in annual budgeting with Director of Finance and created tracking reports as needed.</li>
          <li>Managed non-real estate contracts and grants-out coordination by ensuring contracts are compliant, tracking, paying, and following up with staff on deadlines/issues.</li>
          <li>Prepare and process various accounting forms and adjustments, verify the accuracy and coding of journal entry transactions, run reports as needed for tracking and analysis.</li>
          <li>Grant Support to Director of Finance which entailed tracking report deadlines, assisting with due diligence, creating grant budgets, assisting with processing and tracking of grant- funded contracts and sub-awards.</li>
          <li>Created monthly expense reports for three facilities. Reported financial data and updated financial records in ledgers and journals.</li>
          </ul>
        </div>
      </div> {/* item end */}
    </div> {/* main-col end */}
  </div> {/* End Work */}
  {/* Skills
----------------------------------------------- */}
  
  
</section>

      </React.Fragment>
    );
  }
}
