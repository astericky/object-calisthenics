(function() {
    var recruiterJobs = new RecruiterJobs();
    var recruiter = new Recruiter(new Name('Chris'), new Id(1));
    var recruiterToo = new Recruiter(new Name('Sean'), new Id(2));
    var aDisplay = new Display();
    
    recruiterJobs.post('Web Developer', recruiter);
    recruiterJobs.post('Front-End Developer', recruiterToo);
    recruiterJobs.post('Software Engineer', recruiter);

    recruiter.displayOn(aDisplay);
    recruiterJobs.postedBy(recruiter);
})();
