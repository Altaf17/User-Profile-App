import React, { useState } from 'react';
import './Profile.scss';
import { FaTrashAlt } from 'react-icons/fa';
import { UsersData } from '../UserData';

const Profile = () => {
    const [data, setData] = useState(UsersData);

    const handleRemove = (id) => {
        const newList = data.filter((item) =>
            item.id !== id
        )
        setData(newList);
    };
    return (
        <section className='profile-sec --flex-center --100vh --bg-primary'>
            <div className="container">
                <h2 className='--text-light'>User Profile App</h2>
                {data && data.map((elem) => {
                    const { id, name, img, city, job } = elem
                    return (

                        <div className="profile --card --flex-between --p" key={id}>
                            <img src={img} alt="" />

                            <div className="desc">
                                <h4 className='--text-light'>Name : {name}</h4>
                                <p className='--text-light'>job : {job} </p>
                                <p className='--text-light'>city : {city}</p>
                            </div>

                            <FaTrashAlt size={18} className='icon' onClick={() => handleRemove(id)} />
                        </div>
                    )
                })}
                <button className='--btn --btn-danger' onClick={() => setData([])}>Clear All</button>
            </div>
        </section>
    )
}

export default Profile