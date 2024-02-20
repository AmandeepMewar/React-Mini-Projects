import { useEffect, useState } from "react";

import Form from "./Form";
import { ModalStyle } from "./ModalStyle";

export default function Modal() {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };
    const handleCloseModal = () => {
        setShowModal(false);
    };

    useEffect(() => {
        window.addEventListener("keydown", function (e) {
            if (e.key === "Escape") {
                setShowModal(false);
            }
        });
    }, [showModal]);

    return (
        <ModalStyle>
            <button onClick={handleOpenModal} className="btn">
                Sign Up
            </button>
            {showModal && (
                <div className="modal">
                    <h2>Sign Up</h2>
                    <button onClick={handleCloseModal} className="close">
                        &times;
                    </button>
                    <Form />
                </div>
            )}

            {showModal && (
                <div className="backdrop" onClick={handleCloseModal}></div>
            )}
        </ModalStyle>
    );
}
