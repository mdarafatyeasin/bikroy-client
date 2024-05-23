import { Link } from "react-router-dom";
import "./ProfileInfo.css";
import useUser from "../../Hooks/useUser";
import Loader from "../Shared/Loader/Loader";
import useBasicData from "../../Hooks/useBasicData";
import useAdditionalData from "../../Hooks/useAdditionalData";

const ProfileInfo = () => {
    const user = useUser();
    const basicData = useBasicData();
    const additionalData = useAdditionalData();
    
    if (user.loading || basicData.loading || additionalData.loading) {
        return <Loader />;
    }

    return (
        <div className="profile-container">
            <div className="profile-content">
                <div className="user-info">
                    <div className="info-title">
                        <h1>User Information</h1>
                        <Link to="/profile-info/user-edit" className="profile-edit-button">Edit</Link>
                    </div>
                    <hr />
                    <div className="info-data">
                        <h1 className="name">{user.user.first_name} {user.user.last_name}</h1>
                        <p className="username">Username: {user.user.username}</p>
                        <p>Email: {user.user.email}</p>
                    </div>
                </div>
                <div className="user-info">
                    <div className="info-title">
                        <h1>Basic Information</h1>
                        <Link to="/profile-info/basic-edit" className="profile-edit-button">Edit</Link>
                    </div>
                    <hr />
                    <table className="info-table">
                        <tbody>
                            <tr>
                                <td className="table-title"><strong>Phone Number</strong></td>
                                <td className="clon">:</td>
                                <td>{basicData.basicData.phone_number ? basicData.basicData.phone_number : "Not provided"}</td>
                            </tr>
                            <tr>
                                <td className="table-title"><strong>Gender</strong></td>
                                <td className="clon">:</td>
                                <td>{basicData.basicData.gender ? basicData.basicData.gender : "Not provided"}</td>
                            </tr>
                            <tr>
                                <td className="table-title"><strong>Birth Date</strong></td>
                                <td className="clon">:</td>
                                <td>{basicData.basicData.birth_date ? basicData.basicData.birth_date : "Not provided"}</td>
                            </tr>
                            <tr>
                                <td className="table-title"><strong>Location</strong></td>
                                <td className="clon">:</td>
                                <td>{basicData.basicData.location ? basicData.basicData.location : "Not provided"}</td>
                            </tr>
                            <tr>
                                <td className="table-title"><strong>Education Level</strong></td>
                                <td className="clon">:</td>
                                <td>{basicData.basicData.education_level ? basicData.basicData.education_level : "Not provided"}</td>
                            </tr>
                            <tr>
                                <td className="table-title"><strong>Current Job</strong></td>
                                <td className="clon">:</td>
                                <td>{basicData.basicData.current_job ? basicData.basicData.current_job : "Not provided"}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="user-info">
                    <div className="info-title">
                        <h1>Additional Information</h1>
                        <Link to="/profile-info/additional-edit" className="profile-edit-button">Edit</Link>
                    </div>
                    <hr />
                    <table className="info-table">
                        <tbody>
                            <tr>
                                <td className="table-title"><strong>About</strong></td>
                                <td className="clon">:</td>
                                <td>{additionalData.additionalData.about ? additionalData.additionalData.about : "Not provided"}</td>
                            </tr>
                            <tr>
                                <td className="table-title"><strong>Annual Income</strong></td>
                                <td className="clon">:</td>
                                <td>{additionalData.additionalData.annual_income ? additionalData.additionalData.annual_income : "Not provided"}</td>
                            </tr>
                            <tr>
                                <td className="table-title"><strong>University Name</strong></td>
                                <td className="clon">:</td>
                                <td>{additionalData.additionalData.uv_name ? additionalData.additionalData.uv_name : "Not provided"}</td>
                            </tr>
                            <tr>
                                <td className="table-title"><strong>LinkedIn</strong></td>
                                <td className="clon">:</td>
                                <td>{additionalData.additionalData.linkedin ? <a href={additionalData.additionalData.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn Profile</a> : "Not provided"}</td>
                            </tr>
                            <tr>
                                <td className="table-title"><strong>Facebook</strong></td>
                                <td className="clon">:</td>
                                <td>{additionalData.additionalData.facebook ? <a href={additionalData.additionalData.facebook} target="_blank" rel="noopener noreferrer">Facebook Profile</a> : "Not provided"}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;
