import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updatePassword } from "firebase/auth";
import Swal from "sweetalert2";
import app from "./FirebaseConfig";

const auth = getAuth(app);

export const signUpUser = (email, password, navigate) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((res) => {
      Swal.fire({
        icon: 'success',
        title: 'Sign Up Successful',
        text: 'You have successfully signed up!',
      });
      console.log(res, "SignUp Successful");
      navigate('/login');
    })
    .catch((err) => {
      Swal.fire({
        icon: 'error',
        title: 'Sign Up Failed',
        text: err.message,
      });
      console.log(err, "Error");
    });
};

export const loginUser = (email, password, navigate) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((res) => {
      Swal.fire({
        icon: 'success',
        title: 'Sign In Successful',
        text: 'You have successfully signed in!',
      });
      console.log(res, "SignIn Successful");
      navigate('/');
    })
    .catch((err) => {
      Swal.fire({
        icon: 'error',
        title: 'Sign In Failed',
        text: err.message,
      });
      console.log(err, "Error");
    });
};


export const updateUserPassword = (newPassword) => {
  const user = auth.currentUser;
  updatePassword(user, newPassword)
    .then(() => {
      Swal.fire({
        icon: 'success',
        title: 'Password Updated',
        text: 'Your password has been updated successfully.',
      });
      console.log('Password updated successfully');
    })
    .catch((err) => {
      Swal.fire({
        icon: 'error',
        title: 'Update Failed',
        text: err.message,
      });
      console.log(err, "Error");
    });
};
