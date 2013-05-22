(function() {
    var recruiterJobs = new RecruiterJobs();
    var recruiter = new Recruiter(new Name('Chris'), new Id(1));
    var recruiterToo = new Recruiter(new Name('Sean'), new Id(2));

    recruiterJobs.post('Web Developer', recruiter);
    recruiterJobs.post('Front-End Developer', recruiterToo);
    recruiterJobs.post('Software Engineer', recruiter);

    recruiterJobs.postedBy(recruiter);
})();
