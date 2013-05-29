describe('Job Board', function() {
    beforeEach(function() {
        var jobseeker = new Jobseeker(new Name('Chris'), new Id(32));
        var recruiter = new Recruiter(new Name('Sean'), new Id(1));
        var jobs = new RecruiterJobs();
        var aDisplay = new Display();
    });
    
    describe('Jobseeker', function() {
        it('has current jobseeker name and id', function() {
            expect(jobseeker).toBeDefined();
            expect(jobseeker.displayOn(aDisplay)).toEqual('ID: 32 / Name: Chris');
        });
    });

    describe('Recruiter', function() {
        it('has current recruiter name and id', function() {
            expect(recruiter).toBeDefined();
            expect(recruiter.displayOn(aDisplay)).toEqual('ID: 32 / Name: Chris');
        });
    });
});

