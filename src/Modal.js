
import React from 'react';
import { useGlobalContext } from './AppContext';

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();
  return (
    <div
      className={`${
        isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'
      }`}
    >
      <div className='modal-container'>
        <h3>modal content</h3>
        
        
      </div>
    </div>
  );
};

export default Modal;