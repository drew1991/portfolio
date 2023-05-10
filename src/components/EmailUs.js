import React from 'react';
import { RiMailLine } from 'react-icons/ri';
import './EmailButton.css';

const EmailButton = () => {
  const recipientEmail = 'mrdrezcort@gmail.com';
  const subject = 'Email subject';
  const body = 'Email body';

  const handleClick = () => {
    window.location.href = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <button className="email-button" onClick={handleClick}>
      <RiMailLine className="email-icon" /> Email Me
    </button>
  );
};

export default EmailButton;
