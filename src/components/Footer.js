import React from 'react';

export default function Footer() {
  const today = new Date();
  const yearNow = today.getFullYear();
  return (
    <footer className="footer">
      <p className="footer__copyright">&copy; Маршак, {`${yearNow}`}.</p>
      <p className="footer__copyright">Сделано студентами <a href="#" className="footer__link">Яндекс.Практикум</a></p>
    </footer>
  );
}
