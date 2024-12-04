import React from 'react';
import { useParams } from 'react-router-dom';

const MailboxDetails = ({ mailboxes }) => {
  const { mailboxId } = useParams();
  const mailbox = mailboxes.find((mb) => mb._id === Number(mailboxId));

  return (
    <div>
      {mailbox ? (
        <div>
          <h2>Mailbox {mailbox._id}</h2>
          <p>Boxholder: {mailbox.boxholder}</p>
          <p>Size: {mailbox.boxSize}</p>
        </div>
      ) : (
        <p>Mailbox Not Found!</p>
      )}
    </div>
  );
};

export default MailboxDetails;
