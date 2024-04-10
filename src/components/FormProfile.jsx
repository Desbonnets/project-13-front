import {useState, useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './form.module.css';
import { editProfile } from '../features/user/userSlice';

/**
 * Profile Form component to handle user name update
 *
 * @returns {JSX.Element} form component
 */
const ProfileForm = () => {

  const [isUserEditShown, setIsUserEditShown] = useState(false)
  const [firstNameInput, setFirstNameInput] = useState(null);
  const [lastNameInput, setLastNameInput] = useState(null);


  const dispatch = useDispatch();
  const {token} = useSelector((state) => state.user);

  const userRef = useRef(null)

  useEffect(() => userRef.current?.focus(), [isUserEditShown])

  const handleSubmit = async () => {
    dispatch(
      editProfile({firstNameInput, lastNameInput, token}),
    )
    setIsUserEditShown(false)
  }

  /**
   * Handles show/hide edit form event
   */
  const handleUserEdit = () => setIsUserEditShown(true)

  return (
    <>
      {!isUserEditShown && (
        <button className={styles.editButton} onClick={handleUserEdit}>
          Edit Name
        </button>
      )}
      {isUserEditShown && (
        <form onSubmit={handleSubmit}>
            <div className={styles.inputWrapper}>
              <div className={styles.inputWrapper}>
                <input placeholder='FirstName' type="text" ref={userRef} onChange={(e)=>{setFirstNameInput(e.target.value)}} required/>
              </div>
              <div className={styles.inputWrapper}>
                <input placeholder='LastName' type="text" onChange={(e)=>{setLastNameInput(e.target.value)}} required/>
              </div>
            </div>
            <div className={styles.inputWrapper}>
            <button type='submit' className={styles.editSubmitButton}>
                Save
            </button>
            <button type='button' className={styles.editSubmitButton} onClick={(e) => 
              {
                e.target.closest('form').reset(); 
                setIsUserEditShown(false);
              }} >
                Cancel
            </button>
            </div>
        </form>
      )}
    </>
  )
}

export default ProfileForm