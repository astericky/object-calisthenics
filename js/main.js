(function() {
    var aDisplay = new Display();
    var recruiter = new Recruiter(new Name('Chris'), new Id(1));
    var recruiterToo = new Recruiter(new Name('Sean'), new Id(2));
    var allPostedJobs = new AllPostedJobs();

    // Create Jobs
    var jrWebDeveloper = new Job(new JobTitle('Jr. Web Developer'), new Id(1));
    var webDeveloper = new Job(new JobTitle('Web Developer'), new Id(2));
    var softwareEngineer = new Job(new JobTitle('Software Engineer'), new Id(3));

    // Create Recruiter Jobs
    var recruiterJob = new RecruiterJob(recruiter, jrWebDeveloper);
    var recruiterJob1 = new RecruiterJob(recruiterToo, webDeveloper);
    var recruiterJob2 = new RecruiterJob(recruiter, softwareEngineer);
    
    allPostedJobs.post(recruiterJob);
    allPostedJobs.post(recruiterJob1);
    allPostedJobs.post(recruiterJob2);
   
    

    //console.log(recruiter.displayOn(aDisplay));
    //console.log(recruiterJobs.postedBy(recruiter));
    //console.log(allPostedJobs.postedBy(recruiter)[0].displayOn(aDisplay));
    //console.log(allPostedJobs.postedBy(recruiterToo)[0].displayOn(aDisplay));


    var resume = new Resume(new Id(100));
    var jobseeker = new Jobseeker(new Name('JoeC'), new Id(2));
    var jobseekerResume = new JobseekerResume(jobseeker, resume);
    var allPostedResumes = new AllResumes();

    // Create Resumes
    var resume = new Resume(new Id(200)); 
    var resume1 = new Resume(new Id(201)); 
    var resume2 = new Resume(new Id(202)); 

    // Create Jobseeker Resumes
    var jobseekerResume = new JobseekerResume(jobseeker, resume);
    var jobseekerResume1 = new JobseekerResume(jobseeker, resume1);
    var jobseekerResume2 = new JobseekerResume(jobseeker, resume2);

    allPostedResumes.post(jobseekerResume);
    allPostedResumes.post(jobseekerResume1);
    allPostedResumes.post(jobseekerResume2);
    
    //console.log(resume.displayOn(aDisplay));
    //console.log(jobseeker.displayOn(aDisplay));
    //jobseekerResume.displayOn(aDisplay);

    console.log(allPostedResumes.postedBy(jobseeker)[0].displayOn(aDisplay));


})();
