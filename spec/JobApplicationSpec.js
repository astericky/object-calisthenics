describe('A job application', function() {
    it('recruiters post jobs', function() {
        expect(Recruiter.post('job')).toBe(true);
    });

    it('recruiters view jobs they have posted', function() {
        expect(Recruiter.jobsPosted()).not.toBeUndefined();
    });
});
