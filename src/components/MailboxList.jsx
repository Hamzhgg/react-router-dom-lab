import React from 'react';
import { Link } from 'react-router-dom';

const MailboxList = ({ mailboxes }) => {
  return (
    <div className="container">
      {mailboxes.length === 0 ? (
        <p>No mailboxes available.</p>
      ) : (
        <div className="mailbox-grid">
          {mailboxes.map((mailbox) => (
            <div key={mailbox._id} className="mail-box">
              <Link to={`/mailboxes/${mailbox._id}`}>Box {mailbox._id}</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MailboxList;
