namespace sap.resume;

using {
    cuid,
    managed,
    temporal,
    Currency
} from '@sap/cds/common';

type Guid : String(32);

entity Intro {

    key empName     : String(50)  @(title: 'Name');
        mobile      : String(13);
        email       : String(20);
        designation : String(20);
        skills      : String(100);
        status      : String(15);
        location    : String(25);
        linkedInURL : String(200) @(title: 'LinkedIn Profile');
//resume       : LargeBinary @Core.MediaType: 'image/png';
};

entity empDetails {

    key companyName : String(50) @(title: 'Company Name');
        designation : String(25) @(title: 'Designation');
        details     : String(20) @(title: 'Details');
};
