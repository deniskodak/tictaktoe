import React from 'react'
import Modal from 'react-modal'
import style from './index.module.scss'
export default function ModalContainer({
    isShown,
    onClose,
    children,
    modalRef,
}) {
    if(!modalRef?.current) return 
    return (
        <Modal
            parentSelector={() => modalRef.current}
            overlayClassName={style.overlay}
            className={style.modal}
            isOpen={isShown}
            onRequestClose={onClose}
            ariaHideApp={false}
        >
            {children}
        </Modal>
    )
}
