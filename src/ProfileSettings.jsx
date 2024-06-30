import React from 'react';

function ProfileSettings() {
    return (
        <div className="settings-container">
            <div className="profile-title">
                <h2>Settings</h2>
            </div>

            <div className="vertical-line-break"></div>

            {/* <div className="profile-navigation">
                <h5>Profile</h5>
                <h5>Account</h5>
                <h5>Appearance</h5>
            </div> */}

            {/* <div className="horizontal-line-break"></div> */}

            <div>
                <div>
                    <h2>Profile Picture</h2>
                    <div className="profile-img"></div>
                </div>
                <div className="buttons-container">
                    <button className="change-picture-btn">
                        <h4>Change picture</h4>
                    </button>
                    <button className="upload-picture-btn">
                        <h4>Upload profile</h4>
                    </button>
                </div>
            </div>

            <h3>Personal Information</h3>
            <div className="personal-information-box">
                <input type="text" placeholder="First Name" defaultValue="John" />
                <input type="text" placeholder="Last Name" defaultValue="Doe" />
                <input type="text" placeholder="Email address" defaultValue="johndoe34@gmail.com" />
                <input type="text" placeholder="Phone" defaultValue="647-231-2358" />
                <input type="text" placeholder="Bio" defaultValue="Team Manager" />
            </div>

            <h3>Address</h3>
            <div className="address-container">
                <div className="row1-container">
                    <input className="address-item" type="text" placeholder="Country" defaultValue="Canada" />
                    <input className="address-item" type="text" placeholder="City/State" defaultValue="London, Ontario" />
                </div>
                <input className="address-item" type="text" placeholder="Postal Code" defaultValue="L24 E3P" />
            </div>
        </div>
    );
}

export default ProfileSettings;
