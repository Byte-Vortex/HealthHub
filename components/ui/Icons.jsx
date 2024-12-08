import React from 'react';

// Import your icons as SVGs or from a library like React Icons or your own custom SVGs
import { FaGoogle, FaFacebookF, FaPhone } from 'react-icons/fa';
 // Example using react-icons

export const Icons = {
  google: (props) => <FaGoogle {...props} />,
  facebook: (props) => <FaFacebookF {...props} />,
  phone: (props) => <FaPhone {...props} />,
};
