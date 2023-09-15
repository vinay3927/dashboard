import React, { useState } from 'react';
import './Addcard.css';
import Icon from '../../../../../../assets/icons/addicon.png';
import Wrong from '../../../../../../assets/icons/wrongicon.png';
import Whatsapp from '../../../../../../assets/details/whatsapp.png';
import Youtube from '../../../../../../assets/details/youtube.png';
import Instagram from '../../../../../../assets/details/instagram.png';
import Gmail from '../../../../../../assets/details/mail.png';
import { LayoutGroup, motion } from 'framer-motion';

const Addcard = () => {
  const [expanded, setExpanded] = useState(false);
  const [formType, setFormType] = useState('basic');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    instagram: '',
    youtube: '',
  });

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const toggleFormType = (type) => {
    setFormType(type);
  };

  const handleFormChange = (event) => {
    const { id, value } = event.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleNext = () => {
    toggleFormType('social');
  };

  const handlePrev = () => {
    toggleFormType('basic');
  };

  const handleDone = () => {
    // Here, you can save formData to a database or perform any other action as needed.
    // For now, let's log it to the console.
    console.log('Form Data:', formData);

    // Close the expanded card
    toggleExpanded();
  };

  const compactCardContent = formData.name ? (
    <div className='form-data'>
      <div className='name'>
      <span>{formData.name}</span>
      </div>
      <div className='details'>
      <div className='single-detail'>
      <img src={Whatsapp} alt='Whatsapp'></img>
      <span><u>{formData.phone}</u></span>
      </div>
      <div className='single-detail'>
      <img src={Instagram} alt='Instagram'></img>
      <span><u>{formData.instagram}</u></span>
      </div>
      <div className='single-detail'>
      <img src={Gmail} alt='Gmail'></img>
      <span><u>{formData.email}</u></span>
      </div>
      <div className='single-detail'>
      <img src={Youtube} alt='Youtube'></img>
      <span><u>{formData.youtube}</u></span>
      </div>
      </div>
    </div>
  ) : (
    <div className='icon'>
      <img src={Icon} alt="Add Profile Icon" />
      <span>Add Profile</span>
    </div>
  );
  
  return (
    <LayoutGroup>
      <motion.div
        className={`Addcard ${expanded ? 'expanded' : ''}`}
        layout
        style={{ height: expanded ? 'auto' : 40 }}
        onClick={toggleExpanded}
      >
        <div className={`compact-card ${formData.name ? 'with-data' : 'no-data'}`}>
            {compactCardContent}
        </div>
      </motion.div>
      {expanded && (
        <div className="expanded-overlay">
          <div className="expanded-card">
            <motion.div layout style={{ height: 'auto' }}>
              <div className="form-container">
                <div className='form-header'>
                  <span>Add New Profile</span>
                  <img src={Wrong} onClick={toggleExpanded} alt='Wrong'></img>
                </div>
                <div className="toggle-buttons">
                  <button
                    className={`toggle-button ${formType === 'basic' ? 'active' : ''}`}
                    onClick={() => toggleFormType('basic')}
                  >
                    Basic
                  </button>
                  <button
                    className={`toggle-button ${formType === 'social' ? 'active' : ''}`}
                    onClick={() => toggleFormType('social')}
                  >
                    Social
                  </button>
                </div>
                {formType === 'basic' ? (
                  <BasicForm handleFormChange={handleFormChange} handleNext={handleNext} />
                ) : (
                  <SocialForm handleFormChange={handleFormChange} formData={formData} handlePrev={handlePrev} handleDone={handleDone} />
                )}
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </LayoutGroup>
  );
};

function BasicForm({ handleFormChange, handleNext }) {
  return (
    <div className="basic-form">
      <label htmlFor="name">Enter Name*</label>
      <input type="text" id="name" placeholder='Eg.Joh Doe' onChange={handleFormChange} />

      <label htmlFor="email">Enter Email*</label>
      <input type="email" id="email" placeholder='Eg.John@xyz.com' onChange={handleFormChange} />

      <label htmlFor="phone">Phone*</label>
      <input type="text" id="phone" placeholder='Eg. 9123456789' onChange={handleFormChange} />

      <div className="form-buttons">
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

function SocialForm({ handleFormChange, formData, handlePrev, handleDone }) {
  const handleSave = () => {
    handleDone();
  };

  return (
    <div className="social-form">
      <label htmlFor="instagram">Instagram Link (Optional)</label>
      <input
        type="text"
        id="instagram"
        placeholder='Eg. ..instagram.com/username'
        onChange={handleFormChange}
      />

      <label htmlFor="youtube">Youtube Link (Optional)</label>
      <input
        type="text"
        id="youtube"
        placeholder='Eg. ..youtube.com/username'
        onChange={handleFormChange}
      />

      <div className="form-buttons">
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleSave}>Done</button>
      </div>
    </div>
  );
}

export default Addcard;
