(function() {
    var recruiterJobs = new RecruiterJobs();
    var recruiter = new Recruiter('Chris', '1');
    var recruiterToo = new Recruiter('Sean', '2');

    recruiterJobs.post('Web Developer', recruiter);
    recruiterJobs.post('Front-End Developer', recruiterToo);
    recruiterJobs.post('Software Engineer', recruiter);

    recruiterJobs.postedBy(recruiter);
})();
