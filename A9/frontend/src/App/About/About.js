import React from 'react';
import Navbar from '../Navbar/Navbar';

const About = () => {
return (
<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
<Navbar />
<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
<div class="col-md-4 mb-5" style={{ width: '80%' }}>
<div class="card h-100" style={{ width: '100%', backgroundColor:'lightgrey' }}>
<div class="card-body">
<h2 class="card-title">Course Curriculum</h2>
<p class="card-text">
Understand the User Experience concepts and importance of
making usable websites or products Develop web pages quickly
using HTML and JavaScript as per the business needs Learn
concepts of Bootstrap, JQuery, Angular JS, React JS, NodeJS,
Express JS JavaScript library
</p>
</div>
</div>
</div>
<div class="col-md-4 mb-5" style={{ width: '80%' }}>
<div class="card h-100" style={{ width: '100%', backgroundColor:'lightgrey' }}>
<div class="card-body">
<h2 class="card-title">Course Objective</h2>
<p class="card-text">
At Northeastern, we offer a variety of courses from all departments, from all sorts of fields like Mechanical Engineering,Computer Engineering, Data Architecture and Management and Engineering Management. We have a 2 year as well as 1 year courses and an optional Co-op program.
</p>
</div>
</div>
</div>
<div class="col-md-4 mb-5" style={{ width: '80%' }}>
<div class="card h-100" style={{ width: '100%', backgroundColor:'lightgrey' }}>
<div class="card-body">
<h2 class="card-title">Overview</h2>
<p class="card-text">
Northeastern University is a private institution that was founded in 1898. It has a total undergraduate enrollment of 15,747 (fall 2021), its setting is urban, and the campus size is 73 acres. It utilizes a semester-based academic calendar. Northeastern University's ranking in the 2022-2023 edition of Best Colleges is National Universities, #44. Its tuition and fees are $60,192. It has an acceptance rate of 18%, thus it is a competitive university.
</p>
</div>
</div>
</div>
</div>
</div>
);
}

export default About;