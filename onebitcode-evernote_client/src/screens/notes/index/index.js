import React, { Fragment, useState } from 'react';
import HeaderLogged from '../../../components/header_logged';
import Notes from '../../../components/notes'

const NotesScreen = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <HeaderLogged setIsOpen={setIsOpen} />
      <Fragment>
        <Notes isOpen={isOpen} setIsOpen={setIsOpen} />
      </Fragment>
    </>
  )
};

export default NotesScreen;