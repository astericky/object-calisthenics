function Applications(applications) {

    function equals(otherApplications) {
        return isSameSizeAs(otherApplications) && isSubsetOf(otherApplications); 
    }

    function size() {
        return applications.length;
    }

    function isSameSizeAs(otherApplications) {
        return size() === otherApplications.size();
    }

    function exists(application) {
        return selectByApplication(application);
    }

    function isSubsetOf(otherApplications) {
        return any(otherApplications.exists);
    }

    function selectByApplication(application) {
        return function(otherApplication) {
            return application.equals(otherApplication);
        };
    }

    function any(fn) { 
        var length = size();
        for (var i = 0; i < length; i++) {
            if (!fn(jobs[i])) {
                return false;
            }
        }
        return true;
    }

    return {
        equals : equals,
        exists : exists,
        isSameSizeAs : isSameSizeAs,
        size : size,
    };
}
