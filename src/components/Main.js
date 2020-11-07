import React from 'react';
import PropTypes from 'prop-types';
import FormSection from './FormSection';
import Article from './Article';
import AppContext from '../contexts/AppContext';

export default function Main({ onFormSubmit }) {
  const { texts } = React.useContext(AppContext);
  return (
    <main className="main-info">
      <section className="info">
    {/* тут тоже не уверен что есть необходимость в дополнительном блоке */}
        <Article
          title={texts.article1.title}
          content={texts.article1.content}
        />
        <Article
          title={texts.article2.title}
          content={texts.article2.content}
        />
        <Article
          title={texts.article3.title}
          content={texts.article3.content}
        />
      </section>
      <FormSection onFormSubmit={onFormSubmit} />
    </main>
  );
}
Main.propTypes = {
  onFormSubmit: PropTypes.string.isRequired,
};
