describe('Job Board', function() {
    var aDisplay = new EchoDisplay();
    var applicationDisplay = new ApplicationDisplay();
    var allPostedJobs = new AllPostedJobs();
    var allSavedJobs = new AllPostedJobs();
    var allResumes = new AllResumes();
    var allJobApplications = new AllJobApplications();

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
    var recruiterJob1 = new RecruiterJob(recruiter, job);
    var recruiterJob2 = new RecruiterJob(recruiter, sameJob);

    // job application
    var jobApplication = new JobApplication(recruiterJob1, jobseeker);
    var date = new Date(2013, 04, 30);
    var submittedJobApplication = new SubmittedJobApplication(jobApplication, date);
    var sameJobApplication = new SubmittedJobApplication(jobApplication, date);
    
    
    // post job 
    allPostedJobs.post(recruiterJob1);
    allPostedJobs.post(recruiterJob2);

    // post job application
    allJobApplications.submit(submittedJobApplication);

    it('exists', function() {
        expect(allPostedJobs).toBeDefined(); 
    });

    xdescribe('Name', function() {
        it('exist', function() {
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
            expect(job.displayOn(aDisplay)).toEqual(webDeveloper.displayOn(aDisplay));    
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

        it('should post a job', function() {
            expect(allPostedJobs.exists(recruiterJob1)).toBeTruthy();
        });

        it('should be able to see a listing of the jobs they posted', function() {
            var sameJobs = [recruiterJob1, recruiterJob2];
            var jobs = new Jobs(sameJobs);
            var jobsPostedByRecruiter = allPostedJobs.postedBy(recruiter);
            expect(jobsPostedByRecruiter.equals(jobs)).toEqual(true);
        });
    });

    describe('Jobseeker', function() {
        it('shows their name', function() {
            var name = 'Chris';
            expect(jobseeker.displayOn(aDisplay)).toEqual(name);
        });

        xit('can post a resume', function() {
            var resumePostedByJobseeker;
            var resume = new Resume(new Id(200));
            var jrWebDeveloperResume = new JobseekerResume(jobseeker, resume);
            allResumes.post(jrWebDeveloperResume);
            var resume2 = new Resume(new Id(200));
            var someOtherResume = new JobseekerResume(jobseeker, resume2);
            expect(allResumes.resumeExists(someOtherResume)).toEqual(true);
        });

        it('should be able to submit a job application that does not require a resume', function() {
            expect(allJobApplications.exists(submittedJobApplication)).toEqual(true);
        });

        it('should be able to see a listing of jobs for which they have applied', function() {
            
            
        });

        it('should be able to see a listing of jobs saved for later viewing', function() {
        });

    });

    describe('Job Application', function() {
        it('', function() {
        });
        it('', function() {
        });
        it('', function() {
        });
    });

});

