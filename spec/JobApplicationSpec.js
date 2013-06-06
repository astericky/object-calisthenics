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
    var date = new Date(2013, 04, 30);
    var jobApplication = new JobApplication(job, recruiter, jobseeker, date);
    var differentJobApplication = new JobApplication(differentJob, recruiter, jobseeker, date);
    var anotherJobApplication = new JobApplication(job, recruiter, jobseeker, new Date());
    
    // post job 
    allPostedJobs.post(recruiterJob1);
    allPostedJobs.post(recruiterJob2);

    // submit job application
    allJobApplications.submit(jobApplication);
    allJobApplications.submit(differentJobApplication);
    //allJobApplications.submit(anotherJobApplication);


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

        xit('should be able to see jobseekers who have applied to their jobs by job', function() {
            var applicationsByRecruiter = allJobApplications.byRecruiter(recruiter);
            var applicationsByJob = applicationsByRecruiter.byJob(job);
            applicationsByJob = applicationsByJob.displayOn(applicationDisplay).join(''); 
            
            expect(applicationsByJob).toEqual(test);
        });


        xit('should be able to see jobseekers who have applied to their jobs by day', function() {
            expect(allJobApplications.applicantsByDate().equals(applicants)).toEqual(true);
        });


        xit('should be able to see jobseekers who have applied to a given job on a given day', function() {
            expect(job.applicantsByDate().equals(applicants)).toEqual(true);
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
            expect(allJobApplications.exists(jobApplication)).toEqual(true);
        });
        
        xit('should be able to submit a job application that does require a resume', function() {
        });

        it('should be able to see a listing of jobs for which they have applied', function() {
            var expected = [
                'Chris Web Developer Thu May 30 2013 00:00:00 GMT-0400 (EDT) Sean', 
                'Chris Software Engineer Thu May 30 2013 00:00:00 GMT-0400 (EDT) Sean'
            ].join('');
            var jobsApplications = allJobApplications.submittedBy(jobseeker);
            var actual = jobsApplications.displayOn(applicationDisplay).join('');
            expect(expected).toEqual(actual);
        });

        xit('should be able to see a listing of jobs saved for later viewing', function() {
        });

    });

    xit('should be able to see jobseekers who have applied to jobs on any given day', function() {
    });

    xit('should be able to see aggregate job application numbers by job and recruiter', function() {
    });

});

