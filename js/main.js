(function() {
    var aDisplay = new Display();
    var recruiter = new Recruiter(new Name('Chris'), new Id(1));
    var recruiterToo = new Recruiter(new Name('Sean'), new Id(2));
    var allPostedJobs = new AllPostedJobs();

    // Create Jobs
    var jrWebDeveloper = new Job(new JobTitle('Jr. Web Developer'), new Id(1));
    var webDeveloper = new Job(new JobTitle('Web Developer'), new Id(1));
    var softwareEngineer = new Job(new JobTitle('Software Engineer'), new Id(1));

    // Create Recruiter Jobs
    var recruiterJob = new RecruiterJob(jrWebDeveloper, recruiter);
    var recruiterJob1 = new RecruiterJob(webDeveloper, recruiter);
    var recruiterJob2 = new RecruiterJob(softwareEngineer, recruiter);
    
    allPostedJobs.post(recruiterJob);
    allPostedJobs.post(recruiterJob1);
    allPostedJobs.post(recruiterJob2);
   
    

    console.log(recruiter.displayOn(aDisplay));
    //console.log(recruiterJobs.postedBy(recruiter));
    console.log(allPostedJobs.postedBy(recruiter)[0].displayOn(aDisplay));

})();
