import React from 'react';

function NotFoundPage(props) {
  console.log(props);
  return (
    <main className="container">
      <section className="no-page">
        <div className="no-page__info">
          <h2 className="no-page__title">Oops, page not found</h2>
          <p className="no-page__description">
            We are very sorry for the inconvenience. It looks like you're trying
            to access a page that has been deleted or never even existed.
          </p>
          <button
            className="no-page__btn"
            onClick={() => props.history.push('/')}
          >
            Back to homepage
          </button>
        </div>
        <div className="no-page__picture">
          <img
            src="https://images.unsplash.com/photo-1549747862-084be795471b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            alt="desert-island"
          />
          <p className="no-page__error">404</p>
        </div>
      </section>
    </main>
  );
}

export default NotFoundPage;
