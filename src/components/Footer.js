import React from 'react';

export default function Footer() {
  const today = new Date();
  const yearNow = today.getFullYear();
  return (
    <footer className="footer">
      <p className="footer__copyright">{`@${yearNow}`}</p>
      <p className="footer__copyright">Copyright</p>
    </footer>
  );
}
