import { useEffect } from 'react';
import { OverlayStyled } from './ModalStyled';
import { useDispatch, useSelector } from 'react-redux';
import { selectModalOpen } from 'redux/selectors';
import { findCarModal, toggleShowModal } from 'redux/Slices/modalSlice';
import { createPortal } from 'react-dom';
import { ModalMarkUp } from './ModalMarkUp';

const modalRoot = document.querySelector('#modal-root');

export const Modal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectModalOpen);

  useEffect(() => {
    if (!isOpen) return;
    document.body.classList.add('no-scroll');

    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        document.body.classList.remove('no-scroll');
        dispatch(toggleShowModal(''));
        dispatch(findCarModal(null));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dispatch, isOpen]);

  const handleClickOverlay = e => {
    if (e.target === e.currentTarget) {
      document.body.classList.remove('no-scroll');
      dispatch(toggleShowModal(''));
      dispatch(findCarModal(null));
    }
  };

  const handleClickBtnClose = () => {
    document.body.classList.remove('no-scroll');
    dispatch(toggleShowModal(''));
    dispatch(findCarModal(null));
  };

  return createPortal(
    <>
      <OverlayStyled onClick={handleClickOverlay}>
        <div>          
          {isOpen &&                        
              <ModalMarkUp handleClickBtnClose={handleClickBtnClose}/>            
          }
        </div>
      </OverlayStyled>      
    </>,
    modalRoot
  );
};
