import React from 'react'
import style from './index.module.scss'
import 'react-responsive-modal/styles.css'
import { Modal } from 'react-responsive-modal'

export default function ModalContainer({
    isShown,
    onClose,
    children,
    modalRef,
}) {
    if (!modalRef?.current) return

    return (
        <Modal
            open={isShown}
            onClose={onClose}
            container={modalRef.current}
            center
            container={modalRef.current}
            classNames={{ overlay: style.overlay, root: style.root }}
        >
            {children}
        </Modal>
    )
}
