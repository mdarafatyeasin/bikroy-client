import { useState, useEffect } from "react";
import useBasicData from "../../../Hooks/useBasicData";
import Loader from "../../Shared/Loader/Loader";
import useUser from "../../../Hooks/useUser";
import { useNavigate } from "react-router-dom";

const GENDER_OPTIONS = [
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' }
];

const LOCATION_OPTIONS = [
    { label: 'Dhaka', value: 'Dhaka' },
    { label: 'Chittagong', value: 'Chittagong' },
    { label: 'Barishal', value: 'Barishal' },
    { label: 'Rangpur', value: 'Rangpur' },
    { label: 'Kumilla', value: 'Kumilla' },
    { label: 'Sylhet', value: 'Sylhet' },
    { label: 'Khulna', value: 'Khulna' },
    { label: 'Rajshahi', value: 'Rajshahi' }
];

const EDUCATION_OPTIONS = [
    { label: 'SSC', value: 'SSC' },
    { label: 'HSC', value: 'HSC' },
    { label: 'HONOURS', value: 'HONOURS' },
    { label: 'MASTERS', value: 'MASTERS' }
];

const BasicEdit = () => {
    const data = useBasicData();
    const user = useUser()
    const basicInfo = data.basicData;

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        phone_number: '',
        gender: '',
        birth_date: '',
        location: '',
        education_level: '',
        current_job: ''
    });

    // console.log(user)

    useEffect(() => {
        if (basicInfo) {
            setFormData({
                phone_number: basicInfo.phone_number || '',
                gender: basicInfo.gender || '',
                birth_date: basicInfo.birth_date || '',
                location: basicInfo.location || '',
                education_level: basicInfo.education_level || '',
                current_job: basicInfo.current_job || '',
                user: 1
            });
        }
    }, [basicInfo]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://127.0.0.1:8000/profile/basic_info/${user.user.id}/`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const updatedBasicInfo = await response.json();
            console.log('Basic information updated successfully:', updatedBasicInfo);
        } catch (error) {
            console.error('Error updating basic information:', error);
        }
    };

    if (data.loading) {
        return <Loader />;
    }

    if(!user.user){
        navigate("/login");
      }

    // console.log(formData)

    return (
        <div>
            <h1>Edit Basic Information</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        name="phone_number"
                        value={formData.phone_number}
                        placeholder="Phone Number"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Gender</option>
                        {GENDER_OPTIONS.map(option => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <input
                        type="date"
                        name="birth_date"
                        value={formData.birth_date}
                        placeholder="Birth Date"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <select
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Location</option>
                        {LOCATION_OPTIONS.map(option => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <select
                        name="education_level"
                        value={formData.education_level}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Education Level</option>
                        {EDUCATION_OPTIONS.map(option => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <input
                        type="text"
                        name="current_job"
                        value={formData.current_job}
                        placeholder="Current Job"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <input type="submit" value="SUBMIT" />
                </div>
            </form>
        </div>
    );
};

export default BasicEdit;
