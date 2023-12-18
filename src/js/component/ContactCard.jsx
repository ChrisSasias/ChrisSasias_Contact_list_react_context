import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import '../../styles/index.css';
import { Link } from 'react-router-dom';

const ContactCard = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className='container'>
            <div className="row justify-content-center">
                {store.contacts.map((contact) => (
                    <div className="col-12" key={contact.id}>
                        <div className="card">
                            <div className="card-body d-flex">
                                <div className='w-25'>
                                    <img src="https://thispersondoesnotexist.com/" alt="contact image" className='card-img-top rounded-circle' />
                                </div>
                                <div className='flex-grow-1'>
                                    <h5 className="card-title">{contact.full_name}</h5>
                                    <p className="card-text my-1">ADDRESS: {contact.address}</p>
                                    <p className="card-text my-1">PHONE: {contact.phone}</p>
                                    <p className="card-text my-1">EMAIL: {contact.email}</p>
                                </div>
                                <div className='d-flex align-items-center justify-content-center'>
                                    <button className='btn' onClick={() => actions.handleDelete(contact.id)}>
                                        <i className="fas fa-trash"></i>
                                    </button>
                                    <Link to={`/edit/${contact.id}`}>
                                        <i className="fas fa-pencil-alt" style={{ "color": "black" }}></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContactCard;
