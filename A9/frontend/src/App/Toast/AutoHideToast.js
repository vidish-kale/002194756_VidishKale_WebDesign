import React from 'react';
import { ToastContainer } from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast';

function AutoHideToast({ title, body, time = '', onCloseCallback, showState }) {
    return (
        <ToastContainer position='top-end'>
            <Toast onClose={onCloseCallback} show={showState} delay={3000} autohide>
                <Toast.Header>
                    <img
                        src="holder.js/20x20?text=%20"
                        className="rounded me-2"
                        alt=""
                    />
                    <strong className="me-auto">{title}</strong>
                    <small>{time}</small>
                </Toast.Header>
                <Toast.Body>{body}</Toast.Body>
            </Toast>
        </ToastContainer>
    );
}

export default AutoHideToast;