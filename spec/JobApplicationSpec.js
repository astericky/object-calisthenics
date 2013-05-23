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

