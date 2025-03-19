import { useEffect } from "react";

import styles from "./Modal.module.css";


const Modal = ({close, children})=> {
    const closeModal = (event)=> {
        const {target, currentTarget} = event;
        if(target === currentTarget) {
            close();
        }
    } 

    useEffect(()=> {
        const handleEscape = function({code}){
            if(code === "Escape") {
                console.log("Escape");
                close();
            }
        };

        document.addEventListener("keydown", handleEscape);

        return ()=> document.removeEventListener("keydown", handleEscape);
        
    }, [close]);

    return (
        <div onClick={closeModal} className={styles.overlay}>
            <div className={styles.content}>
                <span onClick={close} className={styles.close}>X</span>
                {children}
            </div>
        </div>
    )
}

export default Modal;