describe('Job Board', function() {
    var aDisplay = new Display();
    var allPostedJobs = new AllPostedJobs();
    var allSavedJobs = new AllPostedJobs();
    var allResumes = new AllResumes();
    var recruiter = new Recruiter(new Name('Sean'), new Id(1)); 
    var jobseeker = new Jobseeker(new Name('Chris'), new Id(32));

    it('exists', function() {
       expect(allPostedJobs).toBeDefined(); 
    });

    describe('Id', function() {
        var id = new Id(1);
        var sameId = new Id(1);
        var differentId = new Id(3);

        it('should be equal to another id with the same value', function() {
            expect(id.equals(sameId)).toEqual(true);
        });
        it('should not be equal to another ID with a different value', function() {
            expect(id.equals(differentId)).toEqual(false);
        });
    });

    describe('Job', function() {
        var title = new JobTitle('Title');
        var job = new Job(title, new Id(11));
        var sameJob = new Job(new JobTitle('Title 2'), new Id(11));
        var differentJob = new Job(title, new Id(12));
        
        it('shows its title', function() {
            expect(job.displayOn(aDisplay)).toEqual(title.displayOn(aDisplay));    
        });

        it('should be equal to another job with a different title but with the same ID', function() {
            expect(job.equals(sameJob)).toEqual(true);
        });

        it('should not be equal to another job with the same title but a different ID', function() {
            expect(job.equals(differentJob)).toEqual(false);
        });
    });

    describe('Recruiter', function() {
        it('exists', function() {
            expect(recruiter).toBeDefined();
        });

        it('shows their name', function() {
            var name = 'Sean';
            expect(recruiter.displayOn(aDisplay)).toEqual(name);
        });

        xit('can post a job', function() {
            var jobPostedByRecruiter;
            var jrWebDeveloper = new Job(new JobTitle('Jr. Web Developer'), new Id(413));
            var webDeveloper = new Job(new JobTitle('Web Developer'), new Id(413));
            var job = new RecruiterJob(recruiter, jrWebDeveloper);
            var job2 = new RecruiterJob(recruiter, webDeveloper);
            allPostedJobs.post(job);
            expect(AllPostedJobs.jobExists(job2)).toEqual(true);
        });
    });

    describe('Jobseeker', function() {
        it('exists', function() {
            expect(jobseeker).toBeDefined();
        });

        it('shows their name', function() {
            var name = 'Chris';
            expect(jobseeker.displayOn(aDisplay)).toEqual(name);
        });

        it('can post a resume', function() {
            var resumePostedByJobseeker;
            var resume = new Resume(new Id(200));
            var jrWebDeveloperResume = new JobseekerResume(jobseeker, resume);
            allResumes.post(jrWebDeveloperResume);
            var resume2 = new Resume(new Id(200));
            var someOtherResume = new JobseekerResume(jobseeker, resume2);
            expect(allResumes.resumeExists(someOtherResume)).toEqual(true);
        });

        xit('can submit a job application', function() {
            var jobPostedByRecruiter;
            var srWebDeveloper = new Job(new JobTitle('Sr. Web Developer'), new Id(413));
            var job = new RecruiterJob(recruiter, jrWebDeveloper);
            var jobApplication = new JobApplication(recruiterJob);
            allPostedJobs.post(job); 
            jobseeker.submitApplication();
            
        });
    });

    
});

