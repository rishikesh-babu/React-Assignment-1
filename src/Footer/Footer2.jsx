import React from 'react';

const Footer2 = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p>&copy; 2024 Your Company. All rights reserved.</p>
        <div style={styles.links}>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/contact">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#f1f1f1',
    padding: '20px 0',
    position: 'fixed',
    bottom: 0,
    width: '100%',
    textAlign: 'center',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  links: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
  },
};

export default Footer2;
