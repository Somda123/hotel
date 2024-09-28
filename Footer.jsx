import React from 'react';

function Footer() {
  return (
    <footer style={{ padding: '10px', background: '#333', color: 'white',textAlign:'center' }}>
      <p>Customer Care: +91-7646866378</p>
      <p>Email: support@hotel.com</p>
      <p>Terms and Conditions</p>
      <div>
        <a href="https://facebook.com" style={{ color: 'white' }}>
          Facebook
        </a>
        {' | '}
        <a href="https://twitter.com" style={{ color: 'white' }}>
          Twitter
        </a>
      </div>
    </footer>
  );
}

export default Footer;
