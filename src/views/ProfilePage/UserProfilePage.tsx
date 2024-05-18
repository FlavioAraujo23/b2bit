import React from 'react';
import { UserProfileData } from '../../types/userProfile';
import { fetchUserProfile } from '../../controllers/UserProfileController';
import Input from '../../Components/Input';

const UserProfilePage: React.FC = () => {
  const [userProfile, setUserProfile] = React.useState<UserProfileData | null>(
    null
  );
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const loadUserProfile = async () => {
      try {
        const profile = await fetchUserProfile();
        setUserProfile(profile);
      } catch (err) {
        setError('Failed to load user profile');
      } finally {
        setLoading(false);
      }
    };

    loadUserProfile();
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-2xl">
        <div className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75">
            Loading...
          </span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen flex items-center justify-center text-red-400">
        {error}
      </div>
    );
  }
  if (!userProfile) return null;

  return (
    <div>
      {userProfile && (
        <div className="w-screen h-screen bg-[#F1F5F9]">
          <header className="w-screen"> header</header>
          <main className=" h-4/5 flex justify-center items-center flex-col">
            <div className="shadow-2xl w-[358px] h-[315px] flex justify-around items-center flex-col rounded-[18px] bg-[#FDFDFD]">
              <header className=" flex items-center flex-col">
                <h2 className="text-xs font-semibold mb-[9px] mt-7">
                  Profile picture
                </h2>
                <img
                  src={userProfile.avatar.low}
                  alt="Avatar"
                  className="rounded-lg w-16 h-16 object-cover mb-7"
                />
              </header>
              <div>
                <label htmlFor="name" className="text-sm mb-2">
                  Your <span className="font-bold">Name</span>
                </label>
                <Input
                  id="name"
                  type="text"
                  disabled
                  className="bg-[#F4F4F4] h-[44px] w-[296px] p-4 rounded-lg mb-3 [#262626] text-xs"
                  value={userProfile.name}
                />
                <label htmlFor="name" className="text-sm mb-2">
                  Your <span className="font-bold">E-mail</span>
                </label>
                <Input
                  type="text"
                  disabled
                  className="bg-[#F4F4F4] h-[44px] w-[296px] p-4 mb-7 text-[#262626] text-xs"
                  value={userProfile.email}
                />
              </div>
            </div>
          </main>
        </div>
      )}
    </div>
  );
};

export default UserProfilePage;
