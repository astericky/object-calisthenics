describe('Job Board', function() {

    describe('Jobs', function() {
        it('should be displayed by title', function() {
            var title = webDeveloper.displayOn(aDisplay);
            expect(job.displayOn(aDisplay)).toEqual(title);
        });

        it('should be equal to another job with a different title but with the same ID', function() {
            expect(job.equals(sameJob)).toEqual(true);
        });

        it('should not be equal to another job with the same title but a different ID', function() {
            expect(job.equals(differentJob)).toEqual(false);
        });

    describe('Recruiters', function() {
        it('should be displayed their name', function() {
            var name = 'Sean';
            var recruiterName = recruiter.displayOn(aDisplay);
            expect(recruiterName).toEqual(name);
        });
    });

    describe('Jobseekers', function() {
    });


});
