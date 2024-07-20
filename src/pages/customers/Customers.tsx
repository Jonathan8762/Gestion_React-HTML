import React from 'react';
import CustomerTable from './CustomerTable';
import NiceModal from '@ebay/nice-modal-react';
import ModalComponent from '../../components/ModalCom';

const Customers = () => {
  const showModal = () => {
    //NiceModal.show(ModalComponent);
  };

  return (
    <>
      <h1 className='header-section-create'>
        Lista de Productos
        <button onClick={showModal}>Nuevo Producto</button>
      </h1>
      <hr />
      <CustomerTable />
    </>
  );
};

export default Customers;