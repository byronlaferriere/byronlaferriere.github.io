# Welcome to Byron Laferriere's personal ePortfolio

This is the Capstone project for my Computer Science degree from Southern New Hampshire University. For this project, we are asked to go back and re-work three projects
that we previously completed and make enhancements to them that align with the class objectives and outcomes. The first thing we needed to do was conduct a code review,
to begin practicing what is done in many professional settings. Although this is usually performed in front of others, this was a personal and less formal code review performed
in private, to help us begin practicing how to articulate our actions and highlight the skills obtained/highlighted in doing so.

## Professional Self Assessment
The Computer Science Capstone course has refined my personal skills in six desirable categories this semester. It has taught me to think critically about my strengths and weaknesses and learn to articulate how I either exemplified them or needed to continue expanding them. The skills learned this semester will be extremely beneficial in my career. By learning to communicate the specific changes I have made and how they exhibit my value, it will help me demonstrate value to a company and create job security. 

The first of these personal skills I have enhanced this semester is in the field of collaboration in team environments. As the world shifts to remote work, the focus on this has grown to help replace the productivity seen in office settings. This semester I created well-documented projects that would make it easy for my future teammates to read through. I also covered thorough documentation and began practicing code reviews. These are very important aspects of collaborating on team projects and will valuable skills to have harnessed already, in my future. The next personal skill that I developed this semester was an ability to communicate clearly to stakeholders. By clearly communicating my additions and the value that they add to projects, as well as future completions and additions that will be added, I have learned the ability to provide clear evidence of value and business solutions to stakeholders. The third personal skill that I developed this semester was in data structures and algorithms. My enhancement in this category was a newly developed paper that explained in quantifiable metrics why each structure or algorithm chosen in my labs was the best fit. Doing this, built a better understanding of these categories and allowed me to add in some knowledge from later classes. The fourth valuable personal skill developed this semester was in software engineering. I reworked past projects and added new features and enhanced security. This allowed me to continue expanding my previous knowledge and add to my personal arsenal to prepare for future projects. The fifth personal skill I developed further was in databasing. I worked a project and create a client and server that could use the database and present data in an API form. The final skill I enhanced this semester was in security. I did not have much practice with this important skill and had the chance to incorporate security features in two separate projects. All of these skills mentioned will be valuable to myself in the future, as well as my employers.
 

When I began this semester, I struggled to see how these three projects that we were working on would amalgamate. Now that the enhancements are finished, I see how much growth I have experienced from doing so. Each enhancement had me working towards a different course outcome that took some time to realize. This course highlighted five outcomes, both critical and valuable in the field of computer, that I was to work towards and have my work exemplify mastery and demonstration of completion. The artifacts cover the fields of software engineering/development, databases, and data structures and algorithms. These three pieces represent my solid understanding of the fundamentals of computer science.

Course Outcome 1: I employed strategies for building collaborative environments that enable diverse audiences to support organizational decision making in the field of computer science by completing the enhancement for the databases category, in Enhancement Three. I developed a working API that could be leveraged and accessed by authorized employees and did not require a statistical analysis background to do so. Users could aggregate data to make informed decisions on potentially exploitable markets for future expansion through the API.

Course Outcome 2: I designed, developed, and delivered professional-quality oral, written, and visual communications that are coherent, technically sound, and appropriately adapted to specific audiences and contexts by completing the Proof-of-Concept paper in Enhancement Two. This enhancement used quantifiable metrics to compare and contrast available data structures and algorithms and explain why the used options were the best available. I included visualizations to further my argument and made excellent defensive arguments for my choices.

Course Outcome 3: I designed and evaluated computing solutions that solve a given problem using algorithmic principles and computer science practices and standards appropriate to its solution, while managing the trade-offs involved in design choices by completing the Proof-of-Concept paper in Enhancement Two. This enhancement used quantifiable metrics to compare and contrast available data structures and algorithms and explain why the used options were the best available. I included visualizations to further my argument and made excellent defensive arguments for my choices.

Course Outcome 4: I demonstrated an ability to use well-founded and innovative techniques, skills, and tools in computing practices for the purpose of implementing computer solutions that deliver value and accomplish industry-specific goals by completing my API linked to a database in Enhancement Three. This API used Python, Pandas, Numpy, Plotly, and Dash to deliver a valuable business solution. The API provides the business data mining capabilities without paying for programs to perform data aggregations.

Course Outcome 5: I developed a security mindset that anticipates adversarial exploits in software architecture and designs to expose potential vulnerabilities, mitigate design flaws, and ensure privacy and enhanced security of data and resources by adding a token revocation method to JSON Web Tokens in Enhancement One. This method implemented a time-based revocation process that would ask the user to sign back in after a certain amount of time. I also implemented security to my API by adding a login screen that was required to be completed before the page would load in Enhancement Three. This protected the company’s proprietary information from unauthorized access. These enhancements demonstrate the completion of this outcome.


