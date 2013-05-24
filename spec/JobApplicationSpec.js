describe('a Recruiter', function() {
    var recruiterOutput;
    var recruiterJobsOutput;
    var testRecruiter = 'ID: 1 / Name: Chris';
    var testRecruiterPostJob = 'Web Developer';
    var recruiterJobs = new RecruiterJobs();
    var recruiter = new Recruiter(new Name('Chris'), new Id(1));
    var aDisplay = new Display();

    recruiterJobs.post('Web Developer', recruiter);
    recruiterOutput = recruiter.displayOn(aDisplay);
    recruiterJobsOutput = recruiterJobs.postedBy(recruiter)[0].represent(aDisplay);
    console.log(recruiterJobsOutput);
    
    it('exists', function() {
        expect(typeof recruiter).toBe('object');
    });

    it('has a name and id', function() {
        expect(recruiterOutput).toBe(testRecruiter);
    });

    it('can post jobs', function() {
        expect(recruiterJobsOutput).toBe(testRecruiterPostJob);
    });
    
});


describe('a Jobseeker', function() {
    it('exists', function() {
    });

    it('has a name and id', function() {
    });

    it('can save jobs', function() {
    });

    it('can apply to ATS jobs posted by recruiters', function() {
    });
    
    it('can apply to JReq jobs if they have a resume', function() {
    });

    it('cannot apply to JReq jobs with someone else\'s resume', function() {
    });

    it('can have more than one resume', function() {
    });
    
    it('can see a listing of jobs for which they applied', function() {
    });


});

