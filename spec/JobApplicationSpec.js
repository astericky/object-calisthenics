describe('Job Board', function() {
    var aDisplay = new EchoDisplay();
    var allPostedJobs = new AllPostedJobs();
    var allSavedJobs = new AllPostedJobs();
    var allResumes = new AllResumes();

    // name
    var jobseekerName = new Name('Chris');
    var recruiterName = new Name('Sean');

    // id
    var id = new Id(1);
    var sameId = new Id(1);
    var differentId = new Id(3);

    // recruiter & jobseeker
    var recruiter = new Recruiter(recruiterName, id); 
    var jobseeker = new Jobseeker(jobseekerName, sameId);

    // job title
    var webDeveloper = new JobTitle('Web Developer');
    var softwareEngineer = new JobTitle('Software Engineer');

    // job
    var job = new Job(webDeveloper, new Id(11));
    var sameJob = new Job(softwareEngineer, new Id(11));
    var differentJob = new Job(softwareEngineer, new Id(12));

    // recruiter job
    var recruiterJob1 = new RecruiterJob(recruiter, webDeveloper);
    var recruiterJob2 = new RecruiterJob(recruiter, softwareEngineer);


    it('exists', function() {
       expect(allPostedJobs).toBeDefined(); 
    });

    describe('Name', function() {
        it('should exist', function() {
            expect(jobseekerName).toBeDefined();
        });
    });

    describe('Id', function() {
        it('should be equal to another id with the same value', function() {
            expect(id.equals(sameId)).toEqual(true);
        });

        it('should not be equal to another ID with a different value', function() {
            expect(id.equals(differentId)).toEqual(false);
        });
    });

    describe('Job', function() {
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
        it('shows their name', function() {
            var name = 'Sean';
            expect(recruiter.displayOn(aDisplay)).toEqual(name);
        });

        xit('can post a job', function() {
            allPostedJobs.post(recruiterJob1);
            expect(AllPostedJobs.jobExists(recruiterJob1)).toEqual(true);
        });
    });

    describe('Jobseeker', function() {

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

