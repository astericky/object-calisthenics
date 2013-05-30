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

    describe('Recruiter', function() {
        it('exists', function() {
            expect(recruiter).toBeDefined();
        });

        it('shows name', function() {
            var name = 'Sean';
            expect(recruiter.displayOn(aDisplay)).toEqual(name);
        });

        it('can post a job', function() {
            var jobPostedByRecruiter;
            var jrWebDeveloper = new Job(new JobTitle('Jr. Web Developer'), new Id(413));
            var job = new RecruiterJob(recruiter, jrWebDeveloper);
            allPostedJobs.post(job);
            jobPostedByRecruiter = allPostedJobs.postedBy(recruiter)[0].displayOn(aDisplay);
            expect(jobPostedByRecruiter).toMatch(/Jr. Web Developer/);
        });
    });

    describe('Jobseeker', function() {
        it('exists', function() {
            expect(jobseeker).toBeDefined();
        });

        it('shows name', function() {
            var name = 'Chris';
            expect(jobseeker.displayOn(aDisplay)).toEqual(name);
        });

        it('can post a resume', function() {
            var resumePostedByJobseeker;
            var resume = new Resume(new Id(200));
            var jrWebDeveloperResume = new JobseekerResume(jobseeker, resume);
            allResumes.post(jrWebDeveloperResume);
            expect(allResumes.resumeExists(resume)).toEqual(true);
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

