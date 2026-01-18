import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Profile = () => {
    const { currentUser } = useSelector((state) => state.user);


    //   const handleSignOut = async () => {
    //     try {
    //       dispatch(signOutUserStart());
    //       const res = await fetch('/api/auth/signout');
    //       const data = await res.json();
    //       if (data.success === false) {
    //         dispatch(deleteUserFailure(data.message));
    //         return;
    //       }
    //       dispatch(deleteUserSuccess(data));
    //     } catch (error) {
    //       dispatch(deleteUserFailure(data.message));
    //     }
    //   };
    return (
        <div className='p-3 max-w-lg mx-auto'>
            <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
            <form className='flex flex-col gap-4'>
                <img
                    src={currentUser.avatar || currentUser.avatar}
                    alt='profile'
                    className='rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2'
                />
                <input
                    type='text'
                    placeholder='username'
                    // defaultValue={currentUser.username}
                    id='username'
                    className='border p-3 rounded-lg'
                />
                <input
                    type='email'
                    placeholder='email'
                    id='email'
                    // defaultValue={currentUser.email}
                    className='border p-3 rounded-lg'
                />
                <input
                    type='password'
                    placeholder='password'
                    id='password'
                    className='border p-3 rounded-lg'
                />
                <button
                    className='bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80'
                >
                    Update
                </button>
                <Link
                    className='bg-green-700 text-white p-3 rounded-lg uppercase text-center hover:opacity-95'
                    to={'/create-listing'}
                >
                    Create Listing
                </Link>

            </form>
            <div className='flex justify-between mt-5'>
                <span
                    className='text-red-700 cursor-pointer'
                >
                    Delete account
                </span>
                <span className='text-red-700 cursor-pointer'>
                    Sign out
                </span>
            </div>
        </div>
    );
};

export default Profile;