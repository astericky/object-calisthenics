/*describe('A job application', function() {
    it('allows recruiters to post jobs', function() {
        expect(Recruiter.post('job')).toBe(true);

         
        
    });

    it('allows recruiters to view jobs they have posted', function() {
        expect(Recruiter.jobsPosted()).not.toBeUndefined();
    });
});*/

describe('a Recruiter', function() {
    var recruiter = new Recruiter();

    it('exists', function() {
        expect(typeof recruiter).toBe("object");
    });
});