## Code Review
[Click here to go to the YouTube page](https://youtu.be/y_8ILNFcAPo)

<p>&nbsp;</p>

## Enhancement One
The artifact selected for Enhancement One is a website that was created in my Full Stack Development One class. This class was taken over four months ago now and was meant to teach me about the difference between hardcoded static websites and the high functionality of dynamic websites. In this project I created a M.E.A.N. stack application that uses MongoDB for the database, Express and Node.js for the backend and Angular for the frontend development. This artifact required me to create a database to store company files, usernames and details, and available trip information, then link this database to a backend application that was comprised of Node.js and Express HTML. I used concepts like Bootstrap and Handlebars to make my codebase more efficient and less redundant. Then I created an Angular application that needed to communicate to the backend and the database to pull the information displayed on the page. I used Single Page Application (SPA) architecture to ensure that my page did not experience long load times and push customers away. This project also used Postman to check our API endpoints, which included the creation of JSON Web Tokens for Java. Here, we created an administrative account which had CRUD capabilities for the website. Initially, the project had a blank home page that only asked users to sign in to continue. My enhancements included commenting out the code base, getting rid of unused code, creating a new home page that would attract new users, and adding security to the JSON Web Tokens used by implementing a token revocation.

<p>&nbsp;</p>
### The new home page
![Banner]({{ https://github.com/byronlaferriere/byronlaferriere.github.io/blob/main/docs/assets/banner.png }}/docs/assets/banner.png)<br/> 
### I added trip pictures with hyperlinks to the Trips page that contained more information
![Trips]({{ https://github.com/byronlaferriere/byronlaferriere.github.io/blob/main/docs/assets/trips.png }}/docs/assets/trips.png)<br/> 
### I inserted some pictures of the meals that were available on the trips
![Foods]({{ https://github.com/byronlaferriere/byronlaferriere.github.io/blob/main/docs/assets/foods.png }}/docs/assets/foods.png)<br/> 
### I added some pictures of room packages that could be chosen and a user reviews section
![Rooms]({{ https://github.com/byronlaferriere/byronlaferriere.github.io/blob/main/docs/assets/rooms.png }}/docs/assets/rooms.png)<br/> 
### I added a token revocation process to timeout users after a certain amount of time
![Security]({{ https://github.com/byronlaferriere/byronlaferriere.github.io/blob/main/docs/assets/security.png }}/docs/assets/security.png)<br/> 

<p>&nbsp;</p>
[Link to the Original Project Files](https://github.com/byronlaferriere/byronlaferriere.github.io/tree/main/EnhancementOne/ProjectFiles/Originals)<br/>
[Link to Full Narrative](https://github.com/byronlaferriere/byronlaferriere.github.io/blob/main/EnhancementOne/Enhancement%20One.docx)<br/> 
[Link to Enhanced Project Files](https://github.com/byronlaferriere/byronlaferriere.github.io/tree/main/EnhancementOne/ProjectFiles)<br/> 
<p>&nbsp;</p>
## Enhancement Two
The artifact chosen for Milestone Two was a Final Paper that reviewed the labs performed during the semester and asked us to explain why these labs indicated our retention of knowledge and understanding. This project was first completed last year around this exact month for our Data Structures and Algorithms class. In these labs, we were asked to implement different types of structures and algorithms versus two different sized .CSV files. One of these files contained the bids for the month of December and the other contained the bids for the entire year. The second file was nominally larger and would require different choices to be made when handling. Initially, I planned to rework the data structures and algorithms used in these programs, to update some of the chosen concepts, but I realized after conducting much research why the chosen structures and algorithms were the best per scenario. What I opted to do after realizing this, was to go through and rework my final paper to include proper justifications of why each was chosen and explain why they outperform the other types of structures and algorithms in each use case.
<p>&nbsp;</p>
[Link to the Original Project Paper](https://github.com/byronlaferriere/byronlaferriere.github.io/blob/main/EnhancementTwo/Originals/Final%20Project.docx)<br/>
[Link to Full Narrative](https://github.com/byronlaferriere/byronlaferriere.github.io/blob/main/EnhancementTwo/Enhancement%20Two.docx)<br/> 
[Link to Proof of Concept Paper](https://github.com/byronlaferriere/byronlaferriere.github.io/blob/main/EnhancementTwo/(DSA)%20Final%20Project.docx)<br/> 
<p>&nbsp;</p>
## Enhancement Three
The artifact chosen for this final category was completed in the Fundamentals of Data Mining class, which was taken last February. During this class we explored the basics of JMP and used a sample data set for a company named Bubba Gump Shrimp Company. This company was looking for ways to increase future sales and needed this data to be cleaned and analyzed for potential routes that could be taken. One of the main issues I noticed while completing the class was that the data required someone with both statistical analysis knowledge and a firm understanding of how JMP worked to actually investigate the situation. My solution to this issue, was to create a user-friendly API that had access to the same database, which would allow for just about anyone to be able to categorize data accordingly and find potential patterns for exploitation. The new API would need to have a username and password entered, in order to access the page. Once entered, the user can categorize data by radio buttons and quickly check out the location on a map.
<p>&nbsp;</p>
### Prompting web traffic to sign in
![UserLogin]({{ https://github.com/byronlaferriere/byronlaferriere.github.io/blob/main/docs/assets/userLogin.png }}/docs/assets/userLogin.png)<br/> 
### The new Dashboard for the company
![Dashboard]({{ https://github.com/byronlaferriere/byronlaferriere.github.io/blob/main/docs/assets/dashboard.png }}/docs/assets/dashboard.png)<br/> 
### A map that links to highlighted locations on the dataframe
![Geolocation]({{ https://github.com/byronlaferriere/byronlaferriere.github.io/blob/main/docs/assets/geolocation.png }}/docs/assets/geolocation.png)<br/> 
[Link to Original Project](https://github.com/byronlaferriere/byronlaferriere.github.io/tree/main/EnhancementThree/Originals)<br/>
[Link to Full Narrative](https://github.com/byronlaferriere/byronlaferriere.github.io/blob/main/EnhancementThree/Enhancement%20Three.docx)<br/> 
[Link to Project Files](https://github.com/byronlaferriere/byronlaferriere.github.io/tree/main/EnhancementThree)<br/> 
<p>&nbsp;</p>







