import React from 'react';

interface UserProfileProps {
  name: string;
  email: string;
  bio?: string;
  profilePictureUrl?: string;
  coursesEnrolled: string[];
}

const UserProfile: React.FC<UserProfileProps> = ({
  name,
  email,
  bio,
  profilePictureUrl,
  coursesEnrolled,
}) => {
  return (
    <div className="user-profile p-4 border rounded shadow">
      <div className="profile-header text-center mb-4">
        <img
          src={profilePictureUrl || 'https://via.placeholder.com/150'}
          alt={`${name}'s profile`}
          className="rounded-circle mb-3"
          style={{ width: '150px', height: '150px', objectFit: 'cover' }}
        />
        <h2 className="font-bold">{name}</h2>
        <p className="text-muted">{email}</p>
      </div>
      {bio && <p className="bio text-center mb-4">{bio}</p>}
      <div className="courses">
        <h4 className="mb-3">Enrolled Courses:</h4>
        {coursesEnrolled.length > 0 ? (
          <ul className="list-group">
            {coursesEnrolled.map((course, index) => (
              <li key={index} className="list-group-item">
                {course}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-muted">No courses enrolled yet.</p>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
