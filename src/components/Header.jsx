
import { useState } from "react";
import logo from "../assets/coderex-logo.png";
import TaskModal from "../modals/TaskModal";



const Header = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    return (
        <div className='fixed z-50 right-0 left-0 bg-[#abd6db] p-4'>
            <header className='flex justify-between items-center'>
                {/* left part*/}
               <div>
                    <img src={logo} alt="coderex logo" />
               </div>
               {/* right part*/}
               <div className='flex items-center space-x-5 md:space-x-6'>
                    <button onClick={() => setIsOpenModal(true)} className='button hidden md:block'>Add Task</button>
                    <button className='button py-1 px-3 md:hidden'>+</button>
                    {isOpenModal && <TaskModal closeModal={setIsOpenModal} />}
               </div>
            </header>
        </div>
    );
};

export default Header;